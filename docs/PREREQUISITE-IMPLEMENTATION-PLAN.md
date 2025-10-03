# Prerequisite System - Complete Implementation Plan

**WORKING_DIRECTORY:** `.claude-work/impl-prerequisites-20251003-104943`

## Current State Analysis

**What Exists:**
- ✅ `src/utils/prerequisites.js` - Utility functions for checking prerequisites
- ✅ `docs/LEARNING-PATH.md` - Documentation of concept dependencies
- ✅ `src/hooks/useCards.js` - Calls `filterByPrerequisites()`
- ✅ 7 cards have `defines` field added to nflTerminology.js

**What's Missing:**
- ❌ Only 7 cards have `defines` field (need ~100+)
- ❌ ZERO cards have `prerequisites` field (need ~200+)
- ❌ No visual indication when cards are locked
- ❌ No way to see what prerequisites are needed
- ❌ System is called but does nothing (no prereqs to check)

## Complete Implementation Steps

### Step 1: Tag ALL Definition Cards with `defines`

**Files to Modify:**
- `src/data/nflTerminology.js` (92 more cards need `defines`)
- `src/data/beginner/footballBasics.js` (add `defines` for basic terms)
- `src/data/fantasyStrategy.js` (add `defines` for fantasy concepts)
- `src/data/advanced/analytics.js` (add `defines` for analytics terms)

**Example Tagging:**

```javascript
// Basic Scoring Definitions
{
  question: "How many points is a touchdown worth?",
  answer: "6 points",
  defines: "touchdown",
  tags: ["BEGINNER", "Scoring", "Touchdown"],
  difficulty: "beginner"
}

// Fantasy Definitions
{
  question: "What is PPR?",
  answer: "Points Per Reception - scoring where catches earn points",
  defines: "ppr",
  tags: ["Terminology", "Fantasy", "PPR"],
  difficulty: "beginner"
}

// Analytics Definitions
{
  question: "What is target share?",
  answer: "Percentage of team's targets going to a receiver",
  defines: "target-share",
  tags: ["Terminology", "Analytics"],
  difficulty: "intermediate"
}
```

**Complete List of Concepts to Define:**

**Basic Game (Beginner):**
- touchdown, field-goal, pat, two-point-conversion, safety-score
- qb, rb, wr, te, offensive-line, defensive-line, linebacker, cornerback, safety-position
- line-of-scrimmage, red-zone, end-zone, neutral-zone, midfield
- interception, fumble, turnover, sack
- downs, first-down, third-down, fourth-down
- punt, kickoff, field-goal-attempt
- holding, false-start, pass-interference, offsides

**Offensive Terms (Beginner/Intermediate):**
- snap, play-action, screen-pass, audible, hard-count, draw-play
- rpo, pre-snap-motion, max-protect, empty-backfield, bunch-formation, trips-formation
- shotgun, pistol, under-center, i-formation

**Defensive Terms (Beginner/Intermediate):**
- man-coverage, zone-coverage, blitz, prevent-defense
- cover-2, cover-3, cover-0, cover-1, tampa-2
- nickel-defense, dime-defense, qb-spy, contain, gap-discipline

**Special Teams (Beginner/Intermediate):**
- touchback, onside-kick, fair-catch, punt-return, coffin-corner, pooch-kick

**Fantasy Football (Beginner/Intermediate):**
- ppr, standard-scoring, half-ppr, waiver-wire, starting-lineup, bench
- handcuff, faab, adp, floor, ceiling, boom-bust
- league-winner, streaming, stash, roster-churn

**Analytics (Intermediate/Advanced):**
- target-share, snap-count, red-zone-usage, route-participation
- air-yards, yac, opportunity-share, expected-fantasy-points, touchdown-regression

**Strategy (Intermediate/Advanced):**
- game-script, neutral-game-script, garbage-time, clock-management
- zero-rb, hero-rb, late-round-qb, anchor-rb
- buy-low, sell-high, smash-spot, regression, positive-regression
- stack, game-stack, championship-upside, playoff-schedule

**Position-Specific (Intermediate):**
- dual-threat-qb, pocket-passer, bellcow-rb, rbbc, three-down-back
- wr1, alpha-wr, slot-receiver, yac-receiver, contested-catch-receiver
- goal-line-back, pass-catching-back

### Step 2: Add `prerequisites` to Dependent Cards

**Logic:**
- Any card mentioning a term should require that term's definition
- Search for key phrases in question/answer text
- Add appropriate prerequisite IDs

**Example Mappings:**

```javascript
// Uses "target share" in question → requires target-share definition
{
  question: "Why is 30%+ target share elite for WRs?",
  answer: "Guarantees high volume regardless of TD variance",
  prerequisites: ["target-share", "wr"],
  difficulty: "advanced"
}

// Uses "handcuff" → requires handcuff definition
{
  question: "Which Lions player should you handcuff if you own Jahmyr Gibbs?",
  answer: "David Montgomery (shares backfield)",
  prerequisites: ["handcuff", "rb"],
  difficulty: "intermediate"
}

// Uses "PPR" → requires PPR definition
{
  question: "Why are pass-catching RBs valuable in PPR?",
  answer: "Get points for receptions AND rushing attempts",
  prerequisites: ["ppr", "rb"],
  difficulty: "intermediate"
}

// Uses "game script" → requires game script definition
{
  question: "How does positive game script help RBs?",
  answer: "Winning teams run more to kill clock",
  prerequisites: ["game-script", "rb"],
  difficulty: "intermediate"
}

// Uses "Zero RB" → requires multiple concepts
{
  question: "When should you pivot away from Zero RB?",
  answer: "When elite RB value falls to you unexpectedly",
  prerequisites: ["zero-rb", "adp", "rb"],
  difficulty: "advanced"
}
```

**Search Patterns for Each File:**

`src/data/players2025.js`:
- Search for: "target share", "snap", "PPR", "game script", "YAC"
- Add prereqs: ["target-share"], ["snap-count"], ["ppr"], ["game-script"], ["yac"]

`src/data/fantasyStrategy.js`:
- Search for: "handcuff", "FAAB", "waiver", "Zero RB", "floor", "ceiling"
- Add prereqs: ["handcuff"], ["faab"], ["waiver-wire"], ["zero-rb"], ["floor"], ["ceiling"]

`src/data/myRoster.js`:
- Search for: fantasy terms used without definition
- Add appropriate prerequisites

`src/data/advanced/analytics.js`:
- Search for: "target share", "opportunity share", "air yards", "regression"
- Add prereqs: ["target-share"], ["opportunity-share"], ["air-yards"], ["regression"]

`src/data/advanced/deepStrategy.js`:
- Search for: "buy low", "sell high", "regression", "stack"
- Add prereqs: ["buy-low"], ["sell-high"], ["regression"], ["stack"]

### Step 3: Update Card Schema to Preserve New Fields

**File: `src/utils/fsrs.js`**

Ensure `defines` and `prerequisites` are preserved when creating/updating cards:

```javascript
export function createCard(question, answer, tags = [], defines = null, prerequisites = []) {
  const card = createEmptyCard();
  const newCard = {
    ...card,
    id: Date.now() + Math.random(),
    question,
    answer,
    tags,
    defines,
    prerequisites,
    createdAt: new Date().toISOString()
  };
  return newCard;
}
```

**File: `src/hooks/useCards.js`**

Update `loadCards()` to preserve these fields:

```javascript
loadedCards = flashcards.map(card => {
  const fsrsCard = createCard(
    card.question,
    card.answer,
    card.tags,
    card.defines,
    card.prerequisites
  );
  return {
    ...fsrsCard,
    difficulty: card.difficulty || 'intermediate',
    defines: card.defines,
    prerequisites: card.prerequisites || []
  };
});
```

### Step 4: Add Visual Indicators for Locked Cards

**File: `src/components/Flashcard.jsx`**

Add locked card indicator:

```javascript
{card.isLocked && (
  <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
    <span>🔒</span>
    <span>Locked</span>
  </div>
)}
```

**File: `src/App.jsx`**

Show locked card info in stats or a dedicated section:

```javascript
const lockedCards = getLockedCards(cards);

// Display somewhere:
{lockedCards.length > 0 && (
  <div className="text-sm text-gray-600">
    🔒 {lockedCards.length} cards locked (learn prerequisites first)
  </div>
)}
```

### Step 5: Add Prerequisite Status View

**New Component: `src/components/PrerequisiteStatus.jsx`**

Shows which prerequisites are needed and their mastery status:

```javascript
export default function PrerequisiteStatus({ card, allCards }) {
  const status = getPrerequisiteStatus(card, allCards);

  if (!status.hasPrerequisites) return null;

  return (
    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
      <div className="font-semibold text-yellow-900 mb-2">
        🔒 Prerequisites Required:
      </div>
      {status.all.map(prereq => (
        <div key={prereq.id} className="text-sm">
          {prereq.mastered ? '✅' : '🔒'} {prereq.question}
          {!prereq.mastered && (
            <span className="text-yellow-700">
              {' '}- Review {prereq.stability?.toFixed(1)} more days
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
```

### Step 6: Comprehensive Card Tagging

**Systematic Approach:**

1. **Run script to find all terms used without definitions:**

```bash
# Find cards that mention terms
grep -r "target share\|snap count\|handcuff\|PPR\|FAAB" src/data/*.js

# Create mapping file
```

2. **Create mapping JSON:**

```json
{
  "target-share": {
    "definingCard": "What is target share?",
    "usedIn": [
      "Why is 30%+ target share elite?",
      "What's CeeDee Lamb's target share?",
      "How do you identify alpha WRs?"
    ]
  },
  "handcuff": {
    "definingCard": "What is a 'handcuff' in fantasy football?",
    "usedIn": [
      "Which Lions player should you handcuff?",
      "Who is the Eagles' RB handcuff?",
      "Why are handcuffs important?"
    ]
  }
}
```

3. **Apply prerequisites systematically to each file**

### Step 7: Test Prerequisite System End-to-End

**Create Test: `tests/e2e-prerequisites.spec.js`**

```javascript
test('Cards with prerequisites are locked initially', async ({ page }) => {
  // Clear data
  // Load cards
  // Find a card with prerequisites
  // Verify it's NOT in study queue
  // Master the prerequisite card
  // Verify dependent card APPEARS in queue
});

test('Mastering prerequisite unlocks dependent cards', async ({ page }) => {
  // Study "What is target share?" until mastered
  // Verify cards using "target share" now appear
  // Count should increase
});

test('Console shows locked card count', async ({ page }) => {
  page.on('console', msg => {
    if (msg.text().includes('Locked')) {
      console.log('Locked cards:', msg.text());
    }
  });
  // Verify we see lock messages
});
```

## Implementation Checklist

### Phase 1: Infrastructure (DONE ✅)
- [x] Create prerequisites.js utility
- [x] Add filterByPrerequisites() to useCards
- [x] Document learning path

### Phase 2: Card Tagging (NOT DONE ❌)
- [ ] Tag all 99 terminology cards with `defines`
- [ ] Tag all basic concept cards with `defines` (touchdown, qb, rb, etc.)
- [ ] Identify ~200 cards that use terms
- [ ] Add `prerequisites` to those cards
- [ ] Update createCard() to accept defines/prerequisites
- [ ] Update loadCards() to preserve defines/prerequisites

### Phase 3: UI/UX (NOT DONE ❌)
- [ ] Add locked card indicator (🔒)
- [ ] Show locked card count in stats
- [ ] Add prerequisite status component
- [ ] Update debug mode to show prerequisites

### Phase 4: Testing (NOT DONE ❌)
- [ ] Create e2e-prerequisites.spec.js
- [ ] Test cards are locked initially
- [ ] Test unlocking works after mastering prereqs
- [ ] Test console logs show lock/unlock events
- [ ] Update comprehensive tests for new behavior

### Phase 5: Documentation (PARTIALLY DONE ⚠️)
- [x] LEARNING-PATH.md created
- [ ] Update README.md with prerequisite system
- [ ] Update CLAUDE.md with prerequisite info
- [ ] Add user guide for learning path

## Detailed File Changes

### File 1: `src/data/nflTerminology.js`

**Current:** 7 cards have `defines`
**Target:** All 99 cards

**Changes needed:**

```javascript
// BEFORE
{ question: "What is 'pre-snap motion'?", answer: "...", tags: [...], difficulty: "intermediate" }

// AFTER
{
  question: "What is 'pre-snap motion'?",
  answer: "...",
  tags: [...],
  difficulty: "intermediate",
  defines: "pre-snap-motion"
}
```

**Estimate:** 92 cards to update

### File 2: `src/data/beginner/footballBasics.js`

**Add `defines` to basic concepts:**

```javascript
// Scoring concepts
{ question: "How many points is a touchdown worth?", defines: "touchdown", ... }
{ question: "How many points is a field goal worth?", defines: "field-goal", ... }
{ question: "How many points is a safety worth?", defines: "safety-score", ... }

// Position concepts
{ question: "Who throws the ball?", defines: "qb", ... }
{ question: "Who runs with the ball?", defines: "rb", ... }
{ question: "Who catches passes?", defines: "wr", ... }

// Field concepts
{ question: "What's the 'red zone'?", defines: "red-zone", ... }
{ question: "What's the 50-yard line called?", defines: "midfield", ... }

// Turnover concepts
{ question: "What's an interception?", defines: "interception", ... }
{ question: "What's a fumble?", defines: "fumble", ... }
{ question: "What's a 'sack'?", defines: "sack", ... }

// Downs concepts
{ question: "How many downs does a team get?", defines: "downs", ... }
{ question: "What does '1st and 10' mean?", defines: "first-down", ... }
{ question: "What's the most important down?", defines: "third-down", ... }

// Play concepts
{ question: "What's a 'punt'?", defines: "punt", ... }
{ question: "What's a 'kickoff'?", defines: "kickoff", ... }

// Formation concepts
{ question: "What's the 'shotgun' formation?", defines: "shotgun", ... }
{ question: "What's the 'pistol' formation?", defines: "pistol", ... }

// Route concepts
{ question: "What's a 'route'?", defines: "route", ... }
{ question: "What's a 'go route' (Route 9)?", defines: "go-route", ... }
{ question: "What's a 'slant route' (Route 2)?", defines: "slant-route", ... }
```

**Estimate:** 30-40 cards to update

### File 3: `src/data/players2025.js`

**Add `prerequisites` to cards that use terms:**

Search for key terms and add prerequisites:

```javascript
// BEFORE
{ q: "What's CeeDee Lamb's target share?", a: "Massive - elite volume in Cowboys offense", tags: ["WR", "2025", "Volume"] }

// AFTER
{
  q: "What's CeeDee Lamb's target share?",
  a: "Massive - elite volume in Cowboys offense",
  tags: ["WR", "2025", "Volume"],
  prerequisites: ["target-share", "wr"]
}

// BEFORE
{ q: "Why is Joe Burrow's 2025 outlook elite?", a: "Elite passing volume with Ja'Marr Chase connection", tags: ["QB", "2025", "Elite"] }

// AFTER (if mentions game script, volume, etc.)
{
  q: "Why is Joe Burrow's 2025 outlook elite?",
  a: "Elite passing volume with Ja'Marr Chase connection",
  tags: ["QB", "2025", "Elite"],
  prerequisites: ["qb", "wr"]
}
```

**Search patterns:**
- "target share" → add ["target-share"]
- "snap count" → add ["snap-count"]
- "red zone" (in context of usage) → add ["red-zone", "red-zone-usage"]
- "PPR" → add ["ppr"]
- "dual-threat" → add ["dual-threat-qb"]
- "bellcow" → add ["bellcow-rb"]

**Estimate:** 60-80 cards to update

### File 4: `src/data/fantasyStrategy.js`

**Add `defines` and `prerequisites`:**

```javascript
// Definition cards - add defines
{
  question: "What is Zero RB strategy?",
  defines: "zero-rb",
  answer: "...",
  difficulty: "advanced"
}

// Usage cards - add prerequisites
{
  question: "When should you pivot away from Zero RB?",
  answer: "...",
  prerequisites: ["zero-rb", "adp", "rb"],
  difficulty: "advanced"
}

{
  question: "What's the best waiver wire strategy?",
  answer: "...",
  prerequisites: ["waiver-wire", "faab"],
  difficulty: "intermediate"
}
```

**Estimate:** 40-50 cards to update

### File 5: `src/data/myRoster.js`

**Add prerequisites for fantasy terms:**

```javascript
// BEFORE
{ question: "Who is YOUR handcuff for Bijan Robinson?", ... }

// AFTER
{
  question: "Who is YOUR handcuff for Bijan Robinson?",
  prerequisites: ["handcuff", "rb"],
  ...
}
```

**Estimate:** 20-30 cards to update

### File 6: `src/data/advanced/analytics.js`

**Add `defines` and chain prerequisites:**

```javascript
// Foundation analytics - just defines
{
  question: "What is expected fantasy points (xFP)?",
  defines: "expected-fantasy-points",
  prerequisites: ["target-share", "red-zone-usage"], // Built on other analytics
  difficulty: "advanced"
}

// Advanced analytics - requires foundational analytics
{
  question: "How do you use xFP to find buy-low candidates?",
  prerequisites: ["expected-fantasy-points", "buy-low"],
  difficulty: "advanced"
}
```

**Estimate:** 30-40 cards to update

### File 7: `src/data/advanced/deepStrategy.js`

**Chain advanced prerequisites:**

```javascript
{
  question: "How do you exploit touchdown regression in trades?",
  prerequisites: ["touchdown-regression", "sell-high", "trading"],
  difficulty: "advanced"
}

{
  question: "What's the optimal playoff roster construction?",
  prerequisites: ["playoff-schedule", "championship-upside", "ceiling", "floor"],
  difficulty: "advanced"
}
```

**Estimate:** 20-30 cards to update

### File 8: `src/utils/fsrs.js`

**Update createCard signature:**

```javascript
// BEFORE
export function createCard(question, answer, tags = []) {

// AFTER
export function createCard(question, answer, tags = [], defines = null, prerequisites = []) {
  console.log('🔍 [createCard] Creating new card:', question.substring(0, 50) + '...');
  const card = createEmptyCard();
  const newCard = {
    ...card,
    id: Date.now() + Math.random(),
    question,
    answer,
    tags,
    defines,              // NEW
    prerequisites,        // NEW
    createdAt: new Date().toISOString()
  };
  console.log('🔍 [createCard] ✅ Card created with ID:', newCard.id);
  return newCard;
}
```

**Update scheduleCard to preserve fields:**

```javascript
export function scheduleCard(card, rating) {
  // ... existing logic ...
  const scheduledCard = {
    ...card,
    ...result.card,
    question: card.question,
    answer: card.answer,
    tags: card.tags,
    defines: card.defines,           // NEW
    prerequisites: card.prerequisites, // NEW
    id: card.id,
    createdAt: card.createdAt
  };
  return scheduledCard;
}
```

### File 9: `src/hooks/useCards.js`

**Update loadCards to pass new fields:**

```javascript
loadedCards = flashcards.map(card => {
  const fsrsCard = createCard(
    card.question,
    card.answer,
    card.tags,
    card.defines,           // NEW
    card.prerequisites      // NEW
  );
  return {
    ...fsrsCard,
    difficulty: card.difficulty || 'intermediate'
  };
});
```

**Update addCard to accept new fields:**

```javascript
async function addCard(question, answer, tags = [], difficulty = 'intermediate', defines = null, prerequisites = []) {
  const newCard = createCard(question, answer, tags, defines, prerequisites);
  const updatedCards = [...cards, newCard];
  setCards(updatedCards);
  await storage.saveCards(updatedCards);
  return newCard;
}
```

### File 10: `src/components/AddCardModal.jsx`

**Add fields for defines and prerequisites:**

```javascript
const [defines, setDefines] = useState('');
const [prerequisites, setPrerequisites] = useState('');

// In form:
<input
  type="text"
  placeholder="Defines concept (optional): target-share"
  value={defines}
  onChange={(e) => setDefines(e.target.value)}
/>

<input
  type="text"
  placeholder="Prerequisites (comma-separated): ppr,wr"
  value={prerequisites}
  onChange={(e) => setPrerequisites(e.target.value)}
/>

// When submitting:
const prereqArray = prerequisites.split(',').map(p => p.trim()).filter(Boolean);
await addCard(question, answer, selectedTags, difficulty, defines || null, prereqArray);
```

### File 11: Create Helper Script

**New: `scripts/analyze-prerequisites.js`**

Script to help identify missing prerequisites:

```javascript
#!/usr/bin/env node

/**
 * Analyzes all cards and finds terms used without definitions
 */

import { generateFlashcardsByDifficulty } from '../src/data/generateByDifficulty.js';

const organized = generateFlashcardsByDifficulty();
const allCards = organized.all;

// Terms we care about
const terms = [
  'target share', 'snap count', 'PPR', 'handcuff', 'FAAB', 'ADP',
  'floor', 'ceiling', 'game script', 'Zero RB', 'YAC', 'air yards',
  'regression', 'buy low', 'sell high', 'stack', 'nickel', 'dime',
  'blitz', 'man coverage', 'zone coverage', 'RPO', 'play action'
];

// Find cards mentioning each term
terms.forEach(term => {
  const using = allCards.filter(card =>
    (card.question + ' ' + card.answer).toLowerCase().includes(term.toLowerCase())
  );

  const defining = using.filter(card => card.defines === term.replace(/\s+/g, '-'));
  const notDefining = using.filter(card => card.defines !== term.replace(/\s+/g, '-'));

  if (notDefining.length > 0) {
    console.log(`\n"${term}":`);
    console.log(`  Defined in: ${defining.length} card(s)`);
    console.log(`  Used in: ${notDefining.length} card(s) WITHOUT prerequisites`);
    notDefining.slice(0, 3).forEach(card => {
      console.log(`    - "${card.question}"`);
    });
  }
});
```

Run this to generate a report of what needs prerequisites.

### File 12: Update E2E Tests

**File: `tests/e2e-comprehensive.spec.js`**

Tests need to account for:
- Card counts may change as cards unlock
- Initial count will be less than total (locked cards)
- After rating cards, new cards may unlock

**Add new test:**

```javascript
test('Prerequisite system locks advanced cards', async ({ page }) => {
  await page.goto('http://localhost:8080');
  await page.waitForTimeout(3000);

  // Check console for lock messages
  const logs = [];
  page.on('console', msg => {
    if (msg.text().includes('Locked')) logs.push(msg.text());
  });

  await page.click('button:has-text("Advanced")');
  await page.waitForTimeout(1000);

  // Should see some locked cards
  expect(logs.length).toBeGreaterThan(0);
  console.log('Locked cards detected:', logs);
});
```

## Estimated Effort

**Total Cards to Update:**
- Add `defines`: ~120 cards
- Add `prerequisites`: ~200 cards
- Update utility functions: 3 files
- Update UI components: 3 files
- Create new components: 1 file
- Add tests: 1 file
- Update existing tests: 1 file

**Time Estimate:** 2-3 hours of systematic work

## Success Criteria

System is COMPLETE when:
- ✅ All terminology definition cards have `defines` field
- ✅ All cards using terms have `prerequisites` field
- ✅ Cards with unmastered prerequisites don't appear in study queue
- ✅ Console logs show "🔒 Locked X cards" with count > 0
- ✅ Mastering a prerequisite unlocks dependent cards
- ✅ Tests verify locking/unlocking behavior
- ✅ UI shows locked status and what's needed
- ✅ All E2E tests passing with new behavior

## Alternative: Simpler Approach

If full prerequisite system is too complex, simpler option:

**Just enforce difficulty progression:**
- Can't study Intermediate until 80% of Beginner is mastered
- Can't study Advanced until 80% of Intermediate is mastered
- Much simpler to implement (no per-card dependencies)
- Still provides learning progression

Would you prefer the full prerequisite system or the simpler difficulty-level gating?
