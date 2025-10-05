/**
 * MODULE SYSTEM - Complete Learning Path Definitions
 * 8-module streamlined path from beginner to advanced
 */

import type { Module } from '../../types';
import {
  GraduationCap,
  TrendingUp,
  Zap,
  Shield,
  Users,
  BarChart3,
  Target,
  Trophy
} from 'lucide-react';

export const MODULE_DEFINITIONS: Module[] = [
  // ========================================
  // LEVEL 1: FOUNDATION
  // ========================================
  {
    id: "module-football-101",
    name: "Football 101",
    description: "Master the fundamentals of NFL rules, scoring, and basic positions",
    difficulty: "beginner",
    level: 1,
    order: 1,
    icon: "🏈",
    IconComponent: GraduationCap,
    color: "blue",

    // No prerequisites - always unlocked
    prerequisites: [],

    // Content will be populated by cardModuleMappings
    flashcardIds: [],
    mcqIds: [],

    // Metadata
    estimatedMinutes: 45,
    totalCards: 80, // Approximate
    tags: [],

    // Learning objectives
    objectives: [
      "Understand NFL scoring system",
      "Identify all 11 positions",
      "Know basic rules and penalties",
      "Learn field geography and game structure"
    ]
  },

  // ========================================
  // LEVEL 2: FANTASY FUNDAMENTALS
  // ========================================
  {
    id: "module-fantasy-basics",
    name: "Fantasy Football Basics",
    description: "Learn PPR scoring, waiver wire, starting lineup, and weekly management",
    difficulty: "beginner",
    level: 2,
    order: 2,
    icon: "📊",
    IconComponent: TrendingUp,
    color: "green",

    // Requires Module 1 to be completed or skipped
    prerequisites: ["module-football-101"],

    flashcardIds: [],
    mcqIds: [],

    estimatedMinutes: 30,
    totalCards: 60,
    tags: [],

    objectives: [
      "Master PPR vs standard scoring",
      "Understand roster construction",
      "Learn waiver wire basics",
      "Know how to set weekly lineups"
    ]
  },

  // ========================================
  // LEVEL 3: NFL CONCEPTS
  // ========================================
  {
    id: "module-offensive-playbook",
    name: "Offensive Playbook",
    description: "Formations, snap concepts, play action, RPO, and route tree fundamentals",
    difficulty: "intermediate",
    level: 3,
    order: 3,
    icon: "⚡",
    IconComponent: Zap,
    color: "yellow",

    // Requires Module 2
    prerequisites: ["module-fantasy-basics"],

    flashcardIds: [],
    mcqIds: [],

    estimatedMinutes: 30,
    totalCards: 50,
    tags: [],

    objectives: [
      "Recognize common formations (shotgun, pistol, I-formation)",
      "Understand play concepts (play action, screen, RPO)",
      "Learn the route tree",
      "Know pre-snap concepts (motion, audible, hard count)"
    ]
  },

  {
    id: "module-defensive-schemes",
    name: "Defensive Schemes",
    description: "Man/zone coverage, blitz concepts, nickel/dime packages, and Cover 2/3",
    difficulty: "intermediate",
    level: 3,
    order: 4,
    icon: "🛡️",
    IconComponent: Shield,
    color: "red",

    // Also requires Module 2 (parallel to offensive playbook)
    prerequisites: ["module-fantasy-basics"],

    flashcardIds: [],
    mcqIds: [],

    estimatedMinutes: 25,
    totalCards: 40,
    tags: [],

    objectives: [
      "Distinguish man vs zone coverage",
      "Understand defensive packages (nickel, dime, prevent)",
      "Learn blitz concepts (QB spy, contain, gap discipline)",
      "Recognize Cover 2, Cover 3, Tampa 2"
    ]
  },

  // ========================================
  // LEVEL 4: PLAYER EVALUATION
  // ========================================
  {
    id: "module-player-analysis",
    name: "Player Analysis 2024-2025",
    description: "QB/RB/WR/TE rankings, 2024 stats, and 2025 fantasy projections",
    difficulty: "intermediate",
    level: 4,
    order: 5,
    icon: "🌟",
    IconComponent: Users,
    color: "purple",

    // Requires EITHER offensive playbook OR defensive schemes (OR logic)
    // User must complete at least one NFL concepts module
    prerequisites: {
      or: ["module-offensive-playbook", "module-defensive-schemes"]
    },

    flashcardIds: [],
    mcqIds: [],

    estimatedMinutes: 50,
    totalCards: 90,
    tags: [],

    objectives: [
      "Know 2024 season stats and awards (MVP, OPOY, OROY)",
      "Understand 2025 player rankings by position",
      "Learn team contexts and offensive situations",
      "Evaluate personal roster decisions"
    ]
  },

  // ========================================
  // LEVEL 5: ADVANCED CONCEPTS
  // ========================================
  {
    id: "module-analytics-metrics",
    name: "Analytics & Metrics",
    description: "Target share, snap count, opportunity share, YAC, xFP, and regression analysis",
    difficulty: "advanced",
    level: 5,
    order: 6,
    icon: "📈",
    IconComponent: BarChart3,
    color: "cyan",

    // Requires Module 5 (Player Analysis)
    prerequisites: ["module-player-analysis"],

    flashcardIds: [],
    mcqIds: [],

    estimatedMinutes: 30,
    totalCards: 50,
    tags: [],

    objectives: [
      "Understand target share and opportunity metrics",
      "Learn snap count analysis",
      "Master air yards and YAC concepts",
      "Use expected fantasy points (xFP)",
      "Identify touchdown regression candidates"
    ]
  },

  {
    id: "module-draft-waiver-mastery",
    name: "Draft & Waiver Mastery",
    description: "ADP, Zero RB, FAAB, handcuffs, streaming, and draft strategies",
    difficulty: "advanced",
    level: 5,
    order: 7,
    icon: "🎯",
    IconComponent: Target,
    color: "orange",

    // Also requires Module 5 (parallel to analytics)
    prerequisites: ["module-player-analysis"],

    flashcardIds: [],
    mcqIds: [],

    estimatedMinutes: 40,
    totalCards: 70,
    tags: [],

    objectives: [
      "Master draft strategies (Zero RB, Hero RB, late-round QB)",
      "Understand ADP and value-based drafting",
      "Learn FAAB bidding strategies",
      "Know when to target handcuffs",
      "Master streaming strategies (QB, TE, DEF)"
    ]
  },

  // ========================================
  // LEVEL 6: MASTERY
  // ========================================
  {
    id: "module-championship-strategy",
    name: "Championship Strategy",
    description: "Trade timing, playoff schedule, game script analysis, and regression predictions",
    difficulty: "advanced",
    level: 6,
    order: 8,
    icon: "🏆",
    IconComponent: Trophy,
    color: "gold",

    // Requires BOTH Module 6 AND Module 7 (AND logic)
    prerequisites: ["module-analytics-metrics", "module-draft-waiver-mastery"],

    flashcardIds: [],
    mcqIds: [],

    estimatedMinutes: 35,
    totalCards: 60,
    tags: [],

    objectives: [
      "Master game script analysis (positive/negative/neutral)",
      "Learn optimal trade timing (buy low, sell high)",
      "Plan for playoff schedules",
      "Build championship-winning rosters",
      "Predict regression accurately"
    ]
  }
];

/**
 * Get module by ID
 */
export function getModuleById(moduleId: string): Module | undefined {
  return MODULE_DEFINITIONS.find(m => m.id === moduleId);
}

/**
 * Get all modules
 */
export function getAllModules(): Module[] {
  return MODULE_DEFINITIONS;
}

/**
 * Get modules by level
 */
export function getModulesByLevel(level: number): Module[] {
  return MODULE_DEFINITIONS.filter(m => m.level === level);
}

/**
 * Get modules by difficulty
 */
export function getModulesByDifficulty(difficulty: string): Module[] {
  return MODULE_DEFINITIONS.filter(m => m.difficulty === difficulty);
}

/**
 * Get total number of modules
 */
export function getModuleCount(): number {
  return MODULE_DEFINITIONS.length;
}
