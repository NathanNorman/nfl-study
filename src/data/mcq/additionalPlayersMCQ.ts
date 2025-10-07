/**
 * Additional Player-Specific MCQs
 * Covering remaining players from players2025.js not yet in MCQ format
 */

import type { GeneratedMCQ } from '../../types';

export const additionalPlayersMCQ: GeneratedMCQ[] = [
  // ========================================
  // DEFENSIVE STRATEGY & STREAMING
  // ========================================
  {
    question: "When should you draft a defense?",
    correctAnswer: "Last 2 rounds",
    options: [
      "Last 2 rounds",
      "Round 8-10 for elite defense",
      "Round 5-6 before good ones gone",
      "Don't draft defense, pick up free agent"
    ],
    tags: ["Defense", "Draft", "Strategy"],
    difficulty: "intermediate"
  },
  {
    question: "What is 'streaming defenses'?",
    correctAnswer: "Picking up defense each week that plays worst offense",
    options: [
      "Picking up defense each week that plays worst offense",
      "Watching defensive games on streaming services",
      "Drafting 3 defenses and rotating weekly",
      "Only playing defenses in home games"
    ],
    tags: ["Defense", "Streaming", "Strategy"],
    difficulty: "intermediate",
    defines: "streaming"
  },
  {
    question: "Is streaming defenses better than keeping one all season?",
    correctAnswer: "Yes - works better than keeping same defense all year",
    options: [
      "Yes - works better than keeping same defense all year",
      "No - elite defenses are too valuable",
      "Only works in deep leagues (14+ teams)",
      "Never stream defenses in fantasy"
    ],
    tags: ["Defense", "Streaming", "Strategy"],
    difficulty: "intermediate",
    prerequisites: ["streaming"]
  },
  {
    question: "Which teams should you stream defenses against in 2025?",
    correctAnswer: "Panthers, Giants, Patriots - teams with bad offenses",
    options: [
      "Panthers, Giants, Patriots - teams with bad offenses",
      "Chiefs, Bills, Eagles - elite offenses",
      "Rams, Cardinals, Titans",
      "Any team with rookie QB"
    ],
    tags: ["Defense", "Streaming", "2025", "Strategy"],
    difficulty: "intermediate",
    prerequisites: ["streaming"]
  },
  {
    question: "When should you add playoff week defenses?",
    correctAnswer: "Weeks 12-13 to secure good playoff matchups",
    options: [
      "Weeks 12-13 to secure good playoff matchups",
      "Week 17 during playoffs",
      "Draft day for whole season",
      "Never plan ahead for defense"
    ],
    tags: ["Defense", "Playoffs", "Strategy"],
    difficulty: "intermediate"
  },
  {
    question: "Are defensive touchdowns a reliable fantasy scoring strategy?",
    correctAnswer: "No - they're boom plays, not consistent strategy",
    options: [
      "No - they're boom plays, not consistent strategy",
      "Yes - elite defenses score TDs every week",
      "Yes - defensive TDs are predictable",
      "Only for top-5 defenses"
    ],
    tags: ["Defense", "TDs", "Strategy"],
    difficulty: "intermediate"
  },

  // ========================================
  // ADDITIONAL QB CONTEXT
  // ========================================
  {
    question: "What weapons does C.J. Stroud have in Houston's offense?",
    correctAnswer: "Nico Collins and Stefon Diggs at WR",
    options: [
      "Nico Collins and Stefon Diggs at WR",
      "DeAndre Hopkins and Brandin Cooks",
      "Tank Dell and Robert Woods",
      "No elite weapons on offense"
    ],
    tags: ["QB", "HOU", "2025"],
    difficulty: "intermediate"
  },
  {
    question: "What's C.J. Stroud's 2025 fantasy QB ranking?",
    correctAnswer: "Top-5 QB in elite passing offense",
    options: [
      "Top-5 QB in elite passing offense",
      "Top-10 QB but not elite",
      "QB1 range but risky",
      "Streaming option only"
    ],
    tags: ["QB", "2025", "Texans"],
    difficulty: "intermediate"
  },
  {
    question: "Why is Joe Burrow's 2025 fantasy outlook considered elite?",
    correctAnswer: "Elite passing volume with Ja'Marr Chase connection",
    options: [
      "Elite passing volume with Ja'Marr Chase connection",
      "Top rushing QB with dual-threat ability",
      "Weak division means easy matchups",
      "New offensive coordinator system"
    ],
    tags: ["QB", "2025", "Elite", "Bengals"],
    difficulty: "intermediate",
    prerequisites: ["qb", "wr"]
  },

  // ========================================
  // ADDITIONAL RB INSIGHTS
  // ========================================
  {
    question: "What award did Saquon Barkley win for the 2024 season?",
    correctAnswer: "AP Offensive Player of the Year",
    options: [
      "AP Offensive Player of the Year",
      "NFL MVP",
      "Super Bowl MVP",
      "Comeback Player of the Year"
    ],
    tags: ["RB", "2024", "OPOY", "Awards"],
    difficulty: "intermediate"
  },
  {
    question: "What championship did Saquon Barkley win?",
    correctAnswer: "Super Bowl LIX with Philadelphia Eagles",
    options: [
      "Super Bowl LIX with Philadelphia Eagles",
      "NFC Championship only",
      "Division title with Giants",
      "No championships yet"
    ],
    tags: ["RB", "2025", "Champion", "Eagles"],
    difficulty: "intermediate"
  },
  {
    question: "What's Saquon Barkley's 2025 fantasy ranking?",
    correctAnswer: "Consensus #1 RB overall",
    options: [
      "Consensus #1 RB overall",
      "Top-3 RB but not #1",
      "RB5-10 range",
      "Avoid due to age concerns"
    ],
    tags: ["RB", "2025", "Elite", "First-Pick"],
    difficulty: "intermediate"
  },
  {
    question: "What year is it for Bijan Robinson in the NFL?",
    correctAnswer: "Year 3 - breakout complete",
    options: [
      "Year 3 - breakout complete",
      "Rookie season (Year 1)",
      "Year 2 - still developing",
      "Year 5 - veteran back"
    ],
    tags: ["RB", "2025", "Falcons"],
    difficulty: "intermediate"
  },
  {
    question: "What's Bijan Robinson's 2025 fantasy ranking?",
    correctAnswer: "Top-3 RB with bellcow usage",
    options: [
      "Top-3 RB with bellcow usage",
      "RB10-15 range",
      "Avoid due to timeshare",
      "Top-10 RB with upside"
    ],
    tags: ["RB", "2025", "Elite", "Falcons"],
    difficulty: "intermediate",
    prerequisites: ["bellcow-rb", "rb"]
  },
  {
    question: "What's Jahmyr Gibbs' role in the Lions backfield?",
    correctAnswer: "Shares backfield with David Montgomery",
    options: [
      "Shares backfield with David Montgomery",
      "Bellcow back - 100% of touches",
      "Only pass-catching specialist",
      "Backup to Montgomery"
    ],
    tags: ["RB", "2025", "Timeshare", "Lions"],
    difficulty: "intermediate"
  },
  {
    question: "Why is Jahmyr Gibbs a top-5 RB despite timeshare?",
    correctAnswer: "Elite big-play ability and PPR value",
    options: [
      "Elite big-play ability and PPR value",
      "Montgomery injured most of season",
      "Gets all red zone carries",
      "Plays more snaps than Montgomery"
    ],
    tags: ["RB", "2025", "Elite", "PPR", "Lions"],
    difficulty: "intermediate",
    prerequisites: ["ppr", "rb"]
  },
  {
    question: "What's the main concern with Christian McCaffrey for 2025?",
    correctAnswer: "Age 29 with injury-plagued 2024 season",
    options: [
      "Age 29 with injury-plagued 2024 season",
      "Lost starting job to backup",
      "Traded to worse offense",
      "No concerns - fully healthy"
    ],
    tags: ["RB", "2025", "Injury-Risk", "49ers"],
    difficulty: "intermediate"
  },
  {
    question: "Is Christian McCaffrey still elite when healthy in 2025?",
    correctAnswer: "Yes - still elite talent, just higher injury risk",
    options: [
      "Yes - still elite talent, just higher injury risk",
      "No - clear decline has started",
      "No - lost starting job",
      "Yes - zero injury concerns"
    ],
    tags: ["RB", "2025", "49ers"],
    difficulty: "intermediate"
  },
  {
    question: "What's Kyren Williams' specialty as an RB?",
    correctAnswer: "Red zone TD machine",
    options: [
      "Red zone TD machine",
      "Elite receiving back - 80+ catches",
      "Speed back - big plays only",
      "Three-down workhorse bellcow"
    ],
    tags: ["RB", "2025", "TDs", "Rams"],
    difficulty: "intermediate",
    prerequisites: ["red-zone", "rb"]
  },
  {
    question: "What's Kyren Williams' 2025 fantasy outlook?",
    correctAnswer: "RB1 potential as lead back",
    options: [
      "RB1 potential as lead back",
      "RB2 in timeshare",
      "Flex option only",
      "Avoid due to injury risk"
    ],
    tags: ["RB", "2025", "Rams"],
    difficulty: "intermediate"
  },

  // ========================================
  // ADDITIONAL WR INSIGHTS
  // ========================================
  {
    question: "What is the Receiving Triple Crown in the NFL?",
    correctAnswer: "Leading NFL in receptions, receiving yards, and receiving TDs",
    options: [
      "Leading NFL in receptions, receiving yards, and receiving TDs",
      "Three 1,000-yard seasons in a row",
      "Winning three championships",
      "Leading team in all three receiving categories"
    ],
    tags: ["WR", "Triple-Crown", "Awards"],
    difficulty: "intermediate"
  },
  {
    question: "Who won the 2024 Receiving Triple Crown?",
    correctAnswer: "Ja'Marr Chase (Cincinnati Bengals)",
    options: [
      "Ja'Marr Chase (Cincinnati Bengals)",
      "Justin Jefferson (Vikings)",
      "CeeDee Lamb (Cowboys)",
      "Tyreek Hill (Dolphins)"
    ],
    tags: ["WR", "2024", "Triple-Crown", "Awards"],
    difficulty: "intermediate"
  },
  {
    question: "What's Ja'Marr Chase's 2025 fantasy draft position?",
    correctAnswer: "#1 overall pick in many expert drafts",
    options: [
      "#1 overall pick in many expert drafts",
      "Top-5 pick but not #1",
      "Late first round (picks 8-12)",
      "Early second round value"
    ],
    tags: ["WR", "2025", "Elite", "First-Pick"],
    difficulty: "intermediate"
  },
  {
    question: "What makes CeeDee Lamb so valuable in fantasy?",
    correctAnswer: "Massive target share - elite volume in Cowboys offense",
    options: [
      "Massive target share - elite volume in Cowboys offense",
      "Elite TD rate - scores every game",
      "Deep threat specialist - big plays",
      "Best YAC ability in the league"
    ],
    tags: ["WR", "2025", "Volume", "Cowboys"],
    difficulty: "intermediate",
    prerequisites: ["target-share", "wr"]
  },
  {
    question: "What's CeeDee Lamb's 2025 fantasy ranking?",
    correctAnswer: "Top-3 WR - safe floor with high target volume",
    options: [
      "Top-3 WR - safe floor with high target volume",
      "WR5-10 range with upside",
      "Avoid due to QB concerns",
      "WR1 overall - best player"
    ],
    tags: ["WR", "2025", "Elite", "Cowboys"],
    difficulty: "intermediate",
    prerequisites: ["floor", "target-share", "wr"]
  },
  {
    question: "What's the consensus on Justin Jefferson's talent level?",
    correctAnswer: "Best WR in football when healthy",
    options: [
      "Best WR in football when healthy",
      "Top-5 WR but not the best",
      "Top-10 WR with concerns",
      "Overrated due to volume"
    ],
    tags: ["WR", "2025", "Elite", "Vikings"],
    difficulty: "intermediate"
  },
  {
    question: "What's Justin Jefferson's 2025 fantasy ranking despite QB concerns?",
    correctAnswer: "Top-3 WR despite QB concerns",
    options: [
      "Top-3 WR despite QB concerns",
      "WR10-15 due to QB downgrade",
      "Avoid until QB situation resolves",
      "WR1 overall pick"
    ],
    tags: ["WR", "2025", "Elite", "Vikings"],
    difficulty: "intermediate"
  },
  {
    question: "What's Tyreek Hill's specialty as a receiver?",
    correctAnswer: "Elite speed - explosive big-play machine",
    options: [
      "Elite speed - explosive big-play machine",
      "Red zone specialist - TD monster",
      "Volume receiver - 150+ targets",
      "YAC specialist after catch"
    ],
    tags: ["WR", "2025", "Speed", "Dolphins"],
    difficulty: "intermediate"
  },
  {
    question: "What's Tyreek Hill's main fantasy dependency?",
    correctAnswer: "Needs Tua healthy for top-5 WR value",
    options: [
      "Needs Tua healthy for top-5 WR value",
      "Needs 100% healthy hamstrings",
      "Needs cold weather games",
      "No dependencies - always elite"
    ],
    tags: ["WR", "2025", "QB-Dependent", "Dolphins"],
    difficulty: "intermediate"
  },

  // ========================================
  // TIGHT END INSIGHTS
  // ========================================
  {
    question: "How did Brock Bowers finish in 2024 OROY voting?",
    correctAnswer: "2nd place - got 1 of 49 first-place votes",
    options: [
      "2nd place - got 1 of 49 first-place votes",
      "Won OROY unanimously",
      "3rd place in voting",
      "Not in top-3 voting"
    ],
    tags: ["TE", "OROY", "2024", "Awards"],
    difficulty: "intermediate"
  },
  {
    question: "What's Brock Bowers' 2025 TE ranking?",
    correctAnswer: "Top-5 TE - best rookie TE in years",
    options: [
      "Top-5 TE - best rookie TE in years",
      "TE1 overall - elite option",
      "TE10-15 - streaming option",
      "Avoid sophomore slump"
    ],
    tags: ["TE", "2025", "Elite", "Raiders"],
    difficulty: "intermediate"
  },
  {
    question: "What's Sam LaPorta's 2025 TE ranking?",
    correctAnswer: "Top-2 TE in elite Lions offense",
    options: [
      "Top-2 TE in elite Lions offense",
      "TE5-8 range with upside",
      "TE1 overall consensus",
      "Streaming option only"
    ],
    tags: ["TE", "2025", "Elite", "Lions"],
    difficulty: "intermediate"
  },
  {
    question: "Why is Sam LaPorta so consistent week-to-week?",
    correctAnswer: "Elite offense gives him high volume and red zone targets",
    options: [
      "Elite offense gives him high volume and red zone targets",
      "Only receiving threat on Lions",
      "Elite blocking gets bonus points",
      "Plays 100% of snaps always"
    ],
    tags: ["TE", "2025", "Lions"],
    difficulty: "intermediate",
    prerequisites: ["red-zone", "te"]
  },
  {
    question: "How old will Travis Kelce be in 2025?",
    correctAnswer: "36 years old",
    options: [
      "36 years old",
      "33 years old",
      "39 years old",
      "31 years old"
    ],
    tags: ["TE", "2025", "Age", "Chiefs"],
    difficulty: "intermediate"
  },
  {
    question: "Is Travis Kelce showing signs of decline?",
    correctAnswer: "Yes - showed decline in 2024 season",
    options: [
      "Yes - showed decline in 2024 season",
      "No - still peak elite TE",
      "No decline - injury only",
      "Too early to tell"
    ],
    tags: ["TE", "2025", "Decline", "Chiefs"],
    difficulty: "intermediate"
  },
  {
    question: "What's Trey McBride's main strength as a fantasy TE?",
    correctAnswer: "High target share and volume",
    options: [
      "High target share and volume",
      "Elite TD scoring rate",
      "Best blocking TE in league",
      "YAC after the catch"
    ],
    tags: ["TE", "2025", "Volume", "Cardinals"],
    difficulty: "intermediate",
    prerequisites: ["target-share", "te"]
  },
  {
    question: "What's Trey McBride's 2025 TE ranking?",
    correctAnswer: "Top-3 TE - young and improving",
    options: [
      "Top-3 TE - young and improving",
      "TE1 overall consensus",
      "TE5-8 range",
      "Streaming option only"
    ],
    tags: ["TE", "2025", "Elite", "Cardinals"],
    difficulty: "intermediate"
  }
];
