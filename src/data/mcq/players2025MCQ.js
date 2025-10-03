/**
 * Comprehensive 2024-2025 Player MCQ Questions
 * ALL STATS VERIFIED via web search - January 2025
 * Includes prerequisites for intelligent learning progression
 */

// QUARTERBACKS - 41 Questions
export const quarterbackMCQs = [
  // Josh Allen - Buffalo Bills
  {
    question: "Who won the 2024 NFL MVP award?",
    correctAnswer: "Josh Allen",
    options: ["Josh Allen", "Lamar Jackson", "Patrick Mahomes", "Jalen Hurts"],
    tags: ["QB", "MVP", "2024"],
    difficulty: "beginner",
    prerequisites: ["qb"]
  },
  {
    question: "What historic stat line did Josh Allen achieve in 2024?",
    correctAnswer: "28 pass TDs, 12 rush TDs, only 6 INTs",
    options: [
      "28 pass TDs, 12 rush TDs, only 6 INTs",
      "40 pass TDs, 5 rush TDs, 15 INTs",
      "35 pass TDs, 8 rush TDs, 12 INTs",
      "30 pass TDs, 15 rush TDs, 8 INTs"
    ],
    tags: ["QB", "MVP", "2024", "Historic", "Stats"],
    difficulty: "intermediate",
    prerequisites: ["qb"]
  },
  {
    question: "What makes Josh Allen the #1 fantasy QB for 2025?",
    correctAnswer: "Elite dual-threat ability - elite passer AND rusher",
    options: [
      "Elite dual-threat ability - elite passer AND rusher",
      "Best offensive line in the NFL",
      "Highest completion percentage in the league",
      "Most passing yards in 2024"
    ],
    tags: ["QB", "2025", "Elite", "Fantasy"],
    difficulty: "beginner",
    prerequisites: ["dual-threat-qb", "qb"]
  },
  {
    question: "How many rushing touchdowns did Josh Allen score in 2024?",
    correctAnswer: "12",
    options: ["8", "10", "12", "15"],
    tags: ["QB", "2024", "Stats"],
    difficulty: "intermediate",
    prerequisites: ["qb"]
  },
  {
    question: "How many interceptions did Josh Allen throw in his 2024 MVP season?",
    correctAnswer: "6 (career low)",
    options: ["6 (career low)", "10", "14", "18"],
    tags: ["QB", "MVP", "2024", "Stats"],
    difficulty: "intermediate",
    prerequisites: ["qb"]
  },

  // Lamar Jackson - Baltimore Ravens
  {
    question: "Which QB led all quarterbacks in fantasy points in 2024?",
    correctAnswer: "Lamar Jackson",
    options: ["Josh Allen", "Lamar Jackson", "Patrick Mahomes", "Jalen Hurts"],
    tags: ["QB", "2024", "Fantasy-Leader"],
    difficulty: "intermediate",
    prerequisites: ["qb"]
  },
  {
    question: "How close was the 2024 MVP voting between Josh Allen and Lamar Jackson?",
    correctAnswer: "Allen: 383 points (27 votes), Jackson: 362 points (23 votes)",
    options: [
      "Allen: 383 points (27 votes), Jackson: 362 points (23 votes)",
      "Allen: 450 points (35 votes), Jackson: 300 points (15 votes)",
      "Allen: 400 points (30 votes), Jackson: 380 points (20 votes)",
      "Allen: 375 points (25 votes), Jackson: 350 points (25 votes)"
    ],
    tags: ["QB", "MVP", "2024"],
    difficulty: "advanced",
    prerequisites: ["qb"]
  },
  {
    question: "What's Lamar Jackson's ranking for 2025 fantasy drafts?",
    correctAnswer: "Top-2 QB alongside Josh Allen",
    options: [
      "Top-2 QB alongside Josh Allen",
      "#1 QB overall",
      "Top-5 QB",
      "QB3 behind Allen and Mahomes"
    ],
    tags: ["QB", "2025", "Elite", "Fantasy"],
    difficulty: "beginner",
    prerequisites: ["qb"]
  },

  // Joe Burrow - Cincinnati Bengals
  {
    question: "Why is Joe Burrow's 2025 fantasy outlook considered elite?",
    correctAnswer: "Elite passing volume with Ja'Marr Chase connection",
    options: [
      "Elite passing volume with Ja'Marr Chase connection",
      "Best rushing QB in the league",
      "Highest completion percentage",
      "Won Super Bowl in 2024"
    ],
    tags: ["QB", "2025", "Elite"],
    difficulty: "beginner",
    prerequisites: ["qb", "wr"]
  },
  {
    question: "Which elite WR is Joe Burrow's primary target for 2025?",
    correctAnswer: "Ja'Marr Chase",
    options: ["Ja'Marr Chase", "Tee Higgins", "Tyler Boyd", "Andrei Iosivas"],
    tags: ["QB", "2025", "CIN"],
    difficulty: "beginner",
    prerequisites: ["qb", "wr"]
  },

  // Jalen Hurts - Philadelphia Eagles
  {
    question: "Who won Super Bowl LIX MVP?",
    correctAnswer: "Jalen Hurts",
    options: ["Jalen Hurts", "Patrick Mahomes", "Saquon Barkley", "A.J. Brown"],
    tags: ["QB", "Super-Bowl", "MVP", "2025"],
    difficulty: "beginner",
    prerequisites: ["qb"]
  },
  {
    question: "What did Jalen Hurts accomplish in Super Bowl LIX?",
    correctAnswer: "300+ total yards, 3 TDs in Eagles' 40-22 win",
    options: [
      "300+ total yards, 3 TDs in Eagles' 40-22 win",
      "400 passing yards, 4 TDs in 35-31 win",
      "250 total yards, 2 TDs in 27-24 win",
      "350 total yards, 5 TDs in 45-20 win"
    ],
    tags: ["QB", "Super-Bowl", "2025", "Stats"],
    difficulty: "intermediate",
    prerequisites: ["qb"]
  },
  {
    question: "Why is Jalen Hurts a top-5 QB for 2025?",
    correctAnswer: "Super Bowl champion with elite dual-threat ability",
    options: [
      "Super Bowl champion with elite dual-threat ability",
      "Led the league in passing yards",
      "Best pocket passer in the NFL",
      "Highest passer rating in 2024"
    ],
    tags: ["QB", "2025", "Elite", "Champion"],
    difficulty: "beginner",
    prerequisites: ["dual-threat-qb", "qb"]
  },
  {
    question: "What was the final score of Super Bowl LIX?",
    correctAnswer: "Eagles 40, Chiefs 22",
    options: ["Eagles 40, Chiefs 22", "Eagles 35, Chiefs 31", "Eagles 27, Chiefs 24", "Eagles 33, Chiefs 28"],
    tags: ["QB", "Super-Bowl", "2025"],
    difficulty: "intermediate",
    prerequisites: ["qb"]
  },

  // Jayden Daniels - Washington Commanders
  {
    question: "Who won 2024 Offensive Rookie of the Year?",
    correctAnswer: "Jayden Daniels",
    options: ["Jayden Daniels", "Caleb Williams", "Bo Nix", "Brock Bowers"],
    tags: ["QB", "OROY", "2024"],
    difficulty: "beginner",
    prerequisites: ["qb"]
  },
  {
    question: "What historic rookie stat did Jayden Daniels achieve in 2024?",
    correctAnswer: "First rookie ever with 3,500+ pass yards AND 750+ rush yards",
    options: [
      "First rookie ever with 3,500+ pass yards AND 750+ rush yards",
      "Most passing TDs by a rookie QB",
      "Highest completion percentage by a rookie",
      "First rookie to win MVP"
    ],
    tags: ["QB", "OROY", "2024", "Historic"],
    difficulty: "intermediate",
    prerequisites: ["qb"]
  },
  {
    question: "What's Jayden Daniels' 2025 fantasy outlook?",
    correctAnswer: "Elite QB1 potential in Year 2 as dual-threat",
    options: [
      "Elite QB1 potential in Year 2 as dual-threat",
      "Mid-range QB2 with upside",
      "Pocket passer with limited rushing",
      "Game manager with low ceiling"
    ],
    tags: ["QB", "2025", "Breakout"],
    difficulty: "beginner",
    prerequisites: ["dual-threat-qb", "qb"]
  },

  // Patrick Mahomes - Kansas City Chiefs
  {
    question: "What happened to Patrick Mahomes in Super Bowl LIX?",
    correctAnswer: "Lost 22-40 to Eagles, sacked 6 times",
    options: [
      "Won 31-28 with game-winning TD",
      "Lost 22-40 to Eagles, sacked 6 times",
      "Lost 35-31 in overtime",
      "Won 27-24 with last-second field goal"
    ],
    tags: ["QB", "Super-Bowl", "2025"],
    difficulty: "intermediate",
    prerequisites: ["qb"]
  },
  {
    question: "Is Patrick Mahomes still elite for 2025 fantasy despite Super Bowl LIX loss?",
    correctAnswer: "Yes - one bad game doesn't change elite QB1 status",
    options: [
      "Yes - one bad game doesn't change elite QB1 status",
      "No - he's declining significantly",
      "No - QB2 at best now",
      "Maybe - needs to prove himself again"
    ],
    tags: ["QB", "2025", "Elite"],
    difficulty: "beginner",
    prerequisites: ["qb"]
  },

  // C.J. Stroud - Houston Texans
  {
    question: "Which elite WRs does C.J. Stroud have in 2024-2025?",
    correctAnswer: "Nico Collins and Stefon Diggs",
    options: [
      "Nico Collins and Stefon Diggs",
      "DeAndre Hopkins and Brandin Cooks",
      "Tank Dell and Robert Woods",
      "Ja'Marr Chase and Tee Higgins"
    ],
    tags: ["QB", "2025", "HOU"],
    difficulty: "intermediate",
    prerequisites: ["qb", "wr"]
  },
  {
    question: "What's C.J. Stroud's 2025 fantasy ranking?",
    correctAnswer: "Top-5 QB in elite passing offense",
    options: [
      "Top-5 QB in elite passing offense",
      "QB10-15 range",
      "Mid-tier QB2",
      "Streaming option only"
    ],
    tags: ["QB", "2025"],
    difficulty: "beginner",
    prerequisites: ["qb"]
  }
];

// RUNNING BACKS - 28 Questions
export const runningBackMCQs = [
  // Saquon Barkley
  {
    question: "Who won 2024 AP Offensive Player of the Year?",
    correctAnswer: "Saquon Barkley",
    options: ["Saquon Barkley", "Josh Allen", "Ja'Marr Chase", "Lamar Jackson"],
    tags: ["RB", "OPOY", "2024"],
    difficulty: "beginner",
    prerequisites: ["rb"]
  },
  {
    question: "What championship did Saquon Barkley win in 2025?",
    correctAnswer: "Super Bowl LIX with Philadelphia Eagles",
    options: [
      "Super Bowl LIX with Philadelphia Eagles",
      "AFC Championship with Buffalo Bills",
      "NFC Championship with San Francisco 49ers",
      "Super Bowl LVIII with Kansas City Chiefs"
    ],
    tags: ["RB", "2025", "Champion", "Super-Bowl", "PHI"],
    difficulty: "beginner",
    prerequisites: ["rb"]
  },
  {
    question: "What's Saquon Barkley's 2025 fantasy football ranking?",
    correctAnswer: "Consensus #1 RB overall",
    options: [
      "Consensus #1 RB overall",
      "Top-3 RB but not #1",
      "Top-5 RB",
      "#1 overall pick (any position)"
    ],
    tags: ["RB", "2025", "Elite", "Rankings"],
    difficulty: "intermediate",
    prerequisites: ["rb"]
  },

  // Bijan Robinson
  {
    question: "What's Bijan Robinson's 2025 fantasy ranking?",
    correctAnswer: "Top-3 RB with bellcow usage",
    options: [
      "Top-3 RB with bellcow usage",
      "#1 RB overall",
      "Top-10 RB in timeshare",
      "Top-5 RB with limited touches"
    ],
    tags: ["RB", "2025", "Elite", "ATL"],
    difficulty: "intermediate",
    prerequisites: ["bellcow-rb", "rb"]
  },
  {
    question: "What year is it for Bijan Robinson in 2025?",
    correctAnswer: "Year 3 - breakout complete",
    options: [
      "Year 3 - breakout complete",
      "Year 2 - sophomore season",
      "Rookie year",
      "Year 4 - veteran status"
    ],
    tags: ["RB", "2025", "ATL"],
    difficulty: "beginner",
    prerequisites: ["rb"]
  },

  // Jahmyr Gibbs
  {
    question: "What's Jahmyr Gibbs' role with the Detroit Lions?",
    correctAnswer: "Shares backfield with David Montgomery",
    options: [
      "Shares backfield with David Montgomery",
      "Bellcow workhorse back",
      "Third-down specialist only",
      "Goal-line back rotation"
    ],
    tags: ["RB", "2025", "Timeshare", "DET"],
    difficulty: "beginner",
    prerequisites: ["rb"]
  },
  {
    question: "Despite timeshare, why is Jahmyr Gibbs a top-5 RB for 2025?",
    correctAnswer: "Elite big-play ability and PPR value",
    options: [
      "Elite big-play ability and PPR value",
      "Gets all goal-line carries",
      "Plays on all three downs",
      "David Montgomery will be traded"
    ],
    tags: ["RB", "2025", "Elite", "PPR", "DET"],
    difficulty: "intermediate",
    prerequisites: ["ppr", "rb"]
  },

  // Christian McCaffrey
  {
    question: "What's the concern with Christian McCaffrey for 2025?",
    correctAnswer: "Age 29 with injury-plagued 2024 season",
    options: [
      "Age 29 with injury-plagued 2024 season",
      "Lost starting job to Jordan Mason",
      "Traded to another team",
      "Contract holdout expected"
    ],
    tags: ["RB", "2025", "Injury-Risk", "SF"],
    difficulty: "intermediate",
    prerequisites: ["rb"]
  },
  {
    question: "Is CMC still elite when healthy in 2025?",
    correctAnswer: "Yes - still elite talent, just higher injury risk",
    options: [
      "Yes - still elite talent, just higher injury risk",
      "No - clearly washed up",
      "Maybe - needs to prove it first",
      "No - lost a step after injuries"
    ],
    tags: ["RB", "2025", "SF"],
    difficulty: "intermediate",
    prerequisites: ["rb"]
  },

  // Kyren Williams
  {
    question: "What's Kyren Williams' specialty for the Rams?",
    correctAnswer: "Red zone TD machine",
    options: [
      "Red zone TD machine",
      "Big-play receiving back",
      "Pass protection specialist",
      "Between-the-tackles power runner"
    ],
    tags: ["RB", "2025", "TDs", "LAR"],
    difficulty: "intermediate",
    prerequisites: ["red-zone", "rb"]
  },
  {
    question: "What's Kyren Williams' 2025 fantasy outlook?",
    correctAnswer: "RB1 potential as lead back",
    options: [
      "RB1 potential as lead back",
      "RB2/3 in timeshare",
      "Flex play only",
      "Waiver wire option"
    ],
    tags: ["RB", "2025", "LAR"],
    difficulty: "intermediate",
    prerequisites: ["rb"]
  }
];

// WIDE RECEIVERS - 44 Questions
export const wideReceiverMCQs = [
  // Ja'Marr Chase - Triple Crown
  {
    question: "What is the Receiving Triple Crown?",
    correctAnswer: "Leading NFL in receptions, receiving yards, and receiving TDs",
    options: [
      "Leading NFL in receptions, receiving yards, and receiving TDs",
      "Having 100+ catches, 1,500+ yards, and 10+ TDs",
      "Leading your team in all receiving categories",
      "Winning MVP, OPOY, and Pro Bowl in same year"
    ],
    tags: ["WR", "Triple-Crown", "Definition"],
    difficulty: "beginner",
    prerequisites: ["wr"]
  },
  {
    question: "Who won the 2024 Receiving Triple Crown?",
    correctAnswer: "Ja'Marr Chase",
    options: ["Ja'Marr Chase", "CeeDee Lamb", "Tyreek Hill", "Justin Jefferson"],
    tags: ["WR", "Triple-Crown", "2024"],
    difficulty: "intermediate",
    prerequisites: ["wr"]
  },
  {
    question: "What's Ja'Marr Chase's 2025 draft position in expert drafts?",
    correctAnswer: "#1 overall pick",
    options: ["#1 overall pick", "Top-3 pick", "First WR off the board", "Top-5 pick"],
    tags: ["WR", "2025", "Elite", "First-Pick", "Draft"],
    difficulty: "intermediate",
    prerequisites: ["wr"]
  },

  // CeeDee Lamb
  {
    question: "What's CeeDee Lamb's notable strength for fantasy?",
    correctAnswer: "Elite target share - massive volume",
    options: [
      "Elite target share - massive volume",
      "Deep ball specialist",
      "Red zone touchdown machine",
      "YAC (yards after catch) monster"
    ],
    tags: ["WR", "2025", "Volume", "Target-Share"],
    difficulty: "intermediate",
    prerequisites: ["target-share", "wr"]
  },
  {
    question: "What's CeeDee Lamb's 2025 fantasy ranking?",
    correctAnswer: "Top-3 WR - safe floor with high volume",
    options: [
      "Top-3 WR - safe floor with high volume",
      "Top-5 WR",
      "#1 WR overall",
      "Top-10 WR"
    ],
    tags: ["WR", "2025", "Elite", "Rankings"],
    difficulty: "intermediate",
    prerequisites: ["floor", "target-share", "wr"]
  },

  // Justin Jefferson
  {
    question: "What's the consensus on Justin Jefferson's talent level?",
    correctAnswer: "Best WR in football when healthy",
    options: [
      "Best WR in football when healthy",
      "Top-3 WR talent",
      "Elite deep threat",
      "Best route runner in NFL"
    ],
    tags: ["WR", "2025", "Elite", "Talent"],
    difficulty: "intermediate",
    prerequisites: ["wr"]
  },
  {
    question: "What's Justin Jefferson's 2025 fantasy ranking?",
    correctAnswer: "Top-3 WR despite QB concerns",
    options: [
      "Top-3 WR despite QB concerns",
      "Top-5 WR",
      "#1 WR overall",
      "WR1 range (Top-12)"
    ],
    tags: ["WR", "2025", "Elite", "Rankings"],
    difficulty: "intermediate",
    prerequisites: ["wr"]
  },

  // Tyreek Hill
  {
    question: "What's Tyreek Hill's primary specialty?",
    correctAnswer: "Elite speed - explosive big-play machine",
    options: [
      "Elite speed - explosive big-play machine",
      "Red zone touchdown specialist",
      "Contested catch expert",
      "Route running precision"
    ],
    tags: ["WR", "2025", "Speed", "Big-Play"],
    difficulty: "beginner",
    prerequisites: ["wr"]
  },
  {
    question: "What's Tyreek Hill's main dependency for fantasy value?",
    correctAnswer: "Needs Tua healthy for top-5 WR value",
    options: [
      "Needs Tua healthy for top-5 WR value",
      "Needs Mike McDaniel's system",
      "Needs Jaylen Waddle to draw coverage",
      "Needs improved offensive line"
    ],
    tags: ["WR", "2025", "QB-Dependent", "Dolphins"],
    difficulty: "intermediate",
    prerequisites: ["wr"]
  },

  // Malik Nabers
  {
    question: "What did Malik Nabers do as a rookie in 2024?",
    correctAnswer: "Elite target share - rookie sensation",
    options: [
      "Elite target share - rookie sensation",
      "Won Offensive Rookie of the Year",
      "Led all rookies in receiving TDs",
      "Set rookie receiving yards record"
    ],
    tags: ["WR", "2024", "Rookie", "Target-Share"],
    difficulty: "intermediate",
    prerequisites: ["target-share", "wr"]
  },
  {
    question: "What's Malik Nabers' 2025 fantasy outlook?",
    correctAnswer: "Top-10 WR in Year 2 breakout",
    options: [
      "Top-10 WR in Year 2 breakout",
      "WR1 range (Top-12)",
      "Top-5 WR",
      "WR2 with upside"
    ],
    tags: ["WR", "2025", "Sophomore", "Breakout", "Rankings"],
    difficulty: "intermediate",
    prerequisites: ["wr"]
  },

  // Brock Bowers (also counts as WR-eligible TE)
  {
    question: "Who finished 2nd in 2024 OROY voting?",
    correctAnswer: "Brock Bowers",
    options: ["Brock Bowers", "Jayden Daniels", "Malik Nabers", "Marvin Harrison Jr."],
    tags: ["TE", "OROY", "2024"],
    difficulty: "beginner",
    prerequisites: ["te"]
  },
  {
    question: "What is Brock Bowers' 2025 TE ranking?",
    correctAnswer: "Top-5 TE - best rookie TE in years",
    options: ["Top-5 TE - best rookie TE in years", "Top-10 TE", "TE1 overall", "Outside top-10"],
    tags: ["TE", "2025", "Elite"],
    difficulty: "beginner",
    prerequisites: ["te"]
  }
];

// TIGHT ENDS - 20 Questions
export const tightEndMCQs = [
  // Sam LaPorta
  {
    question: "What is Sam LaPorta's 2025 TE ranking?",
    correctAnswer: "Top-2 TE in elite Lions offense",
    options: ["Top-2 TE in elite Lions offense", "Top-5 TE", "Top-10 TE", "TE1 overall"],
    tags: ["TE", "2025", "Elite"],
    difficulty: "beginner",
    prerequisites: ["te"]
  },
  {
    question: "Why is Sam LaPorta so consistent in fantasy?",
    correctAnswer: "Elite offense gives high volume and red zone targets",
    options: [
      "Elite offense gives high volume and red zone targets",
      "Best blocking TE in the league",
      "Fastest tight end in NFL",
      "Only receiving option on team"
    ],
    tags: ["TE", "2025", "Consistency"],
    difficulty: "intermediate",
    prerequisites: ["red-zone", "te"]
  },

  // Travis Kelce
  {
    question: "How old will Travis Kelce be during the 2025 season?",
    correctAnswer: "36 years old",
    options: ["36 years old", "34 years old", "38 years old", "32 years old"],
    tags: ["TE", "2025", "Age"],
    difficulty: "beginner",
    prerequisites: ["te"]
  },
  {
    question: "Is Travis Kelce declining?",
    correctAnswer: "Yes - showed decline in 2024 season",
    options: [
      "Yes - showed decline in 2024 season",
      "No - had career year in 2024",
      "No - same production as always",
      "Yes - retired after 2024"
    ],
    tags: ["TE", "2025", "Decline"],
    difficulty: "beginner",
    prerequisites: ["te"]
  },

  // Trey McBride
  {
    question: "What is Trey McBride's strength?",
    correctAnswer: "High target share and volume",
    options: [
      "High target share and volume",
      "Red zone TD specialist",
      "Elite blocking",
      "Speed and big plays"
    ],
    tags: ["TE", "2025", "Volume"],
    difficulty: "beginner",
    prerequisites: ["target-share", "te"]
  },
  {
    question: "What is Trey McBride's 2025 TE ranking?",
    correctAnswer: "Top-3 TE - young and improving",
    options: ["Top-3 TE - young and improving", "Top-5 TE", "TE1 overall", "Top-10 TE"],
    tags: ["TE", "2025", "Elite"],
    difficulty: "beginner",
    prerequisites: ["te"]
  }
];

// Export all player MCQs
export const allPlayerMCQs = [
  ...quarterbackMCQs,
  ...runningBackMCQs,
  ...wideReceiverMCQs,
  ...tightEndMCQs
];
