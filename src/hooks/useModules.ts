/**
 * USE MODULES HOOK
 * Manages module state, progress tracking, and actions
 */

import { useState, useEffect, useCallback } from 'react';
import {
  MODULE_DEFINITIONS,
  getAllModulesProgress,
  startModule,
  skipModule,
  completeModule,
  calculateModuleProgress,
  determineModuleState,
  updateModuleProgress,
  initializeModuleProgress,
  getCardsForModule
} from '../utils/modules/index';
import { storage } from '../utils/storage';
import type { Module, MCQCard } from '../types';
import type { ModuleProgressMap } from '../utils/modules/moduleUnlock';

export interface UseModulesReturn {
  modules: Module[];
  modulesProgress: ModuleProgressMap;
  loading: boolean;
  currentModuleId: string | null;

  // Actions
  startModule: (moduleId: string) => Promise<boolean>;
  continueModule: (moduleId: string) => Promise<boolean>;
  skipModule: (moduleId: string) => Promise<boolean>;
  completeModule: (moduleId: string) => Promise<boolean>;
  updateModuleProgress: (moduleId: string) => Promise<void>;
  exitModule: () => void;

  // Helpers
  getCurrentModule: () => Module | undefined;
}

export function useModules(): UseModulesReturn {
  const [modules] = useState<Module[]>(MODULE_DEFINITIONS);
  const [modulesProgress, setModulesProgress] = useState<ModuleProgressMap>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [currentModuleId, setCurrentModuleId] = useState<string | null>(null);

  // Load module progress from IndexedDB on mount
  useEffect(() => {
    async function loadProgress() {
      try {
        setLoading(true);
        const progress = await getAllModulesProgress();

        // Initialize any modules that don't have progress yet
        for (const module of modules) {
          const moduleProgress = progress[module.id];
          if (!moduleProgress) {
            await initializeModuleProgress(module.id, module);
          }
        }

        // Reload after initialization
        const updatedProgress = await getAllModulesProgress();
        setModulesProgress(updatedProgress);
      } catch (error) {
        console.error('Error loading module progress:', error);
      } finally {
        setLoading(false);
      }
    }

    loadProgress();
  }, [modules]);

  // Start a module
  const handleStartModule = useCallback(async (moduleId: string): Promise<boolean> => {
    try {
      const updated = await startModule(moduleId);
      if (updated) {
        setModulesProgress(prev => ({
          ...prev,
          [moduleId]: updated
        }));
      }
      setCurrentModuleId(moduleId);
      return true;
    } catch (error) {
      console.error(`Error starting module ${moduleId}:`, error);
      return false;
    }
  }, []);

  // Continue studying a module (same as start, but semantic difference)
  const handleContinueModule = useCallback(async (moduleId: string): Promise<boolean> => {
    setCurrentModuleId(moduleId);
    return true;
  }, []);

  // Skip a module
  const handleSkipModule = useCallback(async (moduleId: string): Promise<boolean> => {
    try {
      const updated = await skipModule(moduleId);
      if (updated) {
        setModulesProgress(prev => ({
          ...prev,
          [moduleId]: updated
        }));
      }
      return true;
    } catch (error) {
      console.error(`Error skipping module ${moduleId}:`, error);
      return false;
    }
  }, []);

  // Manually mark module as complete
  const handleCompleteModule = useCallback(async (moduleId: string): Promise<boolean> => {
    try {
      const updated = await completeModule(moduleId);
      if (updated) {
        setModulesProgress(prev => ({
          ...prev,
          [moduleId]: updated
        }));
      }
      return true;
    } catch (error) {
      console.error(`Error completing module ${moduleId}:`, error);
      return false;
    }
  }, []);

  // Update module progress based on card study
  // NOTE: We ignore the cards passed in and always reload from IndexedDB
  // to ensure we have the latest reps/state after rating
  const updateModuleProgressFromCards = useCallback(async (moduleId: string): Promise<void> => {
    try {
      console.log('🔄 [useModules] Updating progress for module:', moduleId);

      // ⚠️ CRITICAL: Always reload fresh from IndexedDB
      // The cards in React state may be stale after rating
      console.log('🔄 [useModules] Reloading fresh cards from IndexedDB...');
      const freshFlashcards = await storage.getCards();
      const freshMCQs = await storage.getItem<MCQCard[]>('mcq-cards') || [];
      console.log('✅ [useModules] Reloaded fresh cards - flashcards:', freshFlashcards.length, 'MCQs:', freshMCQs.length);

      // Log sample of FRESH card reps to verify they're updated
      if (freshFlashcards.length > 0) {
        const sampleCards = freshFlashcards.slice(0, 5);
        console.log('🔍 [useModules] Sample FRESH flashcard reps from IndexedDB:',
          sampleCards.map(c => ({
            question: c.question.substring(0, 30),
            reps: c.reps,
            id: c.id,
            state: c.state
          }))
        );
      }

      const module = modules.find(m => m.id === moduleId);
      if (!module) {
        console.warn('⚠️ [useModules] Module not found:', moduleId);
        return;
      }

      // Get cards for this module
      const flashcardIds = getCardsForModule(moduleId, 'flashcard');
      const mcqIds = getCardsForModule(moduleId, 'mcq');
      console.log('📊 [useModules] Cards in module:', { flashcards: flashcardIds.length, mcqs: mcqIds.length });

      // Calculate progress using FRESH cards from IndexedDB
      const progress = calculateModuleProgress(
        moduleId,
        freshFlashcards, // Use fresh cards from IndexedDB!
        freshMCQs, // Use fresh MCQs from IndexedDB!
        flashcardIds,
        mcqIds
      );
      console.log('📈 [useModules] Calculated progress:', progress);

      // Determine new state
      const existingProgress = modulesProgress[moduleId];
      const newState = determineModuleState(progress, existingProgress);
      console.log('🎯 [useModules] New state:', newState);

      // Update storage
      const updated = await updateModuleProgress(moduleId, {
        progress,
        state: newState,
        lastStudiedAt: new Date().toISOString()
      });
      console.log('✅ [useModules] Progress saved to IndexedDB:', updated);

      // Force reload from IndexedDB to ensure UI updates
      const freshProgress = await getAllModulesProgress();
      setModulesProgress(freshProgress);
      console.log('🔄 [useModules] Reloaded all progress from IndexedDB');
    } catch (error) {
      console.error(`❌ [useModules] Error updating module progress for ${moduleId}:`, error);
    }
  }, [modules, modulesProgress]);

  // Exit module study mode
  const exitModule = useCallback(() => {
    setCurrentModuleId(null);
  }, []);

  return {
    modules,
    modulesProgress,
    loading,
    currentModuleId,

    // Actions
    startModule: handleStartModule,
    continueModule: handleContinueModule,
    skipModule: handleSkipModule,
    completeModule: handleCompleteModule,
    updateModuleProgress: updateModuleProgressFromCards,
    exitModule,

    // Helper to get current module
    getCurrentModule: () => modules.find(m => m.id === currentModuleId)
  };
}
