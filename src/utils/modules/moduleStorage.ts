/**
 * MODULE STORAGE - IndexedDB Operations
 * Persistent storage for module progress tracking
 */

import localforage from 'localforage';
import type { ModuleProgress, Module } from '../../types';
import type { ModuleProgressMap } from './moduleUnlock';

// Create a separate instance for module progress
const moduleStore = localforage.createInstance({
  name: 'nfl-study-modules',
  storeName: 'module-progress'
});

/**
 * Get progress for a specific module
 * @param {String} moduleId - Module ID
 * @returns {Promise<Object|null>} - Module progress object or null
 */
export async function getModuleProgress(moduleId) {
  try {
    const progress = await moduleStore.getItem(moduleId);
    return progress;
  } catch (error) {
    console.error(`Error getting module progress for ${moduleId}:`, error);
    return null;
  }
}

/**
 * Get progress for all modules
 * @returns {Promise<Object>} - Map of moduleId -> progress object
 */
export async function getAllModulesProgress() {
  try {
    const allProgress = {};
    await moduleStore.iterate((value, key) => {
      allProgress[key] = value;
    });
    return allProgress;
  } catch (error) {
    console.error('Error getting all modules progress:', error);
    return {};
  }
}

/**
 * Save module progress
 * @param {String} moduleId - Module ID
 * @param {Object} progressData - Progress data to save
 * @returns {Promise<boolean>} - Success status
 */
export async function saveModuleProgress(moduleId, progressData) {
  try {
    await moduleStore.setItem(moduleId, progressData);
    console.log(`✅ Saved progress for module: ${moduleId}`, progressData);
    return true;
  } catch (error) {
    console.error(`Error saving module progress for ${moduleId}:`, error);
    return false;
  }
}

/**
 * Update module progress (merges with existing)
 * @param {String} moduleId - Module ID
 * @param {Object} updates - Fields to update
 * @returns {Promise<Object|null>} - Updated progress object
 */
export async function updateModuleProgress(moduleId, updates) {
  try {
    const existing = await getModuleProgress(moduleId);
    const updated = {
      ...existing,
      ...updates,
      lastUpdatedAt: new Date().toISOString()
    };

    await saveModuleProgress(moduleId, updated);
    return updated;
  } catch (error) {
    console.error(`Error updating module progress for ${moduleId}:`, error);
    return null;
  }
}

/**
 * Mark module as started
 * @param {String} moduleId - Module ID
 * @returns {Promise<Object|null>}
 */
export async function startModule(moduleId) {
  const now = new Date().toISOString();

  return updateModuleProgress(moduleId, {
    state: 'inProgress',
    startedAt: now,
    lastStudiedAt: now
  });
}

/**
 * Mark module as completed
 * @param {String} moduleId - Module ID
 * @returns {Promise<Object|null>}
 */
export async function completeModule(moduleId) {
  const now = new Date().toISOString();

  return updateModuleProgress(moduleId, {
    state: 'completed',
    completedAt: now,
    lastStudiedAt: now
  });
}

/**
 * Mark module as skipped
 * @param {String} moduleId - Module ID
 * @returns {Promise<Object|null>}
 */
export async function skipModule(moduleId) {
  const now = new Date().toISOString();

  return updateModuleProgress(moduleId, {
    state: 'skipped',
    skippedAt: now
  });
}

/**
 * Reset module progress
 * @param {String} moduleId - Module ID
 * @returns {Promise<boolean>}
 */
export async function resetModule(moduleId) {
  try {
    await moduleStore.removeItem(moduleId);
    console.log(`🔄 Reset module: ${moduleId}`);
    return true;
  } catch (error) {
    console.error(`Error resetting module ${moduleId}:`, error);
    return false;
  }
}

/**
 * Reset ALL module progress
 * @returns {Promise<boolean>}
 */
export async function resetAllModules() {
  try {
    await moduleStore.clear();
    console.log('🔄 Reset all module progress');
    return true;
  } catch (error) {
    console.error('Error resetting all modules:', error);
    return false;
  }
}

/**
 * Initialize module progress if it doesn't exist
 * @param {String} moduleId - Module ID
 * @param {Object} moduleDefinition - Module definition from moduleDefinitions.js
 * @returns {Promise<Object>}
 */
export async function initializeModuleProgress(moduleId, moduleDefinition) {
  const existing = await getModuleProgress(moduleId);

  if (existing) {
    return existing;
  }

  const initialProgress = {
    moduleId,
    state: 'notStarted',

    progress: {
      flashcards: {
        total: moduleDefinition.totalCards || 0,
        studied: 0,
        mastered: 0,
        masteredPercent: 0
      },
      mcqs: {
        total: 0,
        attempted: 0,
        correct: 0,
        accuracy: 0
      }
    },

    startedAt: null,
    lastStudiedAt: null,
    completedAt: null,
    skippedAt: null,

    timeSpent: 0, // in seconds

    createdAt: new Date().toISOString(),
    lastUpdatedAt: new Date().toISOString()
  };

  await saveModuleProgress(moduleId, initialProgress);
  return initialProgress;
}

/**
 * Update time spent in module
 * @param {String} moduleId - Module ID
 * @param {Number} additionalSeconds - Seconds to add
 * @returns {Promise<Object|null>}
 */
export async function updateTimeSpent(moduleId, additionalSeconds) {
  try {
    const existing = await getModuleProgress(moduleId);
    const currentTimeSpent = existing?.timeSpent || 0;

    return updateModuleProgress(moduleId, {
      timeSpent: currentTimeSpent + additionalSeconds,
      lastStudiedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error(`Error updating time spent for ${moduleId}:`, error);
    return null;
  }
}

/**
 * Get module statistics across all modules
 * @returns {Promise<Object>}
 */
export async function getModuleStatistics() {
  try {
    const allProgress = await getAllModulesProgress();
    const stats = {
      total: 0,
      notStarted: 0,
      inProgress: 0,
      completed: 0,
      skipped: 0,
      totalTimeSpent: 0
    };

    Object.values(allProgress).forEach(progress => {
      stats.total++;
      stats[progress.state]++;
      stats.totalTimeSpent += progress.timeSpent || 0;
    });

    return stats;
  } catch (error) {
    console.error('Error getting module statistics:', error);
    return null;
  }
}

/**
 * Export module progress as JSON
 * @returns {Promise<String>}
 */
export async function exportModuleProgress() {
  try {
    const allProgress = await getAllModulesProgress();
    return JSON.stringify(allProgress, null, 2);
  } catch (error) {
    console.error('Error exporting module progress:', error);
    return '{}';
  }
}

/**
 * Import module progress from JSON
 * @param {String} jsonData - JSON string of module progress
 * @returns {Promise<boolean>}
 */
export async function importModuleProgress(jsonData) {
  try {
    const data = JSON.parse(jsonData);

    for (const [moduleId, progress] of Object.entries(data)) {
      await saveModuleProgress(moduleId, progress);
    }

    console.log('✅ Imported module progress');
    return true;
  } catch (error) {
    console.error('Error importing module progress:', error);
    return false;
  }
}
