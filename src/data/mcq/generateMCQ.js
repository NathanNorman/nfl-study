import { playersMCQ } from './playersMCQ';
import { strategyMCQ } from './strategyMCQ';
import { teamsMCQ } from './teamsMCQ';
import { myRosterMCQ } from './myRosterMCQ';

/**
 * Shuffle array using Fisher-Yates algorithm
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
 * Generate all MCQ flashcards
 */
export function generateAllMCQ() {
  console.log('🔍 [generateAllMCQ] Starting MCQ generation...');
  const cards = [];

  // Add all MCQ sets
  console.log('🔍 [generateAllMCQ] Adding', playersMCQ.length, 'player MCQs');
  playersMCQ.forEach(mcq => {
    cards.push({
      ...mcq,
      options: shuffleArray(mcq.options), // Shuffle options so correct answer isn't always first
      type: 'mcq'
    });
  });

  console.log('🔍 [generateAllMCQ] Adding', strategyMCQ.length, 'strategy MCQs');
  strategyMCQ.forEach(mcq => {
    cards.push({
      ...mcq,
      options: shuffleArray(mcq.options),
      type: 'mcq'
    });
  });

  console.log('🔍 [generateAllMCQ] Adding', teamsMCQ.length, 'team MCQs');
  teamsMCQ.forEach(mcq => {
    cards.push({
      ...mcq,
      options: shuffleArray(mcq.options),
      type: 'mcq'
    });
  });

  console.log('🔍 [generateAllMCQ] Adding', myRosterMCQ.length, 'roster MCQs');
  myRosterMCQ.forEach(mcq => {
    cards.push({
      ...mcq,
      options: shuffleArray(mcq.options),
      type: 'mcq'
    });
  });

  console.log('🔍 [generateAllMCQ] ✅ Total MCQs generated:', cards.length);
  return cards;
}

/**
 * Get MCQ stats
 */
export function getMCQStats() {
  return {
    totalMCQs: playersMCQ.length + strategyMCQ.length + teamsMCQ.length + myRosterMCQ.length,
    playerMCQs: playersMCQ.length,
    strategyMCQs: strategyMCQ.length,
    teamMCQs: teamsMCQ.length,
    rosterMCQs: myRosterMCQ.length
  };
}
