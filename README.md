# 🏈 NFL Study - Spaced Repetition Learning

> Master NFL fantasy football knowledge with scientifically-proven spaced repetition

Browser-based flashcard system powered by the FSRS algorithm for optimal learning retention. Study 380+ curated flashcards covering NFL stats, fantasy strategy, and football fundamentals.

[![React](https://img.shields.io/badge/React-19.2-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF.svg)](https://vitejs.dev/)
[![FSRS](https://img.shields.io/badge/FSRS-5.2-green.svg)](https://github.com/open-spaced-repetition/ts-fsrs)
[![License](https://img.shields.io/badge/License-ISC-yellow.svg)](LICENSE)

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [How It Works](#-how-it-works)
- [Study Modes](#-study-modes)
- [Content Database](#-content-database)
- [Usage Guide](#-usage-guide)
- [Development](#-development)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Architecture](#-architecture)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🧠 **Scientific Learning Algorithm**
Uses the official [ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs) library - the most advanced open-source spaced repetition algorithm. Cards appear exactly when you're about to forget them for maximum retention.

### 🎯 **Dual Study Modes**
- **Flashcard Mode**: Traditional front/back cards with flip animation
- **MCQ Mode**: Multiple-choice questions with instant feedback

### 📊 **Smart Difficulty Filtering**
- **🌱 Beginner** (80+ cards): Football basics, rules, formations
- **⚡ Intermediate** (250+ cards): Player stats, fantasy strategy
- **🔥 Advanced** (50+ cards): Advanced analytics, dynasty strategy

### 💾 **Persistent Progress**
- All data stored locally in IndexedDB
- No server required - works offline
- Progress never lost, even after browser restarts

### 📈 **FSRS Schedule Insights**
- Visualize your review schedule
- See card states (New, Learning, Review, Relearning)
- Track due dates for upcoming reviews

### 🔒 **Intelligent Prerequisites System**
- Learn foundational concepts before advanced applications
- Cards automatically unlock as you master prerequisites
- 145+ concept definitions with smart dependency chains
- Natural learning progression from basics to expert level

### 🎨 **Modern UI/UX**
- Fast, responsive interface built with React 19 + Vite
- Beautiful Tailwind CSS 4 styling
- Smooth animations and transitions
- Mobile-friendly responsive design

### 🔄 **Comprehensive Content**
380+ flashcards covering:
- ✅ 2024 NFL season stats and 2025 fantasy projections
- ✅ All major positions (QB, RB, WR, TE)
- ✅ Fantasy strategy (draft, waiver wire, playoffs, trades)
- ✅ Super Bowl LIX results and 2024 NFL awards
- ✅ Football fundamentals and route tree
- ✅ Advanced analytics and metrics

## 🚀 Quick Start

### Prerequisites

- **Node.js** 16+ and npm
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
# Clone the repository
git clone https://github.com/NathanNorman/nfl-study.git
cd nfl-study

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser. The app will auto-load 380+ flashcards on first run.

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎓 How It Works

### The FSRS Algorithm

FSRS (Free Spaced Repetition Scheduler) is a scientifically-proven algorithm that:

1. **Tracks Memory Strength**: Each card has a "stability" value representing how well you know it
2. **Predicts Forgetting**: Calculates when you're likely to forget information
3. **Optimizes Scheduling**: Shows cards right before you forget for maximum retention
4. **Adapts to You**: Learns your memory patterns and adjusts intervals accordingly

### Rating System

When you review a card, rate your knowledge:

- **Again (1)** 🔴: Didn't know it → Short interval (~10 minutes)
- **Hard (2)** 🟡: Struggled but got it → Moderate interval (~1 day)
- **Good (3)** 🟢: Knew it confidently → Longer interval (~3-7 days)
- **Easy (4)** 🔵: Perfect recall → Much longer interval (~14+ days)

The algorithm uses your ratings to calculate optimal review intervals, maximizing retention while minimizing study time.

## 🎮 Study Modes

### Flashcard Mode (Default)

**Best for:** Deep learning and recall practice

1. Click **"All Levels"** or select a difficulty (Beginner/Intermediate/Advanced)
2. Click **"Start Studying"** to begin reviewing due cards
3. Read the question and try to recall the answer
4. Click **"Show Answer"** to reveal the back of the card
5. Rate your knowledge (Again/Hard/Good/Easy)
6. Use **Previous** to review the last card, or **Stop** to exit
7. View **FSRS Schedule Insights** to see upcoming reviews

**Features:**
- Smooth flip animations
- Difficulty badges (🌱⚡🔥) on each card
- Progress tracking
- Navigation controls
- Schedule visualization

### MCQ Mode

**Best for:** Quick testing and reinforcement

1. Click **"MCQ Mode"** in the header
2. Click **"Start MCQ Quiz"**
3. Read the question and select an answer (A, B, C, or D)
4. Correct answers highlight green ✅
5. Incorrect answers highlight red ❌
6. Auto-advances to next question after 1.5 seconds
7. Rate your confidence after seeing the result

**Features:**
- Randomized answer order
- Instant feedback
- Auto-advance
- Score tracking
- Same FSRS scheduling as flashcards

## 📚 Content Database

### 🌱 Beginner Level (80+ cards)

**Perfect if you're new to football:**

- **Basic Rules**: Scoring system, downs, field goals, touchdowns
- **Positions**: QB, RB, WR, TE, O-Line, D-Line, LB, DB
- **Formations**: Shotgun, Pistol, I-Formation, Spread
- **Route Tree**: Routes 0-9 (Flat, Slant, Post, Corner, etc.)
- **Field Zones**: Red zone, neutral zone, hash marks
- **Game Flow**: Clock management, quarters, halftime
- **Simple Penalties**: Offsides, false start, holding

### ⚡ Intermediate Level (250+ cards)

**For fantasy players who know the basics:**

- **2024 Season Stats**: Rushing, passing, receiving leaders
- **2025 Projections**: Expert fantasy forecasts
- **Top Players**: Josh Allen, Saquon Barkley, Ja'Marr Chase, etc.
- **Fantasy Strategy**: Draft strategies, waiver wire tactics
- **Team Context**: Offensive schemes, coaching changes
- **Bye Week Planning**: Key dates and roster management
- **Trade Strategy**: When to buy low, sell high
- **Playoff Strategy**: Championship week preparation
- **WPFL Roster**: Personal league analysis

### 🔥 Advanced Level (50+ cards)

**For experienced fantasy experts:**

- **Advanced Analytics**: Target share, snap %, opportunity share
- **Route Tree Mastery**: Even/odd routes, stem techniques
- **Draft Theory**: Zero RB, Hero RB, auction values
- **Trade Psychology**: Leveraging biases, negotiation tactics
- **Dynasty/Keeper**: Long-term value, rookie draft strategy
- **Regression Analysis**: Identifying unsustainable performances
- **Meta-Game**: Exploiting league trends and scoring systems
- **Championship Strategy**: Risk management in playoffs

### Featured Content Highlights

- **Josh Allen**: 2024 MVP with historic stat line
- **Jayden Daniels**: OROY with 3,500 pass + 800 rush yards
- **Saquon Barkley**: 2,005-yard season + OPOY
- **Ja'Marr Chase**: Receiving Triple Crown winner
- **Super Bowl LIX**: Eagles 40, Chiefs 22 (Jalen Hurts MVP)
- **2024 Awards**: MVP, OROY, OPOY, DROY, DPOY

## 📖 Usage Guide

### First Time Setup

1. **Launch the app**: Open http://localhost:3000 after running `npm run dev`
2. **Auto-load cards**: 380+ flashcards automatically load into IndexedDB
3. **Check the console**: Verify card counts in browser DevTools (F12)
4. **Start studying**: Click any difficulty level to begin

### Daily Study Routine

1. **Check due cards**: The app shows how many cards are due for review
2. **Study by difficulty**: Focus on Beginner → Intermediate → Advanced progression
3. **Be honest with ratings**: Accurate ratings = optimal learning
4. **Review insights**: Check FSRS Schedule Insights to plan future sessions
5. **Consistency matters**: Daily reviews (even 10 minutes) beat long cram sessions

### Understanding the Prerequisite System

The app includes an intelligent prerequisite system that ensures you learn foundational concepts before advanced applications:

**How It Works:**
- **Definition Cards**: 145+ cards teach core concepts (e.g., "What is target share?")
- **Dependent Cards**: Advanced cards require mastering prerequisites first
- **Automatic Unlocking**: As you master concepts, dependent cards automatically become available
- **Visual Feedback**: The app shows a 🔒 locked card count when prerequisites aren't met

**Example Learning Path:**
```
1. Study "What is target share?" → Master it (stability > 7 days)
2. Cards like "What's CeeDee Lamb's target share?" automatically unlock
3. Study "What is dual-threat QB?" → Master it
4. QB evaluation cards like "Why is Jalen Hurts elite?" unlock
```

**Benefits:**
- 🎓 Natural learning progression from basics to expert level
- 🧩 Concepts build on each other logically
- 🚫 Prevents confusion from advanced terminology before learning basics
- ✅ More effective retention through proper sequencing

### Managing Your Cards

**Add Custom Cards:**
1. Click **"Add Card"** button
2. Enter question and answer
3. Add tags (optional)
4. Select difficulty level
5. Click **"Add Card"** to save

**Reset All Data:**
```javascript
// In browser console (F12):
indexedDB.deleteDatabase('nfl-study');
location.reload(); // Will regenerate all 380+ cards
```

**Export/Import:** Not yet implemented (coming soon!)

### Study Tips

- **Rate honestly**: The algorithm works best with accurate self-assessment
- **Study due cards first**: Don't skip reviews - this breaks the algorithm
- **Start with basics**: Master Beginner cards before tackling Advanced
- **Use both modes**: Flashcards for learning, MCQ for testing
- **Short sessions**: 15-20 minutes daily beats 2-hour weekly sessions
- **Review insights regularly**: Use the schedule visualization to plan ahead

## 💻 Development

### Project Structure

```
nfl-study/
├── src/
│   ├── components/          # React components
│   │   ├── Flashcard.jsx   # Flashcard display
│   │   ├── MCQCard.jsx     # MCQ interface
│   │   ├── Stats.jsx       # Statistics display
│   │   ├── Header.jsx      # App header
│   │   ├── AddCardModal.jsx # Card creation
│   │   └── ScheduleInsights.jsx # FSRS visualization
│   ├── hooks/              # Custom React hooks
│   │   ├── useCards.js     # Flashcard state management
│   │   └── useMCQ.js       # MCQ state management
│   ├── utils/              # Utility functions
│   │   ├── fsrs.js         # FSRS algorithm wrapper
│   │   └── storage.js      # IndexedDB wrapper
│   ├── data/               # Flashcard content
│   │   ├── beginner/       # Beginner cards
│   │   ├── intermediate/   # Intermediate cards
│   │   ├── advanced/       # Advanced cards
│   │   ├── mcq/            # MCQ questions
│   │   ├── players2025.js  # Player stats/projections
│   │   ├── teams2025.js    # Team/Super Bowl content
│   │   ├── fantasyStrategy.js # Strategy cards
│   │   ├── myRoster.js     # Roster analysis
│   │   └── generateByDifficulty.js # Card generator
│   ├── App.jsx             # Flashcard mode entry
│   ├── MCQApp.jsx          # MCQ mode entry
│   ├── main.jsx            # Flashcard mode bootstrap
│   ├── mcq-main.jsx        # MCQ mode bootstrap
│   └── index.css           # Global styles
├── tests/                  # E2E tests
│   ├── e2e-comprehensive.spec.js # Full test suite
│   └── e2e-verify.spec.js  # Quick verification tests
├── docs/                   # Documentation
│   ├── TEST-CHECKLIST.md   # Manual testing guide
│   └── CLEAR-DATA.md       # Data reset instructions
├── public/                 # Static assets
├── index.html             # Flashcard mode HTML
├── mcq.html               # MCQ mode HTML
├── package.json           # Dependencies
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── CLAUDE.md              # AI coding assistant guide
└── README.md              # This file
```

### Tech Stack Deep Dive

**Frontend:**
- **React 19**: Latest React with automatic batching and concurrent features
- **Vite 7.1**: Lightning-fast HMR and optimized production builds
- **Tailwind CSS 4**: Utility-first CSS with JIT compilation

**Storage:**
- **localforage 1.10**: IndexedDB wrapper with localStorage fallback
- **IndexedDB**: Browser-native database for persistent storage

**Algorithm:**
- **ts-fsrs 5.2**: Official TypeScript FSRS implementation
- **date-fns 4.1**: Date manipulation utilities

**Testing:**
- **Playwright 1.55**: End-to-end browser testing

### Development Workflow

**Start dev server:**
```bash
npm run dev
# Opens at http://localhost:3000 with hot reload
```

**Make changes:**
1. Edit files in `src/`
2. Changes auto-reload in browser
3. Check console for errors

**Add new flashcards:**
1. Edit appropriate data file in `src/data/`
2. Follow existing card format
3. Clear IndexedDB and refresh to regenerate

**Debug FSRS scheduling:**
- Check browser console for detailed FSRS logs
- Logs show card creation, scheduling, and state transitions

### Code Style

- **React**: Functional components with hooks (no classes)
- **State**: Local component state + custom hooks (no Redux/Zustand)
- **Styling**: Tailwind utility classes (no custom CSS unless necessary)
- **TypeScript**: Not used (plain JavaScript/JSX)

### Adding New Features

**Example: Add a new card data file**

```javascript
// src/data/myNewCards.js
export const myNewCards = [
  {
    question: "What is the X concept?",
    answer: "The X concept is...",
    tags: ["strategy", "advanced"],
    difficulty: "advanced"
  },
  // ... more cards
];
```

**Then import in `generateByDifficulty.js`:**

```javascript
import { myNewCards } from './myNewCards';

// Add to appropriate difficulty array
const advancedCards = [
  ...existingCards,
  ...myNewCards
];
```

## 🧪 Testing

### End-to-End Tests (Playwright)

**Setup:**
```bash
# Install Playwright browsers (first time only)
npx playwright install
```

**Run tests:**
```bash
# Terminal 1: Start dev server on port 8080
npm run dev -- --port 8080

# Terminal 2: Run comprehensive test suite
npx playwright test tests/e2e-comprehensive.spec.js

# Run quick verification tests
npx playwright test tests/e2e-verify.spec.js

# Run all tests
npx playwright test

# View test results
npx playwright show-report
```

**Test coverage (11 tests):**
- ✅ Difficulty selector functionality
- ✅ Card count validation
- ✅ Flashcard rating flow
- ✅ Answer state management
- ✅ FSRS Schedule Insights
- ✅ MCQ mode switching
- ✅ MCQ answer selection
- ✅ Review All Cards mode
- ✅ Stop/Exit functionality
- ✅ Mode navigation
- ✅ UI rendering

### Manual Testing

See `docs/TEST-CHECKLIST.md` for comprehensive manual testing scenarios.

**Quick smoke test:**
1. Open http://localhost:3000
2. Verify card count (should show 323 total)
3. Click "All Levels" → "Start Studying"
4. Verify flashcard appears with question
5. Click "Show Answer"
6. Rate card (Again/Hard/Good/Easy)
7. Verify next card loads
8. Click "Stop" to exit
9. Click "MCQ Mode" in header
10. Verify MCQ interface loads

### Debugging Tips

**Cards not loading:**
```javascript
// Clear IndexedDB and regenerate
indexedDB.deleteDatabase('nfl-study');
location.reload();
```

**FSRS scheduling issues:**
- Check console for detailed FSRS logs
- Verify `due` dates in IndexedDB (F12 → Application → IndexedDB → nfl-study → flashcards)

**UI issues:**
- Check Tailwind CSS classes
- Verify component props
- Check React DevTools for state

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

Creates optimized production build in `dist/`:
- `dist/index.html` - Flashcard mode entry
- `dist/mcq.html` - MCQ mode entry
- `dist/assets/` - Bundled CSS (~26KB) and JS (~247KB)

### Deploy to Static Hosts

The app is fully client-side with no backend required.

**Netlify:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

**Vercel:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

**GitHub Pages:**
```bash
# Build
npm run build

# Deploy (requires gh-pages package)
npm install -g gh-pages
gh-pages -d dist
```

**Cloudflare Pages / Firebase Hosting / AWS S3:**

Simply upload the `dist/` folder to your hosting service.

### Environment Configuration

No environment variables needed - the app is fully self-contained.

## 🏗️ Architecture

### Data Flow

```
User Action → Component → Hook → FSRS Util → Storage → IndexedDB
     ↓          ↓         ↓         ↓           ↓          ↓
  Rating    App.jsx   useCards   fsrs.js   storage.js   Browser
```

**Example: Rating a card**

1. User clicks "Good" (rating 3)
2. `App.jsx` calls `handleRate(3)`
3. `handleRate` calls `updateCard(cardId, 3)` from `useCards` hook
4. `updateCard` calls `scheduleCard(card, 3)` from `fsrs.js`
5. `scheduleCard` uses ts-fsrs to calculate next review date
6. Updated card saved to IndexedDB via `storage.saveCard()`
7. Card won't appear in study queue until due date

### State Management

- **Component state**: UI-specific state (modals, current card index)
- **Custom hooks**: Shared state and logic (useCards, useMCQ)
- **IndexedDB**: Persistent data (cards, progress, FSRS metadata)

No global state library (Redux/Zustand) needed - hooks are sufficient.

### FSRS Integration

The app wraps ts-fsrs with app-specific logic:

- `createCard()`: Converts flashcard data → FSRS card format
- `scheduleCard()`: Calculates next review date based on rating
- `isDue()`: Checks if card is due for review
- `getStateString()`: Human-readable card states

FSRS metadata stored per card:
- `due`: Next review date
- `stability`: Memory strength
- `difficulty`: FSRS difficulty (0-10 scale)
- `state`: New/Learning/Review/Relearning
- `reps`: Total review count
- `lapses`: Times forgotten

## 🔧 Troubleshooting

### Common Issues

**Cards not loading (0 total)**
```javascript
// Clear IndexedDB and refresh
indexedDB.deleteDatabase('nfl-study');
location.reload();
```

**Difficulty badges not showing**
- Check browser console for errors
- Verify cards have `difficulty` property
- Clear IndexedDB and regenerate

**Answer showing on next card**
- Fixed in current version
- If still occurring, clear browser cache

**FSRS Schedule Insights not visible**
- Ensure you have reviewed at least one card
- Check that cards have valid `due` dates

**MCQ options not shuffling**
- Verify `useMCQ.js` has shuffle logic
- Check console for errors

**Dev server won't start**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**Build fails**
```bash
# Check Node.js version (requires 16+)
node --version

# Update dependencies
npm update

# Try clean build
rm -rf dist
npm run build
```

### Performance Issues

**Slow initial load:**
- First load generates 380+ cards (takes ~2-3 seconds)
- Subsequent loads are instant (cards cached in IndexedDB)

**Laggy animations:**
- Check browser console for errors
- Disable browser extensions
- Try Chrome/Edge (best performance)

### Data Issues

**Lost progress:**
- IndexedDB data is browser-specific
- Check you're using the same browser/profile
- Data persists across tab closes but not browser profile switches

**Export your data:**
```javascript
// In console (F12):
const cards = await localforage.getItem('flashcards');
console.log(JSON.stringify(cards));
// Copy output and save to file
```

## 🤝 Contributing

Contributions welcome! Here's how to help:

### Reporting Bugs

Open an issue with:
- Browser and OS version
- Steps to reproduce
- Expected vs actual behavior
- Console errors (F12)

### Adding Content

**Most valuable contributions:**
- New flashcard content (especially Advanced level)
- MCQ questions
- Real formation/route tree diagrams
- 2025 season updates

### Feature Requests

Open an issue describing:
- What feature you'd like
- Why it's useful
- How it might work

### Pull Requests

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

**Before submitting:**
- Run build: `npm run build`
- Test manually in browser
- Run E2E tests: `npx playwright test`
- Follow existing code style

## 📄 License

ISC License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs)**: The excellent FSRS algorithm implementation
- **[Anki](https://apps.ankiweb.net/)**: Inspiration for spaced repetition UI/UX
- **NFL Data**: Stats from ESPN, NFL.com, and FantasyPros
- **React Team**: For the amazing framework
- **Tailwind CSS**: For the beautiful utility-first styling

## 🔮 Future Enhancements

- [ ] **Live NFL API integration**: Real-time stats and updates
- [ ] **Import/export decks**: Share flashcard collections
- [ ] **Tag filtering**: Study specific topics (e.g., only QBs)
- [ ] **Detailed statistics**: Study time, retention rates, progress charts
- [ ] **Dark mode**: Eye-friendly theme for night study
- [ ] **Mobile app**: Native iOS/Android apps
- [ ] **Multiplayer**: Compete with friends on knowledge
- [ ] **AI-generated cards**: Auto-create cards from NFL articles
- [ ] **Voice mode**: Study hands-free
- [ ] **Spaced audio**: Listen to flashcards

---

**Happy studying! 🏈📚**

Built with ❤️ for fantasy football enthusiasts and NFL learners.

[Report a bug](https://github.com/NathanNorman/nfl-study/issues) • [Request a feature](https://github.com/NathanNorman/nfl-study/issues) • [View on GitHub](https://github.com/NathanNorman/nfl-study)
