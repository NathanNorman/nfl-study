/**
 * NFL TERMINOLOGY - Comprehensive glossary organized by category
 * All difficulty levels - terms every NFL fan should know
 */

// OFFENSIVE TERMINOLOGY
export const offensiveTerms = [
  // Beginner - Foundation terms
  { question: "What is a 'snap'?", answer: "When the center passes the ball between his legs to start a play", tags: ["Terminology", "Offense", "Snap"], difficulty: "beginner", defines: "snap" },
  { question: "What is 'play action'?", answer: "When the QB fakes a handoff to the RB before passing", tags: ["Terminology", "Offense", "Play-Action"], difficulty: "beginner", defines: "play-action" },
  { question: "What is a 'screen pass'?", answer: "Short pass to RB or WR with blockers in front", tags: ["Terminology", "Offense", "Screen"], difficulty: "beginner", defines: "screen-pass" },
  { question: "What is 'audible'?", answer: "When QB changes the play at the line of scrimmage", tags: ["Terminology", "Offense", "Audible"], difficulty: "beginner", defines: "audible" },
  { question: "What is 'hard count'?", answer: "QB uses voice inflection to try to draw defense offsides", tags: ["Terminology", "Offense", "Hard-Count"], difficulty: "beginner", defines: "hard-count" },
  { question: "What is a 'draw play'?", answer: "QB drops back like a pass, then hands off to RB (tricks defense)", tags: ["Terminology", "Offense", "Draw"], difficulty: "beginner", defines: "draw-play" },

  // Intermediate - Uses beginner concepts
  { question: "What is 'RPO'?", answer: "Run-Pass Option - QB reads defense and chooses run or pass", tags: ["Terminology", "Offense", "RPO"], difficulty: "intermediate", defines: "rpo" },
  { question: "What is 'pre-snap motion'?", answer: "Offensive player moving before the snap to create matchup advantages", tags: ["Terminology", "Offense", "Motion"], difficulty: "intermediate", defines: "pre-snap-motion" },
  { question: "What is 'max protect'?", answer: "Using extra blockers (RB, TE) to protect QB for deep pass", tags: ["Terminology", "Offense", "Protection"], difficulty: "intermediate", defines: "max-protect" },
  { question: "What is 'empty backfield'?", answer: "No RB behind QB - all 5 eligible receivers spread out", tags: ["Terminology", "Offense", "Empty"], difficulty: "intermediate", defines: "empty-backfield" },
  { question: "What is 'bunch formation'?", answer: "Multiple receivers lined up close together on same side", tags: ["Terminology", "Offense", "Bunch"], difficulty: "intermediate", defines: "bunch-formation" },
  { question: "What is 'trips formation'?", answer: "Three receivers lined up on the same side", tags: ["Terminology", "Offense", "Trips"], difficulty: "intermediate", defines: "trips-formation" },

  // Advanced
  { question: "What is 'tackle eligible'?", answer: "Offensive tackle reports as eligible receiver (rare trick play)", tags: ["Terminology", "Offense", "Trick-Play"], difficulty: "advanced", defines: "tackle-eligible" },
  { question: "What is 'play clock'?", answer: "40 seconds to snap ball (25 seconds after penalties/timeouts)", tags: ["Terminology", "Offense", "Clock"], difficulty: "advanced", defines: "play-clock" }
];

// DEFENSIVE TERMINOLOGY
export const defensiveTerms = [
  // Beginner
  { question: "What is 'man coverage'?", answer: "Each defender covers a specific offensive player", tags: ["Terminology", "Defense", "Coverage"], difficulty: "beginner", defines: "man-coverage" },
  { question: "What is 'zone coverage'?", answer: "Each defender covers an area of the field, not a specific player", tags: ["Terminology", "Defense", "Coverage"], difficulty: "beginner", defines: "zone-coverage" },
  { question: "What is a 'blitz'?", answer: "Sending extra defenders to rush the QB", tags: ["Terminology", "Defense", "Blitz"], difficulty: "beginner", defines: "blitz" },
  { question: "What is 'coverage'?", answer: "How defenders guard receivers to prevent passes", tags: ["Terminology", "Defense", "Coverage"], difficulty: "beginner", defines: "coverage" },
  { question: "What is a 'pick-six'?", answer: "Interception returned for a touchdown (6 points)", tags: ["Terminology", "Defense", "INT", "TD"], difficulty: "beginner", defines: "pick-six" },
  { question: "What is 'prevent defense'?", answer: "Defenders play deep to prevent long TDs, allows short gains", tags: ["Terminology", "Defense", "Prevent"], difficulty: "beginner", defines: "prevent-defense" },

  // Intermediate
  { question: "What is 'Cover 2'?", answer: "Zone defense with 2 safeties covering deep halves of field", tags: ["Terminology", "Defense", "Coverage", "Cover-2"], difficulty: "intermediate", defines: "cover-2" },
  { question: "What is 'Cover 3'?", answer: "Zone defense with 3 defenders (usually safeties + CB) covering deep thirds", tags: ["Terminology", "Defense", "Coverage", "Cover-3"], difficulty: "intermediate", defines: "cover-3" },
  { question: "What is 'nickel defense'?", answer: "5 defensive backs (extra CB replaces LB) - used against passing", tags: ["Terminology", "Defense", "Nickel"], difficulty: "intermediate", defines: "nickel-defense" },
  { question: "What is 'dime defense'?", answer: "6 defensive backs (2 extra CBs) - heavy pass defense", tags: ["Terminology", "Defense", "Dime"], difficulty: "intermediate", defines: "dime-defense" },
  { question: "What is 'QB spy'?", answer: "Defender assigned to watch QB and prevent scrambles", tags: ["Terminology", "Defense", "Spy"], difficulty: "intermediate", defines: "qb-spy" },
  { question: "What is 'contain'?", answer: "Defenders keep QB/RB inside, don't let them get to edge", tags: ["Terminology", "Defense", "Contain"], difficulty: "intermediate", defines: "contain" },
  { question: "What is 'gap discipline'?", answer: "Each defender responsible for specific gap to stop runs", tags: ["Terminology", "Defense", "Gap"], difficulty: "intermediate", defines: "gap-discipline" },

  // Advanced
  { question: "What is 'Cover 0'?", answer: "All-out blitz with no deep safety help (pure man coverage)", tags: ["Terminology", "Defense", "Coverage", "Cover-0"], difficulty: "advanced", defines: "cover-0" },
  { question: "What is 'Cover 1 Robber'?", answer: "Man coverage with 1 safety reading QB's eyes to jump routes", tags: ["Terminology", "Defense", "Coverage"], difficulty: "advanced", defines: "cover-1" },
  { question: "What is 'Tampa 2'?", answer: "Cover 2 variant where MLB drops deep middle (invented by Bucs)", tags: ["Terminology", "Defense", "Coverage", "Tampa-2"], difficulty: "advanced", defines: "tampa-2" }
];

// SPECIAL TEAMS TERMINOLOGY
export const specialTeamsTerms = [
  // Beginner
  { question: "What is a 'touchback'?", answer: "Kickoff goes into end zone, receiving team starts at 25-yard line", tags: ["Terminology", "Special-Teams", "Touchback"], difficulty: "beginner", defines: "touchback" },
  { question: "What is 'onside kick'?", answer: "Short kickoff trying to recover the ball (used when losing late)", tags: ["Terminology", "Special-Teams", "Onside"], difficulty: "beginner", defines: "onside-kick" },
  { question: "What is a 'fair catch'?", answer: "Player signals they won't run after catching punt (can't be tackled)", tags: ["Terminology", "Special-Teams", "Fair-Catch"], difficulty: "beginner", defines: "fair-catch" },
  { question: "What is 'punt return'?", answer: "Catching a punt and running it back toward opponent's end zone", tags: ["Terminology", "Special-Teams", "Punt"], difficulty: "beginner", defines: "punt-return" },

  // Intermediate
  { question: "What is 'coffin corner'?", answer: "Punting out of bounds near opponent's goal line", tags: ["Terminology", "Special-Teams", "Punt"], difficulty: "intermediate", defines: "coffin-corner" },
  { question: "What is 'fake punt'?", answer: "Instead of punting, team runs or passes (trick play)", tags: ["Terminology", "Special-Teams", "Trick-Play"], difficulty: "intermediate", defines: "fake-punt" },
  { question: "What is 'pooch kick'?", answer: "High, short kickoff to prevent long returns", tags: ["Terminology", "Special-Teams", "Kickoff"], difficulty: "intermediate", defines: "pooch-kick" }
];

// GENERAL GAME TERMINOLOGY
export const generalTerms = [
  // Beginner
  { question: "What is 'line of scrimmage'?", answer: "Imaginary line where the ball is placed at start of play", tags: ["Terminology", "General", "LOS"], difficulty: "beginner", defines: "line-of-scrimmage" },
  { question: "What is 'neutral zone'?", answer: "Space between offensive and defensive lines (length of football)", tags: ["Terminology", "General", "Neutral-Zone"], difficulty: "beginner", defines: "neutral-zone" },
  { question: "What is 'snap count'?", answer: "Words/signals QB uses to tell center when to snap the ball", tags: ["Terminology", "General", "Snap"], difficulty: "beginner", defines: "snap-count-term" },
  { question: "What is 'hurry-up offense'?", answer: "Running plays quickly without huddle to save time", tags: ["Terminology", "General", "Hurry-Up"], difficulty: "beginner", defines: "hurry-up-offense" },
  { question: "What is 'two-minute warning'?", answer: "Automatic timeout when 2 minutes left in each half", tags: ["Terminology", "General", "Two-Minute"], difficulty: "beginner", defines: "two-minute-warning" },
  { question: "What is 'overtime'?", answer: "Extra period if game is tied - first to score wins (modified sudden death)", tags: ["Terminology", "General", "OT"], difficulty: "beginner", defines: "overtime" },
  { question: "What is 'instant replay'?", answer: "Officials review video to overturn or confirm calls", tags: ["Terminology", "General", "Replay"], difficulty: "beginner", defines: "instant-replay" },
  { question: "What is 'challenge flag'?", answer: "Red flag coaches throw to challenge a referee's call", tags: ["Terminology", "General", "Challenge"], difficulty: "beginner", defines: "challenge-flag" },

  // Intermediate
  { question: "What is 'going for it'?", answer: "Running a play on 4th down instead of punting/kicking", tags: ["Terminology", "General", "4th-Down"], difficulty: "intermediate", defines: "going-for-it" },
  { question: "What is 'icing the kicker'?", answer: "Calling timeout right before field goal to pressure kicker", tags: ["Terminology", "General", "Timeout"], difficulty: "intermediate", defines: "icing-the-kicker" },
  { question: "What is 'garbage time'?", answer: "Late in blowout game - losing team throws a lot, stats are misleading", tags: ["Terminology", "General", "Garbage-Time"], difficulty: "intermediate", defines: "garbage-time" },
  { question: "What is 'clock management'?", answer: "Strategic use of timeouts, running vs passing to control game clock", tags: ["Terminology", "General", "Clock"], difficulty: "intermediate", defines: "clock-management" },
  { question: "What is 'taking a knee'?", answer: "QB kneels down to run clock when winning late in game", tags: ["Terminology", "General", "Victory-Formation"], difficulty: "intermediate", defines: "taking-a-knee" },

  // Advanced
  { question: "What is 'game script'?", answer: "How the score affects play-calling (winning = run, losing = pass)", tags: ["Terminology", "General", "Game-Script"], difficulty: "advanced", defines: "game-script" },
  { question: "What is 'neutral game script'?", answer: "Score is close, teams run balanced offense (best for RBs)", tags: ["Terminology", "General", "Game-Script"], difficulty: "advanced", defines: "neutral-game-script" }
];

// FANTASY FOOTBALL TERMINOLOGY
export const fantasyTerms = [
  // Beginner
  { question: "What is 'PPR'?", answer: "Points Per Reception - league scoring where catches earn points", tags: ["Terminology", "Fantasy", "PPR"], difficulty: "beginner", defines: "ppr" },
  { question: "What is 'standard scoring'?", answer: "Non-PPR scoring - no points for receptions, only yards/TDs", tags: ["Terminology", "Fantasy", "Scoring"], difficulty: "beginner", defines: "standard-scoring" },
  { question: "What is 'half-PPR'?", answer: "0.5 points per reception (middle ground between standard and full PPR)", tags: ["Terminology", "Fantasy", "PPR"], difficulty: "beginner", defines: "half-ppr" },
  { question: "What is 'waiver wire'?", answer: "Pool of free agent players you can add to your team", tags: ["Terminology", "Fantasy", "Waivers"], difficulty: "beginner", defines: "waiver-wire" },
  { question: "What is 'starting lineup'?", answer: "Players in your active roster who score points each week", tags: ["Terminology", "Fantasy", "Lineup"], difficulty: "beginner", defines: "starting-lineup" },
  { question: "What is 'bench'?", answer: "Players on your team who don't score points (backups/bye week fills)", tags: ["Terminology", "Fantasy", "Bench"], difficulty: "beginner", defines: "bench" },

  // Intermediate
  { question: "What is a 'handcuff' in fantasy football?", answer: "A backup RB you draft to protect your starter. If your RB1 gets injured, the handcuff becomes the starter and has immediate value.", tags: ["Terminology", "Fantasy", "Handcuff"], difficulty: "intermediate", defines: "handcuff" },
  { question: "What is 'FAAB'?", answer: "Free Agent Acquisition Budget - waiver wire bidding money", tags: ["Terminology", "Fantasy", "FAAB"], difficulty: "intermediate", defines: "faab" },
  { question: "What is 'ADP'?", answer: "Average Draft Position - where players typically get drafted", tags: ["Terminology", "Fantasy", "ADP"], difficulty: "intermediate", defines: "adp" },
  { question: "What is 'boom/bust player'?", answer: "Player with huge upside but inconsistent week-to-week", tags: ["Terminology", "Fantasy", "Boom-Bust"], difficulty: "intermediate", defines: "boom-bust" },
  { question: "What is 'floor'?", answer: "Player's minimum expected points in a bad week", tags: ["Terminology", "Fantasy", "Floor"], difficulty: "intermediate", defines: "floor" },
  { question: "What is 'ceiling'?", answer: "Player's maximum expected points in a great week", tags: ["Terminology", "Fantasy", "Ceiling"], difficulty: "intermediate", defines: "ceiling" },
  { question: "What is 'league winner'?", answer: "Waiver wire pickup who wins you the championship (late-season breakout)", tags: ["Terminology", "Fantasy", "League-Winner"], difficulty: "intermediate", defines: "league-winner" },
  { question: "What is 'streaming'?", answer: "Picking up different QB/DEF each week based on matchups", tags: ["Terminology", "Fantasy", "Streaming"], difficulty: "intermediate", defines: "streaming" },
  { question: "What is 'stash'?", answer: "Holding injured/suspended player on bench for later value", tags: ["Terminology", "Fantasy", "Stash"], difficulty: "intermediate", defines: "stash" },

  // Advanced
  { question: "What is 'Zero RB strategy'?", answer: "Draft WRs early, wait on RBs until later rounds (exploits RB scarcity)", tags: ["Terminology", "Fantasy", "Zero-RB"], difficulty: "advanced", defines: "zero-rb" },
  { question: "What is 'Hero RB strategy'?", answer: "Draft one elite RB early, then load up on WRs", tags: ["Terminology", "Fantasy", "Hero-RB"], difficulty: "advanced", defines: "hero-rb" },
  { question: "What is 'late-round QB strategy'?", answer: "Waiting until rounds 8-12 to draft QB (they're replaceable)", tags: ["Terminology", "Fantasy", "QB-Strategy"], difficulty: "advanced", defines: "late-round-qb" },
  { question: "What is 'anchor RB'?", answer: "Your RB1 - the cornerstone of your team", tags: ["Terminology", "Fantasy", "Anchor"], difficulty: "advanced", defines: "anchor-rb" },
  { question: "What is 'smash spot'?", answer: "Extremely favorable matchup (weak defense, high game total)", tags: ["Terminology", "Fantasy", "Matchup"], difficulty: "advanced", defines: "smash-spot" },
  { question: "What is 'regression candidate'?", answer: "Player who overperformed and likely to decline", tags: ["Terminology", "Fantasy", "Regression"], difficulty: "advanced", defines: "regression" },
  { question: "What is 'positive regression'?", answer: "Player underperformed due to bad luck, should improve", tags: ["Terminology", "Fantasy", "Regression"], difficulty: "advanced", defines: "positive-regression" }
];

// ANALYTICS TERMINOLOGY
export const analyticsTerms = [
  // Intermediate
  { question: "What is 'target share'?", answer: "Percentage of team's targets going to a specific receiver", tags: ["Terminology", "Analytics", "Target-Share"], difficulty: "intermediate", defines: "target-share" },
  { question: "What is 'snap count'?", answer: "Percentage of offensive plays player is on field", tags: ["Terminology", "Analytics", "Snaps"], difficulty: "intermediate", defines: "snap-count" },
  { question: "What is 'red zone usage'?", answer: "How often player gets touches inside opponent's 20-yard line", tags: ["Terminology", "Analytics", "Red-Zone"], difficulty: "intermediate", defines: "red-zone-usage" },
  { question: "What is 'route participation'?", answer: "Percentage of pass plays where receiver runs a route", tags: ["Terminology", "Analytics", "Routes"], difficulty: "intermediate", defines: "route-participation" },

  // Advanced
  { question: "What is 'air yards'?", answer: "Distance ball travels in air on passes (deeper = higher upside)", tags: ["Terminology", "Analytics", "Air-Yards"], difficulty: "advanced", defines: "air-yards" },
  { question: "What is 'YAC'?", answer: "Yards After Catch - how many yards gained after catching ball", tags: ["Terminology", "Analytics", "YAC"], difficulty: "advanced", defines: "yac" },
  { question: "What is 'opportunity share'?", answer: "Percentage of team's rush attempts + targets going to player", tags: ["Terminology", "Analytics", "Opportunity"], difficulty: "advanced", defines: "opportunity-share" },
  { question: "What is 'target premium'?", answer: "In PPR, each target is valuable even without a catch", tags: ["Terminology", "Analytics", "Targets"], difficulty: "advanced", defines: "target-premium" },
  { question: "What is 'expected fantasy points (xFP)'?", answer: "What a player should score based on volume/usage (vs actual points)", tags: ["Terminology", "Analytics", "xFP"], difficulty: "advanced", defines: "expected-fantasy-points" },
  { question: "What is 'touchdown regression'?", answer: "TDs are fluky - players with many TDs likely to score fewer next year", tags: ["Terminology", "Analytics", "Regression"], difficulty: "advanced", defines: "touchdown-regression" }
];

// STRATEGY TERMINOLOGY
export const strategyTerms = [
  // Intermediate
  { question: "What is 'buy low'?", answer: "Trading for undervalued player before they break out", tags: ["Terminology", "Strategy", "Trading"], difficulty: "intermediate", defines: "buy-low" },
  { question: "What is 'sell high'?", answer: "Trading away player at peak value before decline", tags: ["Terminology", "Strategy", "Trading"], difficulty: "intermediate", defines: "sell-high" },
  { question: "What is 'championship upside'?", answer: "Player's ceiling in playoffs (willing to risk inconsistency)", tags: ["Terminology", "Strategy", "Playoffs"], difficulty: "intermediate", defines: "championship-upside" },
  { question: "What is 'playoff schedule'?", answer: "Weeks 15-17 matchups for fantasy playoffs", tags: ["Terminology", "Strategy", "Playoffs"], difficulty: "intermediate", defines: "playoff-schedule" },
  { question: "What is 'stack'?", answer: "Drafting QB + WR from same team (points correlate)", tags: ["Terminology", "Strategy", "Stacking"], difficulty: "intermediate", defines: "stack" },
  { question: "What is 'game stack'?", answer: "Drafting players from both teams in same game (high scoring = more points)", tags: ["Terminology", "Strategy", "Stacking"], difficulty: "intermediate", defines: "game-stack" },

  // Advanced
  { question: "What is 'roster churn'?", answer: "Constantly adding/dropping players to find value (active strategy)", tags: ["Terminology", "Strategy", "Churn"], difficulty: "advanced", defines: "roster-churn" },
  { question: "What is 'handcuff lottery'?", answer: "Rostering multiple backup RBs hoping one becomes starter", tags: ["Terminology", "Strategy", "Handcuff"], difficulty: "advanced", defines: "handcuff-lottery" },
  { question: "What is 'late-season breakout'?", answer: "Player who emerges as valuable in weeks 10-14 (league winner potential)", tags: ["Terminology", "Strategy", "Breakout"], difficulty: "advanced", defines: "late-season-breakout" },
  { question: "What is 'championship roster construction'?", answer: "Building team with high upside players for weeks 15-17", tags: ["Terminology", "Strategy", "Playoffs"], difficulty: "advanced", defines: "championship-roster-construction" }
];

// POSITION-SPECIFIC TERMINOLOGY
export const positionTerms = [
  // Beginner
  { question: "What is 'dual-threat QB'?", answer: "QB who can both pass and run effectively", tags: ["Terminology", "QB", "Dual-Threat"], difficulty: "beginner", defines: "dual-threat-qb" },
  { question: "What is a 'pocket passer'?", answer: "QB who throws from the pocket, doesn't run much", tags: ["Terminology", "QB", "Pocket-Passer"], difficulty: "beginner", defines: "pocket-passer" },
  { question: "What is a 'bellcow RB'?", answer: "RB who handles most touches (20+ carries per game)", tags: ["Terminology", "RB", "Bellcow"], difficulty: "beginner", defines: "bellcow-rb" },
  { question: "What is 'RBBC'?", answer: "Running Back By Committee - multiple RBs share touches", tags: ["Terminology", "RB", "RBBC"], difficulty: "beginner", defines: "rbbc" },
  { question: "What is 'WR1'?", answer: "Team's top receiver who gets most targets", tags: ["Terminology", "WR", "WR1"], difficulty: "beginner", defines: "wr1" },
  { question: "What is 'slot receiver'?", answer: "WR who lines up between tackle and outside WR (usually quicker routes)", tags: ["Terminology", "WR", "Slot"], difficulty: "beginner", defines: "slot-receiver" },

  // Intermediate
  { question: "What is '3-down back'?", answer: "RB who plays on all three downs (rushing, receiving, pass blocking)", tags: ["Terminology", "RB", "3-Down"], difficulty: "intermediate", defines: "three-down-back" },
  { question: "What is 'pass-catching back'?", answer: "RB valuable for receiving (PPR gold)", tags: ["Terminology", "RB", "Receiving"], difficulty: "intermediate", defines: "pass-catching-back" },
  { question: "What is 'goal-line back'?", answer: "RB who only gets carries near end zone (TD vulture)", tags: ["Terminology", "RB", "Goal-Line"], difficulty: "intermediate", defines: "goal-line-back" },
  { question: "What is 'alpha WR'?", answer: "True WR1 with elite target share (25%+ of team's targets)", tags: ["Terminology", "WR", "Alpha"], difficulty: "intermediate", defines: "alpha-wr" },
  { question: "What is 'contested catch receiver'?", answer: "WR who wins jump balls and physical 50/50 catches", tags: ["Terminology", "WR", "Contested"], difficulty: "intermediate", defines: "contested-catch-receiver" },
  { question: "What is 'YAC receiver'?", answer: "WR who gains lots of yards after the catch (speed/elusiveness)", tags: ["Terminology", "WR", "YAC"], difficulty: "intermediate", defines: "yac-receiver" },

  // Advanced
  { question: "What is 'pass-game coordinator role'?", answer: "TE who runs routes 80%+ of snaps (TE1 value in fantasy)", tags: ["Terminology", "TE", "Usage"], difficulty: "advanced", defines: "pass-game-coordinator" },
  { question: "What is 'move TE'?", answer: "TE who lines up in slot/outside like WR (creates mismatches)", tags: ["Terminology", "TE", "Move-TE"], difficulty: "advanced", defines: "move-te" }
];

// Export all terminology organized by difficulty
export const allTerminology = [
  ...offensiveTerms,
  ...defensiveTerms,
  ...specialTeamsTerms,
  ...generalTerms,
  ...fantasyTerms,
  ...analyticsTerms,
  ...strategyTerms,
  ...positionTerms
];

export const terminologyByDifficulty = {
  beginner: allTerminology.filter(term => term.difficulty === 'beginner'),
  intermediate: allTerminology.filter(term => term.difficulty === 'intermediate'),
  advanced: allTerminology.filter(term => term.difficulty === 'advanced')
};
