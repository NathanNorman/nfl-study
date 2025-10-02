import { useState } from 'react';
import { useCards } from './hooks/useCards';
import Header from './components/Header';
import Stats from './components/Stats';
import Flashcard from './components/Flashcard';
import AddCardModal from './components/AddCardModal';

export default function App() {
  const { cards, loading, addCard, updateCard, getDueCards, getStats, getCardsByDifficulty } = useCards();
  const [isStudying, setIsStudying] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [dueCards, setDueCards] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const stats = getStats();

  const startStudy = (difficulty = 'all') => {
    let due;
    if (difficulty === 'all') {
      due = getDueCards();
    } else {
      due = getCardsByDifficulty(difficulty);
    }

    if (due.length === 0) {
      alert(`No ${difficulty} cards available!`);
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

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentCardIndex < dueCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
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

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handlePrevious}
                disabled={currentCardIndex === 0}
                className={`glass-card px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
                  currentCardIndex === 0
                    ? 'opacity-40 cursor-not-allowed'
                    : 'hover:bg-white/10 hover:scale-105 text-purple-200'
                }`}
              >
                <span className="text-xl">←</span>
                <span>Previous</span>
              </button>

              <button
                onClick={handleNext}
                disabled={currentCardIndex === dueCards.length - 1}
                className={`glass-card px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
                  currentCardIndex === dueCards.length - 1
                    ? 'opacity-40 cursor-not-allowed'
                    : 'hover:bg-white/10 hover:scale-105 text-purple-200'
                }`}
              >
                <span>Next</span>
                <span className="text-xl">→</span>
              </button>
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
              <>
                {/* Difficulty Selector */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                  <DifficultyButton
                    level="all"
                    emoji="📚"
                    label="All Levels"
                    count={stats.due}
                    selected={selectedDifficulty === 'all'}
                    onClick={() => { setSelectedDifficulty('all'); startStudy('all'); }}
                  />
                  <DifficultyButton
                    level="beginner"
                    emoji="🌱"
                    label="Beginner"
                    count={getCardsByDifficulty('beginner').length}
                    selected={selectedDifficulty === 'beginner'}
                    onClick={() => { setSelectedDifficulty('beginner'); startStudy('beginner'); }}
                  />
                  <DifficultyButton
                    level="intermediate"
                    emoji="⚡"
                    label="Intermediate"
                    count={getCardsByDifficulty('intermediate').length}
                    selected={selectedDifficulty === 'intermediate'}
                    onClick={() => { setSelectedDifficulty('intermediate'); startStudy('intermediate'); }}
                  />
                  <DifficultyButton
                    level="advanced"
                    emoji="🔥"
                    label="Advanced"
                    count={getCardsByDifficulty('advanced').length}
                    selected={selectedDifficulty === 'advanced'}
                    onClick={() => { setSelectedDifficulty('advanced'); startStudy('advanced'); }}
                  />
                </div>
              </>
            )}
          </>
        )}

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/mcq.html"
            className="glass-card hover:bg-white/10 text-purple-200 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 card-hover flex items-center gap-3"
          >
            <span className="text-2xl">✅</span>
            <span>MCQ Mode</span>
          </a>
          <button
            onClick={() => setShowAddModal(true)}
            className="glass-card hover:bg-white/10 text-purple-200 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 card-hover flex items-center gap-3"
          >
            <span className="text-2xl">➕</span>
            <span>Create Card</span>
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

function DifficultyButton({ level, emoji, label, count, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`glass-card px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex flex-col items-center gap-2 ${
        selected ? 'ring-2 ring-purple-400 bg-purple-500/20' : 'hover:bg-white/10'
      }`}
    >
      <span className="text-3xl">{emoji}</span>
      <span className="text-white text-sm">{label}</span>
      <span className="text-purple-300 text-xs">{count} cards</span>
    </button>
  );
}
