import { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { createCard, scheduleCard, isDue } from '../utils/fsrs';
import { generateAllMCQ } from '../data/mcq/generateMCQ';

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
        const mcqQuestions = generateAllMCQ();
        console.log('🔍 [useMCQ.loadCards] Generated', mcqQuestions.length, 'MCQ questions');

        // Convert MCQ to FSRS cards
        loadedCards = mcqQuestions.map(mcq => {
          const fsrsCard = createCard(mcq.question, mcq.correctAnswer, mcq.tags);
          return {
            ...fsrsCard,
            options: mcq.options,
            correctAnswer: mcq.correctAnswer,
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
    return due;
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
    getStats
  };
}
