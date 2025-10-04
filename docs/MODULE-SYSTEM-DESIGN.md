# Module System - Complete Design Document

**Status:** Planning Phase
**Created:** 2025-10-03
**WORKING_DIRECTORY:** .claude-work/impl-module-system-20251003-150251

---

## Executive Summary

Transform the current card-based system into a **module-based learning path** where content is organized into logical units with clear progression. Users can complete modules sequentially or skip ahead, with dependent modules unlocking as prerequisites are met.

---

## Current State Analysis

### What We Have Now:
- ✅ 413 flashcards with card-level prerequisites
- ✅ 418 MCQs with card-level prerequisites
- ✅ 3 difficulty levels (beginner/intermediate/advanced)
- ✅ 153 concept definitions
- ✅ 55+ prerequisite relationships at card level
- ✅ FSRS scheduling per card

### What's Missing:
- ❌ No higher-level organization
- ❌ No clear learning path for users
- ❌ No way to track module completion
- ❌ No structured progression through content
- ❌ No ability to skip ahead or choose focus areas

---

## Proposed Module Structure

### Option A: 8-Module Streamlined Path (RECOMMENDED)

Clear progression from basics to mastery with minimal complexity:

```
Level 1: Foundation (No Prerequisites)
├─ Module 1: "Football 101"
│  ├─ Content: Rules, scoring, positions, field, penalties
│  ├─ Cards: ~80 cards (beginner)
│  ├─ Time: ~45 min
│  └─ Icon: 🏈

Level 2: Fantasy Fundamentals
├─ Module 2: "Fantasy Football Basics"
│  ├─ Prerequisites: [Module 1]
│  ├─ Content: PPR scoring, waiver wire, starting lineup, bench
│  ├─ Cards: ~60 cards (beginner)
│  ├─ Time: ~30 min
│  └─ Icon: 📊

Level 3: NFL Concepts
├─ Module 3: "Offensive Playbook"
│  ├─ Prerequisites: [Module 2]
│  ├─ Content: Formations, snap, play action, RPO, routes
│  ├─ Cards: ~50 cards (intermediate)
│  ├─ Time: ~30 min
│  └─ Icon: ⚡
│
├─ Module 4: "Defensive Schemes"
│  ├─ Prerequisites: [Module 2]
│  ├─ Content: Man/zone coverage, blitz, nickel, dime, Cover 2/3
│  ├─ Cards: ~40 cards (intermediate)
│  ├─ Time: ~25 min
│  └─ Icon: 🛡️

Level 4: Player Evaluation
├─ Module 5: "Player Analysis 2024-2025"
│  ├─ Prerequisites: [Module 3 OR Module 4]
│  ├─ Content: QB/RB/WR/TE rankings, stats, projections
│  ├─ Cards: ~90 cards (intermediate)
│  ├─ Time: ~50 min
│  └─ Icon: 🌟

Level 5: Advanced Concepts
├─ Module 6: "Analytics & Metrics"
│  ├─ Prerequisites: [Module 5]
│  ├─ Content: Target share, snap count, opportunity share, YAC, xFP
│  ├─ Cards: ~50 cards (advanced)
│  ├─ Time: ~30 min
│  └─ Icon: 📈
│
├─ Module 7: "Draft & Waiver Strategy"
│  ├─ Prerequisites: [Module 5]
│  ├─ Content: ADP, Zero RB, FAAB, handcuffs, streaming
│  ├─ Cards: ~70 cards (advanced)
│  ├─ Time: ~40 min
│  └─ Icon: 🎯

Level 6: Mastery
└─ Module 8: "Championship Strategy"
   ├─ Prerequisites: [Module 6 AND Module 7]
   ├─ Content: Trade timing, playoff schedule, game script, regression
   ├─ Cards: ~60 cards (advanced)
   ├─ Time: ~35 min
   └─ Icon: 🏆
```

**Total: 500 cards across 8 modules** (allows for some overlap/expansion)

### Option B: 12-Module Granular Path

More granular with position-specific modules:

```
Foundation (3 modules):
1. NFL Basics - Rules, scoring, field
2. Positions & Roles - QB/RB/WR/TE fundamentals
3. Fantasy Fundamentals - PPR, waivers, lineup

Core Concepts (3 modules):
4. Offensive Terminology - Snap, play action, formations, routes
5. Defensive Terminology - Coverage, blitz, nickel, dime
6. Special Teams & Game Management - Punts, kicks, clock

Player Evaluation (4 modules):
7. Quarterbacks 2025 - Rankings, dual-threat, pocket passers
8. Running Backs 2025 - Bellcow, RBBC, handcuffs, game script
9. Wide Receivers 2025 - Target share, alpha WR, rankings
10. Tight Ends 2025 - Elite tier, streaming options

Advanced Strategy (2 modules):
11. Analytics & Advanced Stats - Metrics, regression, opportunity
12. Championship Strategy - Playoffs, trades, draft mastery
```

---

## Module Data Structure

### Module Definition:
```javascript
{
  id: "module-football-101",
  name: "Football 101",
  description: "Master the fundamentals of NFL rules, scoring, and basic positions",
  difficulty: "beginner",
  order: 1,
  icon: "🏈",
  color: "blue", // For UI theming

  // Prerequisites
  prerequisites: [], // Array of module IDs that must be completed/skipped

  // Content references
  flashcardIds: [
    "How many points is a touchdown worth?",
    "How many points is a field goal worth?",
    // ... (exact question text as ID)
  ],
  mcqIds: [
    "How many points is a touchdown worth?",
    "How many points is a field goal worth?",
    // ... (exact question text as ID)
  ],

  // Metadata
  estimatedMinutes: 45,
  totalCards: 80,

  // Learning objectives (optional - for UI)
  objectives: [
    "Understand NFL scoring system",
    "Identify all 11 positions",
    "Know basic rules and penalties"
  ]
}
```

### Module Progress Tracking:
```javascript
{
  moduleId: "module-football-101",
  state: "completed", // notStarted | inProgress | completed | skipped

  // Progress metrics
  flashcardsStudied: 65,
  flashcardsMastered: 45,
  totalFlashcards: 80,

  mcqsStudied: 70,
  mcqsCorrect: 55,
  totalMCQs: 80,

  // Timestamps
  startedAt: "2025-10-03T10:00:00Z",
  completedAt: "2025-10-03T15:30:00Z",
  lastStudiedAt: "2025-10-03T15:30:00Z",

  // Completion criteria
  completionPercent: 81.25, // (flashcardsMastered / totalFlashcards) * 100
  isCompleted: true, // 80%+ mastered
  isSkipped: false
}
```

---

## Technical Implementation

### 1. New Files Needed:

**Data Layer:**
- `src/data/modules/moduleDefinitions.js` - All module definitions
- `src/data/modules/moduleCardMappings.js` - Cards → Module assignments
- `src/utils/moduleProgress.js` - Progress tracking logic
- `src/utils/moduleUnlock.js` - Unlock logic based on prerequisites

**Storage:**
- `src/utils/moduleStorage.js` - IndexedDB operations for module progress

**React Components:**
- `src/components/ModuleCard.jsx` - Individual module display
- `src/components/ModuleGrid.jsx` - Grid of all modules
- `src/components/ModuleProgress.jsx` - Progress bar/stats for module
- `src/components/ModuleLockIndicator.jsx` - Shows locked state + prereqs needed
- `src/pages/ModuleSelectionPage.jsx` - Main module selection screen

**Hooks:**
- `src/hooks/useModules.js` - Module state management
- `src/hooks/useModuleProgress.js` - Track progress per module

**Navigation:**
- Update App.jsx to support module-based navigation
- Module selection → Module study → Module completion → Next module

### 2. Module Selection Flow:

```
User loads app
  ↓
Module Selection Screen
  ↓
Shows all modules with:
  - Locked modules (🔒 prerequisites not met)
  - Available modules (✅ ready to start)
  - In-progress modules (🔄 partially complete)
  - Completed modules (✓ 80%+ mastered)
  - Skipped modules (⏭️ user chose to skip)
  ↓
User clicks module
  ↓
If locked: Show prerequisites needed
If available: Enter study mode for that module
  ↓
Study mode filters cards to ONLY show cards from that module
  ↓
After studying, return to module selection
  ↓
Module auto-marks as complete when 80%+ mastered
```

### 3. Module Completion Criteria:

**Option A: Strict (80% Mastery)**
- 80%+ of flashcards have stability > 21 (mastered)
- OR user manually marks as complete
- OR user skips the module

**Option B: Flexible (50% Progress)**
- 50%+ of cards have been rated at least once
- OR 80%+ mastered
- OR manually completed/skipped

**Option C: Hybrid (Study + Test)**
- Study 50%+ of flashcards
- AND pass 70%+ of MCQs in module quiz
- OR manually completed/skipped

### 4. Module Unlock Logic:

```javascript
function isModuleUnlocked(module, allModulesProgress) {
  // No prerequisites = always unlocked
  if (!module.prerequisites || module.prerequisites.length === 0) {
    return true;
  }

  // Check if all prerequisite modules are completed OR skipped
  return module.prerequisites.every(prereqId => {
    const prereqProgress = allModulesProgress[prereqId];
    return prereqProgress?.state === 'completed' ||
           prereqProgress?.state === 'skipped';
  });
}
```

### 5. Proposed 8-Module Structure Details:

#### Module 1: Football 101 🏈
- **Prerequisites:** None
- **Difficulty:** Beginner
- **Content:**
  - Scoring system (TD, FG, PAT, safety)
  - Basic positions (QB, RB, WR, TE, O-line, D-line, LB, CB, Safety)
  - Field geography (red zone, midfield, end zone)
  - Basic rules (downs, turnovers, penalties)
  - Game flow (kickoff, coin toss, halftime)
- **Cards:** ~80 (from footballBasics.js)
- **Learning Objective:** "Understand how NFL games work"

#### Module 2: Fantasy Football Basics 📊
- **Prerequisites:** [Module 1]
- **Difficulty:** Beginner
- **Content:**
  - Scoring systems (PPR, standard, half-PPR)
  - Roster (starting lineup, bench, flex)
  - Waiver wire basics
  - Draft basics
  - Weekly management
- **Cards:** ~60 (from fantasyStrategy.js beginner cards)
- **Learning Objective:** "Set up and manage a fantasy team"

#### Module 3: Offensive Playbook ⚡
- **Prerequisites:** [Module 2]
- **Difficulty:** Intermediate
- **Content:**
  - Formations (shotgun, pistol, I-formation, empty backfield)
  - Plays (snap, play action, screen pass, draw play, RPO)
  - Route tree (go, slant, post, out, hitch)
  - Pre-snap concepts (motion, audible, hard count)
- **Cards:** ~50 (from nflTerminology.js offensive + routeBasics)
- **Learning Objective:** "Understand offensive strategy and play-calling"

#### Module 4: Defensive Schemes 🛡️
- **Prerequisites:** [Module 2]
- **Difficulty:** Intermediate
- **Content:**
  - Coverage concepts (man, zone, Cover 2/3, Tampa 2)
  - Defensive packages (nickel, dime, prevent)
  - Blitz concepts (QB spy, contain, gap discipline)
  - Coverage shells (Cover 0, Cover 1)
- **Cards:** ~40 (from nflTerminology.js defensive)
- **Learning Objective:** "Recognize defensive schemes and their impact"

#### Module 5: Player Analysis 2024-2025 🌟
- **Prerequisites:** [Module 3 OR Module 4]
- **Difficulty:** Intermediate
- **Content:**
  - 2024 season stats and awards (MVP, OROY, OPOY)
  - Super Bowl LIX results
  - 2025 player rankings by position
  - Team contexts and situations
- **Cards:** ~90 (from players2025.js + teams2025.js)
- **Learning Objective:** "Evaluate players for 2025 fantasy drafts"

#### Module 6: Analytics & Metrics 📈
- **Prerequisites:** [Module 5]
- **Difficulty:** Advanced
- **Content:**
  - Target share, snap count, opportunity share
  - Air yards, YAC, route participation
  - Red zone usage
  - Expected fantasy points (xFP)
  - Touchdown regression
- **Cards:** ~50 (from nflTerminology.js analytics + advanced/analytics.js)
- **Learning Objective:** "Use advanced metrics for player evaluation"

#### Module 7: Draft & Waiver Mastery 🎯
- **Prerequisites:** [Module 5]
- **Difficulty:** Advanced
- **Content:**
  - Draft strategies (Zero RB, Hero RB, late-round QB)
  - ADP and value-based drafting
  - FAAB bidding strategy
  - Handcuffs and streaming
  - Waiver wire timing
- **Cards:** ~70 (from fantasyStrategy.js + advanced/deepStrategy.js)
- **Learning Objective:** "Master draft preparation and in-season management"

#### Module 8: Championship Strategy 🏆
- **Prerequisites:** [Module 6 AND Module 7]
- **Difficulty:** Advanced
- **Content:**
  - Game script analysis (positive/negative/neutral)
  - Trade timing (buy low, sell high)
  - Playoff schedule planning
  - Championship roster construction
  - Regression analysis
- **Cards:** ~60 (from advanced/deepStrategy.js)
- **Learning Objective:** "Win fantasy championships with expert strategy"

---

## Module State Management

### State Machine:

```
NOT_STARTED
    ↓ (user clicks "Start Module")
IN_PROGRESS
    ↓ (80% cards mastered OR user clicks "Mark Complete")
COMPLETED

OR at any point:
    ↓ (user clicks "Skip Module")
SKIPPED
```

### States:
- **NOT_STARTED**: User hasn't opened this module yet
- **IN_PROGRESS**: User has studied at least 1 card from module (< 80% mastered)
- **COMPLETED**: 80%+ of cards mastered (stability > 21) OR manually marked complete
- **SKIPPED**: User explicitly chose to skip this module

### Persistence Schema:

**IndexedDB Store:** `module-progress`

```javascript
{
  moduleId: "module-football-101",

  // State
  state: "completed", // notStarted | inProgress | completed | skipped

  // Progress tracking
  progress: {
    flashcards: {
      total: 80,
      studied: 75,      // Cards that have been rated at least once
      mastered: 65,     // Cards with stability > 21
      masteredPercent: 81.25
    },
    mcqs: {
      total: 80,
      attempted: 78,
      correct: 62,
      accuracy: 79.49
    }
  },

  // Timestamps
  startedAt: "2025-10-03T10:00:00Z",
  lastStudiedAt: "2025-10-03T15:30:00Z",
  completedAt: "2025-10-03T15:30:00Z", // null if not completed
  skippedAt: null, // null if not skipped

  // Time spent (in seconds)
  timeSpent: 2700 // 45 minutes
}
```

---

## Module Unlock Logic

### Unlocking Rules:

1. **No Prerequisites:**
   - Module is always unlocked
   - Example: Module 1 (Football 101)

2. **Simple Prerequisites (requires ALL):**
   ```javascript
   prerequisites: ["module-football-101"]
   // Unlocked when Module 1 is completed OR skipped
   ```

3. **OR Prerequisites (requires ANY):**
   ```javascript
   prerequisites: [
     { or: ["module-offensive", "module-defensive"] }
   ]
   // Unlocked when EITHER offensive OR defensive is completed/skipped
   ```

4. **AND Prerequisites (requires ALL):**
   ```javascript
   prerequisites: ["module-analytics", "module-draft-strategy"]
   // Unlocked when BOTH are completed/skipped
   ```

### Override Options:

- **Admin/Debug Mode:** Can unlock any module manually
- **Skip Prerequisite:** User can force-unlock (with warning)
- **Reset Progress:** Clear module progress to restart

---

## User Interface Design

### Module Selection Screen:

```
┌────────────────────────────────────────────────┐
│  🏈 NFL Study - Module Selection               │
│                                                │
│  Your Learning Path                            │
├────────────────────────────────────────────────┤
│                                                │
│  ┌──────────────────────────────────────┐     │
│  │ ✅ Module 1: Football 101            │     │
│  │ 🏈 Beginner • 45 min                 │     │
│  │ ████████████████████ 100% Complete   │     │
│  │ 80/80 cards mastered                 │     │
│  └──────────────────────────────────────┘     │
│                                                │
│  ┌──────────────────────────────────────┐     │
│  │ 🔄 Module 2: Fantasy Basics          │     │
│  │ 📊 Beginner • 30 min                 │     │
│  │ ████████░░░░░░░░░░░░ 65% Progress    │     │
│  │ 39/60 cards mastered                 │     │
│  └──────────────────────────────────────┘     │
│                                                │
│  ┌──────────────────────────────────────┐     │
│  │ ⚡ Module 3: Offensive Playbook       │     │
│  │ ⚡ Intermediate • 30 min              │     │
│  │ ░░░░░░░░░░░░░░░░░░░░ 0% Not Started │     │
│  │ Unlocks when Module 2 complete       │     │
│  │ [Start Module] [Skip]                │     │
│  └──────────────────────────────────────┘     │
│                                                │
│  ┌──────────────────────────────────────┐     │
│  │ 🔒 Module 6: Analytics & Metrics     │     │
│  │ 📈 Advanced • 30 min                 │     │
│  │ 🔒 Locked                            │     │
│  │ Requires: Module 5 (Player Analysis) │     │
│  └──────────────────────────────────────┘     │
│                                                │
└────────────────────────────────────────────────┘
```

### Module Study Mode:

```
┌────────────────────────────────────────────────┐
│  Module: Football 101 🏈                       │
│  Progress: 65/80 mastered (81%)                │
│  [Exit to Modules]                             │
├────────────────────────────────────────────────┤
│                                                │
│  [Standard flashcard/MCQ interface here]      │
│  But ONLY shows cards from this module         │
│                                                │
└────────────────────────────────────────────────┘
```

---

## Implementation Plan

### Phase 1: Data & Logic (Backend)

**Step 1.1:** Create module definitions
- File: `src/data/modules/moduleDefinitions.js`
- Define all 8 modules with metadata
- Assign cards to modules based on tags/difficulty

**Step 1.2:** Build card-to-module mappings
- File: `src/data/modules/cardModuleMappings.js`
- Map each card (by question text) to its module(s)
- Allow cards to appear in multiple modules if needed

**Step 1.3:** Create module progress utilities
- File: `src/utils/moduleProgress.js`
- Functions: calculateModuleProgress, isModuleComplete, isModuleSkipped
- Completion logic: 80%+ cards mastered OR manually marked

**Step 1.4:** Create module unlock logic
- File: `src/utils/moduleUnlock.js`
- Functions: isModuleUnlocked, getLockedModules, getUnlockedModules
- Handle AND/OR prerequisites

**Step 1.5:** Create module storage
- File: `src/utils/moduleStorage.js`
- IndexedDB operations: getModuleProgress, saveModuleProgress, resetModule
- Store name: `nfl-study-modules`

### Phase 2: UI Components (Frontend)

**Step 2.1:** ModuleCard component
- Visual: Icon, name, progress bar, difficulty badge
- States: Locked, available, in-progress, completed, skipped
- Actions: Start, Continue, Skip, Mark Complete, Reset

**Step 2.2:** ModuleGrid component
- Display all modules in order
- Group by level/tier
- Show progression path visually

**Step 2.3:** ModuleLockIndicator component
- Shows why module is locked
- Lists prerequisite modules needed
- Option to skip prerequisites (with warning)

**Step 2.4:** ModuleProgress component
- Real-time progress during study
- Flashcard vs MCQ progress
- Time spent tracking

**Step 2.5:** Module selection page
- Replace or augment home screen
- Navigation: Module selection ↔ Study mode

### Phase 3: Integration

**Step 3.1:** Update useCards hook
- Add filter by module
- Track which module user is studying
- Update progress for that module

**Step 3.2:** Update useMCQ hook
- Same as useCards but for MCQs
- Sync progress with module tracker

**Step 3.3:** Add navigation
- Home → Module Selection → Study Mode → Module Selection
- Breadcrumbs for context

**Step 3.4:** Update App.jsx
- Support module-based routing
- Pass current module context to components

### Phase 4: Testing & Polish

**Step 4.1:** E2E tests for modules
- Test module unlock logic
- Test progress tracking
- Test skip functionality
- Test completion criteria

**Step 4.2:** Manual testing
- Clear module progress and verify reset
- Test prerequisite chains
- Test skip and complete actions

**Step 4.3:** UI polish
- Animations for unlock
- Celebration on module completion
- Visual progress indicators

---

## Alternative: Simpler Tag-Based Modules

Instead of explicit module definitions, use existing tags to dynamically create modules:

```javascript
// Auto-generate modules from tags
const modules = [
  {
    id: "qb-module",
    name: "Quarterbacks",
    filter: (card) => card.tags.includes("QB"),
    prerequisites: ["basics-module"]
  },
  {
    id: "rb-module",
    name: "Running Backs",
    filter: (card) => card.tags.includes("RB"),
    prerequisites: ["basics-module"]
  }
];
```

**Pros:**
- No manual card assignment
- Automatically includes new cards with matching tags
- Simpler to maintain

**Cons:**
- Less control over module content
- Harder to ensure optimal learning progression
- Tags might overlap causing cards in multiple modules

---

## Storage Considerations

### IndexedDB Stores:

**Current:**
- `cards` - Flashcard data with FSRS state
- `mcq-cards` - MCQ data with FSRS state

**New:**
- `module-progress` - Module completion state
- `module-settings` - User preferences (show completed, show skipped, etc.)

**Size Impact:**
- Module definitions: ~10KB (8 modules × ~1.25KB each)
- Module progress: ~2KB (8 modules × ~250 bytes each)
- **Total overhead: ~12KB** (negligible)

---

## Migration Strategy

### Backward Compatibility:

**Option A: Modules Optional**
- Keep existing "All Levels" / difficulty buttons
- Add "Module Mode" as new option
- Users can choose: difficulty-based OR module-based study

**Option B: Modules Default**
- Make modules the primary navigation
- Keep difficulty filter within modules
- "All Levels" becomes "All Modules"

**Option C: Modules Only**
- Replace difficulty selection with module selection
- Difficulty becomes metadata on modules
- Simpler UX but less flexible

**RECOMMENDED: Option A** (Modules optional, keep existing functionality)

---

## Success Metrics

### Module System Successful When:

1. ✅ All 8 modules defined with card assignments
2. ✅ Module progress persists across sessions
3. ✅ Unlock logic works (prerequisites enforced)
4. ✅ User can complete, skip, or reset modules
5. ✅ Progress indicators accurate (80% threshold)
6. ✅ UI clearly shows locked/unlocked/complete states
7. ✅ Module completion unlocks dependent modules
8. ✅ Works for both flashcards AND MCQs
9. ✅ All existing tests still pass
10. ✅ New module E2E tests pass

---

## Estimated Implementation Effort

### Time Breakdown:
- **Phase 1 (Data & Logic):** 3-4 hours
  - Module definitions: 1 hour
  - Card mappings: 1 hour
  - Progress tracking: 1 hour
  - Unlock logic: 30 min
  - Storage: 30 min

- **Phase 2 (UI Components):** 4-5 hours
  - ModuleCard: 1 hour
  - ModuleGrid: 1 hour
  - Module selection page: 1.5 hours
  - Progress indicators: 1 hour
  - Polish & styling: 30 min

- **Phase 3 (Integration):** 2-3 hours
  - Update hooks: 1 hour
  - Navigation: 1 hour
  - Testing integration: 30 min

- **Phase 4 (Testing):** 2-3 hours
  - E2E tests: 1.5 hours
  - Manual testing: 1 hour
  - Bug fixes: 30 min

**Total: 11-15 hours**

---

## Questions to Resolve

1. **Module Count:** 8 modules (streamlined) or 12 modules (granular)?
2. **Completion Criteria:** 80% mastery, 50% progress, or hybrid?
3. **Navigation:** Modules optional or required?
4. **Shared Cards:** Can one card appear in multiple modules?
5. **MCQ Integration:** Same modules for flashcards and MCQs, or separate?
6. **Progress Reset:** Allow resetting individual modules or all at once?
7. **Module Order:** Enforce strict sequential order or allow any unlocked module?

---

## Recommended Decisions

Based on user experience and maintainability:

1. **8 modules (streamlined)** - Easier to navigate, clear progression
2. **80% mastery threshold** - Ensures real learning, not just exposure
3. **Modules optional** - Keep existing difficulty mode, add module mode as enhancement
4. **Shared cards allowed** - Some foundational concepts appear in multiple contexts
5. **Same modules for both modes** - Simplifies mental model
6. **Reset per module** - Flexibility without losing all progress
7. **Allow any unlocked module** - User autonomy within unlocked content

---

## Next Steps

To proceed with implementation:

1. **Review this document** - Validate approach and make decisions
2. **Choose module structure** - 8 modules or 12 modules?
3. **Define module→card mappings** - Assign all 413 flashcards to modules
4. **Implement Phase 1** - Data structures and logic
5. **Build Phase 2** - UI components
6. **Integrate Phase 3** - Connect to existing app
7. **Test Phase 4** - Comprehensive testing

**Estimated timeline:** 2-3 days of focused work for complete module system.
