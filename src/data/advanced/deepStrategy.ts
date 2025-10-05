/**
 * ADVANCED: Deep Strategy & Expert Concepts
 */

import type { GeneratedFlashcard } from '../../types';

export const deepStrategy: GeneratedFlashcard[] = [
  // Trade Timing
  { question: "What's the best time to trade underperforming 1st rounder?", answer: "Weeks 3-5 (before value completely tanks)", tags: ["ADVANCED", "Trading", "Timing"], difficulty: "advanced" },
  { question: "When do you trade away aging vets?", answer: "After good game in weeks 6-8 (sell high before decline)", tags: ["ADVANCED", "Trading"], difficulty: "advanced", prerequisites: ["sell-high"] },
  { question: "When should contenders trade picks for players?", answer: "Weeks 8-10 (go all-in if you're winning)", tags: ["ADVANCED", "Trading", "Dynasty"], difficulty: "advanced" },

  // Advanced Waiver
  { question: "What's the 'Wednesday waiver strategy'?", answer: "Add injured player's handcuff before others realize", tags: ["ADVANCED", "Waiver-Wire", "Handcuff"], difficulty: "advanced", prerequisites: ["handcuff", "waiver-wire"] },
  { question: "Should you blow #1 waiver priority on a breakout WR?", answer: "Depends - bellcow RB yes, WR maybe (RB scarcity higher)", tags: ["ADVANCED", "Waiver-Wire"], difficulty: "advanced" },
  { question: "What's 'rostering your opponent's players'?", answer: "Add your opponent's bench players so they can't use them", tags: ["ADVANCED", "Strategy", "Roster-Blocking"], difficulty: "advanced" },

  // Playoff Strategy
  { question: "Should you trade for injured star in week 10?", answer: "Yes if getting playoff discount (owner giving up)", tags: ["ADVANCED", "Trading", "Playoffs"], difficulty: "advanced" },
  { question: "What's more important: regular season or playoff roster?", answer: "Playoff roster (championships won in weeks 15-17)", tags: ["ADVANCED", "Playoffs", "Strategy"], difficulty: "advanced" },
  { question: "Should you rest starters if you've clinched bye?", answer: "No - in fantasy, always play your best (no bye in fantasy playoffs)", tags: ["ADVANCED", "Playoffs"], difficulty: "advanced" },

  // Salary Cap / Auction
  { question: "In auction drafts, what % of budget for top RB?", answer: "35-45% for elite bellcow (Saquon, Bijan)", tags: ["ADVANCED", "Auction", "Draft"], difficulty: "advanced", prerequisites: ["bellcow-rb", "rb"] },
  { question: "What's 'stars and scrubs' auction strategy?", answer: "Spend big on 2-3 stars, fill roster with $1 players", tags: ["ADVANCED", "Auction", "Strategy"], difficulty: "advanced" },
  { question: "What's 'balanced roster' auction strategy?", answer: "Spread budget evenly for depth at all positions", tags: ["ADVANCED", "Auction", "Strategy"], difficulty: "advanced" },

  // Dynasty / Keeper
  { question: "In dynasty, should you trade picks for win-now players?", answer: "Only if you're contending (top 3 team)", tags: ["ADVANCED", "Dynasty", "Trading"], difficulty: "advanced" },
  { question: "What age do RBs typically decline?", answer: "Age 28-30 (trade before decline)", tags: ["ADVANCED", "Dynasty", "RB", "Age"], difficulty: "advanced" },
  { question: "What age do WRs typically decline?", answer: "Age 30-32 (longer career than RBs)", tags: ["ADVANCED", "Dynasty", "WR", "Age"], difficulty: "advanced" },

  // Analytics Deep Dive
  { question: "What's 'expected fantasy points' (xFP)?", answer: "Points a player should score based on usage/opportunity", tags: ["ADVANCED", "Analytics", "xFP"], difficulty: "advanced", prerequisites: ["expected-fantasy-points"] },
  { question: "What does 'regression to the mean' predict?", answer: "Players with unsustainable TD rates will decline", tags: ["ADVANCED", "Analytics", "Regression"], difficulty: "advanced", prerequisites: ["regression", "touchdown-regression"] },
  { question: "Why is 'target share' better than raw targets?", answer: "Accounts for team pass volume (10 of 30 targets > 12 of 50)", tags: ["ADVANCED", "Analytics", "Target-Share"], difficulty: "advanced", prerequisites: ["target-share"] },

  // Meta Strategy
  { question: "What's 'league winner upside'?", answer: "Players with path to RB1/WR1 if situation changes", tags: ["ADVANCED", "Waiver-Wire", "Strategy"], difficulty: "advanced" },
  { question: "What's 'anchoring bias' in fantasy?", answer: "Overvaluing players based on previous seasons, not current situation", tags: ["ADVANCED", "Psychology"], difficulty: "advanced" },
  { question: "What's 'recency bias'?", answer: "Overreacting to last week's performance, ignoring larger sample", tags: ["ADVANCED", "Psychology"], difficulty: "advanced" }
];
