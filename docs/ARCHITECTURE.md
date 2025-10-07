# Architecture Diagram

## System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                      User's Web Browser                              │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │         Next.js Frontend (React + TypeScript)              │   │
│  │                                                             │   │
│  │  • Problem Input Form                                       │   │
│  │  • Step-by-Step Display                                     │   │
│  │  • Animations (Framer Motion)                              │   │
│  │  • Responsive UI (TailwindCSS)                             │   │
│  └────────────────────────────────────────────────────────────┘   │
│                            │                                         │
│                            │ HTTP/REST (JSON)                        │
│                            ▼                                         │
└─────────────────────────────────────────────────────────────────────┘

                              │
                              │
                              ▼

┌─────────────────────────────────────────────────────────────────────┐
│                    FastAPI Backend Server                            │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │                   API Endpoints                             │   │
│  │  POST /solve    - Solve math problem                       │   │
│  │  GET  /health   - Health check                             │   │
│  │  GET  /         - Root                                      │   │
│  └────────────────────────────────────────────────────────────┘   │
│                            │                                         │
│                            │                                         │
│         ┌──────────────────┴───────────────────┐                   │
│         │                                       │                   │
│         ▼                                       ▼                   │
│  ┌─────────────┐                        ┌────────────┐            │
│  │   SymPy     │                        │  OpenAI    │            │
│  │   Solver    │                        │  GPT-4o    │            │
│  │             │                        │   mini     │            │
│  │ • Parse     │                        │            │            │
│  │ • Solve     │                        │ • Explain  │            │
│  │ • Simplify  │                        │ • Narrate  │            │
│  │ • Factor    │                        │ • Clarify  │            │
│  └─────────────┘                        └────────────┘            │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

                              │
                              │ (Optional)
                              ▼

┌─────────────────────────────────────────────────────────────────────┐
│                         Supabase                                     │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │                 PostgreSQL Database                         │   │
│  │  • users          - User accounts                          │   │
│  │  • problems       - Solved problems history                │   │
│  │  • feedback       - User feedback                          │   │
│  └────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  ┌────────────────────────────────────────────────────────────┐   │
│  │              Authentication (Future)                        │   │
│  │  • Email/Password                                           │   │
│  │  • Google OAuth                                             │   │
│  │  • GitHub OAuth                                             │   │
│  └────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

## Data Flow

### Problem Solving Flow

```
1. User enters problem
   ↓
2. Frontend validates input
   ↓
3. POST /solve request to backend
   ↓
4. Backend parses with SymPy
   ↓
5. SymPy generates solution steps
   ↓
6. Each step sent to OpenAI for explanation
   ↓
7. OpenAI returns pedagogical explanation
   ↓
8. Backend formats response
   ↓
9. Frontend receives JSON response
   ↓
10. UI animates steps one by one
   ↓
11. User sees solution + explanations
   ↓
12. User provides feedback (optional)
```

## Component Architecture

### Backend (FastAPI)

```
backend/
├── main.py                     # Main application
│   ├── FastAPI app setup
│   ├── CORS middleware
│   ├── OpenAI client
│   │
│   ├── Models (Pydantic)
│   │   ├── Problem
│   │   ├── SolutionStep
│   │   └── SolutionResponse
│   │
│   ├── Functions
│   │   ├── solve_math_problem()
│   │   │   ├── Parse expression
│   │   │   ├── Solve/simplify
│   │   │   └── Extract steps
│   │   │
│   │   └── explain_step()
│   │       ├── Format prompt
│   │       ├── Call OpenAI
│   │       └── Parse response
│   │
│   └── Endpoints
│       ├── GET  /
│       ├── GET  /health
│       └── POST /solve
│
├── requirements.txt
├── Dockerfile
└── .env.example
```

### Frontend (Next.js)

```
frontend/
├── pages/
│   ├── _app.tsx               # App wrapper
│   ├── _document.tsx          # HTML document
│   └── index.tsx              # Main page
│       ├── State management
│       │   ├── question
│       │   ├── solution
│       │   ├── loading
│       │   └── error
│       │
│       ├── Components
│       │   ├── Header
│       │   ├── Input Form
│       │   ├── Example Problems
│       │   ├── Error Display
│       │   ├── Solution Display
│       │   │   ├── Original Question
│       │   │   ├── Steps (animated)
│       │   │   └── Final Answer
│       │   └── Feedback Section
│       │
│       └── API Integration
│           └── fetch(/solve)
│
├── styles/
│   └── globals.css            # Tailwind + custom styles
│
├── public/                    # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## Technology Stack

### Backend
- **Runtime**: Python 3.11
- **Framework**: FastAPI 0.104.1
- **Math Engine**: SymPy 1.12
- **AI**: OpenAI GPT-4o-mini
- **Validation**: Pydantic 2.5.0
- **Server**: Uvicorn

### Frontend
- **Runtime**: Node.js 18+
- **Framework**: Next.js 14.0.3
- **Language**: TypeScript 5.2.2
- **UI Library**: React 18.2.0
- **Styling**: TailwindCSS 3.3.5
- **Animations**: Framer Motion 10.16.5

### Infrastructure
- **Containers**: Docker
- **Frontend Host**: Vercel
- **Backend Host**: Fly.io / Render
- **Database**: Supabase (optional)

## Deployment Architecture

```
                    ┌──────────────┐
                    │   GitHub     │
                    │  Repository  │
                    └──────────────┘
                           │
                           │ git push
                ┌──────────┴───────────┐
                │                      │
                ▼                      ▼
        ┌──────────────┐      ┌──────────────┐
        │   Vercel     │      │   Fly.io     │
        │  (Frontend)  │      │  (Backend)   │
        │              │      │              │
        │ • Auto build │      │ • Auto build │
        │ • CDN        │      │ • Scale      │
        │ • SSL        │      │ • SSL        │
        └──────────────┘      └──────────────┘
                │                      │
                │                      │
                └──────────┬───────────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   Supabase   │
                    │  (Database)  │
                    │              │
                    │ • PostgreSQL │
                    │ • Auth       │
                    │ • Storage    │
                    └──────────────┘
```

## API Request/Response Flow

### Request Example

```json
POST /solve
Content-Type: application/json

{
  "question": "2*x + 3*x"
}
```

### Processing Steps

1. **Validation**: Pydantic validates request
2. **Parsing**: SymPy parses mathematical expression
3. **Solving**: SymPy generates solution steps
4. **Explanation**: OpenAI explains each step
5. **Formatting**: Response formatted as JSON
6. **Response**: Sent back to frontend

### Response Example

```json
{
  "original_question": "2*x + 3*x",
  "steps": [
    {
      "step_number": 1,
      "mathematical_step": "Original expression: 2x + 3x",
      "explanation": "Both terms contain the variable x...",
      "concept": "Combining like terms"
    }
  ],
  "final_answer": "5*x"
}
```

## Security Considerations

1. **API Keys**: Stored in environment variables
2. **CORS**: Configured for specific origins
3. **Rate Limiting**: To be implemented
4. **Input Validation**: Pydantic models
5. **Error Handling**: Graceful error messages
6. **Database**: RLS policies in Supabase
7. **HTTPS**: Required in production

## Scalability

### Vertical Scaling
- Increase server resources
- More CPU/memory per instance

### Horizontal Scaling
- Multiple backend instances
- Load balancer
- Shared cache (Redis)

### Optimization
- Cache frequent problems
- Batch OpenAI requests
- CDN for static assets
- Database connection pooling
