import localforage from 'localforage';
import type { Flashcard } from '../types';

// Configure localforage
localforage.config({
  name: 'nfl-study',
  storeName: 'flashcards',
  description: 'NFL Fantasy Football Learning Cards'
});

export const storage = {
  async getCards(): Promise<Flashcard[]> {
    console.log('🔍 [storage.getCards] Fetching from IndexedDB...');
    const cards = await localforage.getItem<Flashcard[]>('cards');
    console.log('🔍 [storage.getCards] Retrieved:', cards ? cards.length : 0, 'cards');

    // Convert date strings back to Date objects
    if (cards && cards.length > 0) {
      return cards.map(card => ({
        ...card,
        due: card.due ? new Date(card.due) : new Date(),
        last_review: card.last_review ? new Date(card.last_review) : undefined
      }));
    }

    return cards || [];
  },

  async saveCards(cards: Flashcard[]): Promise<void> {
    console.log('🔍 [storage.saveCards] Saving', cards.length, 'cards to IndexedDB...');
    await localforage.setItem('cards', cards);
    console.log('🔍 [storage.saveCards] ✅ Save complete');
  },

  async getItem<T = unknown>(key: string): Promise<T | null> {
    console.log('🔍 [storage.getItem] Fetching key:', key);
    const value = await localforage.getItem<T>(key);
    console.log('🔍 [storage.getItem] Retrieved:', value ? 'data found' : 'no data');

    // If it's card data, convert date strings to Date objects
    if (value && Array.isArray(value) && key.includes('card')) {
      return value.map((item: any) => ({
        ...item,
        due: item.due ? new Date(item.due) : new Date(),
        last_review: item.last_review ? new Date(item.last_review) : undefined
      })) as T;
    }

    return value;
  },

  async setItem<T>(key: string, value: T): Promise<void> {
    console.log('🔍 [storage.setItem] Saving key:', key);
    await localforage.setItem(key, value);
    console.log('🔍 [storage.setItem] ✅ Save complete');
  },

  async clear(): Promise<void> {
    console.log('🔍 [storage.clear] Clearing IndexedDB...');
    await localforage.clear();
    console.log('🔍 [storage.clear] ✅ Cleared');
  }
};
