/**
 * Intermediate Fantasy Concepts MCQs
 * Waiver strategy, draft tactics, position scarcity, roster management
 */

export const intermediateConceptsMCQ = [
  // ========================================
  // FAAB & WAIVER WIRE STRATEGY
  // ========================================
  {
    question: "What's a good FAAB bid for a league-winning RB (injury replacement who becomes starter)?",
    correctAnswer: "40-60% of remaining budget",
    options: [
      "40-60% of remaining budget",
      "80-100% of remaining budget",
      "20-30% of remaining budget",
      "5-15% of remaining budget"
    ],
    tags: ["INTERMEDIATE", "FAAB", "Waiver-Wire", "Strategy"],
    difficulty: "intermediate",
    prerequisites: ["faab", "waiver-wire"]
  },
  {
    question: "What's a good FAAB bid for a speculative add (potential breakout)?",
    correctAnswer: "5-15% of budget",
    options: [
      "5-15% of budget",
      "25-40% of budget",
      "50% of budget",
      "1-3% of budget"
    ],
    tags: ["INTERMEDIATE", "FAAB", "Waiver-Wire", "Strategy"],
    difficulty: "intermediate",
    prerequisites: ["faab", "waiver-wire"]
  },
  {
    question: "When do waivers typically process in most fantasy leagues?",
    correctAnswer: "Wednesday morning (Tuesday night games exempt)",
    options: [
      "Wednesday morning (Tuesday night games exempt)",
      "Tuesday morning",
      "Thursday morning",
      "Friday morning before games"
    ],
    tags: ["INTERMEDIATE", "Waiver-Wire", "Timing"],
    difficulty: "intermediate",
    prerequisites: ["waiver-wire"]
  },

  // ========================================
  // ADVANCED DRAFT CONCEPTS
  // ========================================
  {
    question: "What is 'ADP' and how do you use it strategically?",
    correctAnswer: "Average Draft Position - find value by taking players below their ADP",
    options: [
      "Average Draft Position - find value by taking players below their ADP",
      "Annual Draft Priority - use it to rank your preferences",
      "Automated Draft Protocol - computer makes picks for you",
      "Advanced Draft Projections - expert consensus rankings"
    ],
    tags: ["INTERMEDIATE", "Draft", "ADP", "Strategy"],
    difficulty: "intermediate",
    prerequisites: ["adp"]
  },
  {
    question: "Should you draft a kicker before the last round?",
    correctAnswer: "No - kickers are too unpredictable, wait until last pick",
    options: [
      "No - kickers are too unpredictable, wait until last pick",
      "Yes - elite kickers provide significant advantage",
      "Draft in round 10 to secure top option",
      "Draft 2 kickers for bye week insurance"
    ],
    tags: ["INTERMEDIATE", "Draft", "Kicker", "Strategy"],
    difficulty: "intermediate"
  },
  {
    question: "Should you draft team stacks (QB + WR from same team)?",
    correctAnswer: "Yes - if one does well, both do well (correlated scoring)",
    options: [
      "Yes - if one does well, both do well (correlated scoring)",
      "No - never stack players from same team",
      "Only stack in DFS, not season-long",
      "Only stack QB + TE, not QB + WR"
    ],
    tags: ["INTERMEDIATE", "Draft", "Stacks", "Strategy"],
    difficulty: "intermediate",
    defines: "stacks"
  },

  // ========================================
  // POSITION SCARCITY (2025 SPECIFIC)
  // ========================================
  {
    question: "What positions have the most depth in 2025 drafts?",
    correctAnswer: "QB and TE (can find value late)",
    options: [
      "QB and TE (can find value late)",
      "RB and WR (deep position this year)",
      "Only QB is deep",
      "All positions are equally scarce"
    ],
    tags: ["INTERMEDIATE", "Draft", "2025", "Scarcity"],
    difficulty: "intermediate"
  },
  {
    question: "What position is most scarce in 2025 fantasy drafts?",
    correctAnswer: "Bellcow RBs (draft early or go Zero RB)",
    options: [
      "Bellcow RBs (draft early or go Zero RB)",
      "Elite WR1s are impossible to find",
      "Dual-threat QBs are extremely rare",
      "All positions equally scarce"
    ],
    tags: ["INTERMEDIATE", "Draft", "RB", "2025", "Scarcity"],
    difficulty: "intermediate",
    prerequisites: ["bellcow-rb", "rb", "zero-rb"]
  },

  // ========================================
  // INJURY REPORT TIMING & DESIGNATIONS
  // ========================================
  {
    question: "When should you check injury reports during the week?",
    correctAnswer: "Wednesday (initial), Friday (final practice), 90 min before kickoff",
    options: [
      "Wednesday (initial), Friday (final practice), 90 min before kickoff",
      "Only Sunday morning before games",
      "Monday and Thursday",
      "Every day at the same time"
    ],
    tags: ["INTERMEDIATE", "Injury", "Timing", "Strategy"],
    difficulty: "intermediate"
  },
  {
    question: "What does 'Questionable' injury designation mean?",
    correctAnswer: "~50% chance to play (check game-time decision)",
    options: [
      "~50% chance to play (check game-time decision)",
      "Will definitely play but limited",
      "~25% chance to play (probably out)",
      "~75% chance to play (likely active)"
    ],
    tags: ["INTERMEDIATE", "Injury", "Designations"],
    difficulty: "intermediate",
    defines: "questionable"
  },
  {
    question: "What does 'Doubtful' injury designation mean?",
    correctAnswer: "~25% chance to play (probably out)",
    options: [
      "~25% chance to play (probably out)",
      "~50% chance to play",
      "Will not play under any circumstance",
      "~75% chance to play but limited"
    ],
    tags: ["INTERMEDIATE", "Injury", "Designations"],
    difficulty: "intermediate",
    defines: "doubtful"
  },
  {
    question: "What does 'Out' injury designation mean?",
    correctAnswer: "Player is ruled out - will not play this week",
    options: [
      "Player is ruled out - will not play this week",
      "~10% chance to play as emergency",
      "Might play if team is desperate",
      "Injured reserve for season"
    ],
    tags: ["INTERMEDIATE", "Injury", "Designations"],
    difficulty: "intermediate"
  },

  // ========================================
  // ROSTER MANAGEMENT STRATEGIES
  // ========================================
  {
    question: "How many bench spots should be dedicated to RBs?",
    correctAnswer: "4-5 spots (RB scarcity and injury risk)",
    options: [
      "4-5 spots (RB scarcity and injury risk)",
      "2-3 spots maximum",
      "All bench spots if possible",
      "1-2 spots only"
    ],
    tags: ["INTERMEDIATE", "Roster", "RB", "Strategy"],
    difficulty: "intermediate",
    prerequisites: ["rb"]
  },
  {
    question: "Should you carry 2 QBs on your roster?",
    correctAnswer: "Usually no (unless elite QB on bye or superflex league)",
    options: [
      "Usually no (unless elite QB on bye or superflex league)",
      "Always carry 2 QBs for safety",
      "Carry 3 QBs to trade later",
      "Never carry more than 1 QB"
    ],
    tags: ["INTERMEDIATE", "Roster", "QB", "Strategy"],
    difficulty: "intermediate",
    prerequisites: ["qb"]
  },
  {
    question: "Should you carry 2 TEs on your roster?",
    correctAnswer: "No - stream matchups unless you have elite TE",
    options: [
      "No - stream matchups unless you have elite TE",
      "Yes - always carry 2 for bye week",
      "Yes - TEs are too valuable to risk",
      "Carry 3 TEs for trade value"
    ],
    tags: ["INTERMEDIATE", "Roster", "TE", "Strategy"],
    difficulty: "intermediate",
    prerequisites: ["te", "streaming"]
  },
  {
    question: "Should you carry 2 defenses on your roster?",
    correctAnswer: "Only if planning playoff week matchups (weeks 12+)",
    options: [
      "Only if planning playoff week matchups (weeks 12+)",
      "Always carry 2 defenses",
      "Never carry 2 defenses",
      "Only in week 1 of season"
    ],
    tags: ["INTERMEDIATE", "Roster", "Defense", "Strategy"],
    difficulty: "intermediate",
    prerequisites: ["streaming"]
  },

  // ========================================
  // WEEKLY MANAGEMENT TACTICS
  // ========================================
  {
    question: "What is the 'Thursday Night Trap'?",
    correctAnswer: "Starting players on Thursday limits Sunday flexibility if news breaks",
    options: [
      "Starting players on Thursday limits Sunday flexibility if news breaks",
      "Thursday players always underperform",
      "Thursday games are cancelled frequently",
      "Thursday games don't count for fantasy"
    ],
    tags: ["INTERMEDIATE", "Strategy", "Timing"],
    difficulty: "intermediate"
  },
  {
    question: "When should you make waiver claims for maximum priority?",
    correctAnswer: "Wait until you truly need someone - priority is valuable",
    options: [
      "Wait until you truly need someone - priority is valuable",
      "Use it every week to stay active",
      "Never use waiver priority, only free agents",
      "Use it immediately after draft"
    ],
    tags: ["INTERMEDIATE", "Waiver-Wire", "Strategy"],
    difficulty: "intermediate",
    prerequisites: ["waiver-wire"]
  },

  // ========================================
  // TRADE EVALUATION CONCEPTS
  // ========================================
  {
    question: "What is 'selling high' in fantasy trades?",
    correctAnswer: "Trading a player after strong performance before decline",
    options: [
      "Trading a player after strong performance before decline",
      "Only trading players with high ADP",
      "Trading players you drafted early",
      "Never trading - holding all season"
    ],
    tags: ["INTERMEDIATE", "Trades", "Strategy"],
    difficulty: "intermediate",
    defines: "sell-high"
  },
  {
    question: "What is 'buying low' in fantasy trades?",
    correctAnswer: "Trading for underperforming player you expect to improve",
    options: [
      "Trading for underperforming player you expect to improve",
      "Only trading for players with low ADP",
      "Trading for injured players",
      "Never trading for struggling players"
    ],
    tags: ["INTERMEDIATE", "Trades", "Strategy"],
    difficulty: "intermediate",
    defines: "buy-low"
  },
  {
    question: "When is the best time to make trades in fantasy football?",
    correctAnswer: "Weeks 3-8 (after panic sets in, before trade deadline)",
    options: [
      "Weeks 3-8 (after panic sets in, before trade deadline)",
      "Week 1 only",
      "Weeks 13-15 during playoffs",
      "Never trade after the draft"
    ],
    tags: ["INTERMEDIATE", "Trades", "Strategy", "Timing"],
    difficulty: "intermediate"
  },

  // ========================================
  // PLAYOFF PREPARATION
  // ========================================
  {
    question: "When should you start preparing for fantasy playoffs?",
    correctAnswer: "Week 10-12 (acquire playoff schedule matchups)",
    options: [
      "Week 10-12 (acquire playoff schedule matchups)",
      "Week 1 - always think playoffs",
      "Week 14 when playoffs start",
      "Never plan ahead - ride hot hand"
    ],
    tags: ["INTERMEDIATE", "Playoffs", "Strategy", "Timing"],
    difficulty: "intermediate"
  },
  {
    question: "What should you do with players resting in Week 18 (fantasy championship)?",
    correctAnswer: "Bench them - many playoff teams rest starters",
    options: [
      "Bench them - many playoff teams rest starters",
      "Always start your studs regardless",
      "Week 18 isn't part of fantasy playoffs",
      "Only bench if officially ruled out"
    ],
    tags: ["INTERMEDIATE", "Playoffs", "Strategy"],
    difficulty: "intermediate"
  }
];
