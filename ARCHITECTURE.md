# AltruisticXAI Architecture

## Overview

AltruisticXAI is built as a React-based single-page application (SPA) with a focus on privacy, modularity, and ethical reflection workflows. This document outlines the technical architecture and design decisions.

## Technology Stack

### Frontend
- **React 18.2.0**: Component-based UI framework
- **Tailwind CSS 3.3.0**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Create React App**: Build tooling and configuration

### Future Integrations
- **LLM APIs**: OpenAI GPT, Anthropic Claude, or local models
- **Authentication**: Auth0, Firebase Auth, or custom JWT
- **Database**: IndexedDB (local), Firebase, or PostgreSQL
- **Analytics**: Privacy-focused analytics (Plausible, Fathom)

## Architecture Patterns

### Component Architecture

```
┌─────────────────────────────────────────┐
│              App.js                     │
│         (Application State)             │
└─────────────────────────────────────────┘
                    │
    ┌───────────────┼───────────────┐
    │               │               │
┌───▼────┐    ┌────▼─────┐   ┌────▼──────┐
│ Splash │    │Onboarding│   │   Chat    │
│ Screen │    │  Screen  │   │ Interface │
└────────┘    └──────────┘   └───────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
        ┌─────▼────┐         ┌─────▼──────┐      ┌──────▼─────┐
        │Reflection│         │  Choice    │      │   Ripple   │
        │  Input   │         │ Presenter  │      │    Card    │
        └──────────┘         └────────────┘      └────────────┘
```

### Data Flow

```
User Input → ReflectionInput → ChatInterface
                                      ↓
                              Script Selection
                                      ↓
                              ChoicePresenter
                                      ↓
                              User Selection
                                      ↓
                                RippleCard
                                      ↓
                              Save to State
                                      ↓
                                  Logbook
```

## Core Components

### Presentational Components
Components focused on rendering UI without complex logic:

- **SplashScreen**: Welcome screen
- **ReflectionInput**: Text input field
- **ChoicePresenter**: Binary choice cards
- **RippleCard**: Feedback display
- **Logbook**: History view

### Container Components
Components managing state and logic:

- **App**: Root component, manages global state
- **ChatInterface**: Orchestrates reflection flow
- **OnboardingScreen**: Handles value selection
- **PrivacyModal**: Manages privacy settings

## State Management

### Current Approach: React State + Props

```javascript
// App.js - Top-level state
const [currentScreen, setCurrentScreen] = useState('splash');
const [userValues, setUserValues] = useState([]);
const [processingMode, setProcessingMode] = useState('cloud');
const [reflections, setReflections] = useState([]);
```

### Future: Context API or Redux

For scaling to team features and complex state:

```javascript
// Future state structure
{
  user: {
    id, profile, preferences
  },
  reflections: [
    { id, script, choice, timestamp, ... }
  ],
  settings: {
    processingMode, privacy, integrations
  },
  ui: {
    currentScreen, modals, notifications
  }
}
```

## Data Models

### Reflection
```javascript
{
  id: string,
  userId: string,
  script: {
    id: string,
    category: string,
    question: string,
    optionA: { label, description, value },
    optionB: { label, description, value }
  },
  choice: string,
  reflection: {
    valuesUpheld: string[],
    valuesStrained: string[],
    ripple: string
  },
  timestamp: ISO8601,
  metadata: {
    processingMode: 'local' | 'cloud',
    duration: number,
    source: 'web' | 'mobile' | 'integration'
  }
}
```

### User Profile
```javascript
{
  id: string,
  email: string,
  values: string[],
  settings: {
    processingMode: 'local' | 'cloud',
    dataRetention: boolean,
    anonymousSharing: boolean
  },
  subscription: {
    tier: 'free' | 'team' | 'enterprise',
    features: string[]
  }
}
```

## Privacy Architecture

### Local Storage
- Browser localStorage for user preferences
- IndexedDB for reflection history
- No server transmission without explicit consent

### Processing Modes

#### Local Mode
```
User Input → Local LLM (WebLLM) → Response
               ↓
          No network calls
          Private by default
```

#### Cloud Mode
```
User Input → Encrypted → API → LLM → Response
               ↓
          Encrypted transmission
          Temporary processing
          No persistent storage
```

## API Design (Future)

### RESTful Endpoints

```
POST   /api/reflections          # Create new reflection
GET    /api/reflections          # List user reflections
GET    /api/reflections/:id      # Get specific reflection
DELETE /api/reflections/:id      # Delete reflection
PUT    /api/reflections/:id      # Update reflection

POST   /api/llm/generate         # Generate AI response
POST   /api/llm/analyze          # Analyze choices

GET    /api/scripts              # Get reflection scripts
GET    /api/scripts/:id          # Get specific script

POST   /api/export               # Export user data
DELETE /api/account              # Delete account
```

### Authentication Flow

```
1. User signs up/logs in
2. Receive JWT token
3. Store token securely (httpOnly cookie)
4. Include token in API requests
5. Token refresh on expiry
```

## Security Considerations

### Data Protection
- HTTPS only in production
- Encrypted data transmission
- Secure token storage
- CSRF protection
- XSS prevention

### Privacy Features
- No tracking cookies
- Optional telemetry
- User-controlled data
- Transparent data usage
- GDPR compliance

## Performance Optimization

### Current Optimizations
- Code splitting with React.lazy
- Memoization with React.memo
- Efficient re-rendering
- Tailwind CSS purging

### Future Optimizations
- Service Worker for offline support
- Image optimization
- CDN for static assets
- Database indexing
- Caching strategies

## Testing Strategy

### Unit Tests
- Component rendering
- User interactions
- State management
- Utility functions

### Integration Tests
- Complete user flows
- API interactions
- Data persistence

### E2E Tests
- Critical user journeys
- Cross-browser testing
- Mobile responsiveness

## Deployment Architecture

### Development
```
Local Machine → npm start → localhost:3000
```

### Staging
```
GitHub Push → CI/CD → Vercel/Netlify → staging.altruisticxai.com
```

### Production
```
GitHub Release → CI/CD → CDN → app.altruisticxai.com
```

## Scalability Considerations

### Frontend Scaling
- CDN for global distribution
- Edge computing for reduced latency
- Progressive Web App (PWA) features

### Backend Scaling (Future)
- Microservices architecture
- Load balancing
- Database replication
- Caching layer (Redis)
- Message queue (RabbitMQ)

## Integration Points

### Current
- Browser localStorage
- Browser IndexedDB

### Planned
- Slack API
- Notion API
- Google Calendar
- Microsoft Teams
- Chrome Extension API

## Monitoring & Observability

### Metrics to Track
- User engagement (reflections per user)
- Component performance
- Error rates
- API response times
- User retention

### Tools (Future)
- Error tracking: Sentry
- Analytics: Plausible
- Performance: Web Vitals
- Logging: LogRocket (privacy-conscious)

## Code Organization

```
src/
├── components/          # UI components
│   ├── common/         # Shared components
│   └── screens/        # Screen-level components
├── data/               # Static data
├── hooks/              # Custom React hooks
├── utils/              # Helper functions
├── services/           # API and external services
├── contexts/           # React contexts
├── constants/          # App constants
└── styles/            # Global styles
```

## Development Workflow

```
Feature Request → Issue → Branch → Code → Test → PR → Review → Merge
```

## Versioning Strategy

- **Semantic Versioning**: MAJOR.MINOR.PATCH
- **Major**: Breaking changes
- **Minor**: New features, backward compatible
- **Patch**: Bug fixes

## Accessibility (A11y)

### Standards
- WCAG 2.1 Level AA compliance
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

### Implementation
- Focus management
- Color contrast checking
- Alternative text for images
- Skip navigation links

## Future Architecture

### Microservices (Long-term)

```
┌──────────┐     ┌──────────┐     ┌──────────┐
│  Web App │────▶│   API    │────▶│   LLM    │
└──────────┘     │ Gateway  │     │ Service  │
                 └────┬─────┘     └──────────┘
                      │
        ┌─────────────┼─────────────┐
        │             │             │
   ┌────▼────┐   ┌───▼────┐   ┌───▼────┐
   │  Auth   │   │  Data  │   │Analytics│
   │ Service │   │Service │   │ Service │
   └─────────┘   └────────┘   └─────────┘
```

---

*This architecture is designed to evolve with the product while maintaining privacy, performance, and user trust.*
