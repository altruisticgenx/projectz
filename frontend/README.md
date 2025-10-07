# Frontend for Transparent AI Tutoring Assistant

A Next.js-based web interface for the AI tutoring system.

## Features

- **Modern UI**: Clean, responsive design with animations
- **Step-by-Step Display**: Each solution step is revealed with explanations
- **Example Problems**: Quick-start examples for testing
- **Real-time Feedback**: Interactive elements for user engagement

## Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.local.example .env.local
# Edit .env.local to point to your backend API
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

- `NEXT_PUBLIC_API_URL`: URL of the backend API (default: `http://localhost:8000`)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Set environment variable: `NEXT_PUBLIC_API_URL` to your backend URL
4. Deploy

### Other Platforms

Build the project:
```bash
npm run build
```

The output will be in `.next` directory. You can deploy this to any Node.js hosting platform.

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Language**: TypeScript

## Project Structure

```
frontend/
├── pages/
│   ├── _app.tsx       # App wrapper
│   ├── _document.tsx  # HTML document
│   └── index.tsx      # Main page
├── styles/
│   └── globals.css    # Global styles
├── public/            # Static assets
└── components/        # Reusable components (future)
```
