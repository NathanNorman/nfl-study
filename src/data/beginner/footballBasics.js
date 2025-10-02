/**
 * BEGINNER: Football Basics - Rules, Scoring, Game Structure
 * For people who are new to football
 */

export const footballBasics = [
  // Game Structure
  { question: "How long is halftime in an NFL game?", answer: "12 minutes", tags: ["BEGINNER", "Rules", "Game-Structure"], difficulty: "beginner" },

  // Scoring
  { question: "How many points is a touchdown worth?", answer: "6 points", tags: ["BEGINNER", "Scoring", "Touchdown"], difficulty: "beginner" },
  { question: "How many points is a field goal worth?", answer: "3 points", tags: ["BEGINNER", "Scoring", "Field-Goal"], difficulty: "beginner" },
  { question: "What is a PAT (Point After Touchdown)?", answer: "An extra point kick after a touchdown, worth 1 point. Also called an 'extra point'.", tags: ["BEGINNER", "Scoring", "Extra-Point", "PAT"], difficulty: "beginner" },
  { question: "How many points is a PAT (extra point) worth?", answer: "1 point", tags: ["BEGINNER", "Scoring", "Extra-Point", "PAT"], difficulty: "beginner" },
  { question: "What is a 2-point conversion?", answer: "Instead of kicking a PAT, the team runs or passes from the 2-yard line. If successful, they score 2 points instead of 1.", tags: ["BEGINNER", "Scoring", "Two-Point"], difficulty: "beginner" },
  { question: "How many points is a safety worth?", answer: "2 points (awarded to defense)", tags: ["BEGINNER", "Scoring", "Safety"], difficulty: "beginner" },
  { question: "What's the most points you can score on one play?", answer: "6 points (touchdown)", tags: ["BEGINNER", "Scoring"], difficulty: "beginner" },

  // Downs System
  { question: "How many downs does a team get to gain 10 yards?", answer: "4 downs", tags: ["BEGINNER", "Downs", "Rules"], difficulty: "beginner" },
  { question: "What happens if you gain 10 yards?", answer: "You get a new set of 4 downs (first down)", tags: ["BEGINNER", "Downs", "First-Down"], difficulty: "beginner" },
  { question: "What happens if you don't gain 10 yards in 4 downs?", answer: "The other team gets the ball (turnover on downs)", tags: ["BEGINNER", "Downs", "Turnover"], difficulty: "beginner" },
  { question: "What does '1st and 10' mean?", answer: "1st down with 10 yards to go for another first down", tags: ["BEGINNER", "Downs"], difficulty: "beginner" },
  { question: "What does '3rd and 5' mean?", answer: "3rd down with 5 yards needed for a first down", tags: ["BEGINNER", "Downs"], difficulty: "beginner" },
  { question: "What's the most important down?", answer: "3rd down (last chance before 4th down decision)", tags: ["BEGINNER", "Downs", "Strategy"], difficulty: "beginner" },

  // Basic Positions
  { question: "Who throws the ball?", answer: "Quarterback (QB)", tags: ["BEGINNER", "Positions", "QB"], difficulty: "beginner" },
  { question: "Who runs with the ball?", answer: "Running Back (RB)", tags: ["BEGINNER", "Positions", "RB"], difficulty: "beginner" },
  { question: "Who catches passes?", answer: "Wide Receivers (WR) and Tight Ends (TE)", tags: ["BEGINNER", "Positions", "WR", "TE"], difficulty: "beginner" },
  { question: "How many players are on the field per team?", answer: "11 players", tags: ["BEGINNER", "Rules"], difficulty: "beginner" },

  // Offensive Line
  { question: "How many offensive linemen are there?", answer: "5 linemen", tags: ["BEGINNER", "O-Line", "Positions"], difficulty: "beginner" },
  { question: "Who snaps the ball to the quarterback?", answer: "Center (C)", tags: ["BEGINNER", "O-Line", "Positions"], difficulty: "beginner" },
  { question: "What do offensive linemen do?", answer: "Block defenders to protect QB and create running lanes", tags: ["BEGINNER", "O-Line"], difficulty: "beginner" },

  // Basic Field
  { question: "How long is a football field?", answer: "100 yards (plus two 10-yard end zones)", tags: ["BEGINNER", "Field"], difficulty: "beginner" },
  { question: "What's the 50-yard line called?", answer: "Midfield", tags: ["BEGINNER", "Field"], difficulty: "beginner" },
  { question: "What's the 'red zone'?", answer: "Inside the opponent's 20-yard line", tags: ["BEGINNER", "Field", "Red-Zone"], difficulty: "beginner" },

  // Basic Plays
  { question: "What's a 'running play'?", answer: "When the RB carries the ball instead of QB throwing", tags: ["BEGINNER", "Plays", "Running"], difficulty: "beginner" },
  { question: "What's a 'passing play'?", answer: "When the QB throws the ball to a receiver", tags: ["BEGINNER", "Plays", "Passing"], difficulty: "beginner" },
  { question: "What's a 'punt'?", answer: "Kicking the ball to the other team on 4th down", tags: ["BEGINNER", "Plays", "Special-Teams"], difficulty: "beginner" },
  { question: "What's a 'kickoff'?", answer: "Kicking the ball to start the game or after scoring", tags: ["BEGINNER", "Plays", "Special-Teams"], difficulty: "beginner" },

  // Turnovers
  { question: "What's an interception?", answer: "When defense catches a pass meant for offense", tags: ["BEGINNER", "Turnovers", "INT"], difficulty: "beginner" },
  { question: "What's a fumble?", answer: "When a player drops the ball and loses possession", tags: ["BEGINNER", "Turnovers", "Fumble"], difficulty: "beginner" },
  { question: "What's a 'turnover'?", answer: "When the ball changes possession (INT or fumble)", tags: ["BEGINNER", "Turnovers"], difficulty: "beginner" },

  // Basic Defense
  { question: "What's a 'sack'?", answer: "When defense tackles the QB behind the line of scrimmage", tags: ["BEGINNER", "Defense", "Sack"], difficulty: "beginner" },

  // Game Flow
  { question: "How does a team get the ball to start?", answer: "Coin toss winner chooses to receive kickoff or defer", tags: ["BEGINNER", "Game-Flow"], difficulty: "beginner" },
  { question: "What happens after a touchdown?", answer: "Extra point or 2-point conversion attempt, then kickoff", tags: ["BEGINNER", "Scoring", "Game-Flow"], difficulty: "beginner" },
  { question: "What happens after a field goal?", answer: "Kickoff to the other team", tags: ["BEGINNER", "Scoring", "Game-Flow"], difficulty: "beginner" },

  // Penalties (Basic)
  { question: "What's a 'false start'?", answer: "Offensive player moves before the snap (5-yard penalty)", tags: ["BEGINNER", "Penalties"], difficulty: "beginner" },
  { question: "What's 'holding'?", answer: "Illegally grabbing a player to block them (10-yard penalty)", tags: ["BEGINNER", "Penalties"], difficulty: "beginner" },
  { question: "What is 'pass interference'?", answer: "A penalty called when a defender makes illegal contact with a receiver who is trying to catch a pass. This includes grabbing, pushing, or hitting the receiver before the ball arrives.", tags: ["BEGINNER", "Penalties", "Pass-Interference"], difficulty: "beginner" },
  { question: "What's the penalty for pass interference?", answer: "Automatic first down at the spot of the foul (in NFL). Can be a game-changing penalty.", tags: ["BEGINNER", "Penalties", "Pass-Interference"], difficulty: "beginner" }
];

export const positionBasics = [
  // Offensive Positions
  { question: "What does the quarterback do?", answer: "Throws passes and hands off to running backs", tags: ["BEGINNER", "Positions", "QB"], difficulty: "beginner" },
  { question: "What does a running back do?", answer: "Runs with the ball and catches passes", tags: ["BEGINNER", "Positions", "RB"], difficulty: "beginner" },
  { question: "What does a wide receiver do?", answer: "Catches passes from the quarterback", tags: ["BEGINNER", "Positions", "WR"], difficulty: "beginner" },
  { question: "What's the difference between WR and TE?", answer: "TE blocks like lineman AND catches passes, WR mainly catches", tags: ["BEGINNER", "Positions"], difficulty: "beginner" },

  // Defensive Positions
  { question: "What's a cornerback (CB)?", answer: "Defender who covers wide receivers", tags: ["BEGINNER", "Positions", "Defense", "CB"], difficulty: "beginner" },
  { question: "What's a safety (S)?", answer: "Defensive back who plays deep to prevent big plays", tags: ["BEGINNER", "Positions", "Defense", "Safety"], difficulty: "beginner" },
  { question: "What's a linebacker (LB)?", answer: "Defender who can rush QB, cover passes, and stop runs", tags: ["BEGINNER", "Positions", "Defense", "LB"], difficulty: "beginner" },
  { question: "What are the main jobs of the defensive line?", answer: "1) Rush the passer to sack the QB, 2) Stop running plays at the line of scrimmage, 3) Occupy blockers to free up linebackers", tags: ["BEGINNER", "Positions", "Defense", "D-Line"], difficulty: "beginner" }
];

export const formationBasics = [
  { question: "What's the 'shotgun' formation?", answer: "QB stands 5-7 yards behind center (not under center)", tags: ["BEGINNER", "Formations", "Shotgun"], difficulty: "beginner" },
  { question: "What's the 'pistol' formation?", answer: "QB 3-4 yards behind center with RB directly behind QB", tags: ["BEGINNER", "Formations", "Pistol"], difficulty: "beginner" },
  { question: "What's 'under center'?", answer: "QB takes snap directly from center (hands between legs)", tags: ["BEGINNER", "Formations"], difficulty: "beginner" },
  { question: "Why use shotgun formation?", answer: "QB has better view of field and more time to throw", tags: ["BEGINNER", "Formations", "Shotgun"], difficulty: "beginner" },
  { question: "What's the 'I formation'?", answer: "RB and fullback lined up in a line behind QB (looks like letter I)", tags: ["BEGINNER", "Formations", "I-Formation"], difficulty: "beginner" }
];

export const routeBasics = [
  { question: "What's a 'route'?", answer: "The path a receiver runs to get open for a pass", tags: ["BEGINNER", "Routes", "Passing"], difficulty: "beginner" },
  { question: "What's a 'go route' (Route 9)?", answer: "Receiver runs straight downfield as fast as possible", tags: ["BEGINNER", "Routes"], difficulty: "beginner" },
  { question: "What's a 'slant route' (Route 2)?", answer: "Quick diagonal route toward the middle of the field", tags: ["BEGINNER", "Routes"], difficulty: "beginner" },
  { question: "What's a 'post route' (Route 8)?", answer: "Deep route angling toward the goal posts", tags: ["BEGINNER", "Routes"], difficulty: "beginner" },
  { question: "What's a 'out route' (Route 5)?", answer: "Route that breaks toward the sideline", tags: ["BEGINNER", "Routes"], difficulty: "beginner" },
  { question: "What's a 'hitch route'?", answer: "Short route where receiver stops and comes back to QB", tags: ["BEGINNER", "Routes"], difficulty: "beginner" },
  { question: "Why do routes have numbers?", answer: "So QB and WR know which route to run without long explanations", tags: ["BEGINNER", "Routes"], difficulty: "beginner" }
];
