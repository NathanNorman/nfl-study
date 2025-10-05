/**
 * MODULE UNLOCK LOGIC
 * Handles prerequisite checking and module availability
 */

import type { Module, ModuleProgress } from '../../types';

export type ModuleProgressMap = Record<string, ModuleProgress>;

export interface LockedModuleInfo {
  module: Module;
  missingPrerequisites: Module[];
}

/**
 * Check if a module is unlocked based on progress
 */
export function isModuleUnlocked(module: Module, allModulesProgress: ModuleProgressMap = {}): boolean {
  // No prerequisites = always unlocked
  if (!module.prerequisites) {
    return true;
  }

  if (Array.isArray(module.prerequisites) && module.prerequisites.length === 0) {
    return true;
  }

  if (typeof module.prerequisites === 'object' && 'or' in module.prerequisites && module.prerequisites.or.length === 0) {
    return true;
  }

  // Handle OR prerequisites: { or: ["module-id-1", "module-id-2"] }
  if (typeof module.prerequisites === 'object' && 'or' in module.prerequisites) {
    return module.prerequisites.or.some(prereqId => {
      const progress = allModulesProgress[prereqId];
      return progress?.state === 'completed' || progress?.state === 'skipped';
    });
  }

  // Handle standard AND prerequisites: ["module-id-1", "module-id-2"]
  if (Array.isArray(module.prerequisites)) {
    return module.prerequisites.every(prereqId => {
      const progress = allModulesProgress[prereqId];
      return progress?.state === 'completed' || progress?.state === 'skipped';
    });
  }

  return true;
}

/**
 * Get all unlocked modules
 */
export function getUnlockedModules(modules: Module[], allModulesProgress: ModuleProgressMap = {}): Module[] {
  return modules.filter(module => isModuleUnlocked(module, allModulesProgress));
}

/**
 * Get all locked modules
 */
export function getLockedModules(modules: Module[], allModulesProgress: ModuleProgressMap = {}): Module[] {
  return modules.filter(module => !isModuleUnlocked(module, allModulesProgress));
}

/**
 * Get next recommended module
 * Returns the first unlocked module that hasn't been started
 */
export function getNextModule(modules: Module[], allModulesProgress: ModuleProgressMap = {}): Module | null {
  const unlocked = getUnlockedModules(modules, allModulesProgress);

  // Find first not-started module
  const notStarted = unlocked.find(module => {
    const progress = allModulesProgress[module.id];
    return !progress || progress.state === 'notStarted';
  });

  if (notStarted) return notStarted;

  // Otherwise, find first in-progress module
  const inProgress = unlocked.find(module => {
    const progress = allModulesProgress[module.id];
    return progress?.state === 'inProgress';
  });

  return inProgress || null;
}

/**
 * Get missing prerequisites for a locked module
 */
export function getMissingPrerequisites(
  module: Module,
  allModulesProgress: ModuleProgressMap = {},
  allModules: Module[] = []
): Module[] {
  if (!module.prerequisites) {
    return [];
  }

  if (Array.isArray(module.prerequisites) && module.prerequisites.length === 0) {
    return [];
  }

  if (typeof module.prerequisites === 'object' && 'or' in module.prerequisites && module.prerequisites.or.length === 0) {
    return [];
  }

  // Handle OR prerequisites
  if (typeof module.prerequisites === 'object' && 'or' in module.prerequisites) {
    // If ANY is complete, no missing prerequisites
    const anyComplete = module.prerequisites.or.some(prereqId => {
      const progress = allModulesProgress[prereqId];
      return progress?.state === 'completed' || progress?.state === 'skipped';
    });

    if (anyComplete) return [];

    // Otherwise, all OR options are missing (user needs to complete ANY one)
    return module.prerequisites.or
      .map(prereqId => allModules.find(m => m.id === prereqId))
      .filter((m): m is Module => m !== undefined);
  }

  // Handle standard AND prerequisites
  if (Array.isArray(module.prerequisites)) {
    return module.prerequisites
      .filter(prereqId => {
        const progress = allModulesProgress[prereqId];
        return progress?.state !== 'completed' && progress?.state !== 'skipped';
      })
      .map(prereqId => allModules.find(m => m.id === prereqId))
      .filter((m): m is Module => m !== undefined);
  }

  return [];
}

/**
 * Get locked modules with their missing prerequisites
 * Useful for displaying unlock requirements in UI
 */
export function getLockedModulesWithPrerequisites(
  modules: Module[],
  allModulesProgress: ModuleProgressMap = {}
): LockedModuleInfo[] {
  const locked = getLockedModules(modules, allModulesProgress);

  return locked.map(module => ({
    module,
    missingPrerequisites: getMissingPrerequisites(module, allModulesProgress, modules)
  }));
}

/**
 * Check if user can skip prerequisites and force-unlock a module
 * This is a safety check - always returns true (user has autonomy)
 * But we track that they skipped prerequisites for analytics
 */
export function canForceUnlock(): boolean {
  return true; // User always has the option to skip prerequisites
}
