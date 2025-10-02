import localforage from 'localforage';

// Configure localforage
localforage.config({
  name: 'nfl-study',
  storeName: 'flashcards',
  description: 'NFL Fantasy Football Learning Cards'
});

export const storage = {
  async getCards() {
    const cards = await localforage.getItem('cards');
    return cards || [];
  },

  async saveCards(cards) {
    await localforage.setItem('cards', cards);
  },

  async clear() {
    await localforage.clear();
  }
};
