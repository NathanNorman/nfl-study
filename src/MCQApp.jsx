import { useState } from 'react';
import { useMCQ } from './hooks/useMCQ';
import { isDue } from './utils/fsrs';
import Header from './components/Header';
import Stats from './components/Stats';
import MCQCard from './components/MCQCard';
import ScheduleInsights from './components/ScheduleInsights';

export default function MCQApp() {
  const { cards, loading, updateCard, getDueCards, getStats, getCardsByDifficulty, getAllCardsByDifficulty } = useMCQ();
  const [isStudying, setIsStudying] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [dueCards, setDueCards] = useState([]);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [wrongAnswers, setWrongAnswers] = useState([]); // Leitner system - track wrong answers
  const [isReviewingWrong, setIsReviewingWrong] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [reviewMode, setReviewMode] = useState(false); // Review all regardless of due date

  const stats = getStats();

  const startStudy = (difficulty = 'all', reviewAll = false) => {
    let due;
    if (reviewAll) {
      // Review mode: get all cards regardless of due date
      if (difficulty === 'all') {
        due = cards;
      } else {
        due = getAllCardsByDifficulty(difficulty);
      }
    } else {
      // Normal mode: only due cards
      if (difficulty === 'all') {
        due = getDueCards();
      } else {
        due = getCardsByDifficulty(difficulty).filter(isDue);
      }
    }

    if (due.length === 0) {
      alert(`No ${difficulty} cards ${reviewAll ? 'available' : 'due'}!`);
      return;
    }
    setDueCards(due);
    setCurrentCardIndex(0);
    setIsStudying(true);
    setScore({ correct: 0, total: 0 });
    setWrongAnswers([]); // Reset wrong answers
    setIsReviewingWrong(false);
    setReviewMode(reviewAll);
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

  const handleStopQuiz = () => {
    if (confirm('Stop quiz and return to menu? Your progress will be saved.')) {
      setIsStudying(false);
      setCurrentCardIndex(0);
      setDueCards([]);
      setIsReviewingWrong(false);
      setWrongAnswers([]);
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

        {/* FSRS Schedule Insights */}
        {!isStudying && cards.length > 0 && (
          <ScheduleInsights cards={cards} />
        )}

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

            {/* Progress bar with score and exit */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-purple-200 font-semibold">
                  Question {currentCardIndex + 1} of {dueCards.length}
                  {isReviewingWrong && <span className="text-orange-300 ml-2">(Review)</span>}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-purple-300 text-sm font-medium">
                    Score: {score.correct}/{score.total} ({score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0}%)
                  </span>
                  <button
                    onClick={handleStopQuiz}
                    className="text-purple-400 hover:text-white px-3 py-1 rounded-lg hover:bg-white/10 transition-all text-sm font-semibold"
                  >
                    ✕ Stop
                  </button>
                </div>
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
                {/* Mode Toggle */}
                <div className="flex justify-center gap-4 mb-6">
                  <button
                    onClick={() => setReviewMode(false)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      !reviewMode
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'glass-card text-purple-200 hover:bg-white/10'
                    }`}
                  >
                    ⚡ Study Due Cards
                  </button>
                  <button
                    onClick={() => setReviewMode(true)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                      reviewMode
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                        : 'glass-card text-purple-200 hover:bg-white/10'
                    }`}
                  >
                    🔄 Review All Cards
                  </button>
                </div>

                {/* Difficulty Selector */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                  <DifficultyButton
                    level="all"
                    emoji="📚"
                    label="All Levels"
                    count={reviewMode ? cards.length : stats.due}
                    dueCount={stats.due}
                    totalCount={cards.length}
                    reviewMode={reviewMode}
                    selected={selectedDifficulty === 'all'}
                    onClick={() => { setSelectedDifficulty('all'); startStudy('all', reviewMode); }}
                  />
                  <DifficultyButton
                    level="beginner"
                    emoji="🌱"
                    label="Beginner"
                    count={reviewMode ? getAllCardsByDifficulty('beginner').length : getCardsByDifficulty('beginner').filter(isDue).length}
                    dueCount={getCardsByDifficulty('beginner').filter(isDue).length}
                    totalCount={getAllCardsByDifficulty('beginner').length}
                    reviewMode={reviewMode}
                    selected={selectedDifficulty === 'beginner'}
                    onClick={() => { setSelectedDifficulty('beginner'); startStudy('beginner', reviewMode); }}
                  />
                  <DifficultyButton
                    level="intermediate"
                    emoji="⚡"
                    label="Intermediate"
                    count={reviewMode ? getAllCardsByDifficulty('intermediate').length : getCardsByDifficulty('intermediate').filter(isDue).length}
                    dueCount={getCardsByDifficulty('intermediate').filter(isDue).length}
                    totalCount={getAllCardsByDifficulty('intermediate').length}
                    reviewMode={reviewMode}
                    selected={selectedDifficulty === 'intermediate'}
                    onClick={() => { setSelectedDifficulty('intermediate'); startStudy('intermediate', reviewMode); }}
                  />
                  <DifficultyButton
                    level="advanced"
                    emoji="🔥"
                    label="Advanced"
                    count={reviewMode ? getAllCardsByDifficulty('advanced').length : getCardsByDifficulty('advanced').filter(isDue).length}
                    dueCount={getCardsByDifficulty('advanced').filter(isDue).length}
                    totalCount={getAllCardsByDifficulty('advanced').length}
                    reviewMode={reviewMode}
                    selected={selectedDifficulty === 'advanced'}
                    onClick={() => { setSelectedDifficulty('advanced'); startStudy('advanced', reviewMode); }}
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

function DifficultyButton({ level, emoji, label, count, dueCount, totalCount, reviewMode, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      disabled={count === 0}
      className={`glass-card px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 flex flex-col items-center gap-2 ${
        selected ? 'ring-2 ring-purple-400 bg-purple-500/20' :
        count === 0 ? 'opacity-40 cursor-not-allowed' :
        'hover:bg-white/10'
      }`}
    >
      <span className="text-3xl">{emoji}</span>
      <span className="text-white text-sm">{label}</span>
      <span className="text-purple-300 text-xs">
        {reviewMode ? (
          <>{count} total</>
        ) : (
          <>{count} due {dueCount < totalCount && `(${totalCount} total)`}</>
        )}
      </span>
    </button>
  );
}
