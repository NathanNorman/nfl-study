/**
 * MODULE PROGRESS TRACKING
 * Calculate module completion, mastery, and progress metrics
 */

/**
 * Calculate module progress from card data
 * @param {String} moduleId - Module ID
 * @param {Array} flashcards - All flashcards (filtered by module if needed)
 * @param {Array} mcqs - All MCQs (filtered by module if needed)
 * @param {Array} flashcardIdsInModule - Question texts of flashcards in this module
 * @param {Array} mcqIdsInModule - Question texts of MCQs in this module
 * @returns {Object} - Progress object with flashcard/MCQ metrics
 */
export function calculateModuleProgress(
  moduleId,
  flashcards = [],
  mcqs = [],
  flashcardIdsInModule = [],
  mcqIdsInModule = []
) {
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

  const result = {
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
 * @param {Object} progress - Progress object from calculateModuleProgress
 * @param {Number} threshold - Mastery threshold (default 80%)
 * @returns {boolean}
 */
export function isModuleComplete(progress, threshold = 80) {
  if (!progress || !progress.flashcards) return false;

  // Module is complete when 80%+ flashcards are mastered
  return progress.flashcards.masteredPercent >= threshold;
}

/**
 * Check if module is skipped
 * @param {Object} moduleProgress - Module progress object from storage
 * @returns {boolean}
 */
export function isModuleSkipped(moduleProgress) {
  return moduleProgress?.state === 'skipped';
}

/**
 * Check if module is in progress
 * @param {Object} moduleProgress - Module progress object from storage
 * @returns {boolean}
 */
export function isModuleInProgress(moduleProgress) {
  return moduleProgress?.state === 'inProgress';
}

/**
 * Check if module has been started
 * @param {Object} moduleProgress - Module progress object from storage
 * @returns {boolean}
 */
export function isModuleStarted(moduleProgress) {
  return moduleProgress?.state !== 'notStarted' && moduleProgress?.state !== undefined;
}

/**
 * Determine module state based on progress
 * @param {Object} progress - Progress object from calculateModuleProgress
 * @param {Object} existingModuleProgress - Existing module progress from storage
 * @returns {String} - 'notStarted' | 'inProgress' | 'completed' | 'skipped'
 */
export function determineModuleState(progress, existingModuleProgress) {
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
 * @param {Object} moduleProgress - Module progress object from storage
 * @returns {Number} - Time spent in seconds
 */
export function getTimeSpent(moduleProgress) {
  return moduleProgress?.timeSpent || 0;
}

/**
 * Get completion percentage (0-100)
 * Based on flashcard study progress (cards studied / total cards)
 * @param {Object} progress - Progress object from calculateModuleProgress
 * @returns {Number}
 */
export function getCompletionPercent(progress) {
  if (!progress || !progress.flashcards) return 0;
  const { total, studied } = progress.flashcards;
  if (total === 0) return 0;
  return Math.round((studied / total) * 100 * 100) / 100;
}

/**
 * Get module state display info
 * @param {String} state - Module state
 * @returns {Object} - {icon, label, color}
 */
export function getStateDisplay(state) {
  const displays = {
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
 * @param {Object} module - Module definition
 * @param {Object} progress - Progress object from calculateModuleProgress
 * @returns {Number} - Estimated minutes remaining
 */
export function estimateTimeRemaining(module, progress) {
  if (!progress || !progress.flashcards) return module.estimatedMinutes || 0;

  const percentComplete = progress.flashcards.masteredPercent;
  const totalTime = module.estimatedMinutes || 0;

  const timeRemaining = Math.round(totalTime * (1 - percentComplete / 100));
  return Math.max(0, timeRemaining);
}
