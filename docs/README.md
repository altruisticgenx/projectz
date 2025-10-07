# Transparent AI Tutoring Assistant

A full-stack AI-powered tutoring system that provides step-by-step mathematical problem solving with transparent explanations.

## 🎯 Overview

This project is a minimum viable product (MVP) for an educational AI system that:
- Solves mathematical problems using deterministic algorithms (SymPy)
- Explains each step in simple, student-friendly language (OpenAI GPT-4o-mini)
- Displays solutions progressively with animations
- Emphasizes transparency and understanding over just getting answers

## 🏗️ Architecture

```
┌─────────────┐         ┌──────────────┐         ┌─────────────┐
│             │  REST   │              │  API    │             │
│  Next.js    │────────▶│   FastAPI    │────────▶│  OpenAI     │
│  Frontend   │  JSON   │   Backend    │         │  GPT-4o     │
│             │◀────────│              │         │             │
└─────────────┘         └──────────────┘         └─────────────┘
                               │
                               │ Uses
                               ▼
                        ┌──────────────┐
                        │              │
                        │    SymPy     │
                        │   (Solver)   │
                        │              │
                        └──────────────┘
```

## 📁 Project Structure

```
projectz/
├── backend/                 # FastAPI backend
│   ├── main.py             # Main API application
│   ├── requirements.txt    # Python dependencies
│   ├── Dockerfile          # Docker configuration
│   ├── .env.example        # Environment variables template
│   └── README.md           # Backend documentation
│
├── frontend/               # Next.js frontend
│   ├── pages/              # Next.js pages
│   │   ├── index.tsx       # Main application page
│   │   ├── _app.tsx        # App wrapper
│   │   └── _document.tsx   # HTML document
│   ├── styles/             # CSS styles
│   │   └── globals.css     # Global styles with Tailwind
│   ├── package.json        # Node dependencies
│   ├── tsconfig.json       # TypeScript config
│   ├── tailwind.config.js  # Tailwind CSS config
│   ├── next.config.js      # Next.js config
│   ├── Dockerfile          # Docker configuration
│   └── README.md           # Frontend documentation
│
├── docs/                   # Documentation
│   ├── supabase-schema.sql # Database schema (optional)
│   └── DEPLOYMENT.md       # Deployment guide
│
├── docker-compose.yml      # Docker Compose configuration
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites

- Python 3.10+
- Node.js 18+
- OpenAI API key (optional for MVP - will use fallback explanations without it)

### Option 1: Run with Docker Compose (Easiest)

1. Clone the repository:
```bash
git clone https://github.com/altruisticgenx/projectz.git
cd projectz
```

2. Set up environment variables:
```bash
# Create .env file in root
echo "OPENAI_API_KEY=your_key_here" > .env
```

3. Run with Docker Compose:
```bash
docker-compose up
```

4. Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Docs: http://localhost:8000/docs

### Option 2: Run Locally

#### Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Edit .env and add your OPENAI_API_KEY
uvicorn main:app --reload
```

#### Frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

## 🎓 Usage

1. Open the frontend at http://localhost:3000
2. Enter a math problem (e.g., `2*x + 3*x` or `x**2 - 5*x + 6`)
3. Click "Solve" or try one of the example problems
4. Watch as the solution unfolds step-by-step with explanations

### Example Problems

- **Simple algebra**: `2*x + 3*x`
- **Quadratic**: `x**2 - 5*x + 6`
- **Factoring**: `(x + 2)*(x - 3)`
- **Equations**: `Eq(2*x + 1, 5)`

## 🔑 Features

### Current (MVP)
- ✅ Mathematical problem solving (algebra, basic calculus)
- ✅ Step-by-step explanations
- ✅ Modern, responsive UI
- ✅ Example problems for testing
- ✅ Animated solution reveal
- ✅ Error handling

### Planned (Future Enhancements)
- 🔄 User authentication (Supabase)
- 🔄 Problem history
- 🔄 User feedback collection
- 🔄 Multi-language support
- 🔄 More problem types (physics, chemistry)
- 🔄 Adaptive learning
- 🔄 Export solutions to PDF

## 🛠️ Technology Stack

### Backend
- **FastAPI**: Modern, fast Python web framework
- **SymPy**: Symbolic mathematics library
- **OpenAI API**: GPT-4o-mini for explanations
- **Pydantic**: Data validation
- **Python 3.11**: Programming language

### Frontend
- **Next.js 14**: React framework
- **TypeScript**: Type-safe JavaScript
- **TailwindCSS**: Utility-first CSS
- **Framer Motion**: Animation library

### Infrastructure
- **Docker**: Containerization
- **Vercel**: Frontend hosting (recommended)
- **Fly.io**: Backend hosting (recommended)
- **Supabase**: Database and auth (optional)

## 📊 API Documentation

Once the backend is running, visit:
- Interactive docs: http://localhost:8000/docs
- Alternative docs: http://localhost:8000/redoc

### Main Endpoints

#### POST /solve
Solve a math problem with explanations.

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
      "explanation": "Both terms contain the same variable x, so we can combine them...",
      "concept": "Combining like terms"
    }
  ],
  "final_answer": "5*x"
}
```

## 🚢 Deployment

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed deployment instructions for:
- Vercel (Frontend)
- Fly.io (Backend)
- Render.com (Alternative)
- AWS/GCP/Azure

## 🧪 Testing

### Backend Tests
```bash
cd backend
pytest  # (tests to be added)
```

### Frontend Tests
```bash
cd frontend
npm test  # (tests to be added)
```

### Manual Testing
1. Start both backend and frontend
2. Try the example problems
3. Test with custom math expressions
4. Verify explanations are clear and helpful

## 🤝 Contributing

This is an MVP/portfolio project. Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Inga Kaltak**
- LinkedIn: [linkedin.com/in/inga-kaltak](https://www.linkedin.com/in/inga-kaltak)
- Location: Philadelphia, PA
- GitHub: [@altruisticgenx](https://github.com/altruisticgenx)

## 🙏 Acknowledgments

- Built as part of the 2025 AI startup ideas exploration
- Inspired by the need for transparent, explainable AI in education
- Based on the SPEC document for Transparent AI Tutoring Assistant

## 📮 Support

For questions or issues:
1. Check the [documentation](docs/)
2. Open an issue on GitHub
3. Contact via LinkedIn

---

> **"Building bold, secure, and human-centered digital futures."**

Built with ❤️ and transparency in mind.
