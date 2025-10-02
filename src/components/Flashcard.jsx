import { useState, useEffect } from 'react';

export default function Flashcard({ card, onRate }) {
  const [showAnswer, setShowAnswer] = useState(false);

  // Reset showAnswer when card changes
  useEffect(() => {
    console.log('🔍 [Flashcard] Card changed, resetting showAnswer. Card ID:', card.id);
    setShowAnswer(false);
  }, [card.id]);

  return (
    <div className="bg-white rounded-xl p-10 shadow-2xl">
      <div className="min-h-64 flex items-center justify-center mb-8">
        <div className="text-center">
          <div className="text-2xl leading-relaxed mb-6">
            {card.question}
          </div>

          {showAnswer && (
            <div className="text-xl text-purple-600 font-semibold border-t-2 pt-6">
              {card.answer}
            </div>
          )}
        </div>
      </div>

      <div className="text-center">
        {!showAnswer ? (
          <button
            onClick={() => setShowAnswer(true)}
            className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-all hover:scale-105"
          >
            Show Answer
          </button>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={() => onRate(1)}
              className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-all hover:scale-105"
            >
              Again
            </button>
            <button
              onClick={() => onRate(2)}
              className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all hover:scale-105"
            >
              Hard
            </button>
            <button
              onClick={() => onRate(3)}
              className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all hover:scale-105"
            >
              Good
            </button>
            <button
              onClick={() => onRate(4)}
              className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-all hover:scale-105"
            >
              Easy
            </button>
          </div>
        )}
      </div>

      {card.tags && card.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-6 justify-center">
          {card.tags.map((tag, i) => (
            <span key={i} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
