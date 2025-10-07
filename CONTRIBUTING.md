# Contributing to Transparent AI Tutoring Assistant

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## 🎯 Project Vision

This project aims to provide transparent, explainable AI-powered tutoring that helps students understand the "why" behind each step in problem-solving.

## 🚀 Getting Started

1. **Fork the repository**
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/projectz.git
   cd projectz
   ```
3. **Set up the development environment** (see README.md)
4. **Create a new branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 💻 Development Setup

### Backend Development

```bash
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend Development

```bash
cd frontend
npm install
npm run dev
```

## 📝 Code Style

### Python (Backend)
- Follow PEP 8 style guide
- Use type hints where appropriate
- Write docstrings for functions and classes
- Keep functions focused and single-purpose

### TypeScript/React (Frontend)
- Follow Airbnb React/TypeScript style guide
- Use functional components with hooks
- Prefer named exports
- Use TypeScript types strictly

### General
- Write meaningful commit messages
- Keep commits atomic and focused
- Comment complex logic
- Update documentation with code changes

## 🧪 Testing

### Backend Tests
```bash
cd backend
pytest  # (to be implemented)
```

### Frontend Tests
```bash
cd frontend
npm test  # (to be implemented)
```

### Manual Testing
Always test your changes manually:
1. Start both backend and frontend
2. Test the affected functionality
3. Check browser console for errors
4. Test on different screen sizes

## 📚 Areas for Contribution

### High Priority
- [ ] Unit tests for backend
- [ ] Integration tests
- [ ] User authentication (Supabase)
- [ ] Problem history storage
- [ ] Feedback collection system

### Medium Priority
- [ ] More problem types (physics, chemistry)
- [ ] Multi-language support
- [ ] PDF export functionality
- [ ] Improved error handling
- [ ] Performance optimization

### Nice to Have
- [ ] Adaptive learning
- [ ] Voice input (Whisper API)
- [ ] Collaborative problem solving
- [ ] Teacher dashboard
- [ ] Analytics dashboard

## 🐛 Bug Reports

When reporting bugs, please include:
1. **Description**: Clear description of the bug
2. **Steps to reproduce**: Detailed steps
3. **Expected behavior**: What should happen
4. **Actual behavior**: What actually happens
5. **Environment**: OS, browser, versions
6. **Screenshots**: If applicable

## ✨ Feature Requests

When requesting features, please include:
1. **Problem statement**: What problem does this solve?
2. **Proposed solution**: How would it work?
3. **Alternatives**: Other ways to solve this
4. **Additional context**: Any other relevant info

## 🔄 Pull Request Process

1. **Update documentation** if needed
2. **Add tests** for new functionality
3. **Ensure all tests pass**
4. **Update CHANGELOG.md** (if exists)
5. **Fill out the PR template**
6. **Request review** from maintainers

### PR Title Format
- `feat: Add new feature description`
- `fix: Fix bug description`
- `docs: Update documentation`
- `refactor: Refactor code`
- `test: Add tests`
- `chore: Maintenance tasks`

### PR Description Should Include
- Summary of changes
- Motivation and context
- Screenshots (for UI changes)
- Breaking changes (if any)
- Related issues

## 📋 Code Review Guidelines

### For Reviewers
- Be respectful and constructive
- Focus on code, not the person
- Explain your reasoning
- Approve when ready, or request changes with clear guidance

### For Contributors
- Respond to all comments
- Make requested changes or discuss alternatives
- Mark conversations as resolved when addressed
- Be patient and respectful

## 🏗️ Architecture Guidelines

### Backend
- Keep routes in `main.py` or split into modules as needed
- Use Pydantic models for validation
- Handle errors gracefully
- Log important events
- Keep business logic separate from API logic

### Frontend
- Keep components small and focused
- Use TypeScript interfaces for props
- Handle loading and error states
- Keep API calls in utility functions
- Use environment variables for configuration

## 📖 Documentation

Good documentation is crucial:
- Update README.md for user-facing changes
- Update code comments for complex logic
- Update API documentation for endpoint changes
- Add examples for new features

## 🤝 Community

- Be welcoming to newcomers
- Help others learn and grow
- Give credit where due
- Follow the Code of Conduct

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

## ❓ Questions?

- Open an issue for questions
- Tag with "question" label
- Check existing issues first

---

Thank you for contributing to making education more transparent and accessible! 🎓
