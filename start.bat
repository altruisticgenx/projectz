@echo off
REM Quick start script for Transparent AI Tutoring Assistant (Windows)
REM This script starts both backend and frontend servers

echo Starting Transparent AI Tutoring Assistant...
echo.

REM Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Python 3 is not installed. Please install Python 3.10 or higher.
    exit /b 1
)

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js 18 or higher.
    exit /b 1
)

REM Backend setup
echo Setting up backend...
cd backend

if not exist "venv" (
    echo Creating Python virtual environment...
    python -m venv venv
)

call venv\Scripts\activate
echo Installing Python dependencies...
pip install -q -r requirements.txt

if not exist ".env" (
    echo Creating .env file from template...
    copy .env.example .env
    echo Please edit backend\.env and add your OPENAI_API_KEY if you have one
)

echo Backend setup complete
echo.

REM Frontend setup
echo Setting up frontend...
cd ..\frontend

if not exist "node_modules" (
    echo Installing Node dependencies (this may take a few minutes)...
    call npm install
)

if not exist ".env.local" (
    echo Creating .env.local file from template...
    copy .env.local.example .env.local
)

echo Frontend setup complete
echo.

REM Start servers
echo Starting servers...
echo.
echo Backend will run at: http://localhost:8000
echo Frontend will run at: http://localhost:3000
echo API Docs at: http://localhost:8000/docs
echo.
echo Press Ctrl+C to stop the servers
echo.

cd ..

REM Start backend in new window
start "AI Tutor Backend" cmd /k "cd backend && venv\Scripts\activate && uvicorn main:app --host 0.0.0.0 --port 8000"

REM Wait a bit for backend to start
timeout /t 3 /nobreak >nul

REM Start frontend in current window
cd frontend
call npm run dev
