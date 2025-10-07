/**
 * MODULE MCQ PAGE
 * Study MCQs filtered to a specific module
 */

import { useState, useEffect } from 'react';
import MCQCard from '../components/MCQCard';
import { getCardsForModule } from '../utils/modules/index.js';
import { isDue } from '../utils/fsrs';
import type { MCQCard as MCQCardType, Module } from '../types';

interface ModuleMCQPageProps {
  module: Module | null;
  mcqs: MCQCardType[];
  onUpdateCard: (cardId: number, rating: number) => Promise<void>;
  onExit: () => void;
  onUpdateProgress?: (moduleId: string) => void;
}

export default function ModuleMCQPage({ module, mcqs, onUpdateCard, onExit, onUpdateProgress }: ModuleMCQPageProps) {
  const [moduleMCQs, setModuleMCQs] = useState<MCQCardType[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);

  // Snapshot MCQs when module starts - filter to due/unanswered cards
  useEffect(() => {
    if (!module || !mcqs || !Array.isArray(mcqs)) return;

    const mcqIds = getCardsForModule(module.id, 'mcq');

    // Filter to module MCQs that are either new or due for review
    const filtered = mcqs.filter(card => {
      // Must be in this module
      if (!mcqIds.includes(card.question)) return false;

      // Include if not yet attempted OR if due for review
      const isNew = !card.reps || card.reps === 0;
      const isDueForReview = isDue(card);

      return isNew || isDueForReview;
    });

    console.log(`✅ [ModuleMCQPage] Module: ${module.name}, ${filtered.length} due/new MCQs (${mcqIds.length} total in module)`);
    console.log(`🔍 [ModuleMCQPage] MCQ breakdown:`, {
      totalMCQsInApp: mcqs.length,
      mcqIdsForThisModule: mcqIds.length,
      filteredDueNew: filtered.length,
      sampleFiltered: filtered.slice(0, 3).map(c => ({ question: c.question.substring(0, 40), reps: c.reps })),
      sampleMcqIds: mcqIds.slice(0, 3)
    });

    setModuleMCQs(filtered);
    setCurrentCardIndex(0);
  }, [module?.id, mcqs]); // Re-filter when module changes OR when mcqs update

  const handleAnswer = async (selectedOption: string) => {
    const currentCard = moduleMCQs[currentCardIndex];
    if (!currentCard) return;

    const isCorrect = selectedOption === currentCard.correctAnswer;
    const rating = isCorrect ? 4 : 1; // Easy if correct, Again if wrong

    await onUpdateCard(currentCard.id, rating);

    // Update module progress immediately
    if (onUpdateProgress && module) {
      onUpdateProgress(module.id);
    }

    // Auto-advance after 1 second
    setTimeout(() => {
      if (currentCardIndex < moduleMCQs.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
      } else {
        alert(`🎉 You've completed all MCQs in ${module?.name ?? 'this module'}!`);
        onExit();
      }
    }, 1000);
  };

  const handleExit = () => {
    if (confirm('Exit this module? Your progress will be saved.')) {
      onExit();
    }
  };

  if (!module || moduleMCQs.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📭</div>
          <div className="text-2xl text-white font-bold mb-4">No MCQs in this module yet</div>
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

  const progress = ((currentCardIndex + 1) / moduleMCQs.length) * 100;

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
            <span className="text-white font-semibold">{module?.icon} {module?.name} (MCQ)</span>
          </div>

          <h1 className="text-4xl font-black gradient-text shine mb-2">
            {module?.name}
          </h1>
          <p className="text-purple-200">{module?.description}</p>
        </header>

        {/* Progress Bar */}
        <div className="glass bg-purple-900/40 rounded-2xl p-6 mb-8 border border-purple-500/30">
          <div className="flex items-center justify-between mb-3">
            <span className="text-purple-200 font-semibold">
              Question {currentCardIndex + 1} of {moduleMCQs.length}
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

        {/* MCQ Card */}
        {moduleMCQs[currentCardIndex] && (
          <MCQCard
            card={moduleMCQs[currentCardIndex]}
            onAnswer={handleAnswer}
          />
        )}

        {/* Module Info Footer */}
        <div className="mt-8 text-center text-purple-300/60 text-sm">
          <p>
            Module {module?.order ?? 0} of 8 • {module?.difficulty ? module.difficulty.charAt(0).toUpperCase() + module.difficulty.slice(1) : 'N/A'} •
            {' '}~{module?.estimatedMinutes ?? 0} min
          </p>
        </div>
      </div>
    </div>
  );
}
