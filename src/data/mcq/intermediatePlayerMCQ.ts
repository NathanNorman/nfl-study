/**
 * Intermediate Player Knowledge MCQs
 * Detailed player insights, handcuffs, team context, and matchup knowledge
 */

import type { GeneratedMCQ } from '../../types';

export const intermediatePlayerMCQ: GeneratedMCQ[] = [
  // ========================================
  // PLAYER COMPARISONS & AWARDS
  // ========================================
  {
    question: "Who was closer to winning the 2024 MVP: Lamar Jackson or Patrick Mahomes?",
    correctAnswer: "Lamar Jackson (362 MVP points, Mahomes not in top 2)",
    options: [
      "Lamar Jackson (362 MVP points, Mahomes not in top 2)",
      "Patrick Mahomes (he won 3rd place)",
      "They were tied in voting",
      "Patrick Mahomes (400 MVP points)"
    ],
    tags: ["INTERMEDIATE", "QB", "MVP", "2024"],
    difficulty: "intermediate"
  },
  {
    question: "How many first-place OROY votes did Jayden Daniels receive?",
    correctAnswer: "48 of 49 votes",
    options: [
      "48 of 49 votes",
      "49 of 49 votes (unanimous)",
      "45 of 49 votes",
      "40 of 49 votes"
    ],
    tags: ["INTERMEDIATE", "Awards", "OROY", "2024"],
    difficulty: "intermediate"
  },
  {
    question: "Who received the 1 non-Jayden Daniels first-place OROY vote?",
    correctAnswer: "Brock Bowers",
    options: [
      "Brock Bowers",
      "Malik Nabers",
      "Marvin Harrison Jr.",
      "Bo Nix"
    ],
    tags: ["INTERMEDIATE", "Awards", "OROY", "2024"],
    difficulty: "intermediate"
  },
  {
    question: "What was the Super Bowl LIX final score?",
    correctAnswer: "Eagles 40, Chiefs 22",
    options: [
      "Eagles 40, Chiefs 22",
      "Eagles 38, Chiefs 24",
      "Eagles 35, Chiefs 22",
      "Chiefs 27, Eagles 24"
    ],
    tags: ["INTERMEDIATE", "Super-Bowl", "2025"],
    difficulty: "intermediate"
  },
  {
    question: "How many times was Patrick Mahomes sacked in Super Bowl LIX?",
    correctAnswer: "6 times (without Eagles blitzing heavily)",
    options: [
      "6 times (without Eagles blitzing heavily)",
      "4 times",
      "8 times",
      "3 times"
    ],
    tags: ["INTERMEDIATE", "Super-Bowl", "2025", "Defense"],
    difficulty: "intermediate"
  },

  // ========================================
  // HANDCUFFS & BACKFIELD STRATEGY
  // ========================================
  {
    question: "What is a 'handcuff' in fantasy football?",
    correctAnswer: "A backup RB you draft to protect your starter - becomes starter if RB1 gets injured",
    options: [
      "A backup RB you draft to protect your starter - becomes starter if RB1 gets injured",
      "Any player on the same team as your starter",
      "A defensive player that limits your opponent's RB",
      "A player you drop immediately after the draft"
    ],
    tags: ["INTERMEDIATE", "RB", "Handcuff", "Strategy"],
    difficulty: "intermediate",
    defines: "handcuff"
  },
  {
    question: "Why are handcuffs important in fantasy football?",
    correctAnswer: "RB injuries are common - owning the backup keeps the team's rushing production",
    options: [
      "RB injuries are common - owning the backup keeps the team's rushing production",
      "They guarantee double points from one team",
      "They're required in most leagues",
      "They provide bye week insurance"
    ],
    tags: ["INTERMEDIATE", "RB", "Handcuff", "Strategy"],
    difficulty: "intermediate",
    prerequisites: ["handcuff", "rb"]
  },
  {
    question: "Which Lions player should you handcuff if you own Jahmyr Gibbs?",
    correctAnswer: "David Montgomery (shares backfield)",
    options: [
      "David Montgomery (shares backfield)",
      "Craig Reynolds",
      "Jamaal Williams (not on team)",
      "Sam LaPorta (TE, not RB)"
    ],
    tags: ["INTERMEDIATE", "RB", "Handcuff", "Lions"],
    difficulty: "intermediate",
    prerequisites: ["handcuff"]
  },
  {
    question: "Who is the Eagles' RB handcuff after Saquon Barkley?",
    correctAnswer: "Kenneth Gainwell",
    options: [
      "Kenneth Gainwell",
      "Boston Scott",
      "D'Andre Swift (no longer on team)",
      "Miles Sanders (no longer on team)"
    ],
    tags: ["INTERMEDIATE", "RB", "Eagles", "Handcuff"],
    difficulty: "intermediate",
    prerequisites: ["handcuff"]
  },

  // ========================================
  // DRAFT STRATEGY - POSITION TIMING
  // ========================================
  {
    question: "What rounds should you draft a QB if not taking elite rushers (Allen, Jackson)?",
    correctAnswer: "Rounds 8-12",
    options: [
      "Rounds 8-12",
      "Rounds 4-6",
      "Rounds 1-3",
      "Last round only"
    ],
    tags: ["INTERMEDIATE", "Draft", "QB"],
    difficulty: "intermediate",
    prerequisites: ["qb", "adp"]
  },
  {
    question: "Which TEs are worth drafting before round 10 in 2025?",
    correctAnswer: "LaPorta, Bowers, McBride (elite tier only)",
    options: [
      "LaPorta, Bowers, McBride (elite tier only)",
      "Any top-12 TE",
      "Only Travis Kelce",
      "Never draft TE before round 10"
    ],
    tags: ["INTERMEDIATE", "Draft", "TE", "2025"],
    difficulty: "intermediate",
    prerequisites: ["te"]
  },

  // ========================================
  // GAME SCRIPT & MATCHUP KNOWLEDGE
  // ========================================
  {
    question: "What does 'game script' mean in fantasy football?",
    correctAnswer: "Whether team is winning (runs more) or losing (passes more)",
    options: [
      "Whether team is winning (runs more) or losing (passes more)",
      "The team's offensive playbook",
      "The referee's officiating style",
      "The order of plays called during a game"
    ],
    tags: ["INTERMEDIATE", "Strategy", "Game-Script"],
    difficulty: "intermediate",
    defines: "game-script"
  },
  {
    question: "Why are pass-catching RBs valuable in PPR scoring?",
    correctAnswer: "Get points for receptions AND rushing attempts",
    options: [
      "Get points for receptions AND rushing attempts",
      "They score more touchdowns",
      "They get more carries than other RBs",
      "They play more snaps"
    ],
    tags: ["INTERMEDIATE", "RB", "PPR", "Strategy"],
    difficulty: "intermediate",
    prerequisites: ["ppr", "rb"]
  },

  // ========================================
  // INJURY IMPACT & RISK ASSESSMENT
  // ========================================
  {
    question: "What happened to Christian McCaffrey in the 2024 season?",
    correctAnswer: "Injury-plagued season limited his production",
    options: [
      "Injury-plagued season limited his production",
      "He won MVP",
      "He led all RBs in fantasy points",
      "He was traded to another team"
    ],
    tags: ["INTERMEDIATE", "RB", "Injury", "2024"],
    difficulty: "intermediate"
  },
  {
    question: "What's the main concern with Cooper Kupp for 2025?",
    correctAnswer: "Age 31 with significant injury history",
    options: [
      "Age 31 with significant injury history",
      "Lost his starting job",
      "QB downgrade to backup",
      "Contract dispute with team"
    ],
    tags: ["INTERMEDIATE", "WR", "Injury", "2025"],
    difficulty: "intermediate"
  },

  // ========================================
  // PLAYER-SPECIFIC TEAM CONTEXT
  // ========================================
  {
    question: "Why is Jared Goff a reliable fantasy QB despite not being elite?",
    correctAnswer: "Elite offensive weapons in high-powered Lions offense",
    options: [
      "Elite offensive weapons in high-powered Lions offense",
      "He's a rushing QB who adds value",
      "Plays in a dome every game",
      "Has the best offensive line in football"
    ],
    tags: ["INTERMEDIATE", "QB", "Lions"],
    difficulty: "intermediate"
  },
  {
    question: "What's special about James Cook's role with the Bills?",
    correctAnswer: "Lead back in elite Josh Allen offense",
    options: [
      "Lead back in elite Josh Allen offense",
      "Primary pass-catching back only",
      "Goal-line specialist",
      "Shares equally with backup"
    ],
    tags: ["INTERMEDIATE", "RB", "Bills"],
    difficulty: "intermediate"
  },
  {
    question: "What makes Kyren Williams valuable despite being undersized?",
    correctAnswer: "Red zone TD machine with high TD rate",
    options: [
      "Red zone TD machine with high TD rate",
      "Elite speed and big-play ability",
      "Catches 8+ passes per game",
      "Plays 90%+ of snaps"
    ],
    tags: ["INTERMEDIATE", "RB", "Rams", "TDs"],
    difficulty: "intermediate",
    prerequisites: ["red-zone", "rb"]
  },
  {
    question: "What's Justin Jefferson's biggest risk for fantasy in 2025?",
    correctAnswer: "Injury history (hamstring issues)",
    options: [
      "Injury history (hamstring issues)",
      "QB downgrade significantly limits ceiling",
      "Lost starting job to rookie",
      "Age-related decline at 28"
    ],
    tags: ["INTERMEDIATE", "WR", "Vikings", "Risk"],
    difficulty: "intermediate"
  },
  {
    question: "Why is Tyreek Hill's value heavily QB-dependent?",
    correctAnswer: "Needs Tua Tagovailoa healthy for top-5 WR production",
    options: [
      "Needs Tua Tagovailoa healthy for top-5 WR production",
      "Only runs deep routes that require elite QB",
      "Backup QBs don't trust him",
      "He's injury-prone without Tua protecting him"
    ],
    tags: ["INTERMEDIATE", "WR", "Dolphins", "QB-Dependent"],
    difficulty: "intermediate"
  },
  {
    question: "What made Malik Nabers special as a 2024 rookie?",
    correctAnswer: "Elite target share - commanded massive volume immediately",
    options: [
      "Elite target share - commanded massive volume immediately",
      "Led all WRs in touchdowns",
      "Perfect catch rate on 50+ targets",
      "1500+ receiving yards"
    ],
    tags: ["INTERMEDIATE", "WR", "Giants", "Rookie", "2024"],
    difficulty: "intermediate",
    prerequisites: ["target-share", "wr"]
  },
  {
    question: "What's Malik Nabers' 2025 fantasy outlook?",
    correctAnswer: "Top-10 WR in Year 2 sophomore breakout",
    options: [
      "Top-10 WR in Year 2 sophomore breakout",
      "WR3 with upside due to QB concerns",
      "Top-5 WR as consensus elite player",
      "Bust candidate due to poor offense"
    ],
    tags: ["INTERMEDIATE", "WR", "Giants", "2025", "Breakout"],
    difficulty: "intermediate"
  },

  // ========================================
  // TIGHT END CONTEXT
  // ========================================
  {
    question: "Why is Sam LaPorta so consistent as a fantasy TE?",
    correctAnswer: "Elite Lions offense gives him high volume and red zone targets",
    options: [
      "Elite Lions offense gives him high volume and red zone targets",
      "He's the only receiving threat on the Lions",
      "Elite blocking ability gets him bonus points",
      "He plays 100% of offensive snaps"
    ],
    tags: ["INTERMEDIATE", "TE", "Lions"],
    difficulty: "intermediate",
    prerequisites: ["red-zone", "te"]
  },
  {
    question: "Why is Travis Kelce declining in fantasy value?",
    correctAnswer: "Age 36 - showed clear decline in 2024 season",
    options: [
      "Age 36 - showed clear decline in 2024 season",
      "Lost starting job to younger TE",
      "Chiefs offense became run-heavy",
      "Mahomes stopped targeting tight ends"
    ],
    tags: ["INTERMEDIATE", "TE", "Chiefs", "Age"],
    difficulty: "intermediate"
  },
  {
    question: "What makes Trey McBride a top-3 TE despite being on the Cardinals?",
    correctAnswer: "High target share and volume - force-fed targets",
    options: [
      "High target share and volume - force-fed targets",
      "Scores multiple TDs every game",
      "Elite blocking creates bonus points",
      "Cardinals have no WRs so he gets everything"
    ],
    tags: ["INTERMEDIATE", "TE", "Cardinals", "Volume"],
    difficulty: "intermediate",
    prerequisites: ["target-share", "te"]
  },

  // ========================================
  // BREAKOUT & BUST CANDIDATES
  // ========================================
  {
    question: "What makes Bijan Robinson a top-3 RB for 2025?",
    correctAnswer: "Year 3 breakout complete - full bellcow usage",
    options: [
      "Year 3 breakout complete - full bellcow usage",
      "Elite pass-catching ability in PPR",
      "Moved to better offensive team",
      "Lead back after injury to starter"
    ],
    tags: ["INTERMEDIATE", "RB", "Falcons", "2025", "Breakout"],
    difficulty: "intermediate",
    prerequisites: ["bellcow-rb", "rb"]
  },
  {
    question: "Why is Jahmyr Gibbs a top-5 RB despite sharing the backfield?",
    correctAnswer: "Elite big-play ability and PPR value",
    options: [
      "Elite big-play ability and PPR value",
      "David Montgomery is injured",
      "Gets all goal-line carries",
      "Plays more snaps than Montgomery"
    ],
    tags: ["INTERMEDIATE", "RB", "Lions", "2025", "Timeshare"],
    difficulty: "intermediate",
    prerequisites: ["ppr", "rb"]
  },
  {
    question: "Is Christian McCaffrey still elite when healthy for 2025?",
    correctAnswer: "Yes - still elite talent, just higher injury risk",
    options: [
      "Yes - still elite talent, just higher injury risk",
      "No - decline has started at age 29",
      "No - lost starting job to Jordan Mason",
      "Yes - zero injury concerns going forward"
    ],
    tags: ["INTERMEDIATE", "RB", "49ers", "2025"],
    difficulty: "intermediate"
  }
];
