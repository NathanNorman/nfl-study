import type { GeneratedMCQ, OrganizedFlashcards } from '../../types';
import { footballBasicsMCQ } from '../beginner/footballBasicsMCQ';
import { playersMCQ } from './playersMCQ';
import { strategyMCQ } from './strategyMCQ';
import { teamsMCQ } from './teamsMCQ';
import { myRosterMCQ } from './myRosterMCQ';
import { allPlayerMCQs } from './players2025MCQ';
import { strategy2025MCQs } from './strategy2025MCQ';
import { allTeamsMCQs } from './teams2025MCQ';
import { advancedMCQ } from './advancedMCQ';
import { intermediatePlayerMCQ } from './intermediatePlayerMCQ';
import { intermediateConceptsMCQ } from './intermediateConceptsMCQ';
import { extendedRosterMCQ } from './extendedRosterMCQ';
import { additionalPlayersMCQ } from './additionalPlayersMCQ';
import { comprehensiveTerminologyMCQs } from './comprehensiveTerminologyMCQ';

/**
 * Shuffle array
 */
function shuffleArray<T>(array: T[]): T[] {
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
function tagMCQDifficulty(mcqs: GeneratedMCQ[], difficulty: string): GeneratedMCQ[] {
  return mcqs.map(mcq => ({
    ...mcq,
    difficulty: mcq.difficulty || difficulty,
    tags: mcq.tags || []
  }));
}

/**
 * Generate MCQs organized by difficulty
 */
export function generateMCQByDifficulty(): OrganizedFlashcards<GeneratedMCQ> {
  const beginner = [
    ...footballBasicsMCQ, // Already tagged as beginner
    ...allPlayerMCQs.filter(m => m.difficulty === 'beginner'),
    ...allTeamsMCQs.filter(m => m.difficulty === 'beginner'),
    ...comprehensiveTerminologyMCQs.filter(m => m.difficulty === 'beginner')
  ];

  const intermediate = [
    ...tagMCQDifficulty(playersMCQ, 'intermediate'),
    ...tagMCQDifficulty(teamsMCQ, 'intermediate'),
    ...tagMCQDifficulty(myRosterMCQ, 'intermediate'),
    ...intermediatePlayerMCQ, // Detailed player knowledge (handcuffs, context, etc.)
    ...intermediateConceptsMCQ, // FAAB, waiver wire, roster management
    ...extendedRosterMCQ, // Extended personal roster MCQs
    ...additionalPlayersMCQ, // Additional player-specific MCQs and defense
    ...allPlayerMCQs.filter(m => m.difficulty === 'intermediate' || !m.difficulty),
    ...allTeamsMCQs.filter(m => m.difficulty === 'intermediate'),
    ...comprehensiveTerminologyMCQs.filter(m => m.difficulty === 'intermediate')
  ];

  const advanced = [
    ...tagMCQDifficulty(strategyMCQ, 'advanced'),
    ...strategy2025MCQs,
    ...advancedMCQ, // Advanced analytics and deep strategy
    ...allPlayerMCQs.filter(m => m.difficulty === 'advanced'),
    ...allTeamsMCQs.filter(m => m.difficulty === 'advanced'),
    ...comprehensiveTerminologyMCQs.filter(m => m.difficulty === 'advanced')
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
export function getMCQByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced' | 'all'): GeneratedMCQ[] {
  const organized = generateMCQByDifficulty();
  return organized[difficulty]?.cards || [];
}

/**
 * Get MCQ difficulty stats
 */
export function getMCQDifficultyStats(): {
  beginner: number;
  intermediate: number;
  advanced: number;
  total: number;
} {
  const organized = generateMCQByDifficulty();
  return {
    beginner: organized.beginner.count,
    intermediate: organized.intermediate.count,
    advanced: organized.advanced.count,
    total: organized.all.length
  };
}
