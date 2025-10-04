# AltruisticXAI Quick Start Guide

Get up and running with AltruisticXAI in under 5 minutes!

## Prerequisites Check

Before you begin, ensure you have:
- ✅ Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- ✅ npm (comes with Node.js) or yarn
- ✅ A modern web browser (Chrome, Firefox, Safari, or Edge)
- ✅ Git (for cloning the repository)

To check your Node.js version:
```bash
node --version
```

## Step-by-Step Setup

### 1. Clone the Repository

```bash
git clone https://github.com/altruisticgenx/projectz.git
cd projectz
```

### 2. Install Dependencies

```bash
npm install
```

This will install all necessary dependencies including:
- React 18.2.0
- Tailwind CSS 3.3.0
- Lucide React (icons)
- Testing libraries

Installation typically takes 1-2 minutes depending on your internet connection.

### 3. Start the Development Server

```bash
npm start
```

The application will automatically open in your browser at:
```
http://localhost:3000
```

If it doesn't open automatically, manually navigate to the URL above.

### 4. Explore the Application

Once running, you'll see:

1. **Splash Screen**: The welcome screen with the AltruisticXAI logo
   - Click "Begin Your Reflection" to proceed

2. **Onboarding** (optional): Select your core values
   - Choose values that matter to you
   - Or click "Skip" to go directly to the main interface

3. **Main Interface**: Start your ethical reflection journey
   - Type what's on your mind
   - Choose between binary options
   - Receive values-based feedback
   - Save reflections to your logbook

## Available Commands

### Development
```bash
npm start          # Start development server
npm test           # Run tests in watch mode
npm run build      # Build for production
```

### Code Quality
```bash
npm run lint       # Check code style
npm run lint:fix   # Fix code style issues
npm run format     # Format code with Prettier
```

## Testing the Application

### Basic Test Run
```bash
npm test
```

Press `a` to run all tests, or `q` to quit.

### Running Tests Once
```bash
npm test -- --watchAll=false
```

## Project Structure Overview

```
projectz/
├── src/
│   ├── components/      # All React components
│   ├── data/           # Sample reflection scripts
│   ├── App.js          # Main application
│   └── index.js        # Entry point
├── public/             # Static assets
└── package.json        # Dependencies
```

## Key Features to Try

### 1. Privacy Controls
- Click the shield icon (🛡️) in the header
- Switch between Local and Cloud processing modes
- Export your data as JSON
- Delete all reflections if needed

### 2. Reflection Logbook
- Click the book icon (📖) in the header
- View your reflection history
- Expand entries to see full details
- Export your reflections

### 3. Binary Choices
- Enter any dilemma or question
- Choose between two presented options
- See which values are upheld or strained
- Understand potential ripples of your decision

## Customization

### Modifying Reflection Scripts

Edit `src/data/rippleScripts.js` to add your own reflection scenarios:

```javascript
{
  id: 'custom-scenario',
  category: 'Custom',
  question: 'Your question here?',
  optionA: {
    label: 'Option A Label',
    description: 'Description of option A',
    value: 'optionA'
  },
  // ... rest of configuration
}
```

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  'deep-purple': '#6B5B95',  // Your custom color
  // ... other colors
}
```

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:
```bash
PORT=3001 npm start
```

### Dependencies Installation Failed

Try clearing the npm cache:
```bash
npm cache clean --force
npm install
```

### Build Errors

Ensure you're using a compatible Node.js version:
```bash
node --version  # Should be v14 or higher
```

### Browser Compatibility

If you experience issues:
- Clear browser cache
- Try a different browser
- Disable browser extensions

## Next Steps

### For Users
- ✅ Complete onboarding with your values
- ✅ Try different reflection scenarios
- ✅ Explore the privacy settings
- ✅ Export your reflections

### For Developers
- 📖 Read [CONTRIBUTING.md](./CONTRIBUTING.md)
- 📖 Review [UX_BLUEPRINT.md](./UX_BLUEPRINT.md)
- 📖 Check [ROADMAP.md](./ROADMAP.md)
- 🔧 Start building new features!

## Getting Help

### Resources
- 📚 **Full Documentation**: See README.md
- 🎨 **Design Guide**: See UX_BLUEPRINT.md
- 🗺️ **Roadmap**: See ROADMAP.md
- 💡 **Vision**: See PRODUCT_VISION.md

### Support
- 🐛 **Report Bugs**: Open an issue on GitHub
- 💬 **Ask Questions**: Open a discussion on GitHub
- 🤝 **Contribute**: See CONTRIBUTING.md

## Production Deployment

### Build for Production
```bash
npm run build
```

This creates an optimized production build in the `build/` directory.

### Deploy
The build folder can be deployed to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

See React documentation for detailed deployment instructions.

---

**Congratulations!** 🎉 You're now ready to explore AltruisticXAI!

Start your ethical reflection journey and make values-driven decisions with confidence.

---

*Need more help? Check the full [README.md](./README.md) or open an issue on GitHub.*
