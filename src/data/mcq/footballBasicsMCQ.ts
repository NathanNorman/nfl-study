/**
 * Multiple Choice Questions - Football Basics (Beginner)
 * Covers: Game Structure, Scoring, Downs, Positions, Field, Plays, Turnovers, Defense, Penalties
 * Format: question, correctAnswer, options (4 total including correct)
 */

import type { GeneratedMCQ } from '../../types';

export const footballBasicsMCQ: GeneratedMCQ[] = [
  // Game Structure
  {
    question: "How long is halftime in an NFL game?",
    correctAnswer: "12 minutes",
    options: ["10 minutes", "12 minutes", "15 minutes", "20 minutes"],
    tags: ["BEGINNER", "Rules", "Game-Structure"],
    difficulty: "beginner"
  },

  // Scoring
  {
    question: "How many points is a touchdown worth?",
    correctAnswer: "6 points",
    options: ["3 points", "6 points", "7 points", "8 points"],
    tags: ["BEGINNER", "Scoring", "Touchdown"],
    difficulty: "beginner",
    defines: "touchdown"
  },
  {
    question: "How many points is a field goal worth?",
    correctAnswer: "3 points",
    options: ["1 point", "2 points", "3 points", "6 points"],
    tags: ["BEGINNER", "Scoring", "Field-Goal"],
    difficulty: "beginner",
    defines: "field-goal"
  },
  {
    question: "What is a PAT (Point After Touchdown)?",
    correctAnswer: "An extra point kick after a touchdown, worth 1 point",
    options: [
      "An extra point kick after a touchdown, worth 1 point",
      "A 2-point conversion attempt",
      "A penalty after touchdown",
      "A field goal attempt"
    ],
    tags: ["BEGINNER", "Scoring", "Extra-Point", "PAT"],
    difficulty: "beginner",
    defines: "pat"
  },
  {
    question: "How many points is a PAT (extra point) worth?",
    correctAnswer: "1 point",
    options: ["1 point", "2 points", "3 points", "6 points"],
    tags: ["BEGINNER", "Scoring", "Extra-Point", "PAT"],
    difficulty: "beginner"
  },
  {
    question: "What is a 2-point conversion?",
    correctAnswer: "Running or passing from the 2-yard line after a TD for 2 points",
    options: [
      "Running or passing from the 2-yard line after a TD for 2 points",
      "Kicking an extra point from farther back",
      "Scoring two touchdowns in one play",
      "A defensive touchdown"
    ],
    tags: ["BEGINNER", "Scoring", "Two-Point"],
    difficulty: "beginner",
    defines: "two-point-conversion"
  },
  {
    question: "How many points is a safety worth?",
    correctAnswer: "2 points (awarded to defense)",
    options: [
      "1 point",
      "2 points (awarded to defense)",
      "3 points",
      "6 points"
    ],
    tags: ["BEGINNER", "Scoring", "Safety"],
    difficulty: "beginner",
    defines: "safety-score"
  },
  {
    question: "What's the most points you can score on one play?",
    correctAnswer: "6 points (touchdown)",
    options: [
      "3 points (field goal)",
      "6 points (touchdown)",
      "7 points (TD + PAT)",
      "8 points (TD + 2PT)"
    ],
    tags: ["BEGINNER", "Scoring"],
    difficulty: "beginner"
  },

  // Downs System
  {
    question: "How many downs does a team get to gain 10 yards?",
    correctAnswer: "4 downs",
    options: ["2 downs", "3 downs", "4 downs", "5 downs"],
    tags: ["BEGINNER", "Downs", "Rules"],
    difficulty: "beginner",
    defines: "downs"
  },
  {
    question: "What happens if you gain 10 yards?",
    correctAnswer: "You get a new set of 4 downs (first down)",
    options: [
      "You get a new set of 4 downs (first down)",
      "You score points",
      "The other team gets the ball",
      "You get a penalty"
    ],
    tags: ["BEGINNER", "Downs", "First-Down"],
    difficulty: "beginner",
    defines: "first-down"
  },
  {
    question: "What happens if you don't gain 10 yards in 4 downs?",
    correctAnswer: "The other team gets the ball (turnover on downs)",
    options: [
      "You get 2 more downs",
      "The other team gets the ball (turnover on downs)",
      "You lose points",
      "You get a penalty"
    ],
    tags: ["BEGINNER", "Downs", "Turnover"],
    difficulty: "beginner"
  },
  {
    question: "What does '1st and 10' mean?",
    correctAnswer: "1st down with 10 yards to go for another first down",
    options: [
      "1st quarter and 10 minutes left",
      "1st down with 10 yards to go for another first down",
      "1st player and jersey #10",
      "1st penalty of the game"
    ],
    tags: ["BEGINNER", "Downs"],
    difficulty: "beginner"
  },
  {
    question: "What does '3rd and 5' mean?",
    correctAnswer: "3rd down with 5 yards needed for a first down",
    options: [
      "3rd quarter with 5 minutes left",
      "3rd player and 5 yards penalty",
      "3rd down with 5 yards needed for a first down",
      "3 touchdowns and 5 field goals"
    ],
    tags: ["BEGINNER", "Downs"],
    difficulty: "beginner"
  },
  {
    question: "What's the most important down?",
    correctAnswer: "3rd down (last chance before 4th down decision)",
    options: [
      "1st down",
      "2nd down",
      "3rd down (last chance before 4th down decision)",
      "4th down"
    ],
    tags: ["BEGINNER", "Downs", "Strategy"],
    difficulty: "beginner",
    defines: "third-down"
  },

  // Basic Positions
  {
    question: "Who throws the ball?",
    correctAnswer: "Quarterback (QB)",
    options: [
      "Quarterback (QB)",
      "Running Back (RB)",
      "Wide Receiver (WR)",
      "Center (C)"
    ],
    tags: ["BEGINNER", "Positions", "QB"],
    difficulty: "beginner",
    defines: "qb"
  },
  {
    question: "Who runs with the ball?",
    correctAnswer: "Running Back (RB)",
    options: [
      "Quarterback (QB)",
      "Running Back (RB)",
      "Wide Receiver (WR)",
      "Linebacker (LB)"
    ],
    tags: ["BEGINNER", "Positions", "RB"],
    difficulty: "beginner",
    defines: "rb"
  },
  {
    question: "Who catches passes?",
    correctAnswer: "Wide Receivers (WR) and Tight Ends (TE)",
    options: [
      "Wide Receivers (WR) and Tight Ends (TE)",
      "Running Backs only",
      "Offensive linemen",
      "Defensive backs"
    ],
    tags: ["BEGINNER", "Positions", "WR", "TE"],
    difficulty: "beginner",
    defines: "wr"
  },
  {
    question: "How many players are on the field per team?",
    correctAnswer: "11 players",
    options: ["9 players", "10 players", "11 players", "12 players"],
    tags: ["BEGINNER", "Rules"],
    difficulty: "beginner"
  },

  // Offensive Line
  {
    question: "How many offensive linemen are there?",
    correctAnswer: "5 linemen",
    options: ["3 linemen", "4 linemen", "5 linemen", "7 linemen"],
    tags: ["BEGINNER", "O-Line", "Positions"],
    difficulty: "beginner"
  },
  {
    question: "Who snaps the ball to the quarterback?",
    correctAnswer: "Center (C)",
    options: [
      "Center (C)",
      "Guard (G)",
      "Tackle (T)",
      "Tight End (TE)"
    ],
    tags: ["BEGINNER", "O-Line", "Positions"],
    difficulty: "beginner"
  },
  {
    question: "What do offensive linemen do?",
    correctAnswer: "Block defenders to protect QB and create running lanes",
    options: [
      "Block defenders to protect QB and create running lanes",
      "Catch passes and score touchdowns",
      "Tackle running backs",
      "Kick field goals"
    ],
    tags: ["BEGINNER", "O-Line"],
    difficulty: "beginner"
  },

  // Basic Field
  {
    question: "How long is a football field?",
    correctAnswer: "100 yards (plus two 10-yard end zones)",
    options: [
      "80 yards",
      "100 yards (plus two 10-yard end zones)",
      "120 yards total",
      "150 yards"
    ],
    tags: ["BEGINNER", "Field"],
    difficulty: "beginner"
  },
  {
    question: "What's the 50-yard line called?",
    correctAnswer: "Midfield",
    options: ["Goal line", "Midfield", "Red zone", "End zone"],
    tags: ["BEGINNER", "Field"],
    difficulty: "beginner",
    defines: "midfield"
  },
  {
    question: "What's the 'red zone'?",
    correctAnswer: "Inside the opponent's 20-yard line",
    options: [
      "Inside the opponent's 20-yard line",
      "Inside the opponent's 50-yard line",
      "Inside the opponent's 10-yard line",
      "The end zone only"
    ],
    tags: ["BEGINNER", "Field", "Red-Zone"],
    difficulty: "beginner",
    defines: "red-zone"
  },

  // Basic Plays
  {
    question: "What's a 'running play'?",
    correctAnswer: "When the RB carries the ball instead of QB throwing",
    options: [
      "When the RB carries the ball instead of QB throwing",
      "When the QB throws a long pass",
      "When the defense runs after the ball",
      "When the kicker runs with the ball"
    ],
    tags: ["BEGINNER", "Plays", "Running"],
    difficulty: "beginner"
  },
  {
    question: "What's a 'passing play'?",
    correctAnswer: "When the QB throws the ball to a receiver",
    options: [
      "When the QB throws the ball to a receiver",
      "When the RB runs with the ball",
      "When the defense intercepts the ball",
      "When the kicker kicks a field goal"
    ],
    tags: ["BEGINNER", "Plays", "Passing"],
    difficulty: "beginner"
  },
  {
    question: "What's a 'punt'?",
    correctAnswer: "Kicking the ball to the other team on 4th down",
    options: [
      "Scoring 3 points",
      "Kicking the ball to the other team on 4th down",
      "Throwing a long pass",
      "Running with the ball"
    ],
    tags: ["BEGINNER", "Plays", "Special-Teams"],
    difficulty: "beginner",
    defines: "punt"
  },
  {
    question: "What's a 'kickoff'?",
    correctAnswer: "Kicking the ball to start the game or after scoring",
    options: [
      "Kicking the ball to start the game or after scoring",
      "Kicking a field goal",
      "Punting on 4th down",
      "Kicking an extra point"
    ],
    tags: ["BEGINNER", "Plays", "Special-Teams"],
    difficulty: "beginner",
    defines: "kickoff"
  },

  // Turnovers
  {
    question: "What's an interception?",
    correctAnswer: "When defense catches a pass meant for offense",
    options: [
      "When offense drops the ball",
      "When defense catches a pass meant for offense",
      "When the QB gets sacked",
      "When a receiver goes out of bounds"
    ],
    tags: ["BEGINNER", "Turnovers", "INT"],
    difficulty: "beginner",
    defines: "interception"
  },
  {
    question: "What's a fumble?",
    correctAnswer: "When a player drops the ball and loses possession",
    options: [
      "When a player throws an interception",
      "When a player drops the ball and loses possession",
      "When a player catches a pass",
      "When a player scores a touchdown"
    ],
    tags: ["BEGINNER", "Turnovers", "Fumble"],
    difficulty: "beginner",
    defines: "fumble"
  },
  {
    question: "What's a 'turnover'?",
    correctAnswer: "When the ball changes possession (INT or fumble)",
    options: [
      "When the ball changes possession (INT or fumble)",
      "When a team scores a touchdown",
      "When the clock runs out",
      "When a penalty is called"
    ],
    tags: ["BEGINNER", "Turnovers"],
    difficulty: "beginner",
    defines: "turnover"
  },

  // Basic Defense
  {
    question: "What's a 'sack'?",
    correctAnswer: "When defense tackles the QB behind the line of scrimmage",
    options: [
      "When defense intercepts a pass",
      "When defense tackles the QB behind the line of scrimmage",
      "When defense blocks a field goal",
      "When defense forces a fumble"
    ],
    tags: ["BEGINNER", "Defense", "Sack"],
    difficulty: "beginner",
    defines: "sack"
  },

  // Game Flow
  {
    question: "How does a team get the ball to start?",
    correctAnswer: "Coin toss winner chooses to receive kickoff or defer",
    options: [
      "The home team always gets the ball first",
      "Coin toss winner chooses to receive kickoff or defer",
      "The visiting team always gets the ball first",
      "The team with the best record gets the ball first"
    ],
    tags: ["BEGINNER", "Game-Flow"],
    difficulty: "beginner"
  },
  {
    question: "What happens after a touchdown?",
    correctAnswer: "Extra point or 2-point conversion attempt, then kickoff",
    options: [
      "Immediate kickoff to other team",
      "Extra point or 2-point conversion attempt, then kickoff",
      "The other team gets the ball at midfield",
      "Coin toss to decide who gets the ball"
    ],
    tags: ["BEGINNER", "Scoring", "Game-Flow"],
    difficulty: "beginner"
  },
  {
    question: "What happens after a field goal?",
    correctAnswer: "Kickoff to the other team",
    options: [
      "Kickoff to the other team",
      "The other team gets the ball at their 20-yard line",
      "Another field goal attempt",
      "Extra point attempt"
    ],
    tags: ["BEGINNER", "Scoring", "Game-Flow"],
    difficulty: "beginner"
  },

  // Penalties (Basic)
  {
    question: "What's a 'false start'?",
    correctAnswer: "Offensive player moves before the snap (5-yard penalty)",
    options: [
      "Defensive player jumps offsides",
      "Offensive player moves before the snap (5-yard penalty)",
      "QB throws the ball too early",
      "Receiver starts running before the snap"
    ],
    tags: ["BEGINNER", "Penalties"],
    difficulty: "beginner",
    defines: "false-start"
  },
  {
    question: "What's 'holding'?",
    correctAnswer: "Illegally grabbing a player to block them (10-yard penalty)",
    options: [
      "Holding the ball too long",
      "Illegally grabbing a player to block them (10-yard penalty)",
      "Holding onto the ball after being tackled",
      "Holding up the game with a timeout"
    ],
    tags: ["BEGINNER", "Penalties"],
    difficulty: "beginner",
    defines: "holding"
  },
  {
    question: "What is 'pass interference'?",
    correctAnswer: "Illegal contact with receiver before the ball arrives",
    options: [
      "Blocking a field goal attempt",
      "Illegal contact with receiver before the ball arrives",
      "Intercepting a pass",
      "Deflecting a pass at the line"
    ],
    tags: ["BEGINNER", "Penalties", "Pass-Interference"],
    difficulty: "beginner",
    defines: "pass-interference"
  },
  {
    question: "What's the penalty for pass interference?",
    correctAnswer: "Automatic first down at the spot of the foul",
    options: [
      "5-yard penalty",
      "10-yard penalty",
      "15-yard penalty",
      "Automatic first down at the spot of the foul"
    ],
    tags: ["BEGINNER", "Penalties", "Pass-Interference"],
    difficulty: "beginner"
  }
];

export const positionBasicsMCQ: GeneratedMCQ[] = [
  // Offensive Positions
  {
    question: "What does the quarterback do?",
    correctAnswer: "Throws passes and hands off to running backs",
    options: [
      "Throws passes and hands off to running backs",
      "Only runs with the ball",
      "Blocks for other players",
      "Kicks field goals"
    ],
    tags: ["BEGINNER", "Positions", "QB"],
    difficulty: "beginner"
  },
  {
    question: "What does a running back do?",
    correctAnswer: "Runs with the ball and catches passes",
    options: [
      "Only throws passes",
      "Runs with the ball and catches passes",
      "Only blocks for the QB",
      "Kicks punts"
    ],
    tags: ["BEGINNER", "Positions", "RB"],
    difficulty: "beginner"
  },
  {
    question: "What does a wide receiver do?",
    correctAnswer: "Catches passes from the quarterback",
    options: [
      "Blocks defensive linemen",
      "Catches passes from the quarterback",
      "Runs with the ball on every play",
      "Tackles defenders"
    ],
    tags: ["BEGINNER", "Positions", "WR"],
    difficulty: "beginner"
  },
  {
    question: "What's the difference between WR and TE?",
    correctAnswer: "TE blocks like lineman AND catches passes, WR mainly catches",
    options: [
      "WR is faster, TE is the same speed",
      "TE blocks like lineman AND catches passes, WR mainly catches",
      "WR only runs, TE only catches",
      "There is no difference"
    ],
    tags: ["BEGINNER", "Positions"],
    difficulty: "beginner",
    defines: "te"
  },

  // Defensive Positions
  {
    question: "What's a cornerback (CB)?",
    correctAnswer: "Defender who covers wide receivers",
    options: [
      "Defender who covers wide receivers",
      "Defender who rushes the quarterback",
      "Defender who plays offensive line",
      "Defender who kicks field goals"
    ],
    tags: ["BEGINNER", "Positions", "Defense", "CB"],
    difficulty: "beginner",
    defines: "cornerback"
  },
  {
    question: "What's a safety (S)?",
    correctAnswer: "Defensive back who plays deep to prevent big plays",
    options: [
      "Defensive lineman who rushes the QB",
      "Linebacker who covers tight ends",
      "Defensive back who plays deep to prevent big plays",
      "Offensive player who protects the QB"
    ],
    tags: ["BEGINNER", "Positions", "Defense", "Safety"],
    difficulty: "beginner",
    defines: "safety-position"
  },
  {
    question: "What's a linebacker (LB)?",
    correctAnswer: "Defender who can rush QB, cover passes, and stop runs",
    options: [
      "Defender who only covers wide receivers",
      "Defender who can rush QB, cover passes, and stop runs",
      "Defender who only rushes the passer",
      "Defender who plays in the end zone"
    ],
    tags: ["BEGINNER", "Positions", "Defense", "LB"],
    difficulty: "beginner",
    defines: "linebacker"
  },
  {
    question: "What are the main jobs of the defensive line?",
    correctAnswer: "Rush passer, stop runs, occupy blockers",
    options: [
      "Only cover wide receivers",
      "Rush passer, stop runs, occupy blockers",
      "Only intercept passes",
      "Only tackle running backs"
    ],
    tags: ["BEGINNER", "Positions", "Defense", "D-Line"],
    difficulty: "beginner",
    defines: "defensive-line"
  }
];

export const formationBasicsMCQ: GeneratedMCQ[] = [
  {
    question: "What's the 'shotgun' formation?",
    correctAnswer: "QB stands 5-7 yards behind center (not under center)",
    options: [
      "QB under center with RB beside him",
      "QB stands 5-7 yards behind center (not under center)",
      "QB stands at the 50-yard line",
      "QB kneels behind the center"
    ],
    tags: ["BEGINNER", "Formations", "Shotgun"],
    difficulty: "beginner",
    defines: "shotgun"
  },
  {
    question: "What's the 'pistol' formation?",
    correctAnswer: "QB 3-4 yards behind center with RB directly behind QB",
    options: [
      "QB under center with no running back",
      "QB 3-4 yards behind center with RB directly behind QB",
      "QB 10 yards behind center",
      "QB standing on the sideline"
    ],
    tags: ["BEGINNER", "Formations", "Pistol"],
    difficulty: "beginner",
    defines: "pistol"
  },
  {
    question: "What's 'under center'?",
    correctAnswer: "QB takes snap directly from center (hands between legs)",
    options: [
      "QB stands 5 yards behind center",
      "QB takes snap directly from center (hands between legs)",
      "QB receives the ball from the referee",
      "QB starts in the end zone"
    ],
    tags: ["BEGINNER", "Formations"],
    difficulty: "beginner",
    defines: "under-center"
  },
  {
    question: "Why use shotgun formation?",
    correctAnswer: "QB has better view of field and more time to throw",
    options: [
      "To confuse the defense",
      "QB has better view of field and more time to throw",
      "To run the ball better",
      "To kick field goals"
    ],
    tags: ["BEGINNER", "Formations", "Shotgun"],
    difficulty: "beginner"
  },
  {
    question: "What's the 'I formation'?",
    correctAnswer: "RB and fullback lined up in a line behind QB (looks like letter I)",
    options: [
      "QB and receiver side by side",
      "RB and fullback lined up in a line behind QB (looks like letter I)",
      "Three running backs in a triangle",
      "QB standing alone in the backfield"
    ],
    tags: ["BEGINNER", "Formations", "I-Formation"],
    difficulty: "beginner",
    defines: "i-formation"
  }
];

export const routeBasicsMCQ: GeneratedMCQ[] = [
  {
    question: "What's a 'route'?",
    correctAnswer: "The path a receiver runs to get open for a pass",
    options: [
      "The path the quarterback takes to throw",
      "The path a receiver runs to get open for a pass",
      "The path a running back takes",
      "The path to the end zone"
    ],
    tags: ["BEGINNER", "Routes", "Passing"],
    difficulty: "beginner",
    defines: "route"
  },
  {
    question: "What's a 'go route' (Route 9)?",
    correctAnswer: "Receiver runs straight downfield as fast as possible",
    options: [
      "Receiver stops and comes back",
      "Receiver runs straight downfield as fast as possible",
      "Receiver runs to the sideline",
      "Receiver runs across the middle"
    ],
    tags: ["BEGINNER", "Routes"],
    difficulty: "beginner",
    defines: "go-route"
  },
  {
    question: "What's a 'slant route' (Route 2)?",
    correctAnswer: "Quick diagonal route toward the middle of the field",
    options: [
      "Straight downfield route",
      "Quick diagonal route toward the middle of the field",
      "Route to the sideline",
      "Route back to the QB"
    ],
    tags: ["BEGINNER", "Routes"],
    difficulty: "beginner",
    defines: "slant-route"
  },
  {
    question: "What's a 'post route' (Route 8)?",
    correctAnswer: "Deep route angling toward the goal posts",
    options: [
      "Short route to the sideline",
      "Route that stops at 5 yards",
      "Deep route angling toward the goal posts",
      "Route that goes backward"
    ],
    tags: ["BEGINNER", "Routes"],
    difficulty: "beginner",
    defines: "post-route"
  },
  {
    question: "What's an 'out route' (Route 5)?",
    correctAnswer: "Route that breaks toward the sideline",
    options: [
      "Route straight down the middle",
      "Route that breaks toward the sideline",
      "Route that curves back to QB",
      "Route that stays in place"
    ],
    tags: ["BEGINNER", "Routes"],
    difficulty: "beginner",
    defines: "out-route"
  },
  {
    question: "What's a 'hitch route'?",
    correctAnswer: "Short route where receiver stops and comes back to QB",
    options: [
      "Deep route downfield",
      "Short route where receiver stops and comes back to QB",
      "Route to the end zone",
      "Route across the middle"
    ],
    tags: ["BEGINNER", "Routes"],
    difficulty: "beginner",
    defines: "hitch-route"
  },
  {
    question: "Why do routes have numbers?",
    correctAnswer: "So QB and WR know which route to run without long explanations",
    options: [
      "To confuse the defense",
      "So QB and WR know which route to run without long explanations",
      "To keep track of scores",
      "To number the players"
    ],
    tags: ["BEGINNER", "Routes"],
    difficulty: "beginner"
  }
];
