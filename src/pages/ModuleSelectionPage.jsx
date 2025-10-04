/**
 * MODULE SELECTION PAGE
 * Duolingo-inspired linear learning path
 */

import ModuleGrid from '../components/ModuleGrid';

export default function ModuleSelectionPage({
  modules,
  modulesProgress,
  loading,
  onSelectModule,
  onSelectModuleMCQ,
  onSkipModule,
  onCompleteModule
}) {

  // Calculate overall statistics
  const getOverallStats = () => {
    const stats = {
      total: modules.length,
      completed: 0,
      inProgress: 0,
      notStarted: 0,
      skipped: 0
    };

    Object.values(modulesProgress).forEach(progress => {
      const state = progress?.state || 'notStarted';
      stats[state]++;
    });

    return stats;
  };

  const stats = getOverallStats();
  const completionPercent = Math.round((stats.completed / stats.total) * 100);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">📚</div>
          <div className="text-2xl text-white font-bold">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 backdrop-blur-xl bg-purple-900/60 border-b border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Title */}
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏈</span>
              <div>
                <h1 className="text-2xl font-black text-white">Learning Path</h1>
                <p className="text-xs text-purple-300">{stats.completed}/{stats.total} modules complete</p>
              </div>
            </div>

            {/* Progress Circle */}
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16">
                <svg className="w-16 h-16 transform -rotate-90">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-purple-900/50"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - completionPercent / 100)}`}
                    className="text-green-400 transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">{completionPercent}%</span>
                </div>
              </div>

              {/* Debug Mode Link */}
              <a
                href="/debug.html"
                className="glass px-3 py-1.5 rounded-lg hover:bg-white/10 transition-all text-xs text-purple-300"
                title="Debug Mode"
              >
                🐛
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <ModuleGrid
          modules={modules}
          modulesProgress={modulesProgress}
          onStartModule={onSelectModule}
          onContinueModule={onSelectModule}
          onStartModuleMCQ={onSelectModuleMCQ}
          onContinueModuleMCQ={onSelectModuleMCQ}
          onSkipModule={onSkipModule}
          onCompleteModule={onCompleteModule}
        />
      </div>
    </div>
  );
}
