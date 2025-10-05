/**
 * MODULE STUDY PAGE
 * Study flashcards filtered to a specific module
 */

import { useState, useEffect } from 'react';
import Flashcard from '../components/Flashcard';
import { getCardsForModule } from '../utils/modules/index.js';
import { isDue } from '../utils/fsrs';

export default function ModuleStudyPage({ module, cards, onUpdateCard, onExit, onUpdateProgress }) {
  const [moduleCards, setModuleCards] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Snapshot cards when module starts - don't re-filter during study session
  // NOTE: Only depends on module.id, NOT on cards array. This prevents re-filtering
  // every time updateModuleProgress reloads cards, which was causing the list to shrink
  // (41→40→39...) as cards were rated and removed from "due" status.
  useEffect(() => {
    if (!module) return;

    const flashcardIds = getCardsForModule(module.id, 'flashcard');
    const filtered = cards.filter(card => flashcardIds.includes(card.question));

    console.log(`📚 [ModuleStudyPage] Module: ${module.name}, Snapshotting ${filtered.length} cards`);

    setModuleCards(filtered);
    setCurrentCardIndex(0);
  }, [module?.id]); // Only re-filter when module changes, not when cards reload

  const handleRate = async (rating) => {
    const currentCard = moduleCards[currentCardIndex];
    await onUpdateCard(currentCard.id, rating);

    // Update module progress immediately after rating
    if (onUpdateProgress && module) {
      onUpdateProgress(module.id);
    }

    // Move to next card
    if (currentCardIndex < moduleCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    } else {
      // Completed all cards in module
      alert(`🎉 You've completed all cards in ${module.name}!`);
      onExit();
    }
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleNext = () => {
    if (currentCardIndex < moduleCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const handleExit = () => {
    if (confirm('Exit this module? Your progress will be saved.')) {
      onExit();
    }
  };

  if (!module || moduleCards.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📭</div>
          <div className="text-2xl text-white font-bold mb-4">No cards in this module yet</div>
          <button
            onClick={onExit}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200"
          >
            Back to Modules
          </button>
        </div>
      </div>
    );
  }

  const progress = ((currentCardIndex + 1) / moduleCards.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-6xl">
        {/* Header with breadcrumb */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 text-purple-300 text-sm mb-4">
            <button
              onClick={handleExit}
              className="hover:text-white transition-colors"
            >
              📚 Modules
            </button>
            <span>›</span>
            <span className="text-white font-semibold">{module.icon} {module.name}</span>
          </div>

          <h1 className="text-4xl font-black gradient-text shine mb-2">
            {module.name}
          </h1>
          <p className="text-purple-200">{module.description}</p>
        </header>

        {/* Progress Bar */}
        <div className="glass bg-purple-900/40 rounded-2xl p-6 mb-8 border border-purple-500/30">
          <div className="flex items-center justify-between mb-3">
            <span className="text-purple-200 font-semibold">
              Card {currentCardIndex + 1} of {moduleCards.length}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-purple-300 text-sm font-medium">
                {Math.round(progress)}% Complete
              </span>
              <button
                onClick={handleExit}
                className="text-purple-400 hover:text-white px-3 py-1 rounded-lg hover:bg-white/10 transition-all text-sm font-semibold"
              >
                ✕ Exit Module
              </button>
            </div>
          </div>
          <div className="h-3 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mb-6">
          <button
            data-testid="btn-previous"
            onClick={handlePrevious}
            disabled={currentCardIndex === 0}
            className={`glass px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
              currentCardIndex === 0
                ? 'opacity-40 cursor-not-allowed'
                : 'hover:bg-white/10 hover:scale-105 text-purple-200'
            }`}
          >
            <span className="text-xl">←</span>
            <span>Previous</span>
          </button>

          <button
            data-testid="btn-next"
            onClick={handleNext}
            disabled={currentCardIndex === moduleCards.length - 1}
            className={`glass px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 ${
              currentCardIndex === moduleCards.length - 1
                ? 'opacity-40 cursor-not-allowed'
                : 'hover:bg-white/10 hover:scale-105 text-purple-200'
            }`}
          >
            <span>Next</span>
            <span className="text-xl">→</span>
          </button>
        </div>

        {/* Flashcard */}
        <Flashcard
          card={moduleCards[currentCardIndex]}
          onRate={handleRate}
        />

        {/* Module Info Footer */}
        <div className="mt-8 text-center text-purple-300/60 text-sm">
          <p>
            Module {module.order} of 8 • {module.difficulty ? module.difficulty.charAt(0).toUpperCase() + module.difficulty.slice(1) : 'N/A'} •
            {' '}~{module.estimatedMinutes} min
          </p>
        </div>
      </div>
    </div>
  );
}
