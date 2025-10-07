# Setup Guide

This guide will help you set up the Transparent AI Tutoring Assistant on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.10 or higher**: [Download Python](https://www.python.org/downloads/)
- **Node.js 18 or higher**: [Download Node.js](https://nodejs.org/)
- **Git**: [Download Git](https://git-scm.com/downloads)
- **OpenAI API Key** (optional): [Get API Key](https://platform.openai.com/api-keys)

## Step-by-Step Setup

### 1. Clone the Repository

```bash
git clone https://github.com/altruisticgenx/projectz.git
cd projectz
```

### 2. Backend Setup

#### On macOS/Linux:

```bash
cd backend

# Create virtual environment
python3 -m venv venv

# Activate virtual environment
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create environment file
cp .env.example .env

# (Optional) Edit .env and add your OpenAI API key
nano .env  # or use your preferred editor
```

#### On Windows:

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create environment file
copy .env.example .env

# (Optional) Edit .env and add your OpenAI API key
notepad .env
```

### 3. Frontend Setup

Open a new terminal/command prompt window:

```bash
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local  # macOS/Linux
# OR
copy .env.local.example .env.local  # Windows

# (Optional) Edit .env.local if backend is not on localhost:8000
```

### 4. Start the Application

#### Option A: Use the Start Script (Recommended)

**macOS/Linux:**
```bash
./start.sh
```

**Windows:**
```bash
start.bat
```

#### Option B: Manual Start

**Terminal 1 - Backend:**
```bash
cd backend
source venv/bin/activate  # Windows: venv\Scripts\activate
uvicorn main:app --reload
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 5. Verify Installation

1. **Check Backend**: Open http://localhost:8000/health
   - You should see: `{"status": "healthy", "openai_configured": false, "sympy_version": "1.12"}`

2. **Check API Docs**: Open http://localhost:8000/docs
   - You should see the interactive API documentation

3. **Check Frontend**: Open http://localhost:3000
   - You should see the AI Tutor interface

4. **Test Solving**: Try solving `2*x + 3*x`
   - You should get step-by-step solution with explanations

## Common Issues and Solutions

### Backend Issues

**Issue: ModuleNotFoundError**
```bash
# Solution: Ensure virtual environment is activated and dependencies installed
cd backend
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**Issue: Port 8000 already in use**
```bash
# Solution: Kill the process or use a different port
# Kill process (macOS/Linux):
lsof -ti:8000 | xargs kill -9
# Kill process (Windows):
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Or use different port:
uvicorn main:app --port 8001
# Update frontend .env.local: NEXT_PUBLIC_API_URL=http://localhost:8001
```

**Issue: OpenAI API errors**
```bash
# Solution: The app works without OpenAI API key (uses fallback explanations)
# Or add valid API key to backend/.env:
OPENAI_API_KEY=sk-...
```

### Frontend Issues

**Issue: npm install fails**
```bash
# Solution: Clear cache and retry
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

**Issue: Port 3000 already in use**
```bash
# Solution: Kill process or use different port
# Kill process (macOS/Linux):
lsof -ti:3000 | xargs kill -9
# Kill process (Windows):
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or Next.js will automatically suggest next available port
```

**Issue: Cannot connect to backend**
```bash
# Solution: Verify backend is running and URL is correct
# Check backend is running at http://localhost:8000/health
# Verify NEXT_PUBLIC_API_URL in frontend/.env.local
```

### General Issues

**Issue: CORS errors**
```bash
# Solution: Backend CORS is set to allow all origins in development
# Ensure backend is running before frontend
```

**Issue: Permission denied on scripts**
```bash
# Solution (macOS/Linux):
chmod +x start.sh

# Solution (Windows): Right-click → Run as Administrator
```

## Development Tips

### Hot Reload

Both backend and frontend support hot reload:
- **Backend**: Changes to `.py` files automatically reload the server
- **Frontend**: Changes to `.tsx`, `.css` files automatically reload the page

### Debugging

**Backend:**
```python
# Add breakpoints or print statements
print(f"Debug: {variable}")

# Or use Python debugger
import pdb; pdb.set_trace()
```

**Frontend:**
```typescript
// Use browser console
console.log('Debug:', variable)

// Use React DevTools browser extension
```

### Testing

**Test Backend API:**
```bash
# Health check
curl http://localhost:8000/health

# Solve problem
curl -X POST http://localhost:8000/solve \
  -H "Content-Type: application/json" \
  -d '{"question": "2*x + 3*x"}'
```

**Test Frontend:**
- Open http://localhost:3000
- Try example problems
- Check browser console for errors

## Environment Variables

### Backend (.env)
```env
OPENAI_API_KEY=your_key_here          # Optional
SUPABASE_URL=your_supabase_url        # Optional
SUPABASE_KEY=your_supabase_key        # Optional
ENVIRONMENT=development
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Next Steps

1. **Read Documentation**: Check [docs/README.md](docs/README.md) for full documentation
2. **Explore API**: Visit http://localhost:8000/docs for interactive API docs
3. **Try Examples**: Use the example problems to test the system
4. **Contribute**: See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
5. **Deploy**: Follow [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) to deploy to production

## Getting Help

- **Documentation**: Check the docs/ folder
- **Issues**: Search [GitHub Issues](https://github.com/altruisticgenx/projectz/issues)
- **Create Issue**: Open a new issue if you can't find a solution

## Success Checklist

- [ ] Python 3.10+ installed
- [ ] Node.js 18+ installed
- [ ] Backend dependencies installed
- [ ] Frontend dependencies installed
- [ ] Backend running at http://localhost:8000
- [ ] Frontend running at http://localhost:3000
- [ ] Can solve problems successfully
- [ ] Environment variables configured

If all items are checked, you're ready to develop! 🎉
