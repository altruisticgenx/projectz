# Backend for Transparent AI Tutoring Assistant

This is the FastAPI backend that powers the AI tutoring system.

## Features

- **Math Problem Solving**: Uses SymPy to solve mathematical expressions and equations
- **Step-by-Step Explanations**: Integrates with OpenAI GPT-4o-mini to provide clear explanations
- **REST API**: Simple endpoints for problem solving

## Setup

### Prerequisites

- Python 3.10+
- OpenAI API key (optional for MVP, will use fallback explanations without it)

### Installation

1. Create a virtual environment:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create `.env` file:
```bash
cp .env.example .env
# Edit .env and add your OPENAI_API_KEY
```

### Running Locally

```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

Interactive API docs: `http://localhost:8000/docs`

## API Endpoints

### POST /solve
Solve a math problem with step-by-step explanations.

**Request:**
```json
{
  "question": "2*x + 3*x"
}
```

**Response:**
```json
{
  "original_question": "2*x + 3*x",
  "steps": [
    {
      "step_number": 1,
      "mathematical_step": "Original expression: 2x + 3x",
      "explanation": "We start with two terms that both contain x...",
      "concept": "Combining like terms"
    }
  ],
  "final_answer": "5*x"
}
```

### GET /health
Health check endpoint.

## Docker

Build and run with Docker:

```bash
docker build -t ai-tutor-backend .
docker run -p 8000:8000 -e OPENAI_API_KEY=your_key ai-tutor-backend
```

## Deployment

### Fly.io

1. Install Fly CLI: `curl -L https://fly.io/install.sh | sh`
2. Login: `fly auth login`
3. Create app: `fly launch`
4. Set secrets: `fly secrets set OPENAI_API_KEY=your_key`
5. Deploy: `fly deploy`

### Render.com

1. Connect your GitHub repository
2. Create a new Web Service
3. Set build command: `pip install -r requirements.txt`
4. Set start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
5. Add environment variable: `OPENAI_API_KEY`

## Testing

Example curl commands:

```bash
# Health check
curl http://localhost:8000/health

# Solve a problem
curl -X POST http://localhost:8000/solve \
  -H "Content-Type: application/json" \
  -d '{"question": "2*x + 3*x"}'
```
