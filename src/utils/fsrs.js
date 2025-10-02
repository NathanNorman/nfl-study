import { fsrs, generatorParameters, Rating, State } from 'ts-fsrs';

// Initialize FSRS with default parameters
const params = generatorParameters();
const f = fsrs(params);

export { Rating, State };

/**
 * Create a new card
 */
export function createCard(question, answer, tags = []) {
  const card = f.createEmptyCard();
  return {
    ...card,
    id: Date.now() + Math.random(),
    question,
    answer,
    tags,
    createdAt: new Date().toISOString()
  };
}

/**
 * Schedule next review based on rating
 */
export function scheduleCard(card, rating) {
  const now = new Date();
  const scheduling = f.repeat(card, now);

  // Get the scheduled card based on rating
  const ratingMap = {
    1: scheduling[Rating.Again],
    2: scheduling[Rating.Hard],
    3: scheduling[Rating.Good],
    4: scheduling[Rating.Easy]
  };

  const result = ratingMap[rating];
  return {
    ...card,
    ...result.card,
    question: card.question,
    answer: card.answer,
    tags: card.tags,
    id: card.id,
    createdAt: card.createdAt
  };
}

/**
 * Check if card is due for review
 */
export function isDue(card) {
  const now = new Date();
  return new Date(card.due) <= now;
}

/**
 * Get card state as string
 */
export function getStateString(state) {
  const states = {
    [State.New]: 'New',
    [State.Learning]: 'Learning',
    [State.Review]: 'Review',
    [State.Relearning]: 'Relearning'
  };
  return states[state] || 'Unknown';
}
