# Frequently Asked Questions (FAQ)

## General Questions

### What is AltruisticXAI?

AltruisticXAI is an ethical reflection engine that helps you make values-driven decisions. It's not a productivity tool or AI assistant that gives you answers—it's a calm space for reflection that helps you understand the ethical dimensions of your choices.

### How is this different from other AI tools?

Unlike ChatGPT or other AI assistants that provide answers or complete tasks, AltruisticXAI:
- Focuses on reflection, not productivity
- Presents binary choices (Ripple) instead of direct answers
- Shows you which values are upheld or strained by your decisions
- Prioritizes privacy and user control
- Is non-judgmental and advice-free

### Who is AltruisticXAI for?

AltruisticXAI is designed for:
- **Individuals** seeking clarity in personal or professional decisions
- **Teams** wanting to align on shared values
- **Students** learning ethical decision-making
- **Leaders** making values-based organizational choices
- **Anyone** looking to understand the ripple effects of their decisions

### Is this free?

Currently, the MVP is free to use. Future pricing will include:
- **Free Tier**: Personal use with basic features
- **Team Tier**: Collaboration features and integrations ($9/user/month)
- **Enterprise**: Custom features and support (custom pricing)

## Technical Questions

### What technology does it use?

AltruisticXAI is built with:
- **Frontend**: React 18.2.0 + Tailwind CSS
- **Icons**: Lucide React
- **Future**: LLM integration (GPT-4, Claude, or local models)

### Do I need to install anything?

No installation required! AltruisticXAI runs in your web browser. Just:
1. Visit the website
2. Start reflecting

For developers who want to run it locally, see [QUICK_START.md](./QUICK_START.md).

### What browsers are supported?

AltruisticXAI works on all modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

### Can I use it on mobile?

Yes! The interface is responsive and works on:
- iOS (Safari, Chrome)
- Android (Chrome, Firefox)
- Tablets

A dedicated mobile app is planned for future releases.

## Privacy & Data Questions

### Where is my data stored?

Your reflections are stored **locally in your browser** by default. No data is sent to servers unless you explicitly choose cloud processing mode.

### What's the difference between Local and Cloud mode?

**Local Mode:**
- AI runs on your device (future feature)
- Completely private
- No internet connection needed (after initial load)
- Slower processing

**Cloud Mode:**
- AI runs on secure servers
- Faster processing
- Requires internet connection
- Data is encrypted in transit and not stored

### Can I export my data?

Yes! Click the Privacy icon (🛡️) and select "Export My Data". You'll receive a JSON file with all your reflections.

### Can I delete my data?

Absolutely. You have full control:
- Delete individual reflections from the Logbook
- Delete all data from the Privacy modal
- Your data is immediately and permanently removed

### Is my data shared or sold?

**Never.** Your personal reflections are private. We only collect anonymized, aggregated data with explicit user consent for improving the AI models—and even that is optional.

### Is AltruisticXAI GDPR compliant?

Yes. AltruisticXAI follows GDPR principles:
- Privacy by default
- User control over data
- Right to access and export
- Right to deletion
- Transparent data practices

## Usage Questions

### How do I start a reflection?

1. Type what's on your mind in the input field
2. The AI presents two options (binary choice)
3. Select the option that feels right
4. Review the Ripple feedback showing values affected
5. Save to your Logbook or start a new reflection

### What are "Ripple" choices?

Ripple choices are binary decisions that help you see:
- **Values Upheld**: What you're honoring with this choice
- **Values Strained**: What you're compromising
- **Potential Ripple**: Long-term implications

The name "Ripple" represents how every decision creates ripples in your life and values.

### What if neither option feels right?

That's valuable feedback! It might mean:
- The dilemma needs reframing
- There's a third path to explore
- You need more information
- Your values are in tension

You can start a new reflection to explore different angles.

### How many reflections can I save?

As many as you want! Reflections are stored in your browser's local storage, which typically has room for thousands of entries.

### Can I search my past reflections?

Currently, you can browse your reflection timeline chronologically. Search and filter features are planned for future releases.

### Can I share a reflection?

Individual reflections are private by design. Future features will include:
- Optional sharing with team members
- Anonymous sharing for collective insights
- Export to other tools (Notion, Obsidian, etc.)

## Features & Roadmap Questions

### When will LLM integration be available?

LLM integration is planned for Q2 2024. This will enable:
- Dynamic reflection generation
- More nuanced feedback
- Personalized guidance based on your values

### Will there be a mobile app?

Yes! Native mobile apps for iOS and Android are on the roadmap for Q3 2024.

### What integrations are planned?

Near-term integrations:
- Slack (for team reflections)
- Notion (for reflection databases)
- Chrome Extension (for quick access)

Future integrations:
- Microsoft Teams
- Google Calendar
- Zapier
- Email digests

### Can teams use this together?

Team features are planned for Q2 2024:
- Shared values alignment
- Team reflection sessions
- Collective decision-making
- Anonymous team insights
- Admin dashboard

### Will there be an API?

Yes! API access is planned for Q3 2024 to enable:
- Custom integrations
- Third-party apps
- Research projects
- Enterprise features

See [API.md](./API.md) for the planned API specification.

## Contributing Questions

### Can I contribute to the project?

Yes! We welcome contributions:
- Code improvements
- New features
- Bug fixes
- Documentation
- Design work
- Reflection scripts

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### How do I report a bug?

1. Check if the bug is already reported in GitHub Issues
2. If not, create a new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your browser/OS

### How do I suggest a feature?

Open a GitHub issue with the "enhancement" label:
- Describe the feature
- Explain the use case
- Share any mockups or examples
- Discuss why it would be valuable

### Is this open source?

Yes! AltruisticXAI is open source under the MIT License. You can:
- View the source code
- Fork and modify
- Contribute improvements
- Use for personal or commercial projects

## Philosophical Questions

### Why binary choices? Isn't life more complex?

You're right—life is complex! But binary choices are powerful because they:
- Force clarity by eliminating "maybes"
- Reveal your true priorities
- Show which values matter most right now
- Are easier to reflect on than multiple options

Think of them as a tool for focusing your reflection, not a limitation.

### Isn't this just another "should I do X?" tool?

No! AltruisticXAI doesn't tell you what to do. It helps you:
- Understand your values
- See trade-offs clearly
- Reflect on implications
- Make your own decision

The goal is wisdom and self-awareness, not answers.

### What if I disagree with the AI's assessment?

Perfect! Disagreement is valuable data. It means:
- You know your values better than the AI
- You're thinking critically
- You're not just following recommendations

AltruisticXAI is a mirror, not an authority. Your judgment always comes first.

### Can AI really help with ethics?

AI can't make ethical decisions for you, but it can:
- Help you see patterns in your choices
- Present perspectives you hadn't considered
- Structure your thinking
- Remind you of your stated values

The reflection and decision are always yours.

## Troubleshooting

### The app won't load

Try:
1. Refresh the page (Ctrl/Cmd + R)
2. Clear browser cache
3. Try a different browser
4. Check your internet connection
5. Disable browser extensions temporarily

### My reflections disappeared

Reflections are stored in browser local storage, which can be cleared if you:
- Clear browsing data
- Use private/incognito mode
- Change browsers
- Use a different device

**Prevention**: Export your data regularly from the Privacy modal.

### The interface is slow or laggy

Try:
- Close other browser tabs
- Disable browser extensions
- Use Chrome or Edge (best performance)
- Clear browser cache
- Check if your device has sufficient memory

### I can't see the Privacy icon

Make sure you're on the main Chat Interface screen. The Privacy icon (🛡️) is in the top-right corner of the header.

## Contact & Support

### How do I get help?

1. Check this FAQ first
2. Read the documentation ([README.md](./README.md), [QUICK_START.md](./QUICK_START.md))
3. Open a GitHub issue for bugs or questions
4. Contact via LinkedIn (see README.md)

### Is there a community?

We're building one! Future community spaces:
- Discord server
- GitHub Discussions
- Monthly community calls
- User feedback sessions

### How do I stay updated?

- ⭐ Star the GitHub repository
- Watch for releases
- Follow on LinkedIn
- Subscribe to the newsletter (coming soon)

---

**Didn't find your answer?** Open an issue on GitHub or reach out through the contact methods in [README.md](./README.md).

---

*Last updated: January 2024*
