import localforage from 'localforage';

// Configure localforage
localforage.config({
  name: 'nfl-study',
  storeName: 'flashcards',
  description: 'NFL Fantasy Football Learning Cards'
});

export const storage = {
  async getCards() {
    console.log('🔍 [storage.getCards] Fetching from IndexedDB...');
    const cards = await localforage.getItem('cards');
    console.log('🔍 [storage.getCards] Retrieved:', cards ? cards.length : 0, 'cards');
    return cards || [];
  },

  async saveCards(cards) {
    console.log('🔍 [storage.saveCards] Saving', cards.length, 'cards to IndexedDB...');
    await localforage.setItem('cards', cards);
    console.log('🔍 [storage.saveCards] ✅ Save complete');
  },

  async getItem(key) {
    console.log('🔍 [storage.getItem] Fetching key:', key);
    const value = await localforage.getItem(key);
    console.log('🔍 [storage.getItem] Retrieved:', value ? 'data found' : 'no data');
    return value;
  },

  async setItem(key, value) {
    console.log('🔍 [storage.setItem] Saving key:', key);
    await localforage.setItem(key, value);
    console.log('🔍 [storage.setItem] ✅ Save complete');
  },

  async clear() {
    console.log('🔍 [storage.clear] Clearing IndexedDB...');
    await localforage.clear();
    console.log('🔍 [storage.clear] ✅ Cleared');
  }
};
