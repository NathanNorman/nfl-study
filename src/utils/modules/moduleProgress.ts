/**
 * MODULE PROGRESS TRACKING
 * Calculate module completion, mastery, and progress metrics
 */

import type { Flashcard, MCQCard, Module, ModuleProgress, ModuleProgressMetrics, ModuleState } from '../../types';

/**
 * Calculate module progress from card data
 */
export function calculateModuleProgress(
  moduleId: string,
  flashcards: Flashcard[] = [],
  mcqs: MCQCard[] = [],
  flashcardIdsInModule: string[] = [],
  mcqIdsInModule: string[] = []
): ModuleProgressMetrics {
  console.log('🔍 [calculateModuleProgress] Input:', {
    moduleId,
    totalFlashcardsProvided: flashcards.length,
    totalMCQsProvided: mcqs.length,
    flashcardIdsInModule: flashcardIdsInModule.length,
    mcqIdsInModule: mcqIdsInModule.length
  });

  // Filter cards to only those in this module
  const moduleFlashcards = flashcards.filter(card =>
    flashcardIdsInModule.includes(card.question)
  );

  const moduleMCQs = mcqs.filter(card =>
    mcqIdsInModule.includes(card.question)
  );

  console.log('📋 [calculateModuleProgress] Filtered cards:', {
    moduleFlashcards: moduleFlashcards.length,
    moduleMCQs: moduleMCQs.length
  });

  // Log first few cards to check reps
  if (moduleFlashcards.length > 0) {
    console.log('🔍 [calculateModuleProgress] Sample flashcard reps:',
      moduleFlashcards.slice(0, 3).map(c => ({
        question: c.question.substring(0, 30),
        reps: c.reps,
        state: c.state,
        stability: c.stability
      }))
    );
  }

  // Flashcard progress
  const flashcardTotal = moduleFlashcards.length;
  const flashcardStudied = moduleFlashcards.filter(card =>
    card.reps && card.reps > 0
  ).length;

  console.log('📊 [calculateModuleProgress] Flashcard studied calculation:', {
    total: flashcardTotal,
    studiedCount: flashcardStudied,
    cardsWithReps: moduleFlashcards.filter(c => c.reps > 0).map(c => ({
      q: c.question.substring(0, 30),
      reps: c.reps
    }))
  });

  // Mastered = FSRS state is 2 (Review) AND stability > 21
  const flashcardMastered = moduleFlashcards.filter(card =>
    card.state === 2 && card.stability > 21
  ).length;

  const flashcardMasteredPercent = flashcardTotal > 0
    ? Math.round((flashcardMastered / flashcardTotal) * 100 * 100) / 100
    : 0;

  // MCQ progress
  const mcqTotal = moduleMCQs.length;
  const mcqAttempted = moduleMCQs.filter(card =>
    card.reps && card.reps > 0
  ).length;

  // For MCQs, "correct" means last review was rated 3 or 4 (Good/Easy)
  const mcqCorrect = moduleMCQs.filter(card => {
    // We can track this via FSRS state or custom field
    // For now, use stability as proxy: high stability = answered correctly
    return card.state === 2 && card.stability > 7;
  }).length;

  const mcqAccuracy = mcqAttempted > 0
    ? Math.round((mcqCorrect / mcqAttempted) * 100 * 100) / 100
    : 0;

  const result: ModuleProgressMetrics = {
    flashcards: {
      total: flashcardTotal,
      studied: flashcardStudied,
      mastered: flashcardMastered,
      masteredPercent: flashcardMasteredPercent
    },
    mcqs: {
      total: mcqTotal,
      attempted: mcqAttempted,
      correct: mcqCorrect,
      accuracy: mcqAccuracy
    }
  };

  console.log('✅ [calculateModuleProgress] Final result:', result);
  return result;
}

/**
 * Check if module is complete based on mastery threshold
 */
export function isModuleComplete(progress: ModuleProgressMetrics, threshold: number = 80): boolean {
  if (!progress || !progress.flashcards) return false;

  // Module is complete when 80%+ flashcards are mastered
  return progress.flashcards.masteredPercent >= threshold;
}

/**
 * Check if module is skipped
 */
export function isModuleSkipped(moduleProgress?: ModuleProgress): boolean {
  return moduleProgress?.state === 'skipped';
}

/**
 * Check if module is in progress
 */
export function isModuleInProgress(moduleProgress?: ModuleProgress): boolean {
  return moduleProgress?.state === 'inProgress';
}

/**
 * Check if module has been started
 */
export function isModuleStarted(moduleProgress?: ModuleProgress): boolean {
  return moduleProgress?.state !== 'notStarted' && moduleProgress?.state !== undefined;
}

/**
 * Determine module state based on progress
 */
export function determineModuleState(
  progress: ModuleProgressMetrics,
  existingModuleProgress?: ModuleProgress
): ModuleState {
  // If explicitly skipped, keep that state
  if (existingModuleProgress?.state === 'skipped') {
    return 'skipped';
  }

  // If explicitly marked complete, keep that state
  if (existingModuleProgress?.state === 'completed') {
    return 'completed';
  }

  // Auto-complete if 80%+ mastered
  if (isModuleComplete(progress)) {
    return 'completed';
  }

  // In progress if any cards have been studied
  if (progress.flashcards.studied > 0 || progress.mcqs.attempted > 0) {
    return 'inProgress';
  }

  // Otherwise not started
  return 'notStarted';
}

/**
 * Calculate time spent in module (placeholder - requires tracking)
 */
export function getTimeSpent(moduleProgress?: ModuleProgress): number {
  return moduleProgress?.timeSpent || 0;
}

/**
 * Get completion percentage (0-100)
 * Based on flashcard study progress (cards studied / total cards)
 */
export function getCompletionPercent(progress: ModuleProgressMetrics): number {
  if (!progress || !progress.flashcards) return 0;
  const { total, studied } = progress.flashcards;
  if (total === 0) return 0;
  return Math.round((studied / total) * 100 * 100) / 100;
}

export interface StateDisplay {
  icon: string;
  label: string;
  color: string;
}

/**
 * Get module state display info
 */
export function getStateDisplay(state: ModuleState): StateDisplay {
  const displays: Record<ModuleState, StateDisplay> = {
    notStarted: {
      icon: '⚪',
      label: 'Not Started',
      color: 'gray'
    },
    inProgress: {
      icon: '🔄',
      label: 'In Progress',
      color: 'blue'
    },
    completed: {
      icon: '✅',
      label: 'Completed',
      color: 'green'
    },
    skipped: {
      icon: '⏭️',
      label: 'Skipped',
      color: 'yellow'
    }
  };

  return displays[state] || displays.notStarted;
}

/**
 * Estimate time remaining in module
 */
export function estimateTimeRemaining(module: Module, progress: ModuleProgressMetrics): number {
  if (!progress || !progress.flashcards) return module.estimatedMinutes || 0;

  const percentComplete = progress.flashcards.masteredPercent;
  const totalTime = module.estimatedMinutes || 0;

  const timeRemaining = Math.round(totalTime * (1 - percentComplete / 100));
  return Math.max(0, timeRemaining);
}
