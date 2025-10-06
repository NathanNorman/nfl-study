import { fsrs, generatorParameters, Rating, State, createEmptyCard } from 'ts-fsrs';
import type { Flashcard, FSRSRating, ContentItem } from '../types';

// Initialize FSRS with default parameters
const params = generatorParameters();
const f = fsrs(params);

export { Rating, State };

/**
 * Create a new card
 */
export function createCard(
  question: string,
  answer: string,
  tags: string[] = [],
  defines?: string,
  prerequisites: string[] = []
): Flashcard {
  console.log('🔍 [createCard] Creating new card:', question.substring(0, 50) + '...');
  const card = createEmptyCard();
  console.log('🔍 [createCard] Empty card created:', card);
  const newCard: Flashcard = {
    ...card,
    id: Date.now() + Math.random(),
    question,
    answer,
    tags,
    defines,
    prerequisites,
    createdAt: new Date().toISOString()
  };
  console.log('🔍 [createCard] ✅ Card created with ID:', newCard.id);
  return newCard;
}

/**
 * Schedule next review based on rating
 */
export function scheduleCard(card: Flashcard, rating: FSRSRating): Flashcard {
  console.log('🔍 [scheduleCard] Scheduling card with rating:', rating);
  console.log('🔍 [scheduleCard] Card before:', { id: card.id, due: card.due, state: card.state });

  const now = new Date();
  const scheduling = f.repeat(card, now);

  // Get the scheduled card based on rating
  const ratingMap = {
    1: scheduling[Rating.Again],
    2: scheduling[Rating.Hard],
    3: scheduling[Rating.Good],
    4: scheduling[Rating.Easy]
  } as const;

  const result = ratingMap[rating];
  const scheduledCard: Flashcard = {
    ...card,
    ...result.card,
    question: card.question,
    answer: card.answer,
    tags: card.tags,
    defines: card.defines,
    prerequisites: card.prerequisites,
    id: card.id,
    createdAt: card.createdAt
  };

  console.log('🔍 [scheduleCard] Card after:', { id: scheduledCard.id, due: scheduledCard.due, state: scheduledCard.state });
  console.log('🔍 [scheduleCard] ✅ Rescheduled for:', scheduledCard.due);

  return scheduledCard;
}

/**
 * Check if card is due for review
 */
export function isDue<T extends ContentItem>(card: T): boolean {
  const now = new Date();
  return new Date(card.due) <= now;
}

/**
 * Get card state as string
 */
export function getStateString(state: State): string {
  const states: Record<State, string> = {
    [State.New]: 'New',
    [State.Learning]: 'Learning',
    [State.Review]: 'Review',
    [State.Relearning]: 'Relearning'
  };
  return states[state] || 'Unknown';
}
