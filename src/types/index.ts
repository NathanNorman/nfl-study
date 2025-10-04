// FSRS types (from ts-fsrs library)
import type { Rating, State } from 'ts-fsrs';

// Re-export FSRS types for convenience
export type { Rating, State };

// ========================================
// CORE DIFFICULTY TYPES
// ========================================

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

// ========================================
// BASE CONTENT ITEM
// ========================================

export interface BaseContentItem {
  id: number;
  question: string;
  answer: string;
  tags: string[];
  difficultyLevel?: DifficultyLevel; // App difficulty (beginner/intermediate/advanced)
  defines?: string;
  prerequisites?: string[];

  // FSRS state (from ts-fsrs Card) - using snake_case to match ts-fsrs
  due: Date;
  stability: number;
  difficulty: number; // FSRS difficulty score (number)
  elapsed_days: number;
  scheduled_days: number;
  learning_steps: number;
  reps: number;
  lapses: number;
  state: State;
  last_review?: Date;
  createdAt: string;
}

// ========================================
// FLASHCARD & MCQ TYPES
// ========================================

export interface Flashcard extends BaseContentItem {
  type?: 'flashcard';
}

export interface MCQCard extends BaseContentItem {
  type: 'mcq';
  options: string[];
  correctAnswer: string;
}

export type ContentItem = Flashcard | MCQCard;

// ========================================
// MODULE TYPES
// ========================================

export interface Module {
  id: string;
  name: string;
  description: string;
  difficulty: DifficultyLevel;
  level: number;
  order: number;
  icon: string;
  IconComponent?: any; // lucide-react component
  color: string;
  estimatedMinutes: number;
  totalCards: number;
  prerequisites: string[] | { or: string[] };
  flashcardIds: string[];
  mcqIds: string[];
  tags: string[];
}

// ========================================
// MODULE PROGRESS TYPES
// ========================================

export type ModuleState = 'notStarted' | 'inProgress' | 'completed' | 'skipped';

export interface ModuleProgressMetrics {
  flashcards: {
    total: number;
    studied: number;
    mastered: number;
    masteredPercent: number;
  };
  mcqs: {
    total: number;
    attempted: number;
    correct: number;
    accuracy: number;
  };
}

export interface ModuleProgress {
  moduleId: string;
  state: ModuleState;
  progress: ModuleProgressMetrics;
  startedAt: string | null;
  lastStudiedAt: string | null;
  completedAt: string | null;
  skippedAt: string | null;
  timeSpent: number;
  createdAt: string;
  lastUpdatedAt: string;
}

// ========================================
// STATISTICS TYPES
// ========================================

export interface Stats {
  total: number;
  due: number;
  new: number;
  learning: number;
  review: number;
  locked: number;
}

// ========================================
// FSRS RATING TYPE
// ========================================

export type FSRSRating = 1 | 2 | 3 | 4; // Again | Hard | Good | Easy

// ========================================
// GENERATED FLASHCARD (before FSRS conversion)
// ========================================

export interface GeneratedFlashcard {
  question: string;
  answer: string;
  tags: string[];
  difficulty?: DifficultyLevel;
  defines?: string;
  prerequisites?: string[];
}

// ========================================
// GENERATED MCQ (before FSRS conversion)
// ========================================

export interface GeneratedMCQ {
  question: string;
  options: string[];
  correctAnswer: string;
  tags: string[];
  difficulty?: DifficultyLevel;
  defines?: string;
  prerequisites?: string[];
}

// ========================================
// ORGANIZED FLASHCARDS (by difficulty)
// ========================================

export interface OrganizedFlashcards {
  all: GeneratedFlashcard[];
  beginner: {
    cards: GeneratedFlashcard[];
    count: number;
  };
  intermediate: {
    cards: GeneratedFlashcard[];
    count: number;
  };
  advanced: {
    cards: GeneratedFlashcard[];
    count: number;
  };
}
