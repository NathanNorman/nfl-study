import { useState } from 'react';
import { useCards } from './hooks/useCards';
import Header from './components/Header';
import Stats from './components/Stats';
import Flashcard from './components/Flashcard';
import AddCardModal from './components/AddCardModal';

export default function App() {
  const { cards, loading, addCard, updateCard, getDueCards, getStats } = useCards();
  const [isStudying, setIsStudying] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [dueCards, setDueCards] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const stats = getStats();

  const startStudy = () => {
    const due = getDueCards();
    if (due.length === 0) {
      return;
    }
    setDueCards(due);
    setCurrentCardIndex(0);
    setIsStudying(true);
  };

  const handleRate = async (rating) => {
    const currentCard = dueCards[currentCardIndex];
    await updateCard(currentCard.id, rating);

    if (currentCardIndex < dueCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setIsStudying(false);
      setCurrentCardIndex(0);
      setDueCards([]);
    }
  };

  const handleAddCard = async (question, answer, tags) => {
    await addCard(question, answer, tags);
    setShowAddModal(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🏈</div>
          <div className="text-2xl text-white font-bold gradient-text">Loading your cards...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <Header />
        <Stats stats={stats} />

        {isStudying ? (
          <div className="mb-12 space-y-6">
            {/* Progress bar */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-purple-200 font-semibold">
                  Card {currentCardIndex + 1} of {dueCards.length}
                </span>
                <span className="text-purple-300 text-sm font-medium">
                  {Math.round(((currentCardIndex + 1) / dueCards.length) * 100)}% Complete
                </span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transition-all duration-500 rounded-full"
                  style={{width: `${((currentCardIndex + 1) / dueCards.length) * 100}%`}}
                ></div>
              </div>
            </div>

            <Flashcard
              card={dueCards[currentCardIndex]}
              onRate={handleRate}
            />
          </div>
        ) : (
          <>
            {stats.due === 0 ? (
              <div className="glass-card rounded-3xl p-12 md:p-16 text-center shadow-2xl mb-12 animate-glow">
                <div className="text-6xl mb-6 animate-bounce">🎉</div>
                <h2 className="text-4xl md:text-5xl font-black gradient-text mb-6">
                  All Done For Today!
                </h2>
                <p className="text-xl text-purple-200 mb-8">
                  You've reviewed all your due cards. Come back tomorrow!
                </p>
                <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-200 font-semibold">All caught up</span>
                </div>
              </div>
            ) : (
              <div className="text-center mb-12">
                <button
                  onClick={startStudy}
                  className="group inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white px-12 py-6 rounded-2xl text-2xl font-black shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 shine transform hover:scale-105 active:scale-95 animate-glow"
                >
                  <span className="text-3xl group-hover:rotate-12 transition-transform duration-300">⚡</span>
                  <span>Start Studying</span>
                  <span className="glass px-4 py-2 rounded-xl text-lg font-bold">
                    {stats.due}
                  </span>
                </button>
              </div>
            )}
          </>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => setShowAddModal(true)}
            className="glass-card hover:bg-white/10 text-purple-200 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 card-hover flex items-center gap-3"
          >
            <span className="text-2xl">➕</span>
            <span>Create Card</span>
          </button>
          <button
            onClick={() => alert('NFL data import coming soon! 🏈')}
            className="glass-card hover:bg-white/10 text-purple-200 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 card-hover flex items-center gap-3"
          >
            <span className="text-2xl">📊</span>
            <span>Import NFL Data</span>
          </button>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-purple-400 text-sm">
          <p>Powered by FSRS Algorithm • 207 Flashcards • 2024-2025 Season</p>
        </div>
      </div>

      <AddCardModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddCard}
      />
    </div>
  );
}
