import type { Module, ModuleProgress } from '../types';

/**
 * MODULE CARD COMPONENT
 * Clean, Duolingo-inspired card design with strong visual hierarchy
 */

interface ModuleCardProps {
  module: Module;
  progress: ModuleProgress | null;
  isLocked: boolean;
  missingPrerequisites?: Module[];
  onStart: () => void;
  onContinue: () => void;
  onSkip: () => void;
  onStartMCQ: () => void;
  onContinueMCQ: () => void;
}

export default function ModuleCard({
  module,
  progress,
  isLocked,
  missingPrerequisites = [],
  onStart,
  onContinue,
  onSkip,
  onStartMCQ,
  onContinueMCQ
}: ModuleCardProps) {
  const state = progress?.state || 'notStarted';

  // Calculate studied percent (cards attempted / total cards)
  const flashcards = progress?.progress?.flashcards || { total: 0, studied: 0 };
  const completionPercent = flashcards.total > 0
    ? Math.round((flashcards.studied / flashcards.total) * 100)
    : 0;

  // Debug logging
  if (module.id === 'module-football-101') {
    console.log('🎴 [ModuleCard] Football 101 rendering:', {
      state,
      progress: progress,
      flashcards,
      completionPercent
    });
  }

  return (
    <div data-module-id={module.id} className={`relative group ${isLocked ? 'opacity-60' : ''}`}>
      {/* Card */}
      <div className={`
        relative overflow-hidden rounded-2xl p-5
        transition-all duration-300
        ${isLocked
          ? 'bg-gray-800/20 border-2 border-gray-700/30'
          : state === 'completed'
          ? 'bg-gradient-to-br from-green-900/30 to-emerald-900/20 border-2 border-green-500/40 hover:border-green-500/60'
          : state === 'inProgress'
          ? 'bg-gradient-to-br from-blue-900/30 to-purple-900/20 border-2 border-blue-500/40 hover:border-blue-500/60 hover:scale-[1.02]'
          : 'bg-gradient-to-br from-purple-900/30 to-pink-900/20 border-2 border-purple-500/30 hover:border-purple-500/50 hover:scale-[1.02]'
        }
      `}>

        {/* Status Badge - Top Right */}
        <div className="absolute top-3 right-3">
          {isLocked ? (
            <div className="px-2 py-1 bg-gray-800/60 rounded-full text-xs text-gray-400 font-medium">
              🔒 Locked
            </div>
          ) : state === 'completed' ? (
            <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
              <span className="text-lg">✓</span>
            </div>
          ) : state === 'inProgress' ? (
            <div data-testid={`module-progress-${module.id}`} className="px-2 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300 font-medium">
              {Math.round(completionPercent)}%
            </div>
          ) : null}
        </div>

        {/* Icon & Title */}
        <div className="mb-4">
          <div className="mb-3">
            {module.IconComponent ? (
              <module.IconComponent
                size={48}
                className="text-purple-300 stroke-[1.5]"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <div className="text-5xl">{module.icon}</div>
            )}
          </div>
          <h3 className="text-xl font-bold text-white mb-1 leading-tight">
            {module.name}
          </h3>
          <p className="text-sm text-gray-400">
            {module.difficulty ? module.difficulty.charAt(0).toUpperCase() + module.difficulty.slice(1) : 'N/A'} • ~{module.estimatedMinutes}m
          </p>
        </div>

        {/* Progress Bar (if in progress) */}
        {!isLocked && state === 'inProgress' && (
          <div className="mb-4">
            <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500"
                style={{ width: `${completionPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Prerequisites (if locked) */}
        {isLocked && missingPrerequisites.length > 0 && (
          <div className="mb-4 p-3 bg-gray-900/40 rounded-lg border border-gray-700/30">
            <div className="text-xs text-gray-400 mb-2">Complete first:</div>
            <div className="space-y-1">
              {missingPrerequisites.slice(0, 2).map(prereq => (
                <div key={prereq.id} className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="text-base">{prereq.icon}</span>
                  <span>{prereq.name}</span>
                </div>
              ))}
              {missingPrerequisites.length > 2 && (
                <div className="text-xs text-gray-500">+{missingPrerequisites.length - 2} more</div>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-2">
          {!isLocked && state === 'notStarted' && (
            <>
              <button
                onClick={onStart}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                📚 Start Flashcards
              </button>
              <button
                onClick={onStartMCQ}
                className="w-full glass hover:bg-white/10 text-purple-200 font-semibold py-2 px-4 rounded-xl transition-all duration-200"
              >
                ✅ Start MCQ Quiz
              </button>
            </>
          )}

          {!isLocked && state === 'inProgress' && (
            <>
              <button
                onClick={onContinue}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                📚 Continue Flashcards
              </button>
              <button
                onClick={onContinueMCQ}
                className="w-full glass hover:bg-white/10 text-purple-200 font-semibold py-2 px-4 rounded-xl transition-all duration-200"
              >
                ✅ Practice MCQs
              </button>
            </>
          )}

          {!isLocked && state === 'completed' && (
            <>
              <button
                onClick={onContinue}
                className="w-full bg-gradient-to-r from-green-700 to-emerald-700 hover:from-green-600 hover:to-emerald-600 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                📚 Review Flashcards
              </button>
              <button
                onClick={onContinueMCQ}
                className="w-full glass hover:bg-white/10 text-purple-200 font-semibold py-2 px-4 rounded-xl transition-all duration-200"
              >
                ✅ Review MCQs
              </button>
            </>
          )}

          {!isLocked && state === 'skipped' && (
            <button
              onClick={onStart}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Start Learning
            </button>
          )}

          {isLocked && (
            <button
              disabled
              className="w-full bg-gray-800/40 text-gray-600 font-semibold py-3 px-4 rounded-xl cursor-not-allowed"
            >
              Locked
            </button>
          )}
        </div>

        {/* Skip button (small, bottom right) */}
        {!isLocked && (state === 'notStarted' || state === 'skipped') && (
          <button
            onClick={onSkip}
            className="absolute bottom-3 right-3 text-xs text-gray-500 hover:text-gray-300 transition-colors"
          >
            Skip
          </button>
        )}
      </div>
    </div>
  );
}
