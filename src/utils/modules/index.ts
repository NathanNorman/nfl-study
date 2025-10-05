/**
 * MODULE SYSTEM - Unified Export
 * Central export point for all module-related utilities
 */

// Module definitions
export {
  MODULE_DEFINITIONS,
  getModuleById,
  getAllModules,
  getModulesByLevel,
  getModulesByDifficulty,
  getModuleCount
} from '../../data/modules/moduleDefinitions';

// Module card mappings
export {
  generateFlashcardModuleMappings,
  generateMCQModuleMappings,
  getCardsForModule,
  getModulesForCard,
  getModuleMappingStats
} from '../../data/modules/cardModuleMappings';

// Module progress tracking
export {
  calculateModuleProgress,
  isModuleComplete,
  isModuleSkipped,
  isModuleInProgress,
  isModuleStarted,
  determineModuleState,
  getTimeSpent,
  getCompletionPercent,
  getStateDisplay,
  estimateTimeRemaining
} from './moduleProgress';

// Module unlock logic
export {
  isModuleUnlocked,
  getUnlockedModules,
  getLockedModules,
  getNextModule,
  getMissingPrerequisites,
  getLockedModulesWithPrerequisites,
  canForceUnlock
} from './moduleUnlock';

// Module storage (IndexedDB)
export {
  getModuleProgress,
  getAllModulesProgress,
  saveModuleProgress,
  updateModuleProgress,
  startModule,
  completeModule,
  skipModule,
  resetModule,
  resetAllModules,
  initializeModuleProgress,
  updateTimeSpent,
  getModuleStatistics,
  exportModuleProgress,
  importModuleProgress
} from './moduleStorage';
