/**
 * MODULES APP
 * Main app for module-based learning with navigation between selection and study
 */

import { useState } from 'react';
import { useCards } from './hooks/useCards';
import { useMCQ } from './hooks/useMCQ';
import { useModules } from './hooks/useModules';
import ModuleSelectionPage from './pages/ModuleSelectionPage';
import ModuleStudyPage from './pages/ModuleStudyPage';
import ModuleMCQPage from './pages/ModuleMCQPage';

export default function ModulesApp() {
  const { cards, loading: cardsLoading, updateCard } = useCards();
  const { cards: mcqs, loading: mcqsLoading, updateCard: updateMCQ } = useMCQ();
  const {
    modules,
    modulesProgress,
    loading: modulesLoading,
    currentModuleId,
    startModule,
    continueModule,
    skipModule,
    exitModule,
    updateModuleProgress,
    getCurrentModule
  } = useModules();

  const [isStudying, setIsStudying] = useState(false);
  const [studyMode, setStudyMode] = useState('flashcard'); // 'flashcard' or 'mcq'

  // Handle module selection - flashcards
  const handleSelectModule = async (moduleId: string) => {
    const progress = modulesProgress[moduleId];
    if (progress?.state === 'inProgress' || progress?.state === 'completed') {
      await continueModule(moduleId);
    } else {
      await startModule(moduleId);
    }
    setStudyMode('flashcard');
    setIsStudying(true);
  };

  // Handle module selection - MCQs
  const handleSelectModuleMCQ = async (moduleId: string) => {
    const progress = modulesProgress[moduleId];
    if (progress?.state === 'inProgress' || progress?.state === 'completed') {
      await continueModule(moduleId);
    } else {
      await startModule(moduleId);
    }
    setStudyMode('mcq');
    setIsStudying(true);
  };

  // Handle exiting study mode
  const handleExitStudy = async () => {
    // Update module progress BEFORE exiting (while currentModuleId still exists)
    if (currentModuleId) {
      await updateModuleProgress(currentModuleId);
    }

    setIsStudying(false);
    exitModule();
  };

  // Loading state
  if (cardsLoading || mcqsLoading || modulesLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🏈</div>
          <div className="text-2xl text-white font-bold">Loading...</div>
        </div>
      </div>
    );
  }

  // Module study mode
  if (isStudying && currentModuleId) {
    if (studyMode === 'mcq') {
      return (
        <ModuleMCQPage
          module={getCurrentModule() ?? null}
          mcqs={mcqs}
          onUpdateCard={updateMCQ}
          onExit={handleExitStudy}
          onUpdateProgress={updateModuleProgress}
        />
      );
    }

    return (
      <ModuleStudyPage
        module={getCurrentModule() ?? null}
        cards={cards}
        onUpdateCard={updateCard}
        onExit={handleExitStudy}
        onUpdateProgress={updateModuleProgress}
      />
    );
  }

  // Module selection mode
  return (
    <ModuleSelectionPage
      modules={modules}
      modulesProgress={modulesProgress}
      loading={modulesLoading}
      onSelectModule={handleSelectModule}
      onSelectModuleMCQ={handleSelectModuleMCQ}
      onSkipModule={skipModule}
    />
  );
}
