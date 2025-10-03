/**
 * ADVANCED: Analytics, Deep Strategy, Advanced Metrics
 * For experienced players who want expert-level knowledge
 */

export const advancedAnalytics = [
  // Advanced Metrics
  { question: "What's a 'good' target share for a WR1?", answer: "25% or higher of team targets", tags: ["ADVANCED", "Stats", "Target-Share"], difficulty: "advanced", prerequisites: ["target-share", "wr1"] },
  { question: "What snap share indicates a workhorse RB?", answer: "70%+ of offensive snaps", tags: ["ADVANCED", "Stats", "Snap-Count"], difficulty: "advanced", prerequisites: ["snap-count", "rb"] },
  { question: "What's 'opportunity share' for running backs?", answer: "Percentage of team's RB touches (carries + targets)", tags: ["ADVANCED", "Stats", "RB"], difficulty: "advanced", prerequisites: ["rb"] },
  { question: "What opportunity share defines a bellcow?", answer: "70% or higher", tags: ["ADVANCED", "Stats", "RB"], difficulty: "advanced", prerequisites: ["opportunity-share", "bellcow-rb", "rb"] },

  // Route Running
  { question: "What are 'even' routes in the route tree?", answer: "Routes that break toward the middle (2, 4, 6, 8)", tags: ["ADVANCED", "Routes"], difficulty: "advanced" },
  { question: "What are 'odd' routes in the route tree?", answer: "Routes that break outside (1, 3, 5, 7) plus 9 (straight)", tags: ["ADVANCED", "Routes"], difficulty: "advanced" },
  { question: "What's a 'route 2'?", answer: "Slant - quick diagonal toward middle", tags: ["ADVANCED", "Routes"], difficulty: "advanced" },
  { question: "What's a 'route 9'?", answer: "Go/Fade - straight downfield", tags: ["ADVANCED", "Routes"], difficulty: "advanced" },
  { question: "What's a 'route 8'?", answer: "Post - deep route angling to goal posts", tags: ["ADVANCED", "Routes"], difficulty: "advanced" },

  // Advanced Strategy
  { question: "When is the optimal time to trade for playoff schedule?", answer: "Weeks 8-10 (after bye weeks, before playoffs)", tags: ["ADVANCED", "Strategy", "Playoffs"], difficulty: "advanced", prerequisites: ["playoff-schedule"] },
  { question: "What's the 'RB Dead Zone' in fantasy drafts?", answer: "Rounds 3-7 where RBs have similar projections but unpredictable outcomes", tags: ["ADVANCED", "Draft", "Strategy"], difficulty: "advanced", prerequisites: ["rb", "adp"] },
  { question: "Why does Zero RB strategy exist?", answer: "RBs injured more + WRs more consistent + RB value on waivers", tags: ["ADVANCED", "Draft", "Zero-RB"], difficulty: "advanced", prerequisites: ["zero-rb", "rb", "wr", "waiver-wire"] },

  // Game Theory
  { question: "Why do good offenses help kickers?", answer: "More drives into field goal range = more attempts", tags: ["ADVANCED", "Strategy", "Kicker"], difficulty: "advanced" },
  { question: "Why stream defenses vs keeping one all year?", answer: "Matchups matter more than talent for DST scoring", tags: ["ADVANCED", "Defense", "Streaming"], difficulty: "advanced", prerequisites: ["streaming"] },
  { question: "What weeks should you add playoff DST matchups?", answer: "Weeks 12-13 (secure good weeks 15-17 matchups)", tags: ["ADVANCED", "Defense", "Playoffs"], difficulty: "advanced" },

  // Roster Construction
  { question: "What's better: Elite RB + WR depth OR Elite WR + RB depth?", answer: "Elite WR + RB depth (WRs more consistent, RBs on waivers)", tags: ["ADVANCED", "Draft", "Strategy"], difficulty: "advanced", prerequisites: ["rb", "wr", "waiver-wire"] },
  { question: "Should you handcuff your RB1?", answer: "Only if injury-prone AND clear handcuff exists", tags: ["ADVANCED", "Waiver-Wire", "Handcuff"], difficulty: "advanced", prerequisites: ["handcuff", "rb"] },

  // Advanced Stats
  { question: "What does high 'air yards' for a WR indicate?", answer: "Deep threat with big-play potential (Tyreek Hill, DK Metcalf)", tags: ["ADVANCED", "Stats", "Air-Yards"], difficulty: "advanced", prerequisites: ["air-yards", "wr"] },
  { question: "What's YAC and why does it matter?", answer: "Yards After Catch - shows playmaking and broken tackle ability", tags: ["ADVANCED", "Stats", "YAC"], difficulty: "advanced", prerequisites: ["yac"] },
  { question: "What's a 'receiving back'?", answer: "RB who's valuable in passing game (stays on field in negative script)", tags: ["ADVANCED", "RB", "PPR"], difficulty: "advanced", prerequisites: ["pass-catching-back", "ppr", "rb"] },

  // Trade Strategy
  { question: "When should you 'sell high' on a player?", answer: "After 2-3 big games, before regression to mean", tags: ["ADVANCED", "Trading", "Strategy"], difficulty: "advanced", prerequisites: ["sell-high", "regression"] },
  { question: "What's 'buying low' in fantasy?", answer: "Trading for underperforming elite talent before bounce-back", tags: ["ADVANCED", "Trading", "Strategy"], difficulty: "advanced", prerequisites: ["buy-low"] },
  { question: "Should you trade for name value or actual production?", answer: "Production - ignore draft cost (sunk cost fallacy)", tags: ["ADVANCED", "Trading", "Psychology"], difficulty: "advanced" },

  // 2025 Specific Advanced
  { question: "Why is Ja'Marr Chase #1 overall despite being WR?", answer: "WR more consistent than RB + Triple Crown + Elite QB connection", tags: ["ADVANCED", "Draft", "2025"], difficulty: "advanced", prerequisites: ["wr", "rb", "qb"] },
  { question: "Why might Saquon be safer than Chase at #1?", answer: "2,000-yard season proves bellcow usage + Super Bowl offense", tags: ["ADVANCED", "Draft", "2025"], difficulty: "advanced", prerequisites: ["bellcow-rb", "rb"] },
  { question: "Is Travis Kelce a fade candidate for 2025?", answer: "Yes - age 36, declining production, better value at TE available", tags: ["ADVANCED", "TE", "Fade", "2025"], difficulty: "advanced" }
];
