import { useState } from 'react';
import { useMCQ } from './hooks/useMCQ';
import Header from './components/Header';
import Stats from './components/Stats';
import MCQCard from './components/MCQCard';

export default function MCQApp() {
  const { cards, loading, updateCard, getDueCards, getStats, getCardsByDifficulty } = useMCQ();
  const [isStudying, setIsStudying] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [dueCards, setDueCards] = useState([]);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [wrongAnswers, setWrongAnswers] = useState([]); // Leitner system - track wrong answers
  const [isReviewingWrong, setIsReviewingWrong] = useState(false);
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
    setScore({ correct: 0, total: 0 });
    setWrongAnswers([]); // Reset wrong answers
    setIsReviewingWrong(false);
  };

  const handleAnswer = async (isCorrect) => {
    const currentCard = dueCards[currentCardIndex];
    await updateCard(currentCard.id, isCorrect);

    // Update score
    setScore(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1
    }));

    // Leitner system: Add to wrong answers pile if incorrect
    if (!isCorrect) {
      setWrongAnswers(prev => [...prev, currentCard]);
    }

    // Move to next card or review wrong answers
    if (currentCardIndex < dueCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      // Finished all cards - now review wrong answers (Leitner system)
      if (wrongAnswers.length > 0 && !isReviewingWrong) {
        console.log('🔄 LEITNER: Reviewing', wrongAnswers.length, 'wrong answers');
        setDueCards(wrongAnswers);
        setCurrentCardIndex(0);
        setWrongAnswers([]); // Clear for this review round
        setIsReviewingWrong(true); // Mark that we're in review mode
      } else {
        // All done!
        setIsStudying(false);
        setCurrentCardIndex(0);
        setDueCards([]);
        setIsReviewingWrong(false);
      }
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
            {/* Leitner Review Mode Indicator */}
            {isReviewingWrong && (
              <div className="glass-card rounded-2xl p-4 bg-orange-500/20 border-2 border-orange-500/50 text-center">
                <div className="text-white font-bold text-lg">
                  📚 Reviewing Wrong Answers (Leitner System)
                </div>
                <div className="text-orange-200 text-sm mt-1">
                  Master these before finishing!
                </div>
              </div>
            )}

            {/* Progress bar with score */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-purple-200 font-semibold">
                  Question {currentCardIndex + 1} of {dueCards.length}
                  {isReviewingWrong && <span className="text-orange-300 ml-2">(Review)</span>}
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
              <>
                {/* Difficulty Selector */}
                <div className="flex justify-center gap-4 mb-8">
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

        {/* Mode switcher */}
        <div className="text-center mt-12">
          <a
            href="/index.html"
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
