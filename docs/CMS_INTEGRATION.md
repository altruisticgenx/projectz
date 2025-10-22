# CMS Integration Guide

This guide explains how to integrate a headless CMS with the AltruisticXAI platform for dynamic content management.

## Recommended CMS Options

### 1. Sanity (Recommended)

**Pros:**
- Real-time collaboration
- Structured content
- Excellent developer experience
- Free tier available

**Setup:**
```bash
npm install @sanity/client next-sanity
```

### 2. Contentful

**Pros:**
- Enterprise-grade
- Strong API
- Multi-language support

**Setup:**
```bash
npm install contentful
```

### 3. Strapi

**Pros:**
- Self-hosted option
- Open source
- Customizable

## MDX Integration

The site is pre-configured with `next-mdx-remote` for blog content.

### Example MDX Content

Create `content/blog/example-post.mdx`:

```mdx
---
title: "Understanding Post-Quantum Cryptography"
author: "Inga Kaltak"
date: "2024-10-15"
category: "Quantum Security"
---

Your content here...
```

## API Integration

For Policy Dashboard real-time data:

```typescript
// lib/policy-data.ts
export async function getPolicyEvents() {
  const response = await fetch('/api/policy/events')
  return response.json()
}
```

## Analytics Integration

Add Google Analytics in `app/layout.tsx`:

```typescript
import Script from 'next/script'

<Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
```

See full integration examples in this file.
