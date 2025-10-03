/**
 * Multiple Choice Questions - Advanced Analytics & Deep Strategy
 * For experienced players who want expert-level knowledge
 */

export const advancedMCQ = [
  // ========================================
  // ADVANCED METRICS
  // ========================================
  {
    question: "What's a 'good' target share for a WR1?",
    correctAnswer: "25% or higher of team targets",
    options: [
      "25% or higher of team targets",
      "15% or higher of team targets",
      "35% or higher of team targets",
      "10% or higher of team targets"
    ],
    tags: ["ADVANCED", "Stats", "Target-Share"],
    difficulty: "advanced",
    prerequisites: ["target-share", "wr1"]
  },
  {
    question: "What snap share indicates a workhorse RB?",
    correctAnswer: "70%+ of offensive snaps",
    options: [
      "70%+ of offensive snaps",
      "80%+ of offensive snaps",
      "60%+ of offensive snaps",
      "50%+ of offensive snaps"
    ],
    tags: ["ADVANCED", "Stats", "Snap-Count"],
    difficulty: "advanced",
    prerequisites: ["snap-count", "rb"]
  },
  {
    question: "What's 'opportunity share' for running backs?",
    correctAnswer: "Percentage of team's RB touches (carries + targets)",
    options: [
      "Percentage of team's RB touches (carries + targets)",
      "Percentage of team's offensive plays",
      "Percentage of team's total yards",
      "Percentage of team's red zone snaps"
    ],
    tags: ["ADVANCED", "Stats", "RB"],
    difficulty: "advanced",
    prerequisites: ["rb"]
  },
  {
    question: "What opportunity share defines a bellcow?",
    correctAnswer: "70% or higher",
    options: [
      "70% or higher",
      "80% or higher",
      "60% or higher",
      "50% or higher"
    ],
    tags: ["ADVANCED", "Stats", "RB"],
    difficulty: "advanced",
    prerequisites: ["opportunity-share", "bellcow-rb", "rb"]
  },

  // ========================================
  // ROUTE RUNNING
  // ========================================
  {
    question: "What are 'even' routes in the route tree?",
    correctAnswer: "Routes that break toward the middle (2, 4, 6, 8)",
    options: [
      "Routes that break toward the middle (2, 4, 6, 8)",
      "Routes that break outside (2, 4, 6, 8)",
      "Routes numbered 2, 4, 6, 8, and 10",
      "Routes that are exactly 10 yards deep"
    ],
    tags: ["ADVANCED", "Routes"],
    difficulty: "advanced"
  },
  {
    question: "What are 'odd' routes in the route tree?",
    correctAnswer: "Routes that break outside (1, 3, 5, 7) plus 9 (straight)",
    options: [
      "Routes that break outside (1, 3, 5, 7) plus 9 (straight)",
      "Routes that break inside (1, 3, 5, 7, 9)",
      "Routes numbered 1, 3, 5, 7, and 11",
      "Routes that are less than 10 yards deep"
    ],
    tags: ["ADVANCED", "Routes"],
    difficulty: "advanced"
  },
  {
    question: "What's a 'route 2'?",
    correctAnswer: "Slant - quick diagonal toward middle",
    options: [
      "Slant - quick diagonal toward middle",
      "Hitch - quick stop and turn",
      "Out - break toward sideline",
      "Curl - stop and come back"
    ],
    tags: ["ADVANCED", "Routes"],
    difficulty: "advanced"
  },
  {
    question: "What's a 'route 9'?",
    correctAnswer: "Go/Fade - straight downfield",
    options: [
      "Go/Fade - straight downfield",
      "Post - deep route angling to goal posts",
      "Corner - break outside deep",
      "Wheel - run up sideline"
    ],
    tags: ["ADVANCED", "Routes"],
    difficulty: "advanced"
  },
  {
    question: "What's a 'route 8'?",
    correctAnswer: "Post - deep route angling to goal posts",
    options: [
      "Post - deep route angling to goal posts",
      "Go/Fade - straight downfield",
      "Corner - break outside deep",
      "Dig - deep crossing route"
    ],
    tags: ["ADVANCED", "Routes"],
    difficulty: "advanced"
  },

  // ========================================
  // ADVANCED STRATEGY
  // ========================================
  {
    question: "When is the optimal time to trade for playoff schedule?",
    correctAnswer: "Weeks 8-10 (after bye weeks, before playoffs)",
    options: [
      "Weeks 8-10 (after bye weeks, before playoffs)",
      "Weeks 12-14 (right before playoffs)",
      "Weeks 4-6 (early in season)",
      "Week 1 (draft day trades)"
    ],
    tags: ["ADVANCED", "Strategy", "Playoffs"],
    difficulty: "advanced",
    prerequisites: ["playoff-schedule"]
  },
  {
    question: "What's the 'RB Dead Zone' in fantasy drafts?",
    correctAnswer: "Rounds 3-7 where RBs have similar projections but unpredictable outcomes",
    options: [
      "Rounds 3-7 where RBs have similar projections but unpredictable outcomes",
      "Rounds 8-12 where all good RBs are gone",
      "Rounds 1-2 where RBs are overvalued",
      "The waiver wire after week 8"
    ],
    tags: ["ADVANCED", "Draft", "Strategy"],
    difficulty: "advanced",
    prerequisites: ["rb", "adp"]
  },
  {
    question: "Why does Zero RB strategy exist?",
    correctAnswer: "RBs injured more + WRs more consistent + RB value on waivers",
    options: [
      "RBs injured more + WRs more consistent + RB value on waivers",
      "RBs score fewer points than WRs in PPR",
      "Elite WRs are cheaper in drafts",
      "RBs decline faster after age 25"
    ],
    tags: ["ADVANCED", "Draft", "Zero-RB"],
    difficulty: "advanced",
    prerequisites: ["zero-rb", "rb", "wr", "waiver-wire"]
  },

  // ========================================
  // GAME THEORY
  // ========================================
  {
    question: "Why do good offenses help kickers?",
    correctAnswer: "More drives into field goal range = more attempts",
    options: [
      "More drives into field goal range = more attempts",
      "Good offenses always go for it on 4th down",
      "Kickers on good teams are more accurate",
      "Good offenses score more touchdowns"
    ],
    tags: ["ADVANCED", "Strategy", "Kicker"],
    difficulty: "advanced"
  },
  {
    question: "Why stream defenses vs keeping one all year?",
    correctAnswer: "Matchups matter more than talent for DST scoring",
    options: [
      "Matchups matter more than talent for DST scoring",
      "Defenses get injured more often",
      "Elite defenses cost too much FAAB",
      "Most leagues force weekly DST changes"
    ],
    tags: ["ADVANCED", "Defense", "Streaming"],
    difficulty: "advanced",
    prerequisites: ["streaming"]
  },
  {
    question: "What weeks should you add playoff DST matchups?",
    correctAnswer: "Weeks 12-13 (secure good weeks 15-17 matchups)",
    options: [
      "Weeks 12-13 (secure good weeks 15-17 matchups)",
      "Week 1 (plan ahead early)",
      "Week 14 (right before playoffs)",
      "Week 15 (when playoffs start)"
    ],
    tags: ["ADVANCED", "Defense", "Playoffs"],
    difficulty: "advanced"
  },

  // ========================================
  // ROSTER CONSTRUCTION
  // ========================================
  {
    question: "What's better: Elite RB + WR depth OR Elite WR + RB depth?",
    correctAnswer: "Elite WR + RB depth (WRs more consistent, RBs on waivers)",
    options: [
      "Elite WR + RB depth (WRs more consistent, RBs on waivers)",
      "Elite RB + WR depth (RBs are scarcer)",
      "Elite TE + depth everywhere",
      "Elite QB + RB/WR depth"
    ],
    tags: ["ADVANCED", "Draft", "Strategy"],
    difficulty: "advanced",
    prerequisites: ["rb", "wr", "waiver-wire"]
  },
  {
    question: "Should you handcuff your RB1?",
    correctAnswer: "Only if injury-prone AND clear handcuff exists",
    options: [
      "Only if injury-prone AND clear handcuff exists",
      "Always - insurance is critical",
      "Never - wastes a bench spot",
      "Only in the first 3 weeks"
    ],
    tags: ["ADVANCED", "Waiver-Wire", "Handcuff"],
    difficulty: "advanced",
    prerequisites: ["handcuff", "rb"]
  },

  // ========================================
  // ADVANCED STATS
  // ========================================
  {
    question: "What does high 'air yards' for a WR indicate?",
    correctAnswer: "Deep threat with big-play potential (Tyreek Hill, DK Metcalf)",
    options: [
      "Deep threat with big-play potential (Tyreek Hill, DK Metcalf)",
      "Possession receiver with consistent targets",
      "Red zone specialist with TD upside",
      "Underneath target for checkdowns"
    ],
    tags: ["ADVANCED", "Stats", "Air-Yards"],
    difficulty: "advanced",
    prerequisites: ["air-yards", "wr"]
  },
  {
    question: "What's YAC and why does it matter?",
    correctAnswer: "Yards After Catch - shows playmaking and broken tackle ability",
    options: [
      "Yards After Catch - shows playmaking and broken tackle ability",
      "Yards Against Coverage - measures WR separation",
      "Years At College - determines draft value",
      "Yearly Average Catches - measures volume"
    ],
    tags: ["ADVANCED", "Stats", "YAC"],
    difficulty: "advanced",
    prerequisites: ["yac"]
  },
  {
    question: "What's a 'receiving back'?",
    correctAnswer: "RB who's valuable in passing game (stays on field in negative script)",
    options: [
      "RB who's valuable in passing game (stays on field in negative script)",
      "RB who only catches passes, never rushes",
      "WR who lines up in the backfield",
      "TE who plays H-back position"
    ],
    tags: ["ADVANCED", "RB", "PPR"],
    difficulty: "advanced",
    prerequisites: ["pass-catching-back", "ppr", "rb"]
  },

  // ========================================
  // TRADE STRATEGY
  // ========================================
  {
    question: "When should you 'sell high' on a player?",
    correctAnswer: "After 2-3 big games, before regression to mean",
    options: [
      "After 2-3 big games, before regression to mean",
      "After one huge game",
      "After they become the #1 ranked player",
      "Right after the draft"
    ],
    tags: ["ADVANCED", "Trading", "Strategy"],
    difficulty: "advanced",
    prerequisites: ["sell-high", "regression"]
  },
  {
    question: "What's 'buying low' in fantasy?",
    correctAnswer: "Trading for underperforming elite talent before bounce-back",
    options: [
      "Trading for underperforming elite talent before bounce-back",
      "Adding waiver wire players for free",
      "Trading draft picks for players",
      "Drafting injured players late"
    ],
    tags: ["ADVANCED", "Trading", "Strategy"],
    difficulty: "advanced",
    prerequisites: ["buy-low"]
  },
  {
    question: "Should you trade for name value or actual production?",
    correctAnswer: "Production - ignore draft cost (sunk cost fallacy)",
    options: [
      "Production - ignore draft cost (sunk cost fallacy)",
      "Name value - reputation matters most",
      "Draft cost - honor your investment",
      "Both equally - balance is key"
    ],
    tags: ["ADVANCED", "Trading", "Psychology"],
    difficulty: "advanced"
  },

  // ========================================
  // 2025 SPECIFIC ADVANCED
  // ========================================
  {
    question: "Why is Ja'Marr Chase #1 overall despite being WR?",
    correctAnswer: "WR more consistent than RB + Triple Crown + Elite QB connection",
    options: [
      "WR more consistent than RB + Triple Crown + Elite QB connection",
      "He scored the most points in 2024",
      "WRs always go #1 in PPR leagues",
      "He's younger than all the RBs"
    ],
    tags: ["ADVANCED", "Draft", "2025"],
    difficulty: "advanced",
    prerequisites: ["wr", "rb", "qb"]
  },
  {
    question: "Why might Saquon be safer than Chase at #1?",
    correctAnswer: "2,000-yard season proves bellcow usage + Super Bowl offense",
    options: [
      "2,000-yard season proves bellcow usage + Super Bowl offense",
      "RBs always score more than WRs",
      "He's younger than Ja'Marr Chase",
      "Eagles have easier schedule"
    ],
    tags: ["ADVANCED", "Draft", "2025"],
    difficulty: "advanced",
    prerequisites: ["bellcow-rb", "rb"]
  },
  {
    question: "Is Travis Kelce a fade candidate for 2025?",
    correctAnswer: "Yes - age 36, declining production, better value at TE available",
    options: [
      "Yes - age 36, declining production, better value at TE available",
      "No - Mahomes always feeds him",
      "No - he's the #1 TE every year",
      "Maybe - depends on Taylor Swift"
    ],
    tags: ["ADVANCED", "TE", "Fade", "2025"],
    difficulty: "advanced"
  },

  // ========================================
  // TRADE TIMING (from deepStrategy.js)
  // ========================================
  {
    question: "What's the best time to trade underperforming 1st rounder?",
    correctAnswer: "Weeks 3-5 (before value completely tanks)",
    options: [
      "Weeks 3-5 (before value completely tanks)",
      "Week 1 (cut your losses early)",
      "Weeks 8-10 (give them more time)",
      "Never - hold your 1st round pick"
    ],
    tags: ["ADVANCED", "Trading", "Timing"],
    difficulty: "advanced"
  },
  {
    question: "When do you trade away aging vets?",
    correctAnswer: "After good game in weeks 6-8 (sell high before decline)",
    options: [
      "After good game in weeks 6-8 (sell high before decline)",
      "Right after the draft",
      "Week 12 (playoff push)",
      "Never - vets are reliable"
    ],
    tags: ["ADVANCED", "Trading"],
    difficulty: "advanced",
    prerequisites: ["sell-high"]
  },
  {
    question: "When should contenders trade picks for players?",
    correctAnswer: "Weeks 8-10 (go all-in if you're winning)",
    options: [
      "Weeks 8-10 (go all-in if you're winning)",
      "Draft day (start strong)",
      "Week 14 (right before playoffs)",
      "Never - picks are too valuable"
    ],
    tags: ["ADVANCED", "Trading", "Dynasty"],
    difficulty: "advanced"
  },

  // ========================================
  // ADVANCED WAIVER
  // ========================================
  {
    question: "What's the 'Wednesday waiver strategy'?",
    correctAnswer: "Add injured player's handcuff before others realize",
    options: [
      "Add injured player's handcuff before others realize",
      "Wait until Wednesday to save FAAB",
      "Drop all your bench on Wednesday",
      "Only make moves on Wednesday"
    ],
    tags: ["ADVANCED", "Waiver-Wire", "Handcuff"],
    difficulty: "advanced",
    prerequisites: ["handcuff", "waiver-wire"]
  },
  {
    question: "Should you blow #1 waiver priority on a breakout WR?",
    correctAnswer: "Depends - bellcow RB yes, WR maybe (RB scarcity higher)",
    options: [
      "Depends - bellcow RB yes, WR maybe (RB scarcity higher)",
      "Always - breakouts win championships",
      "Never - save it for injuries",
      "Yes - WRs are more valuable"
    ],
    tags: ["ADVANCED", "Waiver-Wire"],
    difficulty: "advanced"
  },
  {
    question: "What's 'rostering your opponent's players'?",
    correctAnswer: "Add your opponent's bench players so they can't use them",
    options: [
      "Add your opponent's bench players so they can't use them",
      "Trade for players your opponent wants",
      "Draft players from your opponent's team",
      "Start players facing your opponent's defense"
    ],
    tags: ["ADVANCED", "Strategy", "Roster-Blocking"],
    difficulty: "advanced"
  },

  // ========================================
  // PLAYOFF STRATEGY
  // ========================================
  {
    question: "Should you trade for injured star in week 10?",
    correctAnswer: "Yes if getting playoff discount (owner giving up)",
    options: [
      "Yes if getting playoff discount (owner giving up)",
      "Never - injured players are risky",
      "Only if you're losing",
      "Wait until week 14"
    ],
    tags: ["ADVANCED", "Trading", "Playoffs"],
    difficulty: "advanced"
  },
  {
    question: "What's more important: regular season or playoff roster?",
    correctAnswer: "Playoff roster (championships won in weeks 15-17)",
    options: [
      "Playoff roster (championships won in weeks 15-17)",
      "Regular season (need to make playoffs first)",
      "Both equally important",
      "Depends on your record"
    ],
    tags: ["ADVANCED", "Playoffs", "Strategy"],
    difficulty: "advanced"
  },
  {
    question: "Should you rest starters if you've clinched bye?",
    correctAnswer: "No - in fantasy, always play your best (no bye in fantasy playoffs)",
    options: [
      "No - in fantasy, always play your best (no bye in fantasy playoffs)",
      "Yes - avoid injuries before playoffs",
      "Yes - save them for championship",
      "Maybe - depends on opponent"
    ],
    tags: ["ADVANCED", "Playoffs"],
    difficulty: "advanced"
  },

  // ========================================
  // SALARY CAP / AUCTION
  // ========================================
  {
    question: "In auction drafts, what % of budget for top RB?",
    correctAnswer: "35-45% for elite bellcow (Saquon, Bijan)",
    options: [
      "35-45% for elite bellcow (Saquon, Bijan)",
      "20-30% (spread the wealth)",
      "50-60% (go all-in)",
      "10-20% (bargain hunting)"
    ],
    tags: ["ADVANCED", "Auction", "Draft"],
    difficulty: "advanced",
    prerequisites: ["bellcow-rb", "rb"]
  },
  {
    question: "What's 'stars and scrubs' auction strategy?",
    correctAnswer: "Spend big on 2-3 stars, fill roster with $1 players",
    options: [
      "Spend big on 2-3 stars, fill roster with $1 players",
      "Only draft stars, never scrubs",
      "Draft all scrubs for value",
      "Trade stars for scrubs during season"
    ],
    tags: ["ADVANCED", "Auction", "Strategy"],
    difficulty: "advanced"
  },
  {
    question: "What's 'balanced roster' auction strategy?",
    correctAnswer: "Spread budget evenly for depth at all positions",
    options: [
      "Spread budget evenly for depth at all positions",
      "Equal money on each position group",
      "Only bid on balanced players",
      "Avoid spending over $30 on anyone"
    ],
    tags: ["ADVANCED", "Auction", "Strategy"],
    difficulty: "advanced"
  },

  // ========================================
  // DYNASTY / KEEPER
  // ========================================
  {
    question: "In dynasty, should you trade picks for win-now players?",
    correctAnswer: "Only if you're contending (top 3 team)",
    options: [
      "Only if you're contending (top 3 team)",
      "Always - picks are overrated",
      "Never - picks are too valuable",
      "Only in startup drafts"
    ],
    tags: ["ADVANCED", "Dynasty", "Trading"],
    difficulty: "advanced"
  },
  {
    question: "What age do RBs typically decline?",
    correctAnswer: "Age 28-30 (trade before decline)",
    options: [
      "Age 28-30 (trade before decline)",
      "Age 25-27 (early decline)",
      "Age 32-34 (late decline)",
      "Age 35+ (veteran years)"
    ],
    tags: ["ADVANCED", "Dynasty", "RB", "Age"],
    difficulty: "advanced"
  },
  {
    question: "What age do WRs typically decline?",
    correctAnswer: "Age 30-32 (longer career than RBs)",
    options: [
      "Age 30-32 (longer career than RBs)",
      "Age 28-30 (same as RBs)",
      "Age 35+ (they last forever)",
      "Age 25-27 (early decline)"
    ],
    tags: ["ADVANCED", "Dynasty", "WR", "Age"],
    difficulty: "advanced"
  },

  // ========================================
  // ANALYTICS DEEP DIVE
  // ========================================
  {
    question: "What's 'expected fantasy points' (xFP)?",
    correctAnswer: "Points a player should score based on usage/opportunity",
    options: [
      "Points a player should score based on usage/opportunity",
      "Points projected by ESPN/Yahoo",
      "Average points over last 3 games",
      "Points based on ADP"
    ],
    tags: ["ADVANCED", "Analytics", "xFP"],
    difficulty: "advanced",
    prerequisites: ["expected-fantasy-points"]
  },
  {
    question: "What does 'regression to the mean' predict?",
    correctAnswer: "Players with unsustainable TD rates will decline",
    options: [
      "Players with unsustainable TD rates will decline",
      "All players get worse over time",
      "Bad players will improve",
      "Stats will be exactly average"
    ],
    tags: ["ADVANCED", "Analytics", "Regression"],
    difficulty: "advanced",
    prerequisites: ["regression", "touchdown-regression"]
  },
  {
    question: "Why is 'target share' better than raw targets?",
    correctAnswer: "Accounts for team pass volume (10 of 30 targets > 12 of 50)",
    options: [
      "Accounts for team pass volume (10 of 30 targets > 12 of 50)",
      "Easier to calculate",
      "More predictive of touchdowns",
      "Shows red zone usage better"
    ],
    tags: ["ADVANCED", "Analytics", "Target-Share"],
    difficulty: "advanced",
    prerequisites: ["target-share"]
  },

  // ========================================
  // META STRATEGY
  // ========================================
  {
    question: "What's 'league winner upside'?",
    correctAnswer: "Players with path to RB1/WR1 if situation changes",
    options: [
      "Players with path to RB1/WR1 if situation changes",
      "Top 5 ADP players",
      "Players who win Super Bowls",
      "Any player ranked #1 in their position"
    ],
    tags: ["ADVANCED", "Waiver-Wire", "Strategy"],
    difficulty: "advanced"
  },
  {
    question: "What's 'anchoring bias' in fantasy?",
    correctAnswer: "Overvaluing players based on previous seasons, not current situation",
    options: [
      "Overvaluing players based on previous seasons, not current situation",
      "Only drafting players you know",
      "Sticking with your draft picks all season",
      "Trading for your favorite team's players"
    ],
    tags: ["ADVANCED", "Psychology"],
    difficulty: "advanced"
  },
  {
    question: "What's 'recency bias'?",
    correctAnswer: "Overreacting to last week's performance, ignoring larger sample",
    options: [
      "Overreacting to last week's performance, ignoring larger sample",
      "Only looking at recent draft picks",
      "Preferring younger players",
      "Ignoring 2024 stats for 2025 drafts"
    ],
    tags: ["ADVANCED", "Psychology"],
    difficulty: "advanced"
  }
];
