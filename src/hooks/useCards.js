import { useState, useEffect } from 'react';
import { storage } from '../utils/storage';
import { createCard, scheduleCard, isDue } from '../utils/fsrs';
import { generateAllFlashcards } from '../data/generateFlashcards';

export function useCards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCards();
  }, []);

  async function loadCards() {
    try {
      let loadedCards = await storage.getCards();

      // Load comprehensive NFL flashcards if empty
      if (loadedCards.length === 0) {
        const flashcards = generateAllFlashcards();
        loadedCards = flashcards.map(card =>
          createCard(card.question, card.answer, card.tags)
        );
        await storage.saveCards(loadedCards);
      }

      setCards(loadedCards);
    } catch (error) {
      console.error('Failed to load cards:', error);
    } finally {
      setLoading(false);
    }
  }

  async function addCard(question, answer, tags = []) {
    const newCard = createCard(question, answer, tags);
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    await storage.saveCards(updatedCards);
    return newCard;
  }

  async function updateCard(cardId, rating) {
    const updatedCards = cards.map(card => {
      if (card.id === cardId) {
        return scheduleCard(card, rating);
      }
      return card;
    });
    setCards(updatedCards);
    await storage.saveCards(updatedCards);
  }

  async function deleteCard(cardId) {
    const updatedCards = cards.filter(card => card.id !== cardId);
    setCards(updatedCards);
    await storage.saveCards(updatedCards);
  }

  function getDueCards() {
    return cards.filter(isDue);
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
    addCard,
    updateCard,
    deleteCard,
    getDueCards,
    getStats
  };
}
