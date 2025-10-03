# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Browser-based spaced repetition flashcard system for mastering NFL fantasy football knowledge. Uses the FSRS (Free Spaced Repetition Scheduler) algorithm via the official ts-fsrs library.

**Tech Stack:**
- React 19 + Vite (dev server and build)
- Tailwind CSS 4 (utility-first styling)
- ts-fsrs (scientifically-proven spaced repetition algorithm)
- localforage (IndexedDB wrapper for persistent storage)
- Playwright (E2E testing)

## Development Commands

### Start Development Server
```bash
npm run dev
```
Opens at http://localhost:3000 with hot reload.

### Production Build
```bash
npm run build      # Creates optimized production build in dist/
npm run preview    # Preview production build locally
```

### E2E Tests
Playwright tests are available in the `tests/` directory but require manual server setup:

```bash
# Terminal 1: Start dev server on port 8080
npm run dev -- --port 8080

# Terminal 2: Run Playwright tests
npx playwright test tests/e2e-comprehensive.spec.js    # Full feature test suite (11 tests)
npx playwright test tests/e2e-verify.spec.js           # Quick verification tests

# Or run all tests
npx playwright test

# Show test results UI
npx playwright show-report
```

**Note:** There are no npm test scripts configured. Tests must be run manually with npx playwright.

## Architecture

### Data Flow: FSRS-Powered Spaced Repetition

The app uses the official FSRS algorithm to schedule card reviews:

1. **Card Generation** (`src/data/generateByDifficulty.js`):
   - Loads 380+ flashcards organized by difficulty (beginner/intermediate/advanced)
   - Cards sourced from multiple data files (players, teams, fantasy strategy, etc.)
   - Each card has: question, answer, tags, difficulty level

2. **FSRS Integration** (`src/utils/fsrs.js`):
   - Wraps ts-fsrs library with app-specific logic
   - `createCard()`: Converts flashcard data to FSRS card format
   - `scheduleCard(card, rating)`: Reschedules based on user rating (1-4)
   - `isDue(card)`: Checks if card is due for review
   - Rating scale: 1=Again, 2=Hard, 3=Good, 4=Easy

3. **Storage Layer** (`src/utils/storage.js`):
   - Uses localforage (IndexedDB wrapper) for persistent storage
   - Stores full FSRS card state (due dates, stability, difficulty)
   - Key operations: getCards(), saveCard(), updateCard()

4. **State Management** (`src/hooks/useCards.js`):
   - Loads cards from storage on mount
   - If empty, auto-generates 380+ cards from data files
   - Maintains FSRS metadata across sessions
   - Filters by due date and difficulty level
   - **Prerequisite filtering**: Locks cards until required concepts are mastered

5. **Prerequisite System** (`src/utils/prerequisites.js`):
   - Enforces learning progression by locking advanced cards
   - Definition cards have `defines: "concept-id"` field
   - Dependent cards have `prerequisites: ["concept-id"]` array
   - Cards unlock when prerequisites reach mastery (stability > 7)
   - 145+ concept definitions with intelligent dependency chains

### Two Study Modes

**Flashcard Mode** (`src/App.jsx`):
- Traditional front/back flashcard interface
- Difficulty selector: All Levels, Beginner (🌱), Intermediate (⚡), Advanced (🔥)
- Review cycle: Show question → Flip to answer → Rate (Again/Hard/Good/Easy)
- FSRS Schedule Insights dashboard showing due dates and card states

**MCQ Mode** (`src/MCQApp.jsx`):
- Multiple choice quiz format (4 options A/B/C/D)
- Auto-advance after answering
- Separate question bank loaded from `src/data/mcq/` directory
- Uses same FSRS scheduling via `src/hooks/useMCQ.js`

### Component Structure

**Core Components:**
- `Header.jsx`: App title and mode switching
- `Stats.jsx`: Card count statistics
- `Flashcard.jsx`: Flashcard display with flip animation
- `MCQCard.jsx`: Multiple choice question interface
- `ScheduleInsights.jsx`: FSRS schedule visualization (due dates, card states)
- `AddCardModal.jsx`: Modal for adding custom flashcards

**Data Organization:**
```
src/data/
├── beginner/          # 80+ beginner-level cards
├── intermediate/      # 250+ intermediate cards
├── advanced/          # 50+ advanced cards
├── mcq/               # MCQ question bank
├── players2025.js     # 2024 stats + 2025 projections
├── teams2025.js       # Team/Super Bowl content
├── fantasyStrategy.js # Draft/waiver/trade strategy
├── myRoster.js        # Personal WPFL roster analysis
└── generateByDifficulty.js  # Main card generator
```

### State Management Pattern

Uses React hooks for state management:
- `useCards()`: Main flashcard state and FSRS operations
- `useMCQ()`: MCQ-specific state and logic
- Local component state via `useState()` for UI interactions
- No global state library (Redux/Zustand) - hooks are sufficient

### Storage Schema

IndexedDB stores cards with this structure:
```javascript
{
  id: number,               // Unique identifier
  question: string,         // Card front
  answer: string,          // Card back
  tags: string[],          // Categorization
  difficulty: string,      // 'beginner' | 'intermediate' | 'advanced'
  defines: string | null,  // Concept ID this card teaches (e.g., "target-share")
  prerequisites: string[], // Required concept IDs (e.g., ["ppr", "rb"])
  // FSRS metadata:
  due: Date,               // Next review date
  stability: number,       // Memory stability
  difficulty: number,      // FSRS difficulty (not same as beginner/intermediate/advanced)
  elapsedDays: number,     // Days since last review
  scheduledDays: number,   // Days until next review
  reps: number,            // Total reviews
  lapses: number,          // Times forgotten
  state: number,           // 0=New, 1=Learning, 2=Review, 3=Relearning
  lastReview: Date,        // Last review timestamp
  createdAt: string        // Card creation date
}
```

## Prerequisite System

### How It Works

The app enforces intelligent learning progression using a prerequisite system:

**Definition Cards** teach concepts and have a `defines` field:
```javascript
{
  question: "What is target share?",
  answer: "Percentage of team's targets going to a receiver",
  defines: "target-share",
  tags: ["Terminology", "Analytics"],
  difficulty: "intermediate"
}
```

**Dependent Cards** use those concepts and have a `prerequisites` field:
```javascript
{
  q: "What's CeeDee Lamb's target share?",
  a: "Massive - elite volume in Cowboys offense",
  prerequisites: ["target-share", "wr"],
  tags: ["WR", "2025", "Volume"]
}
```

**Filtering Logic:**
1. When cards load, `filterByPrerequisites(cards, allCards)` is called
2. For each card with prerequisites, system checks if ALL prerequisite concepts are mastered
3. Mastery = Card has `state: 2` (Review) AND `stability > 7` (FSRS retention metric)
4. Cards with unmastered prerequisites are filtered out
5. Console logs: "🔒 Locked X cards (prerequisites not mastered)"

**Current State:**
- 145+ concept definitions across terminology and basics
- 40+ prerequisite relationships actively enforcing progression
- ~20 cards currently locked awaiting prerequisite mastery

## Testing Strategy

### E2E Test Coverage (Playwright)

**e2e-comprehensive.spec.js** - 11 tests covering:
1. Difficulty selector (All/Beginner/Intermediate/Advanced)
2. Card count validation (323 total cards)
3. Flashcard rating flow (Again/Hard/Good/Easy)
4. Answer reset between cards
5. FSRS Schedule Insights visibility
6. MCQ mode switching
7. MCQ answer selection and auto-advance
8. Review All Cards mode (see completed cards)
9. Stop/Exit button functionality

**e2e-verify.spec.js** - Quick smoke tests

**Test Requirements:**
- Dev server must run on port 8080 (not 3000)
- Tests clear IndexedDB before each run
- Some tests use `waitForTimeout()` for card generation/loading

### Manual Browser Testing

See `docs/TEST-CHECKLIST.md` for comprehensive manual test scenarios:
- IndexedDB clearing and card regeneration
- Difficulty badge rendering (🌱⚡🔥)
- Mode switching between flashcard/MCQ
- Answer state management
- Score tracking

## Key Implementation Details

### Difficulty-Based Study

The app supports filtering cards by difficulty:
- **Beginner (🌱)**: 80+ cards covering football basics, rules, formations, route tree
- **Intermediate (⚡)**: 250+ cards with player stats, fantasy strategy, roster analysis
- **Advanced (🔥)**: 50+ cards on analytics (target share, snap %), advanced strategy

Users can study "All Levels" (due cards only) or filter to specific difficulty.

### FSRS Scheduling Logic

When a user rates a card:
1. `handleRate(rating)` in App.jsx calls `updateCard(cardId, rating)`
2. `updateCard()` in useCards.js calls `scheduleCard(card, rating)` from fsrs.js
3. `scheduleCard()` uses ts-fsrs library to calculate next review date
4. Updated card (with new due date) is saved to IndexedDB
5. Card won't appear in study queue until due date arrives

### Auto-Loading Cards

On first run, `useCards.js` detects empty IndexedDB and:
1. Calls `generateFlashcardsByDifficulty()` to load all data files
2. Converts raw flashcards to FSRS card format via `createCard()`
3. Saves all 380+ cards to IndexedDB with initial FSRS state
4. Subsequent loads pull directly from IndexedDB (no regeneration)

### Mode Switching

Two entry points:
- `index.html` → `main.jsx` → `App.jsx` (Flashcard mode)
- `mcq.html` → `mcq-main.jsx` → `MCQApp.jsx` (MCQ mode)

Mode switching uses navigation:
- Flashcard → MCQ: Navigate to `/mcq.html`
- MCQ → Flashcard: Navigate to `/`

## Data Files

### Content Categories

1. **Players** (`players2025.js`): 2024 stats + 2025 fantasy projections
2. **Teams** (`teams2025.js`): Super Bowl LIX, 2024 awards, team context
3. **Fantasy Strategy** (`fantasyStrategy.js`): Draft, waiver wire, playoffs, trades
4. **Roster Analysis** (`myRoster.js`): Personal WPFL roster evaluation
5. **Football Basics** (`beginner/` directory): Rules, formations, route tree
6. **Advanced Concepts** (`advanced/` directory): Analytics, dynasty strategy

### Adding New Content

To add flashcards, edit the appropriate data file:

```javascript
// In players2025.js, fantasyStrategy.js, etc.
export const newCards = [
  {
    question: "Your question here",
    answer: "Your answer here",
    tags: ["category", "subcategory"],
    difficulty: "intermediate"  // beginner | intermediate | advanced
  }
];
```

Then import in `generateByDifficulty.js` and add to the appropriate array.

**Important:** Cards are only loaded on first run when IndexedDB is empty. To test new cards:
1. Open browser DevTools → Application → IndexedDB → nfl-study → Delete database
2. Refresh page to trigger regeneration

## Common Development Tasks

### Clear All Cards and Regenerate
```javascript
// In browser console (F12):
indexedDB.deleteDatabase('nfl-study');
location.reload();
```

### Debug FSRS Scheduling
Extensive console logging is present in `src/utils/fsrs.js`:
- Card creation: Shows ID assignment and initial state
- Scheduling: Shows before/after due dates and state transitions
- Check browser console for detailed FSRS operation logs

### Verify Card Counts
On page load, console shows:
```
Generated X flashcards
Difficulty breakdown: { beginner: X, intermediate: Y, advanced: Z }
```

### Testing New Features
1. Make code changes
2. Clear IndexedDB to ensure fresh state
3. Reload page and verify behavior
4. Run E2E tests: `npx playwright test e2e-comprehensive.spec.js`

## Production Deployment

Build outputs to `dist/`:
- `dist/index.html` - Flashcard mode entry point
- `dist/mcq.html` - MCQ mode entry point
- `dist/assets/` - Bundled CSS (~26KB) and JS (~247KB)

The app is fully client-side - no backend required. Deploy `dist/` to any static host (Netlify, Vercel, GitHub Pages, etc.).

## Known Limitations

- Images are placeholders (need real diagrams for formations, route tree)
- No deck import/export functionality
- No detailed study statistics/progress tracking
- No live NFL API integration
- No dark mode
- No mobile app (browser-only)
