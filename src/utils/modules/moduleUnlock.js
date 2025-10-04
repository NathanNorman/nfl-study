/**
 * MODULE UNLOCK LOGIC
 * Handles prerequisite checking and module availability
 */

/**
 * Check if a module is unlocked based on progress
 * @param {Object} module - Module definition
 * @param {Object} allModulesProgress - Map of moduleId -> progress object
 * @returns {boolean} - True if module is unlocked
 */
export function isModuleUnlocked(module, allModulesProgress = {}) {
  // No prerequisites = always unlocked
  if (!module.prerequisites || module.prerequisites.length === 0) {
    return true;
  }

  // Handle OR prerequisites: { or: ["module-id-1", "module-id-2"] }
  if (module.prerequisites.or) {
    return module.prerequisites.or.some(prereqId => {
      const progress = allModulesProgress[prereqId];
      return progress?.state === 'completed' || progress?.state === 'skipped';
    });
  }

  // Handle standard AND prerequisites: ["module-id-1", "module-id-2"]
  return module.prerequisites.every(prereqId => {
    const progress = allModulesProgress[prereqId];
    return progress?.state === 'completed' || progress?.state === 'skipped';
  });
}

/**
 * Get all unlocked modules
 * @param {Array} modules - All module definitions
 * @param {Object} allModulesProgress - Map of moduleId -> progress object
 * @returns {Array} - Unlocked modules
 */
export function getUnlockedModules(modules, allModulesProgress = {}) {
  return modules.filter(module => isModuleUnlocked(module, allModulesProgress));
}

/**
 * Get all locked modules
 * @param {Array} modules - All module definitions
 * @param {Object} allModulesProgress - Map of moduleId -> progress object
 * @returns {Array} - Locked modules
 */
export function getLockedModules(modules, allModulesProgress = {}) {
  return modules.filter(module => !isModuleUnlocked(module, allModulesProgress));
}

/**
 * Get next recommended module
 * Returns the first unlocked module that hasn't been started
 * @param {Array} modules - All module definitions
 * @param {Object} allModulesProgress - Map of moduleId -> progress object
 * @returns {Object|null} - Next module to study, or null if none available
 */
export function getNextModule(modules, allModulesProgress = {}) {
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
 * @param {Object} module - Module definition
 * @param {Object} allModulesProgress - Map of moduleId -> progress object
 * @param {Array} allModules - All module definitions (to look up names)
 * @returns {Array} - Array of prerequisite modules that are not completed
 */
export function getMissingPrerequisites(module, allModulesProgress = {}, allModules = []) {
  if (!module.prerequisites || module.prerequisites.length === 0) {
    return [];
  }

  // Handle OR prerequisites
  if (module.prerequisites.or) {
    // If ANY is complete, no missing prerequisites
    const anyComplete = module.prerequisites.or.some(prereqId => {
      const progress = allModulesProgress[prereqId];
      return progress?.state === 'completed' || progress?.state === 'skipped';
    });

    if (anyComplete) return [];

    // Otherwise, all OR options are missing (user needs to complete ANY one)
    return module.prerequisites.or.map(prereqId =>
      allModules.find(m => m.id === prereqId)
    ).filter(Boolean);
  }

  // Handle standard AND prerequisites
  return module.prerequisites
    .filter(prereqId => {
      const progress = allModulesProgress[prereqId];
      return progress?.state !== 'completed' && progress?.state !== 'skipped';
    })
    .map(prereqId => allModules.find(m => m.id === prereqId))
    .filter(Boolean);
}

/**
 * Get locked modules with their missing prerequisites
 * Useful for displaying unlock requirements in UI
 * @param {Array} modules - All module definitions
 * @param {Object} allModulesProgress - Map of moduleId -> progress object
 * @returns {Array} - Array of {module, missingPrerequisites}
 */
export function getLockedModulesWithPrerequisites(modules, allModulesProgress = {}) {
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
 * @returns {boolean}
 */
export function canForceUnlock() {
  return true; // User always has the option to skip prerequisites
}
