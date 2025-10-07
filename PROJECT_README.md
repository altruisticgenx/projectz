# 🧮 Transparent AI Tutoring Assistant - Quick Start Guide

A full-stack AI-powered tutoring system that provides step-by-step mathematical problem solving with transparent explanations.

![Project Structure](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi)
![Frontend](https://img.shields.io/badge/Frontend-Next.js-000000?style=for-the-badge&logo=next.js)
![AI](https://img.shields.io/badge/AI-OpenAI-412991?style=for-the-badge&logo=openai)

## 🚀 Quick Start (5 Minutes)

### Prerequisites
- Python 3.10+
- Node.js 18+
- OpenAI API key (optional - app works without it using fallback explanations)

### 1. Clone & Setup

```bash
git clone https://github.com/altruisticgenx/projectz.git
cd projectz
```

### 2. Start Backend

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
# Optional: Edit .env and add OPENAI_API_KEY
uvicorn main:app --reload
```

Backend will run at: http://localhost:8000

### 3. Start Frontend (New Terminal)

```bash
cd frontend
npm install
npm run dev
```

Frontend will run at: http://localhost:3000

### 4. Try It Out!

Open http://localhost:3000 and solve math problems like:
- `2*x + 3*x`
- `x**2 - 5*x + 6`
- `Eq(2*x + 1, 5)`

## 📚 Full Documentation

- **[Complete README](docs/README.md)** - Architecture, features, tech stack
- **[Deployment Guide](docs/DEPLOYMENT.md)** - Deploy to Vercel, Fly.io, Render
- **[Backend Docs](backend/README.md)** - API documentation
- **[Frontend Docs](frontend/README.md)** - UI components and setup

## 🐳 Docker Quick Start

```bash
# Set your OpenAI API key
echo "OPENAI_API_KEY=your_key_here" > .env

# Start everything
docker-compose up

# Access at:
# Frontend: http://localhost:3000
# Backend: http://localhost:8000/docs
```

## 🌟 Key Features

✅ **Transparent Learning**: See every step of problem solving  
✅ **AI Explanations**: Understand *why* each step is needed  
✅ **Modern UI**: Beautiful, responsive design with animations  
✅ **Production Ready**: Deployed to Vercel + Fly.io in minutes  
✅ **Open Source**: MIT licensed, contributions welcome

## 🛠️ Tech Stack

**Backend:** FastAPI, SymPy, OpenAI GPT-4o-mini, Python 3.11  
**Frontend:** Next.js 14, TypeScript, TailwindCSS, Framer Motion  
**Deploy:** Docker, Vercel, Fly.io

## 📖 API Example

```bash
curl -X POST http://localhost:8000/solve \
  -H "Content-Type: application/json" \
  -d '{"question": "2*x + 3*x"}'
```

Response:
```json
{
  "original_question": "2*x + 3*x",
  "steps": [
    {
      "step_number": 1,
      "mathematical_step": "Original expression: 2x + 3x",
      "explanation": "Both terms contain x, so we combine them...",
      "concept": "Combining like terms"
    }
  ],
  "final_answer": "5*x"
}
```

## 🚢 Deploy to Production

### Frontend (Vercel)
```bash
cd frontend
vercel --prod
```

### Backend (Fly.io)
```bash
cd backend
fly launch
fly secrets set OPENAI_API_KEY=your_key
fly deploy
```

See [DEPLOYMENT.md](docs/DEPLOYMENT.md) for detailed instructions.

## 🤝 Contributing

Contributions welcome! This is an MVP with room for growth:
- [ ] User authentication (Supabase)
- [ ] Problem history
- [ ] More problem types (physics, chemistry)
- [ ] Multi-language support
- [ ] PDF export

## 📝 License

MIT License - see LICENSE file

## 👤 Author

**Inga Kaltak** - Machine Learning Engineer
- LinkedIn: [inga-kaltak](https://www.linkedin.com/in/inga-kaltak)
- Location: Philadelphia, PA

---

**Built with ❤️ and transparency in mind**

For detailed documentation, see [docs/README.md](docs/README.md)
