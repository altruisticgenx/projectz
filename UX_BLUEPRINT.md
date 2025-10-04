# AltruisticXAI: UX Blueprint

## Brand Identity

- **Brand Name**: AltruisticXAI
- **Tagline**: Reflect. Decide. Grow.
- **Brand Feel**: Calm, rounded, minimal—emphasizes trust and empathy

## UI/UX Design Language

### Typography
- **Primary Font**: Inter
- **Secondary Font**: Poppins
- **Characteristics**: High contrast and clarity
- **Usage**: 
  - Headers: Poppins Bold
  - Body: Inter Regular
  - Quotes/Emphasis: Inter Italic

### Color Palette

#### Primary Colors
- **Pastel Neutrals**: Background and cards
  - Light Gray: `#F5F5F7`
  - Warm White: `#FAFAFA`
  
#### Accent Colors
- **Blue/Green**: Trust and calm
  - Ocean Blue: `#4A90E2`
  - Sage Green: `#7ABEA8`
  
- **Purple**: CTA buttons
  - Deep Purple: `#6B5B95`
  - Light Purple: `#9B88B5`

#### Semantic Colors
- **Success**: `#52C41A` (green)
- **Warning**: `#FAAD14` (amber)
- **Info**: `#1890FF` (blue)
- **Neutral**: `#8C8C8C` (gray)

### Component Design

#### Style Reference
Based on **Drizzle UI** style:
- **Border Radius**: 2xl rounding (`rounded-2xl`)
- **Shadows**: Subtle shadows (`shadow-sm`, `shadow-md`)
- **Gradients**: Soft, multi-stop gradients

#### Card Components
```css
- Border radius: 16px (2xl)
- Padding: 24px
- Shadow: 0 2px 8px rgba(0,0,0,0.08)
- Background: White with subtle gradient
```

#### Button Components
```css
Primary:
  - Background: Purple gradient
  - Text: White
  - Padding: 12px 24px
  - Border radius: 12px
  
Secondary:
  - Background: Transparent
  - Border: 2px solid
  - Text: Purple
  - Padding: 12px 24px
  - Border radius: 12px
```

### Motion & Animation

#### Principles
- **Fade/Slide**: For smooth flow transitions
- **Avoid**: Pop effects
- **Duration**: 200-300ms
- **Easing**: ease-in-out

#### Transitions
- Page transitions: Fade + slide from bottom
- Card appearances: Fade in with scale
- Button hover: Subtle lift with shadow increase

### Icons

**Icon Set**: Lucide Icons / Heroicons

#### Key Icons
- **Shield**: Privacy controls
- **Clock**: History/timeline
- **Book-Open**: Logbook
- **Check-Circle**: Completed reflection
- **Alert-Circle**: Values in tension
- **Sparkles**: AI processing
- **Settings**: Preferences
- **Download**: Export data
- **Trash**: Delete reflection

### Voice & Tone

#### Principles
- **Friendly**: Warm and approachable
- **Invitational**: Encouraging without pressure
- **Non-judgmental**: No advice-giving
- **Clear**: Simple, direct language

#### Examples
- ✅ "Explore your values"
- ✅ "What's on your mind?"
- ✅ "Let's reflect on this together"
- ❌ "You should..."
- ❌ "The right answer is..."
- ❌ "Get advice now"

## Screen Layouts

### 1. Splash/Welcome Screen
```
┌─────────────────────────────────────┐
│                                     │
│         [Gradient Background]       │
│                                     │
│         AltruisticXAI Logo          │
│                                     │
│      Reflect. Decide. Grow.         │
│                                     │
│    [Begin Your Reflection] CTA      │
│                                     │
└─────────────────────────────────────┘
```

### 2. Onboarding Screen
```
┌─────────────────────────────────────┐
│  [Progress: ●●○○]           [Skip]  │
│                                     │
│  What matters most to you today?    │
│                                     │
│  ☐ Speed & Efficiency               │
│  ☐ Quality & Thoroughness           │
│  ☐ Balance & Well-being             │
│                                     │
│           [Continue] →              │
└─────────────────────────────────────┘
```

### 3. Main Chat (Compass UI)
```
┌─────────────────────────────────────┐
│  [☰]  AltruisticXAI    [🔒] [📖]    │
├─────────────────────────────────────┤
│                                     │
│  Chat bubble: "What's on your mind?"│
│                                     │
│  ┌─────────────────────────────┐   │
│  │ [User input area]            │   │
│  └─────────────────────────────┘   │
│                                     │
│  [Binary Choice Cards appear here] │
│                                     │
└─────────────────────────────────────┘
```

### 4. Binary Choice Presentation
```
┌─────────────────────────────────────┐
│  Which path feels right?            │
│                                     │
│  ┌──────────────┐  ┌──────────────┐│
│  │              │  │              ││
│  │   Option A   │  │   Option B   ││
│  │              │  │              ││
│  │  [Icon/Desc] │  │  [Icon/Desc] ││
│  │              │  │              ││
│  └──────────────┘  └──────────────┘│
│                                     │
└─────────────────────────────────────┘
```

### 5. Ripple Feedback Screen
```
┌─────────────────────────────────────┐
│  Your Reflection                    │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ ✓ Values Upheld             │   │
│  │   • [Value name]            │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ ⚠ Values Strained          │   │
│  │   • [Value name]            │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 〰 Potential Ripple         │   │
│  │   [Explanation]             │   │
│  └─────────────────────────────┘   │
│                                     │
│  [Save to Logbook] [New Reflection]│
└─────────────────────────────────────┘
```

### 6. Logbook/Timeline
```
┌─────────────────────────────────────┐
│  ← Reflection Memory                │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Today, 3:45 PM           [▾]│   │
│  │ Work: Speed vs. Accuracy    │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Yesterday, 9:22 AM       [▾]│   │
│  │ Personal: Yes vs. No        │   │
│  └─────────────────────────────┘   │
│                                     │
│  [Export All] [Delete Selected]    │
└─────────────────────────────────────┘
```

### 7. Privacy Modal
```
┌─────────────────────────────────────┐
│  Privacy & Data Control      [✕]   │
├─────────────────────────────────────┤
│                                     │
│  Processing Mode:                   │
│  ○ Local (Private, on your device) │
│  ● Cloud (Faster, requires internet)│
│                                     │
│  Data Storage:                      │
│  ☑ Keep reflection history          │
│  ☐ Share anonymized insights        │
│                                     │
│  [Export My Data] [Delete All Data] │
│                                     │
│  Your data is private by default.   │
│  Learn more →                       │
└─────────────────────────────────────┘
```

## User Flow Diagram

```
Start
  ↓
Splash Screen
  ↓
Onboarding (Optional)
  ↓
Main Chat Interface
  ↓
User enters dilemma
  ↓
Binary Choice Presentation
  ↓
User selects option
  ↓
Ripple Feedback
  ↓
Save to Logbook
  ↓
[New Reflection or View History]
```

## Accessibility Guidelines

### WCAG 2.1 Level AA Compliance
- **Color Contrast**: Minimum 4.5:1 for normal text
- **Focus Indicators**: Visible focus states for all interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: ARIA labels and semantic HTML
- **Text Resize**: Support up to 200% zoom
- **Touch Targets**: Minimum 44x44px for mobile

### Inclusive Design
- **Language**: Simple, clear, jargon-free
- **Cultural**: Avoid culture-specific metaphors
- **Neurodiversity**: Consistent patterns, clear structure
- **Visual**: Alternative text for all images and icons

---

*Design System Version 1.0*
