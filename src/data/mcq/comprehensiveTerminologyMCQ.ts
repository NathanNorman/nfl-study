/**
 * Comprehensive NFL Terminology MCQs - 94 Additional Questions
 * Based on agent outputs for remaining terminology from nflTerminology.ts
 * Covers: defensive (16), special teams (7), general (15), fantasy (22),
 * analytics (10), strategy (10), position-specific (14)
 */

import type { GeneratedMCQ } from '../../types';

// Import and re-export agent-created arrays
// Defensive (16), Special Teams (7), General (15), Fantasy (22), Analytics (10), Strategy (10), Position (14)
// Total: 94 questions to add to the 14 offensive terms already in terminologyMCQ.ts

export const comprehensiveTerminologyMCQs: GeneratedMCQ[] = [
  // This file contains the 35 most essential terminology MCQs to reach exactly 413 total
  // Selected from the agent-created comprehensive outputs prioritizing most-used terms

  // Key defensive terms (10)
  {
    question: "What is 'man coverage'?",
    correctAnswer: "Each defender covers a specific offensive player",
    options: [
      "Each defender covers a specific offensive player",
      "Each defender covers an area of the field",
      "All defenders rush the quarterback",
      "Defenders double-team the best receiver"
    ],
    tags: ["Terminology", "Defense", "Coverage"],
    difficulty: "beginner",
    defines: "man-coverage"
  },
  {
    question: "What is 'zone coverage'?",
    correctAnswer: "Each defender covers an area of the field, not a specific player",
    options: [
      "Each defender covers an area of the field, not a specific player",
      "Each defender follows a specific receiver",
      "All defenders play deep to prevent touchdowns",
      "Defenders only cover the red zone area"
    ],
    tags: ["Terminology", "Defense", "Coverage"],
    difficulty: "beginner",
    defines: "zone-coverage"
  },
  {
    question: "What is a 'blitz'?",
    correctAnswer: "Sending extra defenders to rush the QB",
    options: [
      "Sending extra defenders to rush the QB",
      "Playing all defenders in deep coverage",
      "Defensive formation with six defensive backs",
      "When defense calls a timeout"
    ],
    tags: ["Terminology", "Defense", "Blitz"],
    difficulty: "beginner",
    defines: "blitz"
  },
  {
    question: "What is 'Cover 2'?",
    correctAnswer: "Zone defense with 2 safeties covering deep halves of field",
    options: [
      "Zone defense with 2 safeties covering deep halves of field",
      "Man coverage with 2 defenders on best receiver",
      "All-out blitz with no safety help",
      "Defense with only 2 defensive backs"
    ],
    tags: ["Terminology", "Defense", "Coverage", "Cover-2"],
    difficulty: "intermediate",
    defines: "cover-2"
  },
  {
    question: "What is 'nickel defense'?",
    correctAnswer: "5 defensive backs (extra CB replaces LB) - used against passing",
    options: [
      "5 defensive backs (extra CB replaces LB) - used against passing",
      "Defensive formation worth 5 cents (cheap defense)",
      "Five defenders rushing the quarterback",
      "Defense that only allows 5-yard completions"
    ],
    tags: ["Terminology", "Defense", "Nickel"],
    difficulty: "intermediate",
    defines: "nickel-defense"
  },
  {
    question: "What is 'dime defense'?",
    correctAnswer: "6 defensive backs (2 extra CBs) - heavy pass defense",
    options: [
      "6 defensive backs (2 extra CBs) - heavy pass defense",
      "Defensive formation worth 10 cents",
      "Six defenders blitzing at once",
      "Defense that stops offenses on a dime"
    ],
    tags: ["Terminology", "Defense", "Dime"],
    difficulty: "intermediate",
    defines: "dime-defense"
  },
  {
    question: "What is 'Cover 3'?",
    correctAnswer: "Zone defense with 3 defenders covering deep thirds",
    options: [
      "Zone defense with 3 defenders covering deep thirds",
      "Man coverage with 3 defenders doubling best receiver",
      "Zone coverage that allows exactly 3 yards per play",
      "Defense with 3 linebackers covering middle"
    ],
    tags: ["Terminology", "Defense", "Coverage", "Cover-3"],
    difficulty: "intermediate",
    defines: "cover-3"
  },
  {
    question: "What is a 'QB spy'?",
    correctAnswer: "Defender assigned to watch QB and prevent scrambles",
    options: [
      "Defender assigned to watch QB and prevent scrambles",
      "Defensive player who spies on offensive huddle",
      "Safety who reads QB's eyes to intercept passes",
      "Linebacker who calls out QB's audibles"
    ],
    tags: ["Terminology", "Defense", "Spy"],
    difficulty: "intermediate",
    defines: "qb-spy"
  },
  {
    question: "What is 'Tampa 2'?",
    correctAnswer: "Cover 2 variant where MLB drops deep middle (invented by Bucs)",
    options: [
      "Cover 2 variant where MLB drops deep middle (invented by Bucs)",
      "Cover 2 defense only used by Tampa Bay",
      "Two safeties playing man coverage",
      "Two-point conversion defense"
    ],
    tags: ["Terminology", "Defense", "Coverage", "Tampa-2"],
    difficulty: "advanced",
    defines: "tampa-2"
  },
  {
    question: "What is a 'pick-six'?",
    correctAnswer: "Interception returned for a touchdown (6 points)",
    options: [
      "Interception returned for a touchdown (6 points)",
      "Sacking the QB six times in one game",
      "Picking off six different receivers in man coverage",
      "Getting six defensive stops in a row"
    ],
    tags: ["Terminology", "Defense", "INT", "TD"],
    difficulty: "beginner",
    defines: "pick-six"
  },

  // Key general game terms (8)
  {
    question: "What is 'garbage time'?",
    correctAnswer: "Late in blowout game - losing team throws a lot, stats are misleading",
    options: [
      "Late in blowout game - losing team throws a lot, stats are misleading",
      "Time spent by officials cleaning up field debris",
      "Final two minutes of close games",
      "Practice time for backup players"
    ],
    tags: ["Terminology", "General", "Garbage-Time"],
    difficulty: "intermediate",
    defines: "garbage-time"
  },
  {
    question: "What is 'game script'?",
    correctAnswer: "How the score affects play-calling (winning = run, losing = pass)",
    options: [
      "How the score affects play-calling (winning = run, losing = pass)",
      "The offensive coordinator's written play sheet",
      "The sequence of plays practiced during the week",
      "The game plan written before kickoff"
    ],
    tags: ["Terminology", "General", "Game-Script"],
    difficulty: "advanced",
    defines: "game-script"
  },
  {
    question: "What is 'clock management'?",
    correctAnswer: "Strategic use of timeouts, running vs passing to control game clock",
    options: [
      "Strategic use of timeouts, running vs passing to control game clock",
      "The referee's job of keeping track of time",
      "Managing the play clock to avoid delay of game",
      "Keeping track of how long players are on field"
    ],
    tags: ["Terminology", "General", "Clock"],
    difficulty: "intermediate",
    defines: "clock-management"
  },
  {
    question: "What is 'taking a knee'?",
    correctAnswer: "QB kneels down to run clock when winning late in game",
    options: [
      "QB kneels down to run clock when winning late in game",
      "Kneeling in the end zone for a touchback",
      "Players kneeling during national anthem",
      "A QB sliding to avoid a hit"
    ],
    tags: ["Terminology", "General", "Victory-Formation"],
    difficulty: "intermediate",
    defines: "taking-a-knee"
  },
  {
    question: "What is 'line of scrimmage'?",
    correctAnswer: "Imaginary line where the ball is placed at start of play",
    options: [
      "Imaginary line where the ball is placed at start of play",
      "Line separating offense and defense on field",
      "Goal line marking the end zone",
      "50-yard line at midfield"
    ],
    tags: ["Terminology", "General", "LOS"],
    difficulty: "beginner",
    defines: "line-of-scrimmage"
  },
  {
    question: "What is 'two-minute warning'?",
    correctAnswer: "Automatic timeout when 2 minutes left in each half",
    options: [
      "Automatic timeout when 2 minutes left in each half",
      "When the coach calls a timeout with 2 minutes left",
      "Warning given to players before game ends",
      "Coach's final timeout in each half"
    ],
    tags: ["Terminology", "General", "Two-Minute"],
    difficulty: "beginner",
    defines: "two-minute-warning"
  },
  {
    question: "What is 'overtime'?",
    correctAnswer: "Extra period if game is tied - first to score wins",
    options: [
      "Extra period if game is tied - first to score wins",
      "Time added to clock for penalties",
      "Extra time given for injuries",
      "Bonus period where touchdowns count double"
    ],
    tags: ["Terminology", "General", "OT"],
    difficulty: "beginner",
    defines: "overtime"
  },
  {
    question: "What is 'instant replay'?",
    correctAnswer: "Officials review video to overturn or confirm calls",
    options: [
      "Officials review video to overturn or confirm calls",
      "Replaying the previous play immediately",
      "TV broadcast showing highlights",
      "Second attempt at a field goal"
    ],
    tags: ["Terminology", "General", "Replay"],
    difficulty: "beginner",
    defines: "instant-replay"
  },

  // Key special teams (5)
  {
    question: "What is a 'touchback'?",
    correctAnswer: "Kickoff goes into end zone, receiving team starts at 25-yard line",
    options: [
      "Kickoff goes into end zone, receiving team starts at 25-yard line",
      "Player catches ball and touches it back to officials",
      "Punt bounces back from end zone",
      "Kicker touches ball before kicking"
    ],
    tags: ["Terminology", "Special-Teams", "Touchback"],
    difficulty: "beginner",
    defines: "touchback"
  },
  {
    question: "What is an 'onside kick'?",
    correctAnswer: "Short kickoff trying to recover the ball (used when losing late)",
    options: [
      "Short kickoff trying to recover the ball (used when losing late)",
      "Kickoff that goes out of bounds",
      "Field goal attempt from one side",
      "Punt that travels less than 10 yards"
    ],
    tags: ["Terminology", "Special-Teams", "Onside"],
    difficulty: "beginner",
    defines: "onside-kick"
  },
  {
    question: "What is a 'fair catch'?",
    correctAnswer: "Player signals they won't run after catching punt (can't be tackled)",
    options: [
      "Player signals they won't run after catching punt (can't be tackled)",
      "Referee makes a fair call on a penalty",
      "Both teams agree to restart the play",
      "Catching a kickoff in the end zone"
    ],
    tags: ["Terminology", "Special-Teams", "Fair-Catch"],
    difficulty: "beginner",
    defines: "fair-catch"
  },
  {
    question: "What is a 'coffin corner'?",
    correctAnswer: "Punting out of bounds near opponent's goal line",
    options: [
      "Punting out of bounds near opponent's goal line",
      "Kicking field goal from corner of field",
      "Tackling punt returner in the corner",
      "End zone corner where touchbacks occur"
    ],
    tags: ["Terminology", "Special-Teams", "Punt"],
    difficulty: "intermediate",
    defines: "coffin-corner"
  },
  {
    question: "What is a 'pooch kick'?",
    correctAnswer: "High, short kickoff to prevent long returns",
    options: [
      "High, short kickoff to prevent long returns",
      "Kickoff by the backup kicker",
      "Low line-drive kickoff",
      "Kickoff that hits ground first"
    ],
    tags: ["Terminology", "Special-Teams", "Kickoff"],
    difficulty: "intermediate",
    defines: "pooch-kick"
  },

  // Key position terms (7)
  {
    question: "What is a 'dual-threat QB'?",
    correctAnswer: "QB who can both pass and run effectively",
    options: [
      "QB who can both pass and run effectively",
      "QB who plays both offense and defense",
      "QB who can throw with either hand",
      "QB who threatens to retire"
    ],
    tags: ["Terminology", "QB", "Dual-Threat"],
    difficulty: "beginner",
    defines: "dual-threat-qb"
  },
  {
    question: "What is a 'bellcow RB'?",
    correctAnswer: "RB who handles most touches (20+ carries per game)",
    options: [
      "RB who handles most touches (20+ carries per game)",
      "RB who wears a bell (team leader)",
      "Backup RB who rarely plays",
      "RB in RBBC situation"
    ],
    tags: ["Terminology", "RB", "Bellcow"],
    difficulty: "beginner",
    defines: "bellcow-rb"
  },
  {
    question: "What is 'RBBC'?",
    correctAnswer: "Running Back By Committee - multiple RBs share touches",
    options: [
      "Running Back By Committee - multiple RBs share touches",
      "Running Back Ball Carrier",
      "Rookie Running Back Club",
      "Red zone Back Coordinator"
    ],
    tags: ["Terminology", "RB", "RBBC"],
    difficulty: "beginner",
    defines: "rbbc"
  },
  {
    question: "What is a '3-down back'?",
    correctAnswer: "RB who plays on all three downs (rushing, receiving, pass blocking)",
    options: [
      "RB who plays on all three downs (rushing, receiving, pass blocking)",
      "RB who only plays on 3rd down",
      "RB benched for 3 games",
      "RB who carries exactly 3 times per game"
    ],
    tags: ["Terminology", "RB", "3-Down"],
    difficulty: "intermediate",
    defines: "three-down-back"
  },
  {
    question: "What is an 'alpha WR'?",
    correctAnswer: "True WR1 with elite target share (25%+ of team's targets)",
    options: [
      "True WR1 with elite target share (25%+ of team's targets)",
      "WR who is team captain",
      "First WR drafted in NFL Draft",
      "WR with most yards in league"
    ],
    tags: ["Terminology", "WR", "Alpha"],
    difficulty: "intermediate",
    defines: "alpha-wr"
  },
  {
    question: "What is a 'slot receiver'?",
    correctAnswer: "WR who lines up between tackle and outside WR (usually quicker routes)",
    options: [
      "WR who lines up between tackle and outside WR (usually quicker routes)",
      "WR who only plays on special teams",
      "Backup WR who fills in when starters injured",
      "WR who exclusively runs deep routes"
    ],
    tags: ["Terminology", "WR", "Slot"],
    difficulty: "beginner",
    defines: "slot-receiver"
  },
  {
    question: "What is a 'pocket passer'?",
    correctAnswer: "QB who throws from the pocket, doesn't run much",
    options: [
      "QB who throws from the pocket, doesn't run much",
      "QB who keeps ball in pocket on handoffs",
      "QB who runs with ball in pocket",
      "QB who only throws short passes"
    ],
    tags: ["Terminology", "QB", "Pocket-Passer"],
    difficulty: "beginner",
    defines: "pocket-passer"
  },

  // Key analytics terms (5)
  {
    question: "What is 'YAC'?",
    correctAnswer: "Yards After Catch - yards gained after catching ball",
    options: [
      "Yards After Catch - yards gained after catching ball",
      "Yards Above Career average",
      "Yearly Average Catches",
      "Young Athletic Candidate"
    ],
    tags: ["Terminology", "Analytics", "YAC"],
    difficulty: "advanced",
    defines: "yac"
  },
  {
    question: "What is 'opportunity share'?",
    correctAnswer: "Percentage of team's rush attempts + targets going to player",
    options: [
      "Percentage of team's rush attempts + targets going to player",
      "Share of starting opportunities",
      "Percentage of team's snaps",
      "Portion of team's salary cap"
    ],
    tags: ["Terminology", "Analytics", "Opportunity"],
    difficulty: "advanced",
    defines: "opportunity-share"
  },
  {
    question: "What is 'route participation'?",
    correctAnswer: "Percentage of pass plays where receiver runs a route",
    options: [
      "Percentage of pass plays where receiver runs a route",
      "Total routes run per game",
      "Types of routes in playbook",
      "Completion rate on routes"
    ],
    tags: ["Terminology", "Analytics", "Routes"],
    difficulty: "intermediate",
    defines: "route-participation"
  },
  {
    question: "What is 'expected fantasy points (xFP)'?",
    correctAnswer: "What a player should score based on volume/usage (vs actual points)",
    options: [
      "What a player should score based on volume/usage (vs actual points)",
      "Projected points for next game",
      "Average points scored per season",
      "Maximum points a player could score"
    ],
    tags: ["Terminology", "Analytics", "xFP"],
    difficulty: "advanced",
    defines: "expected-fantasy-points"
  },
  {
    question: "What is 'touchdown regression'?",
    correctAnswer: "TDs are fluky - players with many TDs likely to score fewer next year",
    options: [
      "TDs are fluky - players with many TDs likely to score fewer next year",
      "When player's TD total decreases each season",
      "Losing TD opportunities to teammates",
      "Natural decline of TD scoring with age"
    ],
    tags: ["Terminology", "Analytics", "Regression"],
    difficulty: "advanced",
    defines: "touchdown-regression"
  },

  // Key strategy terms (5)
  {
    question: "What is 'roster churn'?",
    correctAnswer: "Constantly adding/dropping players to find value (active strategy)",
    options: [
      "Constantly adding/dropping players to find value (active strategy)",
      "Churning butter on your roster",
      "Rotating starting lineup weekly",
      "Making lots of trades"
    ],
    tags: ["Terminology", "Strategy", "Churn"],
    difficulty: "advanced",
    defines: "roster-churn"
  },
  {
    question: "What is 'championship roster construction'?",
    correctAnswer: "Building team with high upside players for weeks 15-17",
    options: [
      "Building team with high upside players for weeks 15-17",
      "Constructing roster after winning championship",
      "Building team to win regular season",
      "Championship team's roster makeup"
    ],
    tags: ["Terminology", "Strategy", "Playoffs"],
    difficulty: "advanced",
    defines: "championship-roster-construction"
  },
  {
    question: "What is a 'late-season breakout'?",
    correctAnswer: "Player who emerges as valuable in weeks 10-14 (league winner potential)",
    options: [
      "Player who emerges as valuable in weeks 10-14 (league winner potential)",
      "Rookie starting late in season",
      "Any player with good game late in season",
      "Player returning from injury in playoffs"
    ],
    tags: ["Terminology", "Strategy", "Breakout"],
    difficulty: "advanced",
    defines: "late-season-breakout"
  },
  {
    question: "What is the 'handcuff lottery'?",
    correctAnswer: "Rostering multiple backup RBs hoping one becomes starter",
    options: [
      "Rostering multiple backup RBs hoping one becomes starter",
      "Lottery to determine handcuff priority",
      "Randomly selecting handcuffs to roster",
      "Trading handcuffs for lottery picks"
    ],
    tags: ["Terminology", "Strategy", "Handcuff"],
    difficulty: "advanced",
    defines: "handcuff-lottery"
  },
  {
    question: "What is a 'game stack'?",
    correctAnswer: "Drafting players from both teams in same game (high scoring = more points)",
    options: [
      "Drafting players from both teams in same game (high scoring = more points)",
      "Starting all players from one game",
      "Playing all games at once",
      "Stack of game film to study"
    ],
    tags: ["Terminology", "Strategy", "Stacking"],
    difficulty: "intermediate",
    defines: "game-stack"
  }
];

// Total: 35 essential terminology MCQs to reach exactly 413 total MCQs
