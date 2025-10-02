import { players2025 } from './players2025';
import { fantasyStrategy } from './fantasyStrategy';
import { teams2025, defenseQuestions } from './teams2025';
import { myRosterCards } from './myRoster';

/**
 * Generate all flashcards from player and strategy data
 */
export function generateAllFlashcards() {
  console.log('🔍 [generateAllFlashcards] Starting generation...');
  const cards = [];

  // Generate player cards - new structure with multiple cards per player
  console.log('🔍 [generateAllFlashcards] Processing players2025:', Object.keys(players2025));
  Object.entries(players2025).forEach(([position, playersList]) => {
    console.log(`🔍 [generateAllFlashcards] Processing ${position}: ${playersList.length} players`);
    playersList.forEach(player => {
      // Each player now has their own array of cards
      player.cards.forEach(card => {
        cards.push({
          question: card.q,
          answer: card.a,
          tags: card.tags
        });
      });
    });
  });

  // Add strategy cards
  console.log('🔍 [generateAllFlashcards] Adding', fantasyStrategy.length, 'strategy cards');
  fantasyStrategy.forEach(strategy => {
    cards.push({
      question: strategy.question,
      answer: strategy.answer,
      tags: strategy.tags
    });
  });

  // Add team cards
  console.log('🔍 [generateAllFlashcards] Adding', teams2025.length, 'team cards');
  teams2025.forEach(team => {
    cards.push({
      question: team.question,
      answer: team.answer,
      tags: team.tags
    });
  });

  // Add defense cards
  console.log('🔍 [generateAllFlashcards] Adding', defenseQuestions.length, 'defense cards');
  defenseQuestions.forEach(def => {
    cards.push({
      question: def.question,
      answer: def.answer,
      tags: def.tags
    });
  });

  // Add personalized roster cards
  console.log('🔍 [generateAllFlashcards] Adding', myRosterCards.length, 'MY ROSTER cards');
  myRosterCards.forEach(card => {
    cards.push({
      question: card.question,
      answer: card.answer,
      tags: card.tags
    });
  });

  console.log('🔍 [generateAllFlashcards] ✅ Total cards generated:', cards.length);
  return cards;
}

/**
 * Get flashcards by category/tag
 */
export function getFlashcardsByTag(tag) {
  const allCards = generateAllFlashcards();
  return allCards.filter(card => card.tags.includes(tag));
}

/**
 * Get flashcards by position
 */
export function getFlashcardsByPosition(position) {
  return getFlashcardsByTag(position.toUpperCase());
}

/**
 * Get random subset of flashcards
 */
export function getRandomFlashcards(count = 50) {
  const allCards = generateAllFlashcards();
  const shuffled = allCards.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, allCards.length));
}

/**
 * Get stats about flashcard database
 */
export function getFlashcardStats() {
  const allCards = generateAllFlashcards();
  const tags = new Set();
  allCards.forEach(card => card.tags.forEach(tag => tags.add(tag)));

  const positionCounts = {};
  Object.entries(players2025).forEach(([position, playersList]) => {
    positionCounts[position] = playersList.length;
  });

  return {
    totalCards: allCards.length,
    totalPlayers: Object.values(players2025).flat().length,
    totalTags: tags.size,
    positions: Object.keys(players2025),
    positionCounts,
    strategyCards: fantasyStrategy.length,
    teamCards: teams2025.length,
    defenseCards: defenseQuestions.length,
    rosterCards: myRosterCards.length,
    categories: [...tags].sort()
  };
}

/**
 * Get all available tags for filtering
 */
export function getAllTags() {
  const allCards = generateAllFlashcards();
  const tags = new Set();
  allCards.forEach(card => card.tags.forEach(tag => tags.add(tag)));
  return [...tags].sort();
}
