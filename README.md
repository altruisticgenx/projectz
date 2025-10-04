# AltruisticXAI

> **Reflect. Decide. Grow.**

An AI-driven ethical reflection platform that helps users clarify core values, make decisions with confidence and privacy, and foster authentic growth.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.2-61DAFB.svg)
![Tailwind](https://img.shields.io/badge/Tailwind-3.3-38B2AC.svg)

---

## 🧭 About AltruisticXAI

AltruisticXAI fills the modern gap in AI-driven ethical support—a "reflection engine" helping users clarify core values, make decisions with confidence and privacy, and foster authentic growth.

This isn't a productivity bot. It's a calm, psychological "safe space" for reflection. The AI guides users through binary "Ripple" choices, explains trade-offs, and helps build ethical clarity and self-awareness over time—all with radical privacy by default.

## ✨ Key Features

- **Ethical Reflection Layer**: Conversational, values-first interface for clarity and trust
- **Transparent AI Reasoning**: Every outcome includes "why"—rationale and values affected
- **Radical Privacy**: User-owned data, private reflections with easy controls for logs and deletion
- **Processing Mode Toggle**: Choose between local (private) or cloud (faster) AI processing
- **Reflection Logbook**: Private timeline of your reflection journey with export capabilities
- **Binary Ripple Choices**: Guided decision-making through thoughtful trade-offs

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/altruisticgenx/projectz.git
cd projectz

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the app in action.

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Design Philosophy

**Brand Feel**: Calm, rounded, minimal—emphasizes trust and empathy

**Typography**: Inter/Poppins for high contrast and clarity

**Palette**: Pastel neutrals, blue/green primary colors, purple accent CTAs

**Components**: Drizzle UI style—2xl rounding, subtle shadows, gradients

**Voice**: Friendly, invitational—"Explore your values," never "Get advice"

## 📁 Project Structure

```
projectz/
├── src/
│   ├── components/
│   │   ├── Welcome.jsx          # Landing screen
│   │   ├── Onboarding.jsx       # Value selection flow
│   │   ├── CompassView.jsx      # Main reflection interface
│   │   ├── ChoicePresenter.jsx  # Binary choice cards
│   │   ├── RippleCard.jsx       # Reflection feedback
│   │   ├── Logbook.jsx          # Reflection history
│   │   ├── ReflectionInput.jsx  # User input component
│   │   └── PrivacyModal.jsx     # Privacy controls
│   ├── data/
│   │   └── rippleScripts.js     # Sample reflection scenarios
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # App entry point
│   └── index.css                 # Global styles
├── VISION.md                     # Product vision & roadmap
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🔒 Privacy First

- All reflections stored locally in browser by default
- Optional local AI processing mode
- Export your data anytime as JSON
- Delete all data with one click
- No third-party sharing
- Transparent privacy controls

## 📖 Documentation

See [VISION.md](./VISION.md) for detailed product vision, roadmap, UX blueprint, and implementation plan.

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **State Management**: React Hooks + localStorage

## 🗺️ Roadmap

- [x] Core reflection flow with binary choices
- [x] Privacy controls and data management
- [x] Reflection logbook with history
- [x] Processing mode toggle (local/cloud)
- [ ] LLM integration for dynamic responses
- [ ] Mobile app (React Native)
- [ ] Slack/Notion integrations
- [ ] Team collaboration features
- [ ] Anonymous data insights dashboard

## 👤 Creator

**Inga Kaltak** - Machine Learning Engineer

- **LinkedIn**: [linkedin.com/in/inga-kaltak](https://www.linkedin.com/in/inga-kaltak)
- **Location**: Philadelphia, PA (Hybrid/Remote)

---

> **"Building bold, secure, and human-centered digital futures."**

---

## 📄 License

MIT License - see LICENSE file for details
