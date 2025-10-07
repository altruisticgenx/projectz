from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import sympy as sp
from openai import OpenAI
import os
from dotenv import load_dotenv
from typing import List, Dict, Optional
import logging

# Load environment variables
load_dotenv()

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Initialize FastAPI
app = FastAPI(
    title="Transparent AI Tutoring Assistant",
    description="An AI-powered tutoring system that explains each step of problem solving",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY", ""))

class Problem(BaseModel):
    question: str
    
class SolutionStep(BaseModel):
    step_number: int
    mathematical_step: str
    explanation: str
    concept: Optional[str] = None

class SolutionResponse(BaseModel):
    original_question: str
    steps: List[SolutionStep]
    final_answer: str

def solve_math_problem(question: str) -> tuple[List[str], str]:
    """
    Solve a math problem using SymPy and return steps.
    """
    try:
        # Clean and parse the input
        question = question.strip()
        
        # Try to sympify the expression
        expr = sp.sympify(question)
        
        # Generate solution steps
        steps = []
        final_answer = ""
        
        # Check if it's an equation
        if isinstance(expr, sp.Equality):
            # It's an equation to solve
            # Extract variable
            variables = list(expr.free_symbols)
            if variables:
                var = variables[0]
                steps.append(f"Original equation: {sp.latex(expr)}")
                
                # Solve the equation
                solution = sp.solve(expr, var)
                steps.append(f"Solving for {var}")
                steps.append(f"Solution: {var} = {solution}")
                final_answer = f"{var} = {solution}"
            else:
                # No variables, just evaluate
                final_answer = str(expr)
                steps.append(f"Expression: {sp.latex(expr)}")
        else:
            # It's an expression to simplify
            steps.append(f"Original expression: {sp.latex(expr)}")
            
            # Try to simplify
            simplified = sp.simplify(expr)
            if expr != simplified:
                steps.append(f"Simplifying: {sp.latex(simplified)}")
            
            # Try to expand if it's a polynomial
            expanded = sp.expand(expr)
            if expanded != expr and expanded != simplified:
                steps.append(f"Expanded form: {sp.latex(expanded)}")
            
            # Try to factor
            factored = sp.factor(expr)
            if factored != expr and factored != simplified:
                steps.append(f"Factored form: {sp.latex(factored)}")
            
            final_answer = str(simplified)
        
        return steps, final_answer
        
    except Exception as e:
        logger.error(f"Error solving problem: {str(e)}")
        raise HTTPException(status_code=400, detail=f"Unable to parse mathematical expression: {str(e)}")

def explain_step(step: str, step_number: int, total_steps: int) -> Dict[str, str]:
    """
    Use OpenAI to explain a mathematical step in simple terms.
    """
    try:
        prompt = f"""You are a transparent AI math tutor explaining to a 14-year-old student.

Step {step_number} of {total_steps}: {step}

Provide a clear explanation of:
1. What mathematical operation or concept is being used
2. WHY this step is necessary
3. How it moves us closer to the solution

Format your response as JSON with these fields:
- concept: The mathematical concept being used (e.g., "Combining like terms", "Distributive property")
- explanation: A clear explanation for a 14-year-old (2-3 sentences)

Keep it simple, friendly, and focus on understanding rather than just mechanics."""

        if not os.getenv("OPENAI_API_KEY"):
            # Fallback explanation if no API key
            return {
                "concept": "Mathematical step",
                "explanation": f"This step shows: {step}. Each step helps us work towards finding the answer."
            }

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a helpful, patient math tutor who explains concepts clearly to students."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.7,
            max_tokens=200
        )
        
        content = response.choices[0].message.content.strip()
        
        # Try to parse as JSON, or use as plain text
        try:
            import json
            parsed = json.loads(content)
            return {
                "concept": parsed.get("concept", "Mathematical step"),
                "explanation": parsed.get("explanation", content)
            }
        except:
            # If not JSON, use the content as explanation
            return {
                "concept": "Mathematical step",
                "explanation": content
            }
            
    except Exception as e:
        logger.error(f"Error generating explanation: {str(e)}")
        return {
            "concept": "Mathematical step",
            "explanation": f"This step involves: {step}"
        }

@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "Transparent AI Tutoring Assistant",
        "version": "1.0.0"
    }

@app.post("/solve", response_model=SolutionResponse)
async def solve_problem(problem: Problem):
    """
    Solve a math problem and return step-by-step explanations.
    """
    try:
        logger.info(f"Received problem: {problem.question}")
        
        # Solve the problem
        steps_text, final_answer = solve_math_problem(problem.question)
        
        # Generate explanations for each step
        solution_steps = []
        total_steps = len(steps_text)
        
        for i, step_text in enumerate(steps_text, 1):
            explanation_data = explain_step(step_text, i, total_steps)
            
            solution_steps.append(SolutionStep(
                step_number=i,
                mathematical_step=step_text,
                explanation=explanation_data["explanation"],
                concept=explanation_data["concept"]
            ))
        
        return SolutionResponse(
            original_question=problem.question,
            steps=solution_steps,
            final_answer=final_answer
        )
        
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Unexpected error: {str(e)}")
        raise HTTPException(status_code=500, detail="An unexpected error occurred while solving the problem")

@app.get("/health")
async def health_check():
    """Detailed health check"""
    return {
        "status": "healthy",
        "openai_configured": bool(os.getenv("OPENAI_API_KEY")),
        "sympy_version": sp.__version__
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
