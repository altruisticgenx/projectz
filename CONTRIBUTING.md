# Contributing to AltruisticXAI

Thank you for your interest in contributing to AltruisticXAI! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

We are committed to providing a welcoming and inspiring community for all. Please be respectful and constructive in your interactions.

## How Can I Contribute?

### Reporting Bugs

Before submitting a bug report:
- Check the existing issues to avoid duplicates
- Use the GitHub issue tracker
- Include as much detail as possible:
  - Steps to reproduce
  - Expected behavior
  - Actual behavior
  - Screenshots if applicable
  - Your environment (OS, browser, Node version)

### Suggesting Enhancements

We welcome suggestions for new features or improvements:
- Use the GitHub issue tracker
- Clearly describe the feature and its benefits
- Explain why this enhancement would be useful
- Include examples or mockups if possible

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes**:
   - Follow the existing code style
   - Write clear, descriptive commit messages
   - Add or update tests as needed
   - Update documentation if required
3. **Test your changes**:
   - Run `npm test` to ensure all tests pass
   - Test the UI manually
   - Ensure no lint errors with `npm run lint`
4. **Submit your PR**:
   - Provide a clear description of the changes
   - Reference any related issues
   - Request review from maintainers

## Development Setup

1. Fork and clone the repository:
```bash
git clone https://github.com/your-username/projectz.git
cd projectz
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Make your changes and test:
```bash
npm test
npm run lint
```

## Code Style Guidelines

### JavaScript/React
- Use functional components with hooks
- Use meaningful variable and function names
- Keep components focused and single-purpose
- Add comments for complex logic
- Use PropTypes or TypeScript for type checking (future)

### CSS/Styling
- Use Tailwind CSS utility classes
- Follow the design system in UX_BLUEPRINT.md
- Keep custom CSS minimal
- Use CSS modules or styled-components for component-specific styles

### File Organization
```
src/
├── components/     # Reusable UI components
├── data/          # Static data and configurations
├── hooks/         # Custom React hooks
├── utils/         # Utility functions
└── App.js         # Main application component
```

## Commit Message Guidelines

Use clear and descriptive commit messages:
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters
- Reference issues and pull requests when relevant

Examples:
```
Add binary choice selection component
Fix privacy modal close button behavior
Update reflection scripts with new scenarios
Docs: Update README with installation steps
```

## Testing Guidelines

- Write tests for new features and bug fixes
- Ensure all existing tests pass
- Aim for meaningful test coverage
- Test both happy paths and edge cases

## Documentation

- Update README.md for significant changes
- Update relevant markdown files (ROADMAP.md, UX_BLUEPRINT.md, etc.)
- Add JSDoc comments for complex functions
- Include examples in documentation

## Design Contributions

If contributing design work:
- Follow the design system in UX_BLUEPRINT.md
- Use Figma or similar tools for mockups
- Ensure accessibility (WCAG 2.1 Level AA)
- Include both light and future dark mode considerations

## Questions?

Feel free to:
- Open an issue for discussion
- Reach out to maintainers
- Check existing documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to AltruisticXAI! Together, we're building tools for ethical reflection and growth.
