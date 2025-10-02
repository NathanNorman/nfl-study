/**
 * Personalized flashcards for WPFL Fantasy Roster
 * ONE FACT PER CARD
 */

export const myRosterCards = [
  // QB - Jared Goff
  { question: "Who is YOUR starting QB?", answer: "Jared Goff (Detroit Lions)", tags: ["MY-ROSTER", "QB"] },
  { question: "When is Jared Goff's bye week?", answer: "Week 8", tags: ["MY-ROSTER", "QB", "Bye"] },
  { question: "Why is Jared Goff a good fantasy QB?", answer: "Elite offensive weapons in high-powered Lions offense", tags: ["MY-ROSTER", "QB"] },

  // RB1 - James Cook
  { question: "Who is YOUR RB1?", answer: "James Cook (Buffalo Bills)", tags: ["MY-ROSTER", "RB"] },
  { question: "What's James Cook's weekly touch range?", answer: "18-22 touches per game", tags: ["MY-ROSTER", "RB", "Volume"] },
  { question: "When is James Cook's bye week?", answer: "Week 7", tags: ["MY-ROSTER", "RB", "Bye"] },
  { question: "What's James Cook's role?", answer: "Lead back in elite Bills offense", tags: ["MY-ROSTER", "RB"] },

  // RB2 - Kyren Williams
  { question: "Who is YOUR RB2?", answer: "Kyren Williams (LA Rams)", tags: ["MY-ROSTER", "RB"] },
  { question: "What's Kyren Williams' weekly touch range?", answer: "15-18 touches per game", tags: ["MY-ROSTER", "RB", "Volume"] },
  { question: "When is Kyren Williams' bye week?", answer: "Week 8", tags: ["MY-ROSTER", "RB", "Bye"] },
  { question: "What's Kyren Williams' strength?", answer: "High TD rate - red zone specialist", tags: ["MY-ROSTER", "RB", "TDs"] },

  // WR1 - Justin Jefferson
  { question: "Who is YOUR WR1?", answer: "Justin Jefferson (Minnesota Vikings)", tags: ["MY-ROSTER", "WR"] },
  { question: "What's Justin Jefferson's weekly target range?", answer: "8-10 targets per game", tags: ["MY-ROSTER", "WR", "Volume"] },
  { question: "When is Justin Jefferson's bye week?", answer: "Week 6", tags: ["MY-ROSTER", "WR", "Bye"] },
  { question: "What's the risk with Justin Jefferson?", answer: "Injury history (hamstring issues)", tags: ["MY-ROSTER", "WR", "Risk"] },

  // WR2 - Cooper Kupp
  { question: "Who is YOUR WR2?", answer: "Cooper Kupp (LA Rams)", tags: ["MY-ROSTER", "WR"] },
  { question: "What's Cooper Kupp's weekly target range?", answer: "6-8 targets per game", tags: ["MY-ROSTER", "WR", "Volume"] },
  { question: "When is Cooper Kupp's bye week?", answer: "Week 8", tags: ["MY-ROSTER", "WR", "Bye"] },
  { question: "What's Cooper Kupp's age concern?", answer: "Age 31 with injury history", tags: ["MY-ROSTER", "WR", "Risk"] },

  // TE - Sam LaPorta
  { question: "Who is YOUR starting TE?", answer: "Sam LaPorta (Detroit Lions)", tags: ["MY-ROSTER", "TE"] },
  { question: "What's Sam LaPorta's weekly target range?", answer: "5-7 targets per game", tags: ["MY-ROSTER", "TE", "Volume"] },
  { question: "When is Sam LaPorta's bye week?", answer: "Week 8", tags: ["MY-ROSTER", "TE", "Bye"] },
  { question: "Why is Sam LaPorta elite?", answer: "Top-3 TE in high-powered Lions offense", tags: ["MY-ROSTER", "TE"] },

  // FLEX - Woody Marks
  { question: "Who is Woody Marks?", answer: "Houston Texans RB - YOUR FLEX1", tags: ["MY-ROSTER", "FLEX", "RB"] },
  { question: "What was Woody Marks' Week 4 breakout?", answer: "21 touches - emerged as viable option", tags: ["MY-ROSTER", "FLEX", "Breakout"] },
  { question: "When is Woody Marks' bye week?", answer: "Week 6", tags: ["MY-ROSTER", "FLEX", "Bye"] },

  // FLEX - Javonte Williams
  { question: "Who is YOUR FLEX2?", answer: "Javonte Williams (Denver Broncos)", tags: ["MY-ROSTER", "FLEX", "RB"] },
  { question: "What's Javonte Williams' average touches per game?", answer: "19.8 touches per game", tags: ["MY-ROSTER", "FLEX", "Volume"] },
  { question: "How many TDs does Javonte Williams have?", answer: "4 TDs", tags: ["MY-ROSTER", "FLEX", "TDs"] },
  { question: "When is Javonte Williams' bye week?", answer: "Week 10", tags: ["MY-ROSTER", "FLEX", "Bye"] },

  // Bench
  { question: "Who is DK Metcalf's team?", answer: "Seattle Seahawks (YOUR BENCH)", tags: ["MY-ROSTER", "BENCH", "WR"] },
  { question: "When is DK Metcalf's bye week?", answer: "Week 5", tags: ["MY-ROSTER", "BENCH", "Bye"] },
  { question: "What type of player is DK Metcalf?", answer: "Boom/bust - big plays or nothing", tags: ["MY-ROSTER", "BENCH"] },

  { question: "Who is Rhamondre Stevenson's team?", answer: "New England Patriots (YOUR BENCH)", tags: ["MY-ROSTER", "BENCH", "RB"] },
  { question: "What's the problem with Rhamondre Stevenson?", answer: "Lead back but Patriots offense is bad", tags: ["MY-ROSTER", "BENCH"] },

  { question: "Who is Calvin Ridley's team?", answer: "Tennessee Titans (YOUR BENCH)", tags: ["MY-ROSTER", "BENCH", "WR"] },
  { question: "What's Calvin Ridley's issue?", answer: "Titans have inconsistent QB play", tags: ["MY-ROSTER", "BENCH"] },

  { question: "How many targets per game does DeAndre Hopkins get?", answer: "Only 2 targets per game", tags: ["MY-ROSTER", "BENCH", "Low-Volume"] },
  { question: "What's DeAndre Hopkins' role on Ravens?", answer: "WR4 - behind Zay Flowers and Mark Andrews", tags: ["MY-ROSTER", "BENCH"] },
  { question: "Should you drop DeAndre Hopkins?", answer: "Yes - 2 targets/game is droppable for better upside", tags: ["MY-ROSTER", "BENCH", "Drop"] },

  // K & DEF
  { question: "Who is YOUR kicker?", answer: "Harrison Butker (Kansas City Chiefs)", tags: ["MY-ROSTER", "K"] },
  { question: "When is Harrison Butker's bye?", answer: "Week 10", tags: ["MY-ROSTER", "K", "Bye"] },
  { question: "What makes Butker elite?", answer: "Chiefs offense creates most scoring opportunities", tags: ["MY-ROSTER", "K"] },
  { question: "What is YOUR defense?", answer: "Minnesota Vikings", tags: ["MY-ROSTER", "DEF"] },
  { question: "When is Vikings defense bye?", answer: "Week 6", tags: ["MY-ROSTER", "DEF", "Bye"] },

  // Roster Strategy
  { question: "What's YOUR biggest bye week problem?", answer: "Week 8 - Goff, Kyren, Kupp, and LaPorta ALL on bye", tags: ["MY-ROSTER", "Bye-Week-Hell"] },
  { question: "What's YOUR roster's biggest strength?", answer: "Elite RB depth with 4 startable backs", tags: ["MY-ROSTER", "Strength"] },
  { question: "What's YOUR roster's biggest weakness?", answer: "WR depth after Jefferson and Kupp", tags: ["MY-ROSTER", "Weakness"] },
  { question: "Which of YOUR bench players should you trade?", answer: "DeAndre Hopkins or Calvin Ridley", tags: ["MY-ROSTER", "Trade-Away"] },
  { question: "What position should YOU target on waivers?", answer: "WR depth - drop Hopkins for high-upside WR", tags: ["MY-ROSTER", "Waiver-Wire"] },
  { question: "Who on YOUR roster has highest trade value?", answer: "James Cook or Justin Jefferson", tags: ["MY-ROSTER", "Trade-Value"] }
];

export const defenseQuestions = [
  { question: "What makes a defense valuable in fantasy?", answer: "Sacks, turnovers, TDs, and low points allowed", tags: ["Defense", "Scoring"] },
  { question: "When should you draft a defense?", answer: "Last 2 rounds", tags: ["Defense", "Draft"] },
  { question: "What is 'streaming defenses'?", answer: "Picking up defense each week that plays worst offense", tags: ["Defense", "Streaming"] },
  { question: "Is streaming defenses better than keeping one?", answer: "Yes - works better than keeping same defense all year", tags: ["Defense", "Streaming"] },
  { question: "Which teams should you stream defenses against?", answer: "Panthers, Giants, Patriots - teams with bad offenses", tags: ["Defense", "Streaming", "2025"] },
  { question: "When should you add playoff week defenses?", answer: "Weeks 12-13 to secure good playoff matchups", tags: ["Defense", "Playoffs"] },
  { question: "Are defensive touchdowns common?", answer: "No - they're boom plays, not consistent strategy", tags: ["Defense", "TDs"] }
];
