/**
 * Fantasy Football Strategy and Concepts for 2025
 * ONE FACT PER CARD
 */

import type { GeneratedFlashcard } from '../types';

export const fantasyStrategy: GeneratedFlashcard[] = [
  // Draft Strategy Basics
  { question: "What is the 'Zero RB' draft strategy?", answer: "Wait on RB in early rounds, load up on WR/TE instead", tags: ["Draft", "Strategy", "Zero-RB"], defines: "zero-rb" },
  { question: "Why does Zero RB strategy exist?", answer: "RBs get injured more frequently than WRs", tags: ["Draft", "Strategy", "Zero-RB"], prerequisites: ["zero-rb", "rb"] },
  { question: "What is the 'RB Dead Zone'?", answer: "Rounds 3-7 where RBs have similar projections but unpredictable outcomes", tags: ["Draft", "Strategy", "RB"] },
  { question: "What does 'PPR' stand for?", answer: "Points Per Reception", tags: ["Scoring", "PPR"] },
  { question: "How does PPR scoring change strategy?", answer: "Makes pass-catching RBs and slot WRs more valuable", tags: ["Scoring", "PPR", "Strategy"], prerequisites: ["ppr", "rb", "wr"] },
  { question: "When should you draft elite dual-threat QBs?", answer: "Rounds 2-4 for Josh Allen, Lamar Jackson, Jayden Daniels, Jalen Hurts", tags: ["Draft", "QB", "2025"], prerequisites: ["dual-threat-qb", "qb"] },
  { question: "When should you draft non-rushing QBs?", answer: "Round 8 or later - QB depth is strong in 2025", tags: ["Draft", "QB", "2025"] },
  { question: "What's the elite TE draft strategy for 2025?", answer: "Draft LaPorta, Bowers, or McBride in rounds 3-5 OR wait until round 10+", tags: ["Draft", "TE", "2025"] },
  { question: "What is 'draft capital'?", answer: "Where a player was selected in the NFL Draft", tags: ["Draft", "Rookies"] },
  { question: "Why does draft capital matter?", answer: "First-round picks get more opportunities and job security", tags: ["Draft", "Rookies"] },
  { question: "What is ADP?", answer: "Average Draft Position - where players are typically drafted", tags: ["Draft", "ADP"], defines: "adp" },
  { question: "How do you find value using ADP?", answer: "Target players performing above their ADP", tags: ["Draft", "ADP", "Value"], prerequisites: ["adp"] },

  // 2025 Specific
  { question: "Why is Ja'Marr Chase #1 overall in many 2025 drafts?", answer: "Triple Crown winner with elite QB connection", tags: ["Draft", "2025", "WR"] },
  { question: "Why is Saquon Barkley also #1 overall consideration?", answer: "2,000-yard season and Super Bowl champion", tags: ["Draft", "2025", "RB"] },
  { question: "Should you fade Travis Kelce in 2025?", answer: "Yes - age 36 with declining production", tags: ["Draft", "TE", "2025", "Fade"] },
  { question: "Is Jayden Daniels a top-5 QB for 2025?", answer: "Yes - OROY with historic dual-threat rookie stats", tags: ["QB", "2025"] },

  // Scoring
  { question: "What's the difference between PPR and Standard scoring?", answer: "PPR gives 1 point per reception, Standard gives 0", tags: ["Scoring", "PPR"] },
  { question: "How are passing TDs scored?", answer: "4 points per passing TD (sometimes 6)", tags: ["Scoring", "QB"] },
  { question: "How are rushing TDs scored?", answer: "6 points per rushing TD", tags: ["Scoring"] },
  { question: "What is a 'boom/bust' player?", answer: "Player with high variance - huge some weeks, terrible others", tags: ["Strategy", "Player-Types"] },
  { question: "What is a 'high floor' player?", answer: "Consistent player with predictable weekly production", tags: ["Strategy", "Player-Types"] },

  // Waiver Wire
  { question: "What is FAAB?", answer: "Free Agent Acquisition Budget - bid money on waiver players", tags: ["Waiver-Wire", "FAAB"], defines: "faab" },
  { question: "How much is typical FAAB budget?", answer: "$100 for the entire season", tags: ["Waiver-Wire", "FAAB"], prerequisites: ["faab"] },
  { question: "When should you spend big FAAB?", answer: "On bellcow RBs who get lead role due to injury", tags: ["Waiver-Wire", "FAAB"], prerequisites: ["faab", "bellcow-rb", "rb"] },
  { question: "Should you save FAAB for playoffs?", answer: "No - championships are won early with aggressive adds", tags: ["Waiver-Wire", "FAAB"], prerequisites: ["faab"] },
  { question: "What is a 'handcuff' RB?", answer: "Backup RB to your starter who becomes lead back if injury occurs", tags: ["Waiver-Wire", "Handcuff", "RB"], defines: "handcuff" },
  { question: "What is 'streaming'?", answer: "Rotating players weekly based on matchups instead of keeping one", tags: ["Strategy", "Streaming"], defines: "streaming" },
  { question: "What positions are best for streaming?", answer: "QB2, TE, and DST based on matchups", tags: ["Strategy", "Streaming"], prerequisites: ["streaming"] },

  // In-Season Strategy
  { question: "What does 'start your studs' mean?", answer: "Always start elite players regardless of matchup", tags: ["Strategy", "Lineup"] },
  { question: "When should you sell high on a player?", answer: "After big games, before their production declines", tags: ["Strategy", "Trading"], prerequisites: ["sell-high"] },
  { question: "What target share is considered elite?", answer: "25% or higher", tags: ["Stats", "Target-Share"], prerequisites: ["target-share"] },
  { question: "What snap count indicates a workhorse RB?", answer: "70% or higher of offensive snaps", tags: ["Stats", "Snap-Count", "RB"], prerequisites: ["snap-count", "rb"] },
  { question: "What snap count is concerning?", answer: "Under 50% means limited role", tags: ["Stats", "Snap-Count"], prerequisites: ["snap-count"] },
  { question: "Why does red zone usage matter?", answer: "Red zone touches lead to TD opportunities", tags: ["Stats", "Red-Zone", "TDs"], prerequisites: ["red-zone-usage", "red-zone"] },

  // Advanced Stats
  { question: "What do high air yards indicate?", answer: "Deep threat with big-play potential", tags: ["Stats", "Air-Yards"], prerequisites: ["air-yards"] },
  { question: "What opportunity share makes a bellcow RB?", answer: "70% or higher", tags: ["Stats", "Opportunity", "RB"], prerequisites: ["opportunity-share", "bellcow-rb", "rb"] },

  // Team Context
  { question: "Why do offensive line rankings matter for RBs?", answer: "Better O-lines create bigger holes and more rushing yards", tags: ["O-Line", "RB"], prerequisites: ["rb"] },
  { question: "What is 'positive game script'?", answer: "When a team is winning and runs the ball more", tags: ["Game-Script"], defines: "positive-game-script" },
  { question: "What is 'negative game script'?", answer: "When a team is losing and passes more", tags: ["Game-Script"], defines: "negative-game-script" },
  { question: "Why does RB receiving ability matter?", answer: "Pass-catching RBs stay on field regardless of game script", tags: ["RB", "Receiving", "PPR"], prerequisites: ["pass-catching-back", "game-script", "ppr", "rb"] },

  // Playoffs
  { question: "What is 'playoff schedule'?", answer: "Strength of matchups in fantasy playoff weeks (15-17)", tags: ["Playoffs", "Schedule"], defines: "playoff-schedule" },
  { question: "When should you trade for playoff schedule?", answer: "Weeks 8-10 of the season", tags: ["Playoffs", "Trading"], prerequisites: ["playoff-schedule"] },
  { question: "Do playoff-bound teams rest starters?", answer: "Yes - in weeks 17-18 if playoff spot is locked", tags: ["Playoffs", "Resting"] },

  // Common Mistakes
  { question: "What is 'chasing points'?", answer: "Starting a player because they had one big week", tags: ["Mistakes", "Psychology"] },
  { question: "Why shouldn't you chase points?", answer: "Look at usage trends, not just one game's results", tags: ["Mistakes", "Psychology"] },
  { question: "What is 'sunk cost fallacy' in fantasy?", answer: "Holding a player just because you drafted them early", tags: ["Trading", "Psychology"] },
  { question: "Should you avoid players on bad teams?", answer: "No - bad teams throw more when losing (helps WRs/QBs)", tags: ["Mistakes", "Team-Quality"] }
];
