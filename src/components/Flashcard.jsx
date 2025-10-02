import { useState, useEffect } from 'react';

export default function Flashcard({ card, onRate }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [flipped, setFlipped] = useState(false);

  // Reset showAnswer when card changes
  useEffect(() => {
    console.log('🔍 [Flashcard] Card changed, resetting showAnswer. Card ID:', card.id);
    setShowAnswer(false);
    setFlipped(false);
  }, [card.id]);

  const handleShowAnswer = () => {
    setFlipped(true);
    setTimeout(() => setShowAnswer(true), 150);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Card */}
      <div className={`glass-card rounded-3xl p-8 md:p-12 shadow-2xl transition-all duration-500 ${flipped ? 'scale-[0.98]' : 'scale-100'}`}>
        {/* Question */}
        <div className="min-h-[280px] flex items-center justify-center mb-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30">
                <span className="text-purple-300 text-sm font-semibold uppercase tracking-wider">
                  Question
                </span>
              </div>
              {card.difficulty && (
                <DifficultyBadge difficulty={card.difficulty} />
              )}
            </div>

            <div className="text-2xl md:text-3xl leading-relaxed font-medium text-white px-4">
              {card.question}
            </div>

            {/* Answer with reveal animation */}
            {showAnswer && (
              <div className="mt-8 pt-8 border-t border-purple-400/30 animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 mb-4">
                  <span className="gradient-text text-sm font-semibold uppercase tracking-wider">
                    Answer
                  </span>
                </div>
                <div className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent leading-relaxed px-4">
                  {card.answer}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          {!showAnswer ? (
            <button
              onClick={handleShowAnswer}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 shine transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="flex items-center justify-center gap-3">
                <span>Reveal Answer</span>
                <span className="text-2xl">👁️</span>
              </span>
            </button>
          ) : (
            <>
              <div className="text-center text-purple-300 text-sm font-medium mb-4 uppercase tracking-wider">
                How well did you know this?
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <RatingButton
                  onClick={() => onRate(1)}
                  color="from-red-600 to-red-700"
                  hoverColor="hover:from-red-500 hover:to-red-600"
                  label="Again"
                  emoji="😰"
                  description="&lt;1m"
                />
                <RatingButton
                  onClick={() => onRate(2)}
                  color="from-orange-600 to-amber-600"
                  hoverColor="hover:from-orange-500 hover:to-amber-500"
                  label="Hard"
                  emoji="😅"
                  description="&lt;10m"
                />
                <RatingButton
                  onClick={() => onRate(3)}
                  color="from-green-600 to-emerald-600"
                  hoverColor="hover:from-green-500 hover:to-emerald-500"
                  label="Good"
                  emoji="😊"
                  description="1d"
                />
                <RatingButton
                  onClick={() => onRate(4)}
                  color="from-blue-600 to-cyan-600"
                  hoverColor="hover:from-blue-500 hover:to-cyan-500"
                  label="Easy"
                  emoji="😎"
                  description="4d"
                />
              </div>
            </>
          )}
        </div>

        {/* Tags */}
        {card.tags && card.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-purple-400/20 justify-center">
            {card.tags.map((tag, i) => (
              <span
                key={i}
                className="glass px-4 py-1.5 rounded-full text-sm font-medium text-purple-200 hover:bg-purple-500/20 transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function RatingButton({ onClick, color, hoverColor, label, emoji, description }) {
  return (
    <button
      onClick={onClick}
      className={`group relative bg-gradient-to-br ${color} ${hoverColor} text-white px-4 py-4 rounded-xl font-bold shadow-lg transition-all duration-300 shine transform hover:scale-105 active:scale-95 overflow-hidden`}
    >
      <div className="relative z-10">
        <div className="text-2xl mb-1">{emoji}</div>
        <div className="text-sm md:text-base">{label}</div>
        <div className="text-xs opacity-75 mt-1">{description}</div>
      </div>

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
    </button>
  );
}

function DifficultyBadge({ difficulty }) {
  const config = {
    beginner: { color: 'from-green-500 to-emerald-500', label: '📗 Beginner', emoji: '🌱' },
    intermediate: { color: 'from-blue-500 to-cyan-500', label: '📘 Intermediate', emoji: '⚡' },
    advanced: { color: 'from-red-500 to-orange-500', label: '📕 Advanced', emoji: '🔥' }
  };

  const { color, label, emoji } = config[difficulty] || config.intermediate;

  return (
    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${color} rounded-full text-white text-xs font-bold`}>
      <span>{emoji} {difficulty.toUpperCase()}</span>
    </div>
  );
}
