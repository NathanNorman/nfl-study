import { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { createCard, scheduleCard, isDue } from '../utils/fsrs';
import { generateMCQByDifficulty } from '../data/mcq/generateMCQByDifficulty';
import { groupAndShuffleByCategory, shuffleArray } from '../utils/shuffle';

export function useMCQ() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCards();
  }, []);

  async function loadCards() {
    console.log('🔍 [useMCQ.loadCards] Starting MCQ card load...');
    try {
      console.log('🔍 [useMCQ.loadCards] Calling storage.getCards()...');
      let loadedCards = await storage.getItem('mcq-cards');
      console.log('🔍 [useMCQ.loadCards] Storage returned:', loadedCards ? loadedCards.length : 0, 'cards');

      // Load MCQ flashcards if empty
      if (!loadedCards || loadedCards.length === 0) {
        console.log('🔍 [useMCQ.loadCards] No MCQ cards in storage. Generating...');
        const organized = generateMCQByDifficulty();
        const mcqQuestions = organized.all;
        console.log('🔍 [useMCQ.loadCards] Generated', mcqQuestions.length, 'MCQ questions');
        console.log('🔍 [useMCQ.loadCards] Difficulty breakdown:', {
          beginner: organized.beginner.count,
          intermediate: organized.intermediate.count,
          advanced: organized.advanced.count
        });

        // Convert MCQ to FSRS cards
        loadedCards = mcqQuestions.map(mcq => {
          const fsrsCard = createCard(mcq.question, mcq.correctAnswer, mcq.tags);
          return {
            ...fsrsCard,
            options: mcq.options,
            correctAnswer: mcq.correctAnswer,
            difficulty: mcq.difficulty || 'intermediate',
            type: 'mcq'
          };
        });

        console.log('🔍 [useMCQ.loadCards] Converted to', loadedCards.length, 'FSRS MCQ cards');
        await storage.setItem('mcq-cards', loadedCards);
        console.log('🔍 [useMCQ.loadCards] ✅ Saved to storage');
      }

      setCards(loadedCards);
      console.log('🔍 [useMCQ.loadCards] ✅ Load complete!');
    } catch (error) {
      console.error('❌ [useMCQ.loadCards] ERROR:', error);
    } finally {
      setLoading(false);
    }
  }

  async function updateCard(cardId, isCorrect) {
    console.log('🔍 [useMCQ.updateCard] Updating card:', cardId, '| Correct:', isCorrect);

    // Convert correct/incorrect to FSRS rating (1-4)
    const rating = isCorrect ? 3 : 1; // Good if correct, Again if incorrect

    const updatedCards = cards.map(card => {
      if (card.id === cardId) {
        const scheduledCard = scheduleCard(card, rating);
        return {
          ...scheduledCard,
          options: card.options,
          correctAnswer: card.correctAnswer,
          type: 'mcq'
        };
      }
      return card;
    });

    setCards(updatedCards);
    await storage.setItem('mcq-cards', updatedCards);
    console.log('🔍 [useMCQ.updateCard] ✅ Update complete');
  }

  function getDueCards() {
    const due = cards.filter(isDue);
    console.log('🔍 [useMCQ.getDueCards] Found', due.length, 'due MCQ cards');
    // Group by category and shuffle within categories
    const grouped = groupAndShuffleByCategory(due);
    // Shuffle answer choices for each card
    return grouped.map(card => ({
      ...card,
      options: shuffleArray(card.options)
    }));
  }

  function getCardsByDifficulty(difficulty, onlyDue = false) {
    let filtered = cards.filter(card => card.difficulty === difficulty);
    if (onlyDue) {
      filtered = filtered.filter(isDue);
    }
    // Group by category and shuffle within categories
    const grouped = groupAndShuffleByCategory(filtered);
    // Shuffle answer choices for each card
    return grouped.map(card => ({
      ...card,
      options: shuffleArray(card.options)
    }));
  }

  function getAllCardsByDifficulty(difficulty) {
    // Get all cards regardless of due date (for review mode)
    const filtered = cards.filter(card => card.difficulty === difficulty);
    // Group by category and shuffle within categories
    const grouped = groupAndShuffleByCategory(filtered);
    // Shuffle answer choices for each card
    return grouped.map(card => ({
      ...card,
      options: shuffleArray(card.options)
    }));
  }

  function getStats() {
    const dueCards = getDueCards();
    const masteredCards = cards.filter(card =>
      card.state === 2 && card.stability > 21
    );

    return {
      total: cards.length,
      due: dueCards.length,
      mastered: masteredCards.length
    };
  }

  return {
    cards,
    loading,
    updateCard,
    getDueCards,
    getCardsByDifficulty,
    getAllCardsByDifficulty,
    getStats
  };
}
