import { useState, useEffect } from 'react';
import { generateFlashcardsByDifficulty } from './data/generateByDifficulty';
import localforage from 'localforage';

const REVIEW_CATEGORIES = [
  { id: 'too-easy', label: 'Too Easy - Refactor', color: 'bg-blue-100 hover:bg-blue-200 text-blue-800' },
  { id: 'low-value', label: 'Low Value - Remove', color: 'bg-red-100 hover:bg-red-200 text-red-800' },
  { id: 'missing-info', label: 'Not Enough Info', color: 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800' },
  { id: 'missing-definition', label: 'Missing Definition', color: 'bg-orange-100 hover:bg-orange-200 text-orange-800' },
  { id: 'good', label: '✓ Good', color: 'bg-green-100 hover:bg-green-200 text-green-800' },
];

const STORAGE_KEY = 'debug-card-reviews';

export default function DebugApp() {
  const [cards, setCards] = useState([]);
  const [reviews, setReviews] = useState({});
  const [filter, setFilter] = useState('all');
  const [stats, setStats] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    calculateStats();
  }, [reviews]);

  async function loadData() {
    // Load all flashcards
    const organized = generateFlashcardsByDifficulty();
    const allCards = organized.all.map((card, index) => ({
      ...card,
      id: `${card.difficulty}-${index}`,
      index
    }));
    setCards(allCards);

    // Load existing reviews
    const savedReviews = await localforage.getItem(STORAGE_KEY) || {};
    setReviews(savedReviews);
    setLoading(false);
  }

  function calculateStats() {
    const stats = {
      total: cards.length,
      reviewed: Object.keys(reviews).length,
      'too-easy': 0,
      'low-value': 0,
      'missing-info': 0,
      'missing-definition': 0,
      'good': 0,
      'unreviewed': 0
    };

    cards.forEach(card => {
      const review = reviews[card.id];
      if (review) {
        stats[review]++;
      } else {
        stats.unreviewed++;
      }
    });

    setStats(stats);
  }

  async function handleReview(cardId, category) {
    const newReviews = { ...reviews, [cardId]: category };
    setReviews(newReviews);
    await localforage.setItem(STORAGE_KEY, newReviews);
  }

  async function clearReviews() {
    if (confirm('Clear all review data? This cannot be undone.')) {
      setReviews({});
      await localforage.removeItem(STORAGE_KEY);
    }
  }

  async function exportReviews() {
    const exportData = {
      timestamp: new Date().toISOString(),
      reviews,
      cards: cards.filter(card => reviews[card.id]).map(card => ({
        id: card.id,
        question: card.question,
        answer: card.answer,
        difficulty: card.difficulty,
        tags: card.tags,
        review: reviews[card.id]
      }))
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `card-reviews-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const filteredCards = filter === 'all'
    ? cards
    : filter === 'unreviewed'
    ? cards.filter(card => !reviews[card.id])
    : cards.filter(card => reviews[card.id] === filter);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl text-gray-600">Loading cards...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">🐛 Debug Mode - Card Review</h1>
              <p className="text-sm text-gray-600 mt-1">
                Review all {stats.total} flashcards and categorize them for improvement
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={exportReviews}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Export Reviews
              </button>
              <button
                onClick={clearReviews}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Clear All
              </button>
              <a
                href="/"
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                Exit Debug
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-7 gap-2 text-sm">
            <div className="bg-gray-100 px-3 py-2 rounded">
              <div className="font-semibold text-gray-900">{stats.reviewed}/{stats.total}</div>
              <div className="text-gray-600 text-xs">Reviewed</div>
            </div>
            <div className="bg-blue-50 px-3 py-2 rounded">
              <div className="font-semibold text-blue-900">{stats['too-easy']}</div>
              <div className="text-blue-700 text-xs">Too Easy</div>
            </div>
            <div className="bg-red-50 px-3 py-2 rounded">
              <div className="font-semibold text-red-900">{stats['low-value']}</div>
              <div className="text-red-700 text-xs">Low Value</div>
            </div>
            <div className="bg-yellow-50 px-3 py-2 rounded">
              <div className="font-semibold text-yellow-900">{stats['missing-info']}</div>
              <div className="text-yellow-700 text-xs">Missing Info</div>
            </div>
            <div className="bg-orange-50 px-3 py-2 rounded">
              <div className="font-semibold text-orange-900">{stats['missing-definition']}</div>
              <div className="text-orange-700 text-xs">Missing Def</div>
            </div>
            <div className="bg-green-50 px-3 py-2 rounded">
              <div className="font-semibold text-green-900">{stats.good}</div>
              <div className="text-green-700 text-xs">Good</div>
            </div>
            <div className="bg-gray-50 px-3 py-2 rounded">
              <div className="font-semibold text-gray-900">{stats.unreviewed}</div>
              <div className="text-gray-600 text-xs">Unreviewed</div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex gap-2 mt-4 overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap ${
                filter === 'all' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All ({cards.length})
            </button>
            <button
              onClick={() => setFilter('unreviewed')}
              className={`px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap ${
                filter === 'unreviewed' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Unreviewed ({stats.unreviewed})
            </button>
            {REVIEW_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3 py-1.5 rounded text-sm font-medium whitespace-nowrap ${
                  filter === cat.id ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {cat.label} ({stats[cat.id]})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards List */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="space-y-3">
          {filteredCards.map((card) => {
            const currentReview = reviews[card.id];
            const difficultyEmoji = {
              beginner: '🌱',
              intermediate: '⚡',
              advanced: '🔥'
            }[card.difficulty];

            return (
              <div
                key={card.id}
                className={`bg-white rounded-lg shadow-sm border-2 transition-all ${
                  currentReview ? 'border-green-300 bg-green-50' : 'border-gray-200'
                }`}
              >
                <div className="p-4">
                  {/* Card Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg">{difficultyEmoji}</span>
                        <span className="text-xs font-semibold text-gray-500 uppercase">
                          {card.difficulty}
                        </span>
                        <span className="text-xs text-gray-400">#{card.index + 1}</span>
                        {card.tags && card.tags.length > 0 && (
                          <span className="text-xs text-gray-500">
                            {card.tags.join(', ')}
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold text-gray-900 mb-2">
                        Q: {card.question}
                      </div>
                      <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded">
                        A: {card.answer}
                      </div>
                    </div>
                  </div>

                  {/* Review Buttons */}
                  <div className="flex gap-2 flex-wrap mt-3">
                    {REVIEW_CATEGORIES.map(category => (
                      <button
                        key={category.id}
                        onClick={() => handleReview(card.id, category.id)}
                        className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                          currentReview === category.id
                            ? 'ring-2 ring-offset-2 ring-gray-900 ' + category.color
                            : category.color
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredCards.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No cards match the current filter.
          </div>
        )}
      </div>
    </div>
  );
}
