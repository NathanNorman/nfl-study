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
 */
export async function getModuleProgress(moduleId: string): Promise<ModuleProgress | null> {
  try {
    const progress = await moduleStore.getItem<ModuleProgress>(moduleId);
    return progress;
  } catch (error) {
    console.error(`Error getting module progress for ${moduleId}:`, error);
    return null;
  }
}

/**
 * Get progress for all modules
 */
export async function getAllModulesProgress(): Promise<ModuleProgressMap> {
  try {
    const allProgress: ModuleProgressMap = {};
    await moduleStore.iterate((value, key) => {
      allProgress[key] = value as ModuleProgress;
    });
    return allProgress;
  } catch (error) {
    console.error('Error getting all modules progress:', error);
    return {};
  }
}

/**
 * Save module progress
 */
export async function saveModuleProgress(moduleId: string, progressData: ModuleProgress): Promise<boolean> {
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
 */
export async function updateModuleProgress(moduleId: string, updates: Partial<ModuleProgress>): Promise<ModuleProgress | null> {
  try {
    const existing = await getModuleProgress(moduleId);
    const updated: ModuleProgress = {
      ...(existing || {} as ModuleProgress),
      ...updates,
      lastUpdatedAt: new Date().toISOString()
    } as ModuleProgress;

    await saveModuleProgress(moduleId, updated);
    return updated;
  } catch (error) {
    console.error(`Error updating module progress for ${moduleId}:`, error);
    return null;
  }
}

/**
 * Mark module as started
 */
export async function startModule(moduleId: string): Promise<ModuleProgress | null> {
  const now = new Date().toISOString();

  return updateModuleProgress(moduleId, {
    state: 'inProgress',
    startedAt: now,
    lastStudiedAt: now
  });
}

/**
 * Mark module as completed
 */
export async function completeModule(moduleId: string): Promise<ModuleProgress | null> {
  const now = new Date().toISOString();

  return updateModuleProgress(moduleId, {
    state: 'completed',
    completedAt: now,
    lastStudiedAt: now
  });
}

/**
 * Mark module as skipped
 */
export async function skipModule(moduleId: string): Promise<ModuleProgress | null> {
  const now = new Date().toISOString();

  return updateModuleProgress(moduleId, {
    state: 'skipped',
    skippedAt: now
  });
}

/**
 * Reset module progress
 */
export async function resetModule(moduleId: string): Promise<boolean> {
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
 */
export async function resetAllModules(): Promise<boolean> {
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
 */
export async function initializeModuleProgress(moduleId: string, moduleDefinition: Module): Promise<ModuleProgress> {
  const existing = await getModuleProgress(moduleId);

  if (existing) {
    return existing;
  }

  const initialProgress: ModuleProgress = {
    moduleId,
    state: 'notStarted' as const,

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
 */
export async function updateTimeSpent(moduleId: string, additionalSeconds: number): Promise<ModuleProgress | null> {
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

export interface ModuleStatistics {
  total: number;
  notStarted: number;
  inProgress: number;
  completed: number;
  skipped: number;
  totalTimeSpent: number;
}

/**
 * Get module statistics across all modules
 */
export async function getModuleStatistics(): Promise<ModuleStatistics | null> {
  try {
    const allProgress = await getAllModulesProgress();
    const stats: ModuleStatistics = {
      total: 0,
      notStarted: 0,
      inProgress: 0,
      completed: 0,
      skipped: 0,
      totalTimeSpent: 0
    };

    Object.values(allProgress).forEach(progress => {
      stats.total++;
      if (progress.state === 'notStarted') stats.notStarted++;
      if (progress.state === 'inProgress') stats.inProgress++;
      if (progress.state === 'completed') stats.completed++;
      if (progress.state === 'skipped') stats.skipped++;
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
 */
export async function exportModuleProgress(): Promise<string> {
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
 */
export async function importModuleProgress(jsonData: string): Promise<boolean> {
  try {
    const data = JSON.parse(jsonData) as ModuleProgressMap;

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
