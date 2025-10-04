/**
 * MODULE GRID COMPONENT
 * Vertical learning path with visual connections (Duolingo-style)
 */

import ModuleCard from './ModuleCard';

export default function ModuleGrid({
  modules = [],
  modulesProgress = {},
  onStartModule,
  onContinueModule,
  onStartModuleMCQ,
  onContinueModuleMCQ,
  onSkipModule,
  onCompleteModule
}) {
  // Check if module is locked
  const isModuleLocked = (module) => {
    if (!module.prerequisites || module.prerequisites.length === 0) {
      return false;
    }

    // Handle OR prerequisites
    if (module.prerequisites.or) {
      return !module.prerequisites.or.some(prereqId => {
        const prereqProgress = modulesProgress[prereqId];
        return prereqProgress?.state === 'completed' || prereqProgress?.state === 'skipped';
      });
    }

    // Handle AND prerequisites
    return module.prerequisites.some(prereqId => {
      const prereqProgress = modulesProgress[prereqId];
      return prereqProgress?.state !== 'completed' && prereqProgress?.state !== 'skipped';
    });
  };

  // Get missing prerequisites for locked module
  const getMissingPrereqs = (module) => {
    if (!isModuleLocked(module)) return [];

    let prereqIds = [];
    if (module.prerequisites.or) {
      prereqIds = module.prerequisites.or;
    } else {
      prereqIds = module.prerequisites.filter(prereqId => {
        const prereqProgress = modulesProgress[prereqId];
        return prereqProgress?.state !== 'completed' && prereqProgress?.state !== 'skipped';
      });
    }

    return prereqIds.map(prereqId => modules.find(m => m.id === prereqId)).filter(Boolean);
  };

  return (
    <div className="relative">
      {/* Vertical Path Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-purple-500/20" />

      {/* Modules */}
      <div className="space-y-6">
        {modules.map((module, index) => {
          const isLocked = isModuleLocked(module);
          const missingPrereqs = getMissingPrereqs(module);
          const moduleProgress = modulesProgress[module.id];

          return (
            <div key={module.id} className="relative">
              {/* Level indicator dot */}
              <div className={`absolute left-6 top-8 w-5 h-5 rounded-full border-4 z-10 ${
                moduleProgress?.state === 'completed'
                  ? 'bg-green-500 border-green-400'
                  : moduleProgress?.state === 'inProgress'
                  ? 'bg-blue-500 border-blue-400 animate-pulse'
                  : isLocked
                  ? 'bg-gray-700 border-gray-600'
                  : 'bg-purple-500 border-purple-400'
              }`} />

              {/* Card Container */}
              <div className="ml-20">
                <ModuleCard
                  module={module}
                  progress={moduleProgress}
                  isLocked={isLocked}
                  missingPrerequisites={missingPrereqs}
                  onStart={() => onStartModule(module.id)}
                  onContinue={() => onContinueModule(module.id)}
                  onStartMCQ={() => onStartModuleMCQ(module.id)}
                  onContinueMCQ={() => onContinueModuleMCQ(module.id)}
                  onSkip={() => onSkipModule(module.id)}
                  onComplete={() => onCompleteModule(module.id)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
