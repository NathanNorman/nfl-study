/**
 * MODULE GRID COMPONENT
 * Vertical learning path with visual connections (Duolingo-style)
 */

import type { Module, ModuleProgress } from '../types';
import ModuleCard from './ModuleCard';

interface ModuleGridProps {
  modules?: Module[];
  modulesProgress?: Record<string, ModuleProgress>;
  onStartModule: (moduleId: string) => void;
  onContinueModule: (moduleId: string) => void;
  onStartModuleMCQ: (moduleId: string) => void;
  onContinueModuleMCQ: (moduleId: string) => void;
  onSkipModule: (moduleId: string) => void;
}

export default function ModuleGrid({
  modules = [],
  modulesProgress = {},
  onStartModule,
  onContinueModule,
  onStartModuleMCQ,
  onContinueModuleMCQ,
  onSkipModule
}: ModuleGridProps) {
  // Check if module is locked
  const isModuleLocked = (module: Module): boolean => {
    if (!module.prerequisites) {
      return false;
    }

    // Check if prerequisites is an empty array
    if (Array.isArray(module.prerequisites) && module.prerequisites.length === 0) {
      return false;
    }

    // Handle OR prerequisites
    if (typeof module.prerequisites === 'object' && 'or' in module.prerequisites) {
      return !module.prerequisites.or.some((prereqId: string) => {
        const prereqProgress = modulesProgress[prereqId];
        return prereqProgress?.state === 'completed' || prereqProgress?.state === 'skipped';
      });
    }

    // Handle AND prerequisites
    if (Array.isArray(module.prerequisites)) {
      return module.prerequisites.some((prereqId: string) => {
        const prereqProgress = modulesProgress[prereqId];
        return prereqProgress?.state !== 'completed' && prereqProgress?.state !== 'skipped';
      });
    }

    return false;
  };

  // Get missing prerequisites for locked module
  const getMissingPrereqs = (module: Module): Module[] => {
    if (!isModuleLocked(module)) return [];

    let prereqIds: string[] = [];
    if (typeof module.prerequisites === 'object' && 'or' in module.prerequisites) {
      prereqIds = module.prerequisites.or;
    } else if (Array.isArray(module.prerequisites)) {
      prereqIds = module.prerequisites.filter((prereqId: string) => {
        const prereqProgress = modulesProgress[prereqId];
        return prereqProgress?.state !== 'completed' && prereqProgress?.state !== 'skipped';
      });
    }

    return prereqIds
      .map((prereqId: string) => modules.find((m: Module) => m.id === prereqId))
      .filter((m): m is Module => m !== undefined);
  };

  return (
    <div className="relative">
      {/* Vertical Path Line */}
      <div className="absolute left-8 top-0 bottom-0 w-1 bg-purple-500/20" />

      {/* Modules */}
      <div className="space-y-6">
        {modules.map((module) => {
          const isLocked = isModuleLocked(module);
          const missingPrereqs = getMissingPrereqs(module);
          const moduleProgress = modulesProgress[module.id] || null;

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
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
