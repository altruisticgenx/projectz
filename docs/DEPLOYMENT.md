# Deployment Guide

This guide covers deployment options for the AltruisticXAI platform.

## Quick Deploy Options

### 1. Vercel (Recommended)

**Why Vercel:**
- Built specifically for Next.js
- Zero configuration
- Automatic deployments from Git
- Global CDN
- Free tier available
- Preview deployments for PRs

**Steps:**

1. **Install Vercel CLI:**
```bash
npm i -g vercel
```

2. **Deploy:**
```bash
vercel
```

3. **Production Deploy:**
```bash
vercel --prod
```

**Environment Variables:**
Set in Vercel Dashboard under Settings → Environment Variables

### 2. AWS Amplify

**Why AWS Amplify:**
- Integrated with AWS services
- Custom domain support
- Auto-scaling
- Built-in CI/CD

**Steps:**

1. **Install Amplify CLI:**
```bash
npm install -g @aws-amplify/cli
```

2. **Initialize:**
```bash
amplify init
```

3. **Add hosting:**
```bash
amplify add hosting
```

4. **Publish:**
```bash
amplify publish
```

### 3. Netlify

**Why Netlify:**
- Easy setup
- Form handling
- Split testing
- Deploy previews

**Steps:**

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy!

## Self-Hosted Options

### Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

**Update next.config.js:**
```javascript
module.exports = {
  output: 'standalone',
}
```

**Build and run:**
```bash
docker build -t altruisticxai .
docker run -p 3000:3000 altruisticxai
```

### Docker Compose

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
    
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - web
    restart: unless-stopped
```

### Kubernetes

**deployment.yaml:**
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: altruisticxai
spec:
  replicas: 3
  selector:
    matchLabels:
      app: altruisticxai
  template:
    metadata:
      labels:
        app: altruisticxai
    spec:
      containers:
      - name: web
        image: altruisticxai:latest
        ports:
        - containerPort: 3000
        env:
        - name: NODE_ENV
          value: "production"
---
apiVersion: v1
kind: Service
metadata:
  name: altruisticxai-service
spec:
  selector:
    app: altruisticxai
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer
```

## Environment Configuration

### Required Variables

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# CMS (if using)
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=

# Analytics
NEXT_PUBLIC_GA_ID=

# Contact Form
SENDGRID_API_KEY=
CONTACT_EMAIL=info@altruisticxai.com

# Database (if using)
DATABASE_URL=
```

### Production Checklist

- [ ] Environment variables configured
- [ ] SSL/TLS certificates installed
- [ ] DNS records configured
- [ ] CDN configured (if applicable)
- [ ] Analytics installed
- [ ] Error monitoring setup (Sentry)
- [ ] Performance monitoring (Vercel Analytics)
- [ ] Backup strategy implemented
- [ ] CI/CD pipeline tested
- [ ] Security headers configured

## Performance Optimization

### Next.js Configuration

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['cdn.sanity.io'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=63072000'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
      ],
    },
  ],
}
```

### CDN Configuration

Use Cloudflare or AWS CloudFront for:
- Static asset caching
- DDoS protection
- SSL termination
- Geographic distribution

## Monitoring & Maintenance

### Error Tracking

**Sentry:**
```bash
npm install @sentry/nextjs
```

```javascript
// sentry.client.config.js
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
})
```

### Uptime Monitoring

Use services like:
- Uptime Robot
- Pingdom
- StatusCake
- Datadog

### Performance Monitoring

- Vercel Analytics
- Google Analytics
- New Relic
- Datadog APM

## Backup Strategy

1. **Database Backups**: Daily automated backups
2. **Content Backups**: CMS export scripts
3. **Code Backups**: Git repository
4. **Config Backups**: Environment variables documented

## Rollback Procedure

### Vercel
```bash
vercel rollback
```

### Docker
```bash
docker tag altruisticxai:current altruisticxai:backup
docker tag altruisticxai:previous altruisticxai:current
docker-compose down && docker-compose up -d
```

### Kubernetes
```bash
kubectl rollout undo deployment/altruisticxai
```

## Security Considerations

1. **Environment Variables**: Never commit secrets
2. **HTTPS**: Always use SSL/TLS in production
3. **Security Headers**: Configure via next.config.js
4. **Rate Limiting**: Implement for API routes
5. **DDoS Protection**: Use CDN with protection
6. **Input Validation**: Sanitize all user inputs
7. **Dependency Updates**: Regular security patches

## Support

For deployment assistance:
- Email: info@altruisticxai.com
- Documentation: See README.md
- Issues: GitHub repository issues

## Cost Estimates

### Vercel
- Free tier: Suitable for MVP
- Pro: $20/month
- Enterprise: Custom pricing

### AWS
- t3.medium instance: ~$30/month
- CloudFront CDN: ~$5-50/month
- RDS database: ~$15-100/month

### Self-Hosted
- VPS (DigitalOcean/Linode): $12-40/month
- Domain: $10-15/year
- SSL certificate: Free (Let's Encrypt)
