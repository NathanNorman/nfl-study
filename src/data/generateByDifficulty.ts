import { footballBasics, positionBasics, formationBasics, routeBasics } from './beginner/footballBasics';
import { intermediatePlayerCards } from './intermediate/playerKnowledge';
import { intermediateConcepts } from './intermediate/advancedConcepts';
import { advancedAnalytics } from './advanced/analytics';
import { deepStrategy } from './advanced/deepStrategy';
import { players2025, type Player, type PlayerCard } from './players2025';
import { fantasyStrategy } from './fantasyStrategy';
import { teams2025, defenseQuestions } from './teams2025';
import { myRosterCards } from './myRoster';
import { terminologyByDifficulty } from './nflTerminology';
import type { GeneratedFlashcard, OrganizedFlashcards } from '../types';

/**
 * Generate flashcards organized by difficulty level
 */
export function generateFlashcardsByDifficulty(): OrganizedFlashcards {
  const beginner = [
    ...footballBasics,
    ...positionBasics,
    ...formationBasics,
    ...routeBasics,
    ...terminologyByDifficulty.beginner
  ];

  const intermediate = [
    ...intermediatePlayerCards,
    ...intermediateConcepts,
    ...myRosterCards, // Your roster is intermediate level
    ...terminologyByDifficulty.intermediate
  ];

  // Tag existing content as intermediate (player/team knowledge)
  const playerCards: GeneratedFlashcard[] = [];
  Object.values(players2025).forEach((playersList: Player[]) => {
    playersList.forEach((player: Player) => {
      player.cards.forEach((card: PlayerCard) => {
        playerCards.push({
          question: card.q,
          answer: card.a,
          tags: [...card.tags, "INTERMEDIATE"],
          difficulty: "intermediate" as const,
          ...(card.defines && { defines: card.defines }),
          ...(card.prerequisites && { prerequisites: card.prerequisites })
        });
      });
    });
  });

  const strategyCards: GeneratedFlashcard[] = fantasyStrategy.map(s => ({
    ...s,
    tags: [...s.tags, "INTERMEDIATE"],
    difficulty: "intermediate" as const
  }));

  const teamCards: GeneratedFlashcard[] = teams2025.map(t => ({
    ...t,
    tags: [...t.tags, "INTERMEDIATE"],
    difficulty: "intermediate" as const
  }));

  const defCards: GeneratedFlashcard[] = defenseQuestions.map(d => ({
    ...d,
    tags: [...d.tags, "INTERMEDIATE"],
    difficulty: "intermediate" as const
  }));

  const advanced = [
    ...advancedAnalytics,
    ...deepStrategy,
    ...terminologyByDifficulty.advanced
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
export function getFlashcardsByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): GeneratedFlashcard[] {
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
