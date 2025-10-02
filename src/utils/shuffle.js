/**
 * Fisher-Yates shuffle algorithm
 * Randomizes array order in-place
 */
export function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Group cards by their primary category (first tag after difficulty level)
 * Then shuffle cards within each category
 */
export function groupAndShuffleByCategory(cards) {
  // Group by primary category
  const grouped = {};

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
  const shuffledGroups = {};
  Object.keys(grouped).forEach(category => {
    shuffledGroups[category] = shuffleArray(grouped[category]);
  });

  // Return in a consistent category order (alphabetical), but cards within are shuffled
  const sortedCategories = Object.keys(shuffledGroups).sort();
  const result = [];

  sortedCategories.forEach(category => {
    result.push(...shuffledGroups[category]);
  });

  return result;
}

/**
 * Shuffle MCQ answer choices
 * Returns shuffled array of {text, isCorrect} objects
 */
export function shuffleMCQChoices(correctAnswer, wrongAnswers) {
  const choices = [
    { text: correctAnswer, isCorrect: true },
    ...wrongAnswers.map(answer => ({ text: answer, isCorrect: false }))
  ];

  return shuffleArray(choices);
}
