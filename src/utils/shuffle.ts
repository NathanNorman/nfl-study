import type { ContentItem } from '../types';

/**
 * Fisher-Yates shuffle algorithm
 * Randomizes array order in-place
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffled[i];
    const swapItem = shuffled[j];
    if (temp !== undefined && swapItem !== undefined) {
      shuffled[i] = swapItem;
      shuffled[j] = temp;
    }
  }
  return shuffled;
}

/**
 * Group cards by their primary category (first tag after difficulty level)
 * Then shuffle cards within each category
 */
export function groupAndShuffleByCategory<T extends ContentItem>(cards: T[]): T[] {
  // Group by primary category
  const grouped: Record<string, T[]> = {};

  cards.forEach(card => {
    // Get primary category (first non-difficulty tag)
    const category = card.tags?.find(tag =>
      !['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'beginner', 'intermediate', 'advanced'].includes(tag)
    ) || 'Uncategorized';

    if (!grouped[category]) {
      grouped[category] = [];
    }
    grouped[category].push(card);
  });

  // Shuffle within each category
  const shuffledGroups: Record<string, T[]> = {};
  Object.keys(grouped).forEach(category => {
    const categoryCards = grouped[category];
    if (categoryCards) {
      shuffledGroups[category] = shuffleArray(categoryCards);
    }
  });

  // Return in a consistent category order (alphabetical), but cards within are shuffled
  const sortedCategories = Object.keys(shuffledGroups).sort();
  const result: T[] = [];

  sortedCategories.forEach(category => {
    const categoryCards = shuffledGroups[category];
    if (categoryCards) {
      result.push(...categoryCards);
    }
  });

  return result;
}

export interface MCQChoice {
  text: string;
  isCorrect: boolean;
}

/**
 * Shuffle MCQ answer choices
 * Returns shuffled array of {text, isCorrect} objects
 */
export function shuffleMCQChoices(correctAnswer: string, wrongAnswers: string[]): MCQChoice[] {
  const choices: MCQChoice[] = [
    { text: correctAnswer, isCorrect: true },
    ...wrongAnswers.map(answer => ({ text: answer, isCorrect: false }))
  ];

  return shuffleArray(choices);
}
