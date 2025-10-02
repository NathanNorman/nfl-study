import { footballBasics, positionBasics, formationBasics, routeBasics } from './beginner/footballBasics';
import { footballBasicsMCQ } from './beginner/footballBasicsMCQ';
import { intermediatePlayerCards } from './intermediate/playerKnowledge';
import { intermediateConcepts } from './intermediate/advancedConcepts';
import { advancedAnalytics } from './advanced/analytics';
import { deepStrategy } from './advanced/deepStrategy';
import { players2025 } from './players2025';
import { fantasyStrategy } from './fantasyStrategy';
import { teams2025, defenseQuestions } from './teams2025';
import { myRosterCards } from './myRoster';

/**
 * Generate flashcards organized by difficulty level
 */
export function generateFlashcardsByDifficulty() {
  const beginner = [
    ...footballBasics,
    ...positionBasics,
    ...formationBasics,
    ...routeBasics
  ];

  const intermediate = [
    ...intermediatePlayerCards,
    ...intermediateConcepts,
    ...myRosterCards // Your roster is intermediate level
  ];

  // Tag existing content as intermediate (player/team knowledge)
  const playerCards = [];
  Object.values(players2025).forEach(playersList => {
    playersList.forEach(player => {
      player.cards.forEach(card => {
        playerCards.push({
          question: card.q,
          answer: card.a,
          tags: [...card.tags, "INTERMEDIATE"],
          difficulty: "intermediate"
        });
      });
    });
  });

  const strategyCards = fantasyStrategy.map(s => ({
    ...s,
    tags: [...s.tags, "INTERMEDIATE"],
    difficulty: "intermediate"
  }));

  const teamCards = teams2025.map(t => ({
    ...t,
    tags: [...t.tags, "INTERMEDIATE"],
    difficulty: "intermediate"
  }));

  const defCards = defenseQuestions.map(d => ({
    ...d,
    tags: [...d.tags, "INTERMEDIATE"],
    difficulty: "intermediate"
  }));

  const advanced = [
    ...advancedAnalytics,
    ...deepStrategy
  ];

  return {
    beginner: {
      cards: beginner,
      count: beginner.length
    },
    intermediate: {
      cards: [...intermediate, ...playerCards, ...strategyCards, ...teamCards, ...defCards],
      count: intermediate.length + playerCards.length + strategyCards.length + teamCards.length + defCards.length
    },
    advanced: {
      cards: advanced,
      count: advanced.length
    },
    all: [
      ...beginner,
      ...intermediate,
      ...playerCards,
      ...strategyCards,
      ...teamCards,
      ...defCards,
      ...advanced
    ]
  };
}

/**
 * Get flashcards for specific difficulty
 */
export function getFlashcardsByDifficulty(difficulty) {
  const organized = generateFlashcardsByDifficulty();
  return organized[difficulty]?.cards || [];
}

/**
 * Get difficulty stats
 */
export function getDifficultyStats() {
  const organized = generateFlashcardsByDifficulty();
  return {
    beginner: organized.beginner.count,
    intermediate: organized.intermediate.count,
    advanced: organized.advanced.count,
    total: organized.all.length
  };
}
