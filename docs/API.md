# API Documentation

## Base URL

- **Development**: `http://localhost:8000`
- **Production**: Your deployed backend URL (e.g., `https://your-app.fly.dev`)

## Authentication

Currently, the API does not require authentication. This may change in future versions with Supabase integration.

## Endpoints

### 1. Root Endpoint

Get basic API information.

**Endpoint:** `GET /`

**Request:**
```bash
curl http://localhost:8000/
```

**Response:**
```json
{
  "status": "healthy",
  "service": "Transparent AI Tutoring Assistant",
  "version": "1.0.0"
}
```

**Status Codes:**
- `200 OK`: Service is running

---

### 2. Health Check

Check if the API is healthy and see configuration status.

**Endpoint:** `GET /health`

**Request:**
```bash
curl http://localhost:8000/health
```

**Response:**
```json
{
  "status": "healthy",
  "openai_configured": true,
  "sympy_version": "1.12"
}
```

**Response Fields:**
- `status` (string): Current service status
- `openai_configured` (boolean): Whether OpenAI API key is set
- `sympy_version` (string): Version of SymPy being used

**Status Codes:**
- `200 OK`: Service is healthy

---

### 3. Solve Problem

Solve a mathematical problem with step-by-step explanations.

**Endpoint:** `POST /solve`

**Request Headers:**
```
Content-Type: application/json
```

**Request Body:**
```json
{
  "question": "string"
}
```

**Request Example:**
```bash
curl -X POST http://localhost:8000/solve \
  -H "Content-Type: application/json" \
  -d '{"question": "2*x + 3*x"}'
```

**Response:**
```json
{
  "original_question": "2*x + 3*x",
  "steps": [
    {
      "step_number": 1,
      "mathematical_step": "Original expression: 2x + 3x",
      "explanation": "Both terms contain the same variable x, so we can combine them by adding their coefficients. Think of it like having 2 apples and 3 more apples - you end up with 5 apples total. Here, we have 2x and 3x, so we get 5x.",
      "concept": "Combining like terms"
    }
  ],
  "final_answer": "5*x"
}
```

**Response Fields:**
- `original_question` (string): The input problem
- `steps` (array): Array of solution steps
  - `step_number` (integer): Step sequence number
  - `mathematical_step` (string): The mathematical operation in LaTeX/text
  - `explanation` (string): Clear explanation of why this step is needed
  - `concept` (string): The mathematical concept being applied
- `final_answer` (string): The final solution

**Status Codes:**
- `200 OK`: Problem solved successfully
- `400 Bad Request`: Invalid input or unable to parse expression
- `500 Internal Server Error`: Server error during processing

**Error Response:**
```json
{
  "detail": "Unable to parse mathematical expression: invalid syntax"
}
```

---

## Supported Problem Types

### Algebraic Expressions

**Examples:**
```
2*x + 3*x
x**2 + 2*x + 1
(x + 1)*(x - 1)
x**3 - 8
```

### Equations

Use `Eq()` syntax for equations:
```
Eq(2*x + 1, 5)
Eq(x**2, 9)
Eq(3*x + 2*y, 10)
```

### Simplification

```
(x**2 - 1)/(x - 1)
sqrt(50)
sin(pi/2)
```

### Factoring

```
x**2 - 5*x + 6
x**3 + 3*x**2 + 3*x + 1
```

---

## Mathematical Notation

### Operators

- Addition: `+`
- Subtraction: `-`
- Multiplication: `*`
- Division: `/`
- Exponentiation: `**` or `^`

### Functions

- Square root: `sqrt(x)`
- Absolute value: `abs(x)`
- Sine: `sin(x)`
- Cosine: `cos(x)`
- Tangent: `tan(x)`
- Natural log: `log(x)`
- Exponential: `exp(x)`

### Constants

- Pi: `pi`
- Euler's number: `E`
- Infinity: `oo`
- Imaginary unit: `I`

### Variables

- Single letters: `x`, `y`, `z`, `a`, `b`, etc.
- Greek letters: `alpha`, `beta`, `gamma`, etc.

---

## Example Requests

### Simple Algebra

```bash
curl -X POST http://localhost:8000/solve \
  -H "Content-Type: application/json" \
  -d '{"question": "2*x + 3*x"}'
```

### Quadratic Expression

```bash
curl -X POST http://localhost:8000/solve \
  -H "Content-Type: application/json" \
  -d '{"question": "x**2 - 5*x + 6"}'
```

### Equation

```bash
curl -X POST http://localhost:8000/solve \
  -H "Content-Type: application/json" \
  -d '{"question": "Eq(2*x + 1, 5)"}'
```

### Factoring

```bash
curl -X POST http://localhost:8000/solve \
  -H "Content-Type: application/json" \
  -d '{"question": "(x + 2)*(x - 3)"}'
```

---

## Rate Limiting

Currently, there is no rate limiting implemented. This will be added in future versions.

**Recommendations:**
- Limit requests to ~60 per minute per client
- Implement client-side debouncing for user input

---

## Error Handling

### Client Errors (4xx)

**400 Bad Request:**
- Invalid mathematical expression
- Missing required field
- Malformed JSON

**404 Not Found:**
- Endpoint does not exist

### Server Errors (5xx)

**500 Internal Server Error:**
- Unexpected error during processing
- OpenAI API failure
- SymPy processing error

### Error Response Format

```json
{
  "detail": "Error message describing what went wrong"
}
```

---

## OpenAI Integration

The API uses OpenAI GPT-4o-mini to generate explanations for each step.

**With API Key:**
- Detailed, pedagogical explanations
- Context-aware descriptions
- Age-appropriate language

**Without API Key:**
- Fallback to basic explanations
- Still functional, less detailed
- No additional cost

---

## Best Practices

### 1. Input Validation

Always validate user input on the client side before sending:
```typescript
const isValid = (question: string) => {
  return question.trim().length > 0 && question.length < 500
}
```

### 2. Error Handling

Always handle errors gracefully:
```typescript
try {
  const response = await fetch('/solve', {...})
  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.detail)
  }
  return await response.json()
} catch (error) {
  console.error('Failed to solve:', error)
  // Show user-friendly error message
}
```

### 3. Loading States

Show loading indicators during requests:
```typescript
const [loading, setLoading] = useState(false)

const handleSubmit = async () => {
  setLoading(true)
  try {
    await solveProblem()
  } finally {
    setLoading(false)
  }
}
```

### 4. Debouncing

Debounce user input to avoid excessive requests:
```typescript
import { debounce } from 'lodash'

const debouncedSolve = debounce(solveProblem, 500)
```

---

## Interactive Documentation

The API provides interactive documentation at:

- **Swagger UI**: `http://localhost:8000/docs`
- **ReDoc**: `http://localhost:8000/redoc`

These interfaces allow you to:
- View all endpoints
- Test requests directly
- See request/response schemas
- Try different examples

---

## TypeScript Types

For TypeScript projects, use these types:

```typescript
interface Problem {
  question: string
}

interface SolutionStep {
  step_number: number
  mathematical_step: string
  explanation: string
  concept?: string
}

interface SolutionResponse {
  original_question: string
  steps: SolutionStep[]
  final_answer: string
}

interface HealthResponse {
  status: string
  openai_configured: boolean
  sympy_version: string
}
```

---

## SDK / Client Libraries

### JavaScript/TypeScript

```typescript
class AITutorClient {
  constructor(private baseURL: string) {}

  async solve(question: string): Promise<SolutionResponse> {
    const response = await fetch(`${this.baseURL}/solve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    })
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    
    return response.json()
  }

  async health(): Promise<HealthResponse> {
    const response = await fetch(`${this.baseURL}/health`)
    return response.json()
  }
}

// Usage
const client = new AITutorClient('http://localhost:8000')
const solution = await client.solve('2*x + 3*x')
```

### Python

```python
import requests
from typing import Dict, Any

class AITutorClient:
    def __init__(self, base_url: str):
        self.base_url = base_url
    
    def solve(self, question: str) -> Dict[str, Any]:
        response = requests.post(
            f"{self.base_url}/solve",
            json={"question": question}
        )
        response.raise_for_status()
        return response.json()
    
    def health(self) -> Dict[str, Any]:
        response = requests.get(f"{self.base_url}/health")
        return response.json()

# Usage
client = AITutorClient("http://localhost:8000")
solution = client.solve("2*x + 3*x")
```

---

## Changelog

### v1.0.0 (Initial Release)
- Basic problem solving endpoint
- Health check endpoint
- SymPy integration
- OpenAI integration with fallback
- CORS support

### Future Versions
- v1.1.0: User authentication
- v1.2.0: Problem history
- v1.3.0: Rate limiting
- v1.4.0: Batch solving

---

## Support

For API issues or questions:
1. Check the [main documentation](README.md)
2. View [interactive docs](http://localhost:8000/docs)
3. Open a [GitHub issue](https://github.com/altruisticgenx/projectz/issues)

---

**Last Updated:** 2025-01-20  
**API Version:** 1.0.0
