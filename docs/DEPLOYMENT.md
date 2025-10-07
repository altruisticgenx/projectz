# Deployment Guide

This guide covers deploying the Transparent AI Tutoring Assistant to various cloud platforms.

## 📋 Prerequisites

Before deploying, ensure you have:
- Git repository with the code
- OpenAI API key
- Account on your chosen hosting platform

## 🌐 Recommended Architecture

- **Frontend**: Vercel (or Netlify)
- **Backend**: Fly.io (or Render.com)
- **Database**: Supabase (optional for MVP)

---

## Frontend Deployment

### Option 1: Vercel (Recommended)

Vercel is the creator of Next.js and provides the best Next.js hosting experience.

#### Steps:

1. **Push code to GitHub**
```bash
git push origin main
```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the `frontend` directory as the root

3. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

4. **Set Environment Variables**
   - `NEXT_PUBLIC_API_URL`: Your backend API URL (e.g., `https://your-app.fly.dev`)

5. **Deploy**
   - Click "Deploy"
   - Your frontend will be live at `https://your-project.vercel.app`

#### Custom Domain (Optional)
- Go to Project Settings → Domains
- Add your custom domain
- Update DNS records as instructed

### Option 2: Netlify

Similar to Vercel, great for Next.js apps.

1. **Push to GitHub**
2. **New Site from Git** in Netlify
3. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Base directory: `frontend`
4. **Environment Variables**: Add `NEXT_PUBLIC_API_URL`
5. **Deploy**

---

## Backend Deployment

### Option 1: Fly.io (Recommended)

Fly.io provides excellent Python/Docker support with global edge deployment.

#### Steps:

1. **Install Fly CLI**
```bash
curl -L https://fly.io/install.sh | sh
```

2. **Login**
```bash
fly auth login
```

3. **Navigate to backend**
```bash
cd backend
```

4. **Launch app**
```bash
fly launch
```

Follow the prompts:
- App name: Choose a unique name (e.g., `ai-tutor-backend`)
- Region: Choose closest to your users
- Database: No (we're using Supabase or none for MVP)
- Deploy: No (we'll set secrets first)

5. **Set secrets**
```bash
fly secrets set OPENAI_API_KEY=your_openai_api_key_here
```

6. **Create/update fly.toml**

The `fly launch` command should create `fly.toml`. Verify it looks like:

```toml
app = "ai-tutor-backend"
primary_region = "iad"

[build]
  dockerfile = "Dockerfile"

[env]
  PORT = "8000"

[http_service]
  internal_port = 8000
  force_https = true
  auto_stop_machines = true
  auto_start_machines = true
  min_machines_running = 0
  processes = ["app"]

[[vm]]
  cpu_kind = "shared"
  cpus = 1
  memory_mb = 256
```

7. **Deploy**
```bash
fly deploy
```

8. **Get your URL**
```bash
fly status
```

Your API will be available at `https://your-app-name.fly.dev`

#### Verify Deployment
```bash
curl https://your-app-name.fly.dev/health
```

### Option 2: Render.com

Great free tier and automatic deployments from GitHub.

#### Steps:

1. **Push to GitHub**

2. **Create Web Service**
   - Go to [render.com](https://render.com)
   - New → Web Service
   - Connect your repository
   - Select `backend` directory

3. **Configure Service**
   - Name: `ai-tutor-backend`
   - Environment: Python 3
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

4. **Environment Variables**
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `ENVIRONMENT`: production

5. **Create Web Service**
   - Free tier is fine for MVP
   - Your service will be at `https://your-service.onrender.com`

### Option 3: Railway

Simple deployment with excellent developer experience.

1. **Install Railway CLI**
```bash
npm i -g @railway/cli
```

2. **Login**
```bash
railway login
```

3. **Navigate to backend**
```bash
cd backend
```

4. **Initialize**
```bash
railway init
```

5. **Add variables**
```bash
railway variables set OPENAI_API_KEY=your_key
```

6. **Deploy**
```bash
railway up
```

---

## Database Setup (Optional)

### Supabase

For user authentication and data persistence.

#### Steps:

1. **Create Project**
   - Go to [supabase.com](https://supabase.com)
   - New Project
   - Choose region and database password

2. **Run Schema**
   - Go to SQL Editor
   - Copy content from `docs/supabase-schema.sql`
   - Run the SQL

3. **Get Credentials**
   - Settings → API
   - Copy `URL` and `anon public` key

4. **Add to Backend**
```bash
# Fly.io
fly secrets set SUPABASE_URL=your_url SUPABASE_KEY=your_key

# Render
# Add in environment variables dashboard
```

5. **Enable Authentication** (if needed)
   - Authentication → Providers
   - Enable Email, Google, etc.

---

## Environment Variables Summary

### Backend
- `OPENAI_API_KEY` (required): Your OpenAI API key
- `SUPABASE_URL` (optional): Supabase project URL
- `SUPABASE_KEY` (optional): Supabase anon key
- `ENVIRONMENT` (optional): production/development

### Frontend
- `NEXT_PUBLIC_API_URL` (required): Backend API URL

---

## Post-Deployment Checklist

- [ ] Backend health check works: `GET /health`
- [ ] Frontend loads successfully
- [ ] Can solve a test problem end-to-end
- [ ] CORS is properly configured
- [ ] Environment variables are set correctly
- [ ] API keys are kept secret (not in frontend)
- [ ] SSL/HTTPS is working
- [ ] Monitor logs for errors

---

## Monitoring & Logging

### Fly.io
```bash
# View logs
fly logs

# Monitor status
fly status

# Scale if needed
fly scale count 2
```

### Render
- Logs available in dashboard
- Automatic deploys on git push
- Free tier sleeps after inactivity

### Vercel
- Automatic deployment previews for PRs
- Analytics available in dashboard
- Real-time function logs

---

## Scaling

### Backend
- **Fly.io**: `fly scale vm shared-cpu-1x --memory 512`
- **Render**: Upgrade to paid tier for persistent instances
- **Add caching**: Redis for frequent calculations

### Frontend
- Vercel/Netlify handle scaling automatically
- Add CDN for static assets
- Implement client-side caching

---

## Cost Estimates (MVP)

### Free Tier (Dev/Testing)
- Backend: Fly.io free tier or Render free tier
- Frontend: Vercel hobby (free)
- Database: Supabase free tier
- Total: $0/month + OpenAI usage

### Production (Low Traffic)
- Backend: Fly.io ~$5/month
- Frontend: Vercel Pro $20/month (if needed)
- Database: Supabase free tier
- OpenAI: ~$10-50/month (depends on usage)
- Total: ~$35-75/month

---

## Security Best Practices

1. **API Keys**: Never commit to git
2. **CORS**: Configure allowed origins
3. **Rate Limiting**: Add to backend
4. **HTTPS**: Always use SSL
5. **Environment Variables**: Use platform secrets
6. **Database**: Enable RLS in Supabase
7. **Monitoring**: Set up error tracking (Sentry)

---

## Troubleshooting

### Backend won't start
- Check logs: `fly logs` or render dashboard
- Verify Python version matches Dockerfile
- Check all required env vars are set

### Frontend can't connect to backend
- Verify `NEXT_PUBLIC_API_URL` is correct
- Check CORS configuration in backend
- Test backend directly with curl

### OpenAI errors
- Verify API key is valid
- Check OpenAI account has credits
- Backend should work without key (fallback explanations)

### Database connection issues
- Check Supabase credentials
- Verify RLS policies
- Check network/firewall rules

---

## Support

For deployment issues:
1. Check platform documentation
2. Review application logs
3. Test locally first
4. Open an issue on GitHub

---

## Alternative Platforms

Other platforms you could use:

- **Heroku**: Easy but more expensive
- **AWS**: More complex, very scalable
- **Google Cloud Run**: Good for containers
- **Azure**: Enterprise-friendly
- **DigitalOcean App Platform**: Simple and affordable

Choose based on your:
- Budget
- Technical expertise
- Scaling requirements
- Regional needs
