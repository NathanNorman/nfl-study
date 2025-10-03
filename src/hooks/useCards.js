import { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { createCard, scheduleCard, isDue } from '../utils/fsrs';
import { generateFlashcardsByDifficulty } from '../data/generateByDifficulty';
import { groupAndShuffleByCategory } from '../utils/shuffle';
import { filterByPrerequisites } from '../utils/prerequisites';

export function useCards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCards();
  }, []);

  async function loadCards() {
    console.log('🔍 [loadCards] Starting card load...');
    try {
      console.log('🔍 [loadCards] Calling storage.getCards()...');
      let loadedCards = await storage.getCards();
      console.log('🔍 [loadCards] Storage returned:', loadedCards.length, 'cards');

      // Load comprehensive NFL flashcards if empty
      if (loadedCards.length === 0) {
        console.log('🔍 [loadCards] No cards in storage. Generating flashcards...');
        const organized = generateFlashcardsByDifficulty();
        const flashcards = organized.all;
        console.log('🔍 [loadCards] Generated', flashcards.length, 'flashcards');
        console.log('🔍 [loadCards] Difficulty breakdown:', {
          beginner: organized.beginner.count,
          intermediate: organized.intermediate.count,
          advanced: organized.advanced.count
        });
        console.log('🔍 [loadCards] First flashcard:', flashcards[0]);

        console.log('🔍 [loadCards] Converting to FSRS cards...');
        loadedCards = flashcards.map(card => {
          const fsrsCard = createCard(
            card.question,
            card.answer,
            card.tags,
            card.defines,
            card.prerequisites
          );
          return {
            ...fsrsCard,
            difficulty: card.difficulty || 'intermediate'
          };
        });
        console.log('🔍 [loadCards] Converted to', loadedCards.length, 'FSRS cards');
        console.log('🔍 [loadCards] First FSRS card:', loadedCards[0]);

        console.log('🔍 [loadCards] Saving to storage...');
        await storage.saveCards(loadedCards);
        console.log('🔍 [loadCards] ✅ Saved to storage successfully');
      }

      console.log('🔍 [loadCards] Setting cards in state:', loadedCards.length);
      setCards(loadedCards);
      console.log('🔍 [loadCards] ✅ Load complete!');
    } catch (error) {
      console.error('❌ [loadCards] ERROR:', error);
      console.error('❌ [loadCards] Stack:', error.stack);
    } finally {
      console.log('🔍 [loadCards] Setting loading to false');
      setLoading(false);
    }
  }

  async function addCard(question, answer, tags = [], difficulty = 'intermediate', defines = null, prerequisites = []) {
    const newCard = createCard(question, answer, tags, defines, prerequisites);
    const fullCard = {
      ...newCard,
      difficulty
    };
    const updatedCards = [...cards, fullCard];
    setCards(updatedCards);
    await storage.saveCards(updatedCards);
    return fullCard;
  }

  async function updateCard(cardId, rating) {
    console.log('🔍 [updateCard] Rating card:', cardId, 'with rating:', rating);
    const updatedCards = cards.map(card => {
      if (card.id === cardId) {
        const scheduledCard = scheduleCard(card, rating);
        console.log('🔍 [updateCard] Card rescheduled. Next due:', scheduledCard.due);
        // Preserve difficulty field
        return {
          ...scheduledCard,
          difficulty: card.difficulty
        };
      }
      return card;
    });
    console.log('🔍 [updateCard] Saving', updatedCards.length, 'cards');
    setCards(updatedCards);
    await storage.saveCards(updatedCards);
    console.log('🔍 [updateCard] ✅ Update complete');
  }

  async function deleteCard(cardId) {
    const updatedCards = cards.filter(card => card.id !== cardId);
    setCards(updatedCards);
    await storage.saveCards(updatedCards);
  }

  function getDueCards() {
    const due = cards.filter(isDue);
    console.log('🔍 [getDueCards] Found', due.length, 'due cards out of', cards.length, 'total');

    // Filter out cards with unmastered prerequisites
    const available = filterByPrerequisites(due, cards);
    const locked = due.length - available.length;
    if (locked > 0) {
      console.log('🔒 [getDueCards] Locked', locked, 'cards (prerequisites not mastered)');
    }

    // Group by category and shuffle within categories
    const grouped = groupAndShuffleByCategory(available);
    console.log('🔍 [getDueCards] Grouped and shuffled', available.length, 'available cards into categories');
    return grouped;
  }

  function getCardsByDifficulty(difficulty) {
    const filtered = cards.filter(card => card.difficulty === difficulty);

    // Filter out cards with unmastered prerequisites
    const available = filterByPrerequisites(filtered, cards);
    const locked = filtered.length - available.length;
    if (locked > 0) {
      console.log('🔒 [getCardsByDifficulty] Locked', locked, 'cards (prerequisites not mastered)');
    }

    // Group by category and shuffle within categories
    const grouped = groupAndShuffleByCategory(available);
    console.log('🔍 [getCardsByDifficulty] Grouped and shuffled', available.length, 'available cards');
    return grouped;
  }

  function getStats() {
    const dueCards = getDueCards();
    const masteredCards = cards.filter(card =>
      card.state === 2 && card.stability > 21
    );

    // Calculate locked cards (cards that are due but filtered out by prerequisites)
    const allDueCards = cards.filter(isDue);
    const locked = allDueCards.length - dueCards.length;

    const stats = {
      total: cards.length,
      due: dueCards.length,
      mastered: masteredCards.length,
      locked: locked
    };
    console.log('🔍 [getStats] Stats:', stats);
    if (locked > 0) {
      console.log('🔒 [getStats]', locked, 'cards locked (prerequisites not mastered)');
    }
    return stats;
  }

  return {
    cards,
    loading,
    addCard,
    updateCard,
    deleteCard,
    getDueCards,
    getCardsByDifficulty,
    getStats
  };
}
