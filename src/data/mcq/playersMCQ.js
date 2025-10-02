/**
 * Multiple Choice Questions - Players (2024-2025)
 * Format: question, correctAnswer, options (4 total including correct)
 */

export const playersMCQ = [
  // QBs
  {
    question: "Who won the 2024 NFL MVP?",
    correctAnswer: "Josh Allen",
    options: ["Josh Allen", "Lamar Jackson", "Patrick Mahomes", "Jalen Hurts"],
    tags: ["QB", "MVP", "2024"]
  },
  {
    question: "What historic stat line did Josh Allen achieve in 2024?",
    correctAnswer: "First player with 25+ pass TDs, 10+ rush TDs, <10 INTs",
    options: [
      "First player with 25+ pass TDs, 10+ rush TDs, <10 INTs",
      "First player with 30+ pass TDs and 15+ rush TDs",
      "First player with 5000 pass yards and 500 rush yards",
      "First player to win MVP and Super Bowl same year"
    ],
    tags: ["QB", "MVP", "2024"]
  },
  {
    question: "Which QB led all QBs in fantasy points in 2024?",
    correctAnswer: "Lamar Jackson",
    options: ["Lamar Jackson", "Josh Allen", "Jalen Hurts", "Joe Burrow"],
    tags: ["QB", "2024", "Fantasy"]
  },
  {
    question: "Who led the NFL in passing yards in 2024?",
    correctAnswer: "Joe Burrow (4,918 yards)",
    options: ["Joe Burrow (4,918 yards)", "Tua Tagovailoa (4,624 yards)", "Dak Prescott (4,516 yards)", "Patrick Mahomes (4,183 yards)"],
    tags: ["QB", "2024", "Passing"]
  },
  {
    question: "Who won Super Bowl LIX MVP?",
    correctAnswer: "Jalen Hurts",
    options: ["Jalen Hurts", "Saquon Barkley", "A.J. Brown", "Cooper DeJean"],
    tags: ["QB", "Super-Bowl", "MVP", "2025"]
  },
  {
    question: "Who won 2024 Offensive Rookie of the Year?",
    correctAnswer: "Jayden Daniels",
    options: ["Jayden Daniels", "Brock Bowers", "Malik Nabers", "Marvin Harrison Jr."],
    tags: ["QB", "OROY", "2024"]
  },
  {
    question: "What historic rookie stat did Jayden Daniels achieve?",
    correctAnswer: "First rookie with 3,500+ pass yards AND 800+ rush yards",
    options: [
      "First rookie with 3,500+ pass yards AND 800+ rush yards",
      "First rookie QB to win a playoff game",
      "First rookie to throw 30+ TDs and rush for 10+ TDs",
      "First rookie to have 70% completion percentage"
    ],
    tags: ["QB", "OROY", "2024"]
  },

  // RBs
  {
    question: "How many rushing yards did Saquon Barkley have in 2024?",
    correctAnswer: "2,005 yards",
    options: ["2,005 yards", "1,845 yards", "1,923 yards", "2,147 yards"],
    tags: ["RB", "2024", "Rushing"]
  },
  {
    question: "Who won 2024 AP Offensive Player of the Year?",
    correctAnswer: "Saquon Barkley",
    options: ["Saquon Barkley", "Josh Allen", "Ja'Marr Chase", "Lamar Jackson"],
    tags: ["RB", "OPOY", "2024"]
  },
  {
    question: "What's Saquon Barkley's 2025 fantasy ranking?",
    correctAnswer: "Consensus #1 RB overall",
    options: ["Consensus #1 RB overall", "Top-3 RB", "Top-5 RB", "#1 overall pick (any position)"],
    tags: ["RB", "2025", "Rankings"]
  },
  {
    question: "What year is it for Bijan Robinson in 2025?",
    correctAnswer: "Year 3",
    options: ["Year 3", "Year 2", "Rookie year", "Year 4"],
    tags: ["RB", "2025"]
  },
  {
    question: "Who does Jahmyr Gibbs share carries with?",
    correctAnswer: "David Montgomery",
    options: ["David Montgomery", "Jamaal Williams", "Craig Reynolds", "Zonovan Knight"],
    tags: ["RB", "2025", "Lions"]
  },

  // WRs
  {
    question: "Who won the 2024 Receiving Triple Crown?",
    correctAnswer: "Ja'Marr Chase",
    options: ["Ja'Marr Chase", "CeeDee Lamb", "Tyreek Hill", "Justin Jefferson"],
    tags: ["WR", "2024", "Triple-Crown"]
  },
  {
    question: "How many receiving yards did Ja'Marr Chase have in 2024?",
    correctAnswer: "1,708 yards",
    options: ["1,708 yards", "1,799 yards", "1,623 yards", "1,856 yards"],
    tags: ["WR", "2024"]
  },
  {
    question: "What is the Receiving Triple Crown?",
    correctAnswer: "Leading NFL in receptions, yards, and TDs",
    options: [
      "Leading NFL in receptions, yards, and TDs",
      "Having 100+ catches, 1,500+ yards, and 10+ TDs",
      "Leading your team in all receiving categories",
      "Winning MVP, OPOY, and Pro Bowl in same year"
    ],
    tags: ["WR", "Awards"]
  },
  {
    question: "Who is considered the best WR in football when healthy?",
    correctAnswer: "Justin Jefferson",
    options: ["Justin Jefferson", "Ja'Marr Chase", "Tyreek Hill", "CeeDee Lamb"],
    tags: ["WR", "2025"]
  },
  {
    question: "What did Malik Nabers do as a rookie in 2024?",
    correctAnswer: "Elite target share - rookie sensation",
    options: [
      "Elite target share - rookie sensation",
      "Won Offensive Rookie of the Year",
      "Led all rookies in receiving TDs",
      "Set rookie receiving yards record"
    ],
    tags: ["WR", "2024", "Rookie"]
  },

  // TEs
  {
    question: "Who finished 2nd in 2024 OROY voting?",
    correctAnswer: "Brock Bowers",
    options: ["Brock Bowers", "Malik Nabers", "Marvin Harrison Jr.", "Rome Odunze"],
    tags: ["TE", "OROY", "2024"]
  },
  {
    question: "How many first-place OROY votes did Brock Bowers get?",
    correctAnswer: "1 of 49 votes",
    options: ["1 of 49 votes", "5 of 49 votes", "0 of 49 votes", "10 of 49 votes"],
    tags: ["TE", "OROY", "2024"]
  },
  {
    question: "What's Sam LaPorta's 2025 TE ranking?",
    correctAnswer: "Top-2 TE",
    options: ["Top-2 TE", "Top-5 TE", "#1 TE overall", "Top-10 TE"],
    tags: ["TE", "2025"]
  },
  {
    question: "How old will Travis Kelce be in 2025?",
    correctAnswer: "36 years old",
    options: ["36 years old", "34 years old", "35 years old", "37 years old"],
    tags: ["TE", "2025", "Age"]
  },
  {
    question: "Is Travis Kelce declining?",
    correctAnswer: "Yes - showed decline in 2024",
    options: [
      "Yes - showed decline in 2024",
      "No - still at peak performance",
      "Maybe - too early to tell",
      "No - had career year in 2024"
    ],
    tags: ["TE", "2025"]
  }
];
