/**
 * Comprehensive Fantasy Strategy MCQ Questions (2025)
 * Based on all flashcards from fantasyStrategy.js
 * Includes defines and prerequisites for learning progression
 */

import type { GeneratedMCQ } from '../../types';

export const strategy2025MCQs: GeneratedMCQ[] = [
  // Draft Strategy Basics
  {
    question: "What is the 'Zero RB' draft strategy?",
    correctAnswer: "Wait on RB in early rounds, load up on WR/TE instead",
    options: [
      "Wait on RB in early rounds, load up on WR/TE instead",
      "Draft only running backs in first 5 rounds",
      "Never draft any running backs",
      "Draft RB in round 1 then zero until late"
    ],
    tags: ["Draft", "Strategy", "Zero-RB"],
    difficulty: "advanced",
    defines: "zero-rb"
  },
  {
    question: "Why does the Zero RB strategy exist?",
    correctAnswer: "RBs get injured more frequently than WRs",
    options: [
      "RBs get injured more frequently than WRs",
      "RBs are harder to predict than WRs",
      "WRs score more points than RBs",
      "RBs have lower ceilings than WRs"
    ],
    tags: ["Draft", "Strategy", "Zero-RB"],
    difficulty: "advanced",
    prerequisites: ["zero-rb", "rb"]
  },
  {
    question: "What is the 'RB Dead Zone'?",
    correctAnswer: "Rounds 3-7 where RBs have similar projections but unpredictable outcomes",
    options: [
      "Rounds 3-7 where RBs have similar projections but unpredictable outcomes",
      "Rounds 1-2 where elite RBs are drafted",
      "Rounds 8-12 where backup RBs are selected",
      "The period when RB injuries peak during the season"
    ],
    tags: ["Draft", "Strategy", "RB"],
    difficulty: "advanced",
    prerequisites: ["rb", "adp"]
  },
  {
    question: "How does PPR scoring change draft strategy?",
    correctAnswer: "Makes pass-catching RBs and slot WRs more valuable",
    options: [
      "Makes pass-catching RBs and slot WRs more valuable",
      "Makes rushing QBs less important",
      "Makes tight ends irrelevant",
      "Doubles the value of touchdowns"
    ],
    tags: ["Scoring", "PPR", "Strategy"],
    difficulty: "intermediate",
    prerequisites: ["ppr", "rb", "wr"]
  },
  {
    question: "When should you draft elite dual-threat QBs in 2025?",
    correctAnswer: "Rounds 2-4 for Josh Allen, Lamar Jackson, Jayden Daniels, Jalen Hurts",
    options: [
      "Rounds 2-4 for Josh Allen, Lamar Jackson, Jayden Daniels, Jalen Hurts",
      "Round 1 to secure the position",
      "Rounds 5-7 after filling RB/WR needs",
      "Round 8 or later since QB is deep"
    ],
    tags: ["Draft", "QB", "2025"],
    difficulty: "intermediate",
    prerequisites: ["dual-threat-qb", "qb"]
  },
  {
    question: "When should you draft non-rushing QBs in 2025?",
    correctAnswer: "Round 8 or later - QB depth is strong in 2025",
    options: [
      "Round 8 or later - QB depth is strong in 2025",
      "Rounds 4-6 to secure position",
      "Rounds 2-3 before elite QBs are gone",
      "Never draft non-rushing QBs"
    ],
    tags: ["Draft", "QB", "2025"],
    difficulty: "intermediate",
    prerequisites: ["qb"]
  },
  {
    question: "What is ADP?",
    correctAnswer: "Average Draft Position - where players are typically drafted",
    options: [
      "Average Draft Position - where players are typically drafted",
      "Anticipated Draft Position - expert predictions",
      "Automated Draft Process - computer-generated picks",
      "Annual Draft Performance - how players did last year"
    ],
    tags: ["Draft", "ADP"],
    difficulty: "beginner",
    defines: "adp"
  },
  {
    question: "How do you find value using ADP?",
    correctAnswer: "Target players performing above their ADP",
    options: [
      "Target players performing above their ADP",
      "Always draft exactly at ADP",
      "Avoid players with rising ADP",
      "Draft players 2 rounds before their ADP"
    ],
    tags: ["Draft", "ADP", "Value"],
    difficulty: "intermediate",
    prerequisites: ["adp"]
  },

  // 2025 Specific
  {
    question: "Why is Ja'Marr Chase #1 overall in many 2025 drafts?",
    correctAnswer: "Triple Crown winner with elite QB connection",
    options: [
      "Triple Crown winner with elite QB connection",
      "New contract made him the highest paid WR",
      "Moving to a new team with better offense",
      "Rookie year breakout performance"
    ],
    tags: ["Draft", "2025", "WR"],
    difficulty: "intermediate",
    prerequisites: ["wr"]
  },
  {
    question: "Why is Saquon Barkley also a #1 overall consideration in 2025?",
    correctAnswer: "2,000-yard season and Super Bowl champion",
    options: [
      "2,000-yard season and Super Bowl champion",
      "Recovered from ACL injury fully",
      "New offensive coordinator in Philadelphia",
      "Best RB in the 2018 draft class"
    ],
    tags: ["Draft", "2025", "RB"],
    difficulty: "intermediate",
    prerequisites: ["rb"]
  },
  {
    question: "Should you fade Travis Kelce in 2025 drafts?",
    correctAnswer: "Yes - age 36 with declining production",
    options: [
      "Yes - age 36 with declining production",
      "No - Mahomes ensures he's always elite",
      "Yes - Andy Reid is retiring",
      "No - he's moving to a better offense"
    ],
    tags: ["Draft", "TE", "2025", "Fade"],
    difficulty: "intermediate",
    prerequisites: ["te"]
  },

  // Waiver Wire
  {
    question: "What is FAAB?",
    correctAnswer: "Free Agent Acquisition Budget - bid money on waiver players",
    options: [
      "Free Agent Acquisition Budget - bid money on waiver players",
      "Fantasy Athletic Analysis Bureau",
      "First Available After Bye - waiver priority system",
      "Fair Allocation At Beginning - draft budget"
    ],
    tags: ["Waiver-Wire", "FAAB"],
    difficulty: "intermediate",
    defines: "faab"
  },
  {
    question: "How much is a typical FAAB budget?",
    correctAnswer: "$100 for the entire season",
    options: [
      "$100 for the entire season",
      "$100 per week",
      "$500 for the entire season",
      "$50 for the entire season"
    ],
    tags: ["Waiver-Wire", "FAAB"],
    difficulty: "intermediate",
    prerequisites: ["faab"]
  },
  {
    question: "When should you spend big FAAB?",
    correctAnswer: "On bellcow RBs who get lead role due to injury",
    options: [
      "On bellcow RBs who get lead role due to injury",
      "Save it all for playoff weeks",
      "Spread it evenly throughout the season",
      "Only on week 1 breakout players"
    ],
    tags: ["Waiver-Wire", "FAAB"],
    difficulty: "advanced",
    prerequisites: ["faab", "bellcow-rb", "rb"]
  },
  {
    question: "Should you save FAAB for playoffs?",
    correctAnswer: "No - championships are won early with aggressive adds",
    options: [
      "No - championships are won early with aggressive adds",
      "Yes - save at least 50% for playoffs",
      "Yes - save everything for week 15+",
      "Only save FAAB if you're guaranteed playoffs"
    ],
    tags: ["Waiver-Wire", "FAAB"],
    difficulty: "advanced",
    prerequisites: ["faab"]
  },
  {
    question: "What is a 'handcuff' RB?",
    correctAnswer: "Backup RB to your starter who becomes lead back if injury occurs",
    options: [
      "Backup RB to your starter who becomes lead back if injury occurs",
      "RB who shares carries 50/50 with another back",
      "Third-string RB kept on your bench",
      "RB you trade away to handcuff another team"
    ],
    tags: ["Waiver-Wire", "Handcuff", "RB"],
    difficulty: "intermediate",
    defines: "handcuff"
  },
  {
    question: "What is 'streaming' in fantasy football?",
    correctAnswer: "Rotating players weekly based on matchups instead of keeping one",
    options: [
      "Rotating players weekly based on matchups instead of keeping one",
      "Watching games live on your phone",
      "Trading players back and forth with opponents",
      "Drafting players from the same NFL team"
    ],
    tags: ["Strategy", "Streaming"],
    difficulty: "intermediate",
    defines: "streaming"
  },
  {
    question: "What positions are best for streaming?",
    correctAnswer: "QB2, TE, and DST based on matchups",
    options: [
      "QB2, TE, and DST based on matchups",
      "RB1, WR1, and QB1",
      "All positions should be streamed",
      "Kickers only"
    ],
    tags: ["Strategy", "Streaming"],
    difficulty: "intermediate",
    prerequisites: ["streaming"]
  },

  // In-Season Strategy
  {
    question: "What does 'start your studs' mean?",
    correctAnswer: "Always start elite players regardless of matchup",
    options: [
      "Always start elite players regardless of matchup",
      "Only start players with good matchups",
      "Bench players facing top defenses",
      "Start rookies over veterans"
    ],
    tags: ["Strategy", "Lineup"],
    difficulty: "intermediate"
  },
  {
    question: "When should you sell high on a player?",
    correctAnswer: "After big games, before their production declines",
    options: [
      "After big games, before their production declines",
      "After they have 3 bad games in a row",
      "During their bye week",
      "Never trade away productive players"
    ],
    tags: ["Strategy", "Trading"],
    difficulty: "intermediate",
    prerequisites: ["sell-high"]
  },
  {
    question: "What target share is considered elite for WRs?",
    correctAnswer: "25% or higher",
    options: ["25% or higher", "15% or higher", "35% or higher", "10% or higher"],
    tags: ["Stats", "Target-Share"],
    difficulty: "advanced",
    prerequisites: ["target-share"]
  },
  {
    question: "What snap count indicates a workhorse RB?",
    correctAnswer: "70% or higher of offensive snaps",
    options: [
      "70% or higher of offensive snaps",
      "50% or higher of offensive snaps",
      "90% or higher of offensive snaps",
      "40% or higher of offensive snaps"
    ],
    tags: ["Stats", "Snap-Count", "RB"],
    difficulty: "advanced",
    prerequisites: ["snap-count", "rb"]
  },
  {
    question: "Why does red zone usage matter for fantasy?",
    correctAnswer: "Red zone touches lead to TD opportunities",
    options: [
      "Red zone touches lead to TD opportunities",
      "Red zone plays count for double points",
      "It measures a player's blocking ability",
      "Red zone stats predict injuries"
    ],
    tags: ["Stats", "Red-Zone", "TDs"],
    difficulty: "intermediate",
    prerequisites: ["red-zone-usage", "red-zone"]
  },

  // Advanced Stats
  {
    question: "What do high air yards indicate for a WR?",
    correctAnswer: "Deep threat with big-play potential",
    options: [
      "Deep threat with big-play potential",
      "Short-yardage specialist",
      "Player who drops passes frequently",
      "Declining route tree"
    ],
    tags: ["Stats", "Air-Yards"],
    difficulty: "advanced",
    prerequisites: ["air-yards"]
  },
  {
    question: "What opportunity share makes a bellcow RB?",
    correctAnswer: "70% or higher",
    options: ["70% or higher", "50% or higher", "90% or higher", "60% or higher"],
    tags: ["Stats", "Opportunity", "RB"],
    difficulty: "advanced",
    prerequisites: ["opportunity-share", "bellcow-rb", "rb"]
  },

  // Game Script
  {
    question: "What is 'positive game script'?",
    correctAnswer: "When a team is winning and runs the ball more",
    options: [
      "When a team is winning and runs the ball more",
      "When a team is losing and passes more",
      "When a team has good play-calling",
      "When a team's starting QB is healthy"
    ],
    tags: ["Game-Script"],
    difficulty: "intermediate",
    defines: "positive-game-script"
  },
  {
    question: "What is 'negative game script'?",
    correctAnswer: "When a team is losing and passes more",
    options: [
      "When a team is losing and passes more",
      "When a team is winning and runs more",
      "When a team has bad coaching",
      "When a team's defense is injured"
    ],
    tags: ["Game-Script"],
    difficulty: "intermediate",
    defines: "negative-game-script"
  },
  {
    question: "Why does RB receiving ability matter for fantasy?",
    correctAnswer: "Pass-catching RBs stay on field regardless of game script",
    options: [
      "Pass-catching RBs stay on field regardless of game script",
      "Receiving doesn't matter for RBs in Standard scoring",
      "Pass-catching RBs get injured less",
      "It only matters in negative game script"
    ],
    tags: ["RB", "Receiving", "PPR"],
    difficulty: "advanced",
    prerequisites: ["pass-catching-back", "game-script", "ppr", "rb"]
  },

  // Playoffs
  {
    question: "What is 'playoff schedule' in fantasy football?",
    correctAnswer: "Strength of matchups in fantasy playoff weeks (15-17)",
    options: [
      "Strength of matchups in fantasy playoff weeks (15-17)",
      "When NFL teams clinch playoff spots",
      "Your team's record in weeks 15-17",
      "The NFL playoff bracket format"
    ],
    tags: ["Playoffs", "Schedule"],
    difficulty: "intermediate",
    defines: "playoff-schedule"
  },
  {
    question: "When should you trade for favorable playoff schedule?",
    correctAnswer: "Weeks 8-10 of the season",
    options: [
      "Weeks 8-10 of the season",
      "During the draft",
      "Weeks 15-17 (during playoffs)",
      "Week 1 of the season"
    ],
    tags: ["Playoffs", "Trading"],
    difficulty: "advanced",
    prerequisites: ["playoff-schedule"]
  },

  // Common Mistakes
  {
    question: "What is 'chasing points' in fantasy?",
    correctAnswer: "Starting a player because they had one big week",
    options: [
      "Starting a player because they had one big week",
      "Trading for high-scoring players",
      "Drafting players who scored a lot last year",
      "Setting your lineup based on projections"
    ],
    tags: ["Mistakes", "Psychology"],
    difficulty: "intermediate"
  },
  {
    question: "Why shouldn't you chase points?",
    correctAnswer: "Look at usage trends, not just one game's results",
    options: [
      "Look at usage trends, not just one game's results",
      "Points don't matter in fantasy football",
      "You should always chase points",
      "One big game guarantees future success"
    ],
    tags: ["Mistakes", "Psychology"],
    difficulty: "intermediate"
  },
  {
    question: "What is 'sunk cost fallacy' in fantasy football?",
    correctAnswer: "Holding a player just because you drafted them early",
    options: [
      "Holding a player just because you drafted them early",
      "Dropping players you drafted in late rounds",
      "Trading away your first-round pick",
      "Spending too much FAAB early in season"
    ],
    tags: ["Trading", "Psychology"],
    difficulty: "advanced"
  },
  {
    question: "Should you avoid players on bad NFL teams?",
    correctAnswer: "No - bad teams throw more when losing (helps WRs/QBs)",
    options: [
      "No - bad teams throw more when losing (helps WRs/QBs)",
      "Yes - bad teams never produce fantasy value",
      "Yes - only draft players from playoff teams",
      "No - RBs benefit most from bad teams"
    ],
    tags: ["Mistakes", "Team-Quality"],
    difficulty: "intermediate"
  }
];
