import { footballBasicsMCQ } from '../beginner/footballBasicsMCQ';
import { playersMCQ } from './playersMCQ';
import { strategyMCQ } from './strategyMCQ';
import { teamsMCQ } from './teamsMCQ';
import { myRosterMCQ } from './myRosterMCQ';

/**
 * Shuffle array
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Add difficulty tags to existing MCQs
 */
function tagMCQDifficulty(mcqs, difficulty) {
  return mcqs.map(mcq => ({
    ...mcq,
    difficulty: mcq.difficulty || difficulty,
    tags: mcq.tags || []
  }));
}

/**
 * Generate MCQs organized by difficulty
 */
export function generateMCQByDifficulty() {
  const beginner = [
    ...footballBasicsMCQ // Already tagged as beginner
  ];

  const intermediate = [
    ...tagMCQDifficulty(playersMCQ, 'intermediate'),
    ...tagMCQDifficulty(teamsMCQ, 'intermediate'),
    ...tagMCQDifficulty(myRosterMCQ, 'intermediate')
  ];

  const advanced = [
    ...tagMCQDifficulty(strategyMCQ, 'advanced') // Strategy is advanced level
  ];

  const all = [...beginner, ...intermediate, ...advanced];

  // Shuffle options for each MCQ
  const shuffled = all.map(mcq => ({
    ...mcq,
    options: shuffleArray(mcq.options)
  }));

  return {
    beginner: {
      cards: beginner.map(mcq => ({ ...mcq, options: shuffleArray(mcq.options) })),
      count: beginner.length
    },
    intermediate: {
      cards: intermediate.map(mcq => ({ ...mcq, options: shuffleArray(mcq.options) })),
      count: intermediate.length
    },
    advanced: {
      cards: advanced.map(mcq => ({ ...mcq, options: shuffleArray(mcq.options) })),
      count: advanced.length
    },
    all: shuffled
  };
}

/**
 * Get MCQs for specific difficulty
 */
export function getMCQByDifficulty(difficulty) {
  const organized = generateMCQByDifficulty();
  return organized[difficulty]?.cards || [];
}

/**
 * Get MCQ difficulty stats
 */
export function getMCQDifficultyStats() {
  const organized = generateMCQByDifficulty();
  return {
    beginner: organized.beginner.count,
    intermediate: organized.intermediate.count,
    advanced: organized.advanced.count,
    total: organized.all.length
  };
}
