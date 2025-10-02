import { useState } from 'react';
import { useMCQ } from './hooks/useMCQ';
import Header from './components/Header';
import Stats from './components/Stats';
import MCQCard from './components/MCQCard';

export default function MCQApp() {
  const { cards, loading, updateCard, getDueCards, getStats } = useMCQ();
  const [isStudying, setIsStudying] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [dueCards, setDueCards] = useState([]);
  const [score, setScore] = useState({ correct: 0, total: 0 });

  const stats = getStats();

  const startStudy = () => {
    const due = getDueCards();
    if (due.length === 0) {
      return;
    }
    setDueCards(due);
    setCurrentCardIndex(0);
    setIsStudying(true);
    setScore({ correct: 0, total: 0 });
  };

  const handleAnswer = async (isCorrect) => {
    const currentCard = dueCards[currentCardIndex];
    await updateCard(currentCard.id, isCorrect);

    // Update score
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));

    // Move to next card
    if (currentCardIndex < dueCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setIsStudying(false);
      setCurrentCardIndex(0);
      setDueCards([]);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🏈</div>
          <div className="text-2xl text-white font-bold gradient-text">Loading MCQ mode...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        <Header />

        {/* Mode indicator */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 glass-card px-6 py-3 rounded-full">
            <span className="text-2xl">✅</span>
            <span className="text-purple-200 font-bold uppercase tracking-wider">MCQ Mode</span>
          </div>
        </div>

        <Stats stats={stats} />

        {isStudying ? (
          <div className="mb-12 space-y-6">
            {/* Progress bar with score */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-purple-200 font-semibold">
                  Question {currentCardIndex + 1} of {dueCards.length}
                </span>
                <span className="text-purple-300 text-sm font-medium">
                  Score: {score.correct}/{score.total} ({score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%)
                </span>
              </div>
              <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transition-all duration-500 rounded-full"
                  style={{width: `${((currentCardIndex + 1) / dueCards.length) * 100}%`}}
                ></div>
              </div>
            </div>

            <MCQCard
              card={dueCards[currentCardIndex]}
              onAnswer={handleAnswer}
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
                  You've reviewed all your due MCQ cards. Great work!
                </p>
                {score.total > 0 && (
                  <div className="glass-card inline-block px-8 py-4 rounded-2xl">
                    <div className="text-3xl font-black text-white mb-2">
                      Final Score: {score.correct}/{score.total}
                    </div>
                    <div className="text-purple-300">
                      {Math.round((score.correct / score.total) * 100)}% Correct
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center mb-12">
                <button
                  onClick={startStudy}
                  className="group inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 text-white px-12 py-6 rounded-2xl text-2xl font-black shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 shine transform hover:scale-105 active:scale-95 animate-glow"
                >
                  <span className="text-3xl group-hover:rotate-12 transition-transform duration-300">✅</span>
                  <span>Start MCQ Quiz</span>
                  <span className="glass px-4 py-2 rounded-xl text-lg font-bold">
                    {stats.due}
                  </span>
                </button>
              </div>
            )}
          </>
        )}

        {/* Mode switcher */}
        <div className="text-center mt-12">
          <a
            href="/"
            className="glass-card hover:bg-white/10 text-purple-200 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 inline-flex items-center gap-3"
          >
            <span className="text-2xl">🔄</span>
            <span>Switch to Flashcard Mode</span>
          </a>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-purple-400 text-sm">
          <p>Multiple Choice Quiz Mode • FSRS Algorithm • 2024-2025 Season</p>
        </div>
      </div>
    </div>
  );
}
