import { players2025 } from './players2025';
import { fantasyStrategy } from './fantasyStrategy';
import { teams2025, defenseQuestions } from './teams2025';

/**
 * Generate all flashcards from player and strategy data
 */
export function generateAllFlashcards() {
  const cards = [];

  // Generate player cards for all positions
  Object.entries(players2025).forEach(([position, playersList]) => {
    playersList.forEach(player => {
      // Card 1: Stats/achievements question
      cards.push({
        question: `What were ${player.name}'s key achievements in 2024?`,
        answer: player.stats,
        tags: [...player.tags, position.toUpperCase()]
      });

      // Card 2: Fantasy outlook question
      cards.push({
        question: `What is ${player.name}'s fantasy football outlook for 2025?`,
        answer: player.fantasy,
        tags: [...player.tags, position.toUpperCase()]
      });

      // Card 3: Team association
      cards.push({
        question: `Which team does ${player.name} play for?`,
        answer: player.team,
        tags: [...player.tags, 'Teams', position.toUpperCase()]
      });
    });
  });

  // Add strategy cards
  fantasyStrategy.forEach(strategy => {
    cards.push({
      question: strategy.question,
      answer: strategy.answer,
      tags: strategy.tags
    });
  });

  // Add team cards
  teams2025.forEach(team => {
    cards.push({
      question: team.question,
      answer: team.answer,
      tags: team.tags
    });
  });

  // Add defense cards
  defenseQuestions.forEach(def => {
    cards.push({
      question: def.question,
      answer: def.answer,
      tags: def.tags
    });
  });

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
