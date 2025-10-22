# Quick Start Guide

Get the AltruisticXAI platform running on your local machine in 5 minutes.

## Prerequisites

- **Node.js**: Version 18.x or later
- **npm**: Version 9.x or later (comes with Node.js)
- **Git**: For cloning the repository

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/altruisticgenx/projectz.git
cd projectz
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- shadcn/ui components

### 3. Start Development Server

```bash
npm run dev
```

The site will be available at: **http://localhost:3000**

## Available Scripts

```bash
# Development
npm run dev          # Start dev server with hot reload

# Production
npm run build        # Build for production
npm start            # Run production server

# Code Quality
npm run lint         # Run ESLint
npx tsc --noEmit     # Type check TypeScript
```

## Project Structure Quick Reference

```
projectz/
├── app/                      # Pages & routes
│   ├── page.tsx              # Homepage (/)
│   ├── services/             # Service pages
│   ├── policy-dashboard/     # Dashboard
│   ├── blog/                 # Blog
│   └── contact/              # Contact form
├── components/
│   ├── ui/                   # Base components
│   ├── layout/               # Navbar, Footer
│   └── dashboard/            # Dashboard widgets
├── lib/                      # Utilities
├── public/                   # Static assets
├── content/                  # MDX content
└── docs/                     # Documentation
```

## Key Pages to Check

1. **Homepage**: http://localhost:3000
2. **Services**: http://localhost:3000/services/ai-readiness
3. **Dashboard**: http://localhost:3000/policy-dashboard
4. **Blog**: http://localhost:3000/blog
5. **Contact**: http://localhost:3000/contact

## Making Your First Change

### 1. Update the Homepage

Edit `app/page.tsx`:

```typescript
// Change the hero title
<h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
  Your Custom Title Here
</h1>
```

Save and see the change instantly!

### 2. Customize Colors

Edit `tailwind.config.ts`:

```typescript
quantum: {
  purple: "#YOUR_COLOR",
  blue: "#YOUR_COLOR",
  cyan: "#YOUR_COLOR",
  pink: "#YOUR_COLOR",
}
```

### 3. Add a New Page

Create `app/your-page/page.tsx`:

```typescript
export default function YourPage() {
  return (
    <div className="container mx-auto py-20">
      <h1 className="text-4xl font-bold">Your New Page</h1>
    </div>
  )
}
```

Access at: http://localhost:3000/your-page

## Common Tasks

### Add a New Service Page

1. Create directory: `app/services/your-service/`
2. Add `page.tsx` with content
3. Update navbar in `components/layout/navbar.tsx`

### Add Blog Content

1. Create MDX file: `content/blog/your-post.mdx`
2. Add frontmatter with metadata
3. Content will be ready for CMS integration

### Customize Components

Components are in `components/ui/`. Modify:
- `button.tsx` - Button styles
- `card.tsx` - Card layouts

## Environment Variables

Create `.env.local` for local development:

```bash
# Optional - for future integrations
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-analytics-id
```

## Troubleshooting

### Port Already in Use

```bash
# Use a different port
PORT=3001 npm run dev
```

### Build Errors

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors

```bash
# Check types
npx tsc --noEmit

# Generate types
npm run build
```

## Testing Your Changes

### 1. Lint Check

```bash
npm run lint
```

Should output: `✔ No ESLint warnings or errors`

### 2. Build Test

```bash
npm run build
```

Should complete without errors and show all pages generated.

### 3. Production Test

```bash
npm run build
npm start
```

Test at http://localhost:3000

## Next Steps

1. **Read the Documentation**
   - [README.md](../README.md) - Full project overview
   - [ARCHITECTURE.md](ARCHITECTURE.md) - System design
   - [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide

2. **Explore the Code**
   - Check out the dashboard components
   - Review the service pages
   - Look at the layout components

3. **Customize for Your Needs**
   - Update content and copy
   - Modify colors and styling
   - Add new features

4. **Deploy**
   - Follow the deployment guide
   - Set up CI/CD
   - Launch to production

## Common Questions

**Q: How do I add more pages?**  
A: Create a new folder in `app/` with a `page.tsx` file.

**Q: Where are the styles defined?**  
A: Global styles in `app/globals.css`, Tailwind config in `tailwind.config.ts`.

**Q: How do I add a new component?**  
A: Create in `components/` folder and import where needed.

**Q: Can I use a different database?**  
A: Yes! The site is stateless. Add API routes for database integration.

**Q: How do I add images?**  
A: Place in `public/images/` and use Next.js `Image` component.

## Getting Help

- **Documentation**: Check the `docs/` folder
- **Issues**: GitHub repository issues
- **Email**: info@altruisticxai.com

## Quick Tips

✅ **DO**
- Use TypeScript for type safety
- Follow the existing component patterns
- Test on multiple screen sizes
- Run lint before committing
- Check the build passes

❌ **DON'T**
- Commit `node_modules/` or `.next/`
- Hardcode sensitive data
- Skip TypeScript types
- Ignore ESLint warnings
- Deploy without testing

## What's Next?

Ready to build? Here are some ideas:

1. **Integrate a CMS** - See [CMS_INTEGRATION.md](CMS_INTEGRATION.md)
2. **Add Authentication** - Implement SSO
3. **Build the API** - Create backend services
4. **Deploy** - Launch to production

Happy coding! 🚀
