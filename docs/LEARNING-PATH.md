# NFL Study - Recommended Learning Path

This document defines the prerequisite structure for cards to ensure concepts are learned in the correct order.

## Learning Philosophy

**Foundational → Applied → Advanced**

1. **Beginner**: Learn terminology definitions (what things ARE)
2. **Intermediate**: Learn how to USE those terms in fantasy context
3. **Advanced**: Master advanced strategies that combine multiple concepts

## Prerequisite System

### How It Works

Cards can have two special fields:
- `defines: "concept-id"` - This card defines a concept
- `prerequisites: ["concept-id"]` - This card requires you to master other concepts first

**Example:**
```javascript
// Beginner - Defines the concept
{
  question: "What is target share?",
  answer: "Percentage of team's targets going to a specific receiver",
  defines: "target-share",
  difficulty: "beginner"
}

// Advanced - Uses the concept
{
  question: "Why is 30%+ target share elite for WRs?",
  answer: "Guarantees high volume regardless of TD variance",
  prerequisites: ["target-share"],
  difficulty: "advanced"
}
```

### Mastery Criteria

A prerequisite is "mastered" when:
- FSRS state = Review (graduated from learning)
- Stability > 7 days (you remember it well)

Until prerequisites are mastered, dependent cards won't appear in your study queue.

## Core Concept Dependencies

### Tier 1: Basic Game Concepts (Beginner - No Prerequisites)

**Scoring:**
- `touchdown` - What is a touchdown?
- `field-goal` - What is a field goal?
- `pat` - What is a PAT?
- `two-point-conversion` - What is a 2-point conversion?
- `safety-score` - What is a safety (scoring)?

**Basic Positions:**
- `qb` - What does a QB do?
- `rb` - What does an RB do?
- `wr` - What does a WR do?
- `te` - What does a TE do?

**Field:**
- `line-of-scrimmage` - What is the line of scrimmage?
- `red-zone` - What is the red zone?
- `end-zone` - What is the end zone?

**Turnovers:**
- `interception` - What is an interception?
- `fumble` - What is a fumble?
- `turnover` - What is a turnover?

### Tier 2: Basic Strategy (Beginner/Intermediate - Uses Tier 1)

**Fantasy Basics:**
- `ppr` - What is PPR? (no prereqs)
- `waiver-wire` - What is the waiver wire? (no prereqs)
- `starting-lineup` - What is a starting lineup? (no prereqs)
- `bench` - What is the bench? (no prereqs)

**Coverage:**
- `man-coverage` - What is man coverage? (no prereqs)
- `zone-coverage` - What is zone coverage? (no prereqs)
- `blitz` - What is a blitz? (no prereqs)

**Offensive Plays:**
- `snap` - What is a snap? (no prereqs)
- `play-action` - What is play action? (no prereqs)
- `screen-pass` - What is a screen pass? (no prereqs)
- `audible` - What is an audible? (no prereqs)

### Tier 3: Intermediate Concepts (Requires Tier 1 & 2)

**Fantasy Strategy:**
- `handcuff` - What is a handcuff? (requires: `rb`, `waiver-wire`)
- `floor` - What is floor? (requires: `ppr`)
- `ceiling` - What is ceiling? (requires: `ppr`)
- `faab` - What is FAAB? (requires: `waiver-wire`)
- `adp` - What is ADP? (no prereqs)

**Analytics:**
- `target-share` - What is target share? (requires: `wr`, `te`)
- `snap-count` - What is snap count? (no prereqs)
- `red-zone-usage` - What is red zone usage? (requires: `red-zone`)
- `yac` - What is YAC? (requires: `wr`)

**Defense:**
- `cover-2` - What is Cover 2? (requires: `zone-coverage`)
- `cover-3` - What is Cover 3? (requires: `zone-coverage`)
- `nickel` - What is nickel defense? (requires: `man-coverage`, `zone-coverage`)
- `dime` - What is dime defense? (requires: `nickel`)
- `qb-spy` - What is QB spy? (requires: `blitz`)

**Offense:**
- `rpo` - What is RPO? (requires: `play-action`, `audible`)
- `empty-backfield` - What is empty backfield? (requires: `rb`, `wr`)
- `pre-snap-motion` - What is pre-snap motion? (requires: `snap`)

### Tier 4: Advanced Strategy (Requires Tier 1, 2, & 3)

**Draft Strategy:**
- `zero-rb` - What is Zero RB? (requires: `wr`, `rb`, `adp`)
- `hero-rb` - What is Hero RB? (requires: `zero-rb`)
- `late-round-qb` - Late-round QB strategy (requires: `qb`, `adp`)

**Analytics:**
- `air-yards` - What is air yards? (requires: `yac`)
- `opportunity-share` - What is opportunity share? (requires: `target-share`, `snap-count`)
- `expected-fantasy-points` - What is xFP? (requires: `target-share`, `red-zone-usage`)
- `touchdown-regression` - TD regression (requires: `regression`)

**Trading:**
- `buy-low` - What is buy low? (requires: `regression`)
- `sell-high` - What is sell high? (requires: `regression`)
- `smash-spot` - What is a smash spot? (requires: `game-script`)

**Game Theory:**
- `game-script` - What is game script? (requires: `qb`, `rb`)
- `neutral-game-script` - Neutral game script (requires: `game-script`)
- `garbage-time` - What is garbage time? (requires: `game-script`)

## Recommended Study Order

### Week 1: Foundation (Beginner Only)
- Basic rules and scoring
- Positions and their roles
- Field layout and zones
- Simple turnovers

**Goal:** Understand what's happening in a game

### Week 2: Terminology (Beginner → Intermediate)
- Offensive terminology
- Defensive terminology
- Special teams basics
- Fantasy football basics (PPR, waiver wire, lineup)

**Goal:** Speak the language of football

### Week 3: Player Knowledge (Intermediate)
- 2024 stats and 2025 projections
- Team contexts
- Position-specific strategies

**Goal:** Know the players and their value

### Week 4: Analytics (Intermediate → Advanced)
- Target share, snap count, red zone usage
- YAC, air yards, opportunity share
- Expected fantasy points

**Goal:** Understand player usage and efficiency

### Week 5: Draft Strategy (Advanced)
- Zero RB, Hero RB, late-round QB
- ADP exploitation
- Position scarcity

**Goal:** Win your draft

### Week 6: In-Season Strategy (Advanced)
- Waiver wire and FAAB strategy
- Trade timing (buy low, sell high)
- Game script and matchup exploitation
- Playoff roster construction

**Goal:** Win your championship

## Implementation

The prerequisite system automatically:
1. Shows beginner cards first (no dependencies)
2. Tracks when you "master" a concept (FSRS stability > 7 days)
3. Unlocks dependent cards only after prerequisites mastered
4. Displays locked cards with "🔒 Locked - Learn X first" message

## Benefits

✅ **No confusion** - Terms are defined before use
✅ **Natural progression** - Builds on prior knowledge
✅ **Confidence** - Each card assumes you know prerequisites
✅ **Efficiency** - No time wasted on cards you can't understand yet
✅ **Motivation** - See progress as new cards unlock

## Future Enhancements

- [ ] Visual learning path diagram
- [ ] "Unlock tree" showing which cards will unlock next
- [ ] Accelerated unlock for experienced users
- [ ] Skill test to skip beginner level
- [ ] Prerequisite override for advanced users
