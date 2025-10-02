import { useState, useEffect } from 'react';

function DifficultyBadge({ difficulty }) {
  const config = {
    beginner: { color: 'from-green-500 to-emerald-500', emoji: '🌱' },
    intermediate: { color: 'from-blue-500 to-cyan-500', emoji: '⚡' },
    advanced: { color: 'from-red-500 to-orange-500', emoji: '🔥' }
  };

  const { color, emoji } = config[difficulty] || config.intermediate;

  return (
    <div className={`inline-block px-3 py-1 bg-gradient-to-r ${color} rounded-full text-white text-xs font-bold`}>
      <span>{emoji} {difficulty.toUpperCase()}</span>
    </div>
  );
}

export default function MCQCard({ card, onAnswer }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  // Reset when card changes
  useEffect(() => {
    console.log('🔍 [MCQCard] Card changed, resetting. Card:', card.question.substring(0, 50));
    setSelectedOption(null);
    setShowResult(false);
  }, [card.question]);

  const handleOptionClick = (option) => {
    if (showResult) return; // Prevent changing answer after submission

    setSelectedOption(option);
    setShowResult(true);

    const isCorrect = option === card.correctAnswer;
    console.log('🔍 [MCQCard] Answer selected:', option, '| Correct:', isCorrect);

    // Auto-advance after showing result
    setTimeout(() => {
      onAnswer(isCorrect);
    }, 1500);
  };

  const isCorrect = selectedOption === card.correctAnswer;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="glass-card rounded-3xl p-8 md:p-12 shadow-2xl">
        {/* Question */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full border border-purple-400/30">
              <span className="text-purple-300 text-sm font-semibold uppercase tracking-wider">
                Multiple Choice
              </span>
            </div>
            {card.difficulty && (
              <DifficultyBadge difficulty={card.difficulty} />
            )}
          </div>

          <div className="text-2xl md:text-3xl leading-relaxed font-medium text-white mb-8">
            {card.question}
          </div>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {card.options.map((option, index) => {
            const isThisCorrect = option === card.correctAnswer;
            const isSelected = option === selectedOption;

            let buttonClass = "w-full text-left px-6 py-4 rounded-xl font-semibold transition-all duration-300 ";

            if (!showResult) {
              // Before answer
              buttonClass += "glass-card hover:bg-white/10 text-white hover:scale-[1.02] active:scale-[0.98]";
            } else {
              // After answer
              if (isThisCorrect) {
                buttonClass += "bg-green-600 text-white border-2 border-green-400";
              } else if (isSelected && !isThisCorrect) {
                buttonClass += "bg-red-600 text-white border-2 border-red-400";
              } else {
                buttonClass += "glass opacity-50 text-purple-200";
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(option)}
                disabled={showResult}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center font-bold text-sm">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-lg">{option}</span>
                  </div>

                  {showResult && isThisCorrect && (
                    <span className="text-2xl">✅</span>
                  )}
                  {showResult && isSelected && !isThisCorrect && (
                    <span className="text-2xl">❌</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Result Message */}
        {showResult && (
          <div className={`mt-6 p-6 rounded-2xl text-center animate-in fade-in slide-in-from-bottom-4 duration-500 ${
            isCorrect
              ? 'bg-green-600/20 border-2 border-green-500/50'
              : 'bg-red-600/20 border-2 border-red-500/50'
          }`}>
            <div className="text-4xl mb-2">{isCorrect ? '🎉' : '📚'}</div>
            <div className="text-xl font-bold text-white mb-2">
              {isCorrect ? 'Correct!' : 'Not quite!'}
            </div>
            <div className="text-purple-200">
              {isCorrect ? 'Great job!' : `The answer is: ${card.correctAnswer}`}
            </div>
          </div>
        )}

        {/* Tags */}
        {card.tags && card.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-purple-400/20 justify-center">
            {card.tags.map((tag, i) => (
              <span
                key={i}
                className="glass px-4 py-1.5 rounded-full text-sm font-medium text-purple-200"
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
