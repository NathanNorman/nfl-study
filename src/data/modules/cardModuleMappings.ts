/**
 * CARD-TO-MODULE MAPPINGS
 * Programmatically assign cards to modules based on tags and difficulty
 */

import type { GeneratedFlashcard, GeneratedMCQ } from '../../types';
import { generateFlashcardsByDifficulty } from '../generateByDifficulty';
import { generateMCQByDifficulty } from '../mcq/generateMCQByDifficulty';

/**
 * Check if card tags match any of the required tags
 */
function hasAnyTag(card: GeneratedFlashcard | GeneratedMCQ, requiredTags: string[]): boolean {
  if (!card.tags || !Array.isArray(card.tags)) return false;
  return requiredTags.some(tag =>
    card.tags.some(cardTag =>
      cardTag.toLowerCase().includes(tag.toLowerCase())
    )
  );
}

/**
 * Check if card matches difficulty level
 */
function matchesDifficulty(card: GeneratedFlashcard | GeneratedMCQ, difficulty?: string): boolean {
  if (!difficulty) return true; // No difficulty requirement
  return card.difficulty === difficulty;
}

/**
 * Generate flashcard IDs for each module
 * Returns map of moduleId -> array of question texts (card IDs)
 */
export function generateFlashcardModuleMappings(): Record<string, string[]> {
  const { all } = generateFlashcardsByDifficulty();

  const mappings: Record<string, string[]> = {
    "module-football-101": [],
    "module-fantasy-basics": [],
    "module-offensive-playbook": [],
    "module-defensive-schemes": [],
    "module-player-analysis": [],
    "module-analytics-metrics": [],
    "module-draft-waiver-mastery": [],
    "module-championship-strategy": []
  };

  // Module 1: Football 101 (Beginner)
  // Tags: Rules, Scoring, Positions, Field, Downs, Turnovers, Game-Structure
  mappings["module-football-101"] = all
    .filter(card =>
      matchesDifficulty(card, 'beginner') &&
      hasAnyTag(card, [
        'Rules', 'Scoring', 'Positions', 'Field', 'Downs', 'Turnover',
        'Game-Structure', 'O-Line', 'Safety', 'Touchdown', 'Field-Goal',
        'PAT', 'First-Down', 'INT', 'Fumble', 'Penalty'
      ])
    )
    .map(card => card.question);

  // Module 2: Fantasy Football Basics (Beginner)
  // Tags: Fantasy, PPR, Waivers, Lineup, Bench, Draft (beginner level)
  mappings["module-fantasy-basics"] = all
    .filter(card =>
      matchesDifficulty(card, 'beginner') &&
      hasAnyTag(card, [
        'Fantasy', 'PPR', 'Waivers', 'Lineup', 'Bench',
        'Flex', 'WPFL', 'Superflex', 'Scoring', 'Draft'
      ])
    )
    .map(card => card.question);

  // Module 3: Offensive Playbook (Intermediate)
  // Tags: Offense, Formation, Route, Snap, Play-Action, RPO, Screen, Audible
  mappings["module-offensive-playbook"] = all
    .filter(card =>
      hasAnyTag(card, [
        'Offense', 'Formation', 'Route', 'Snap', 'Play-Action',
        'RPO', 'Screen', 'Audible', 'Hard-Count', 'Draw',
        'Motion', 'Empty', 'Bunch', 'Trips', 'Shotgun', 'Pistol'
      ]) &&
      !hasAnyTag(card, ['Defense', 'Coverage', 'Blitz']) // Exclude defense
    )
    .map(card => card.question);

  // Module 4: Defensive Schemes (Intermediate)
  // Tags: Defense, Coverage, Blitz, Nickel, Dime, Cover-2, Cover-3, Man, Zone
  mappings["module-defensive-schemes"] = all
    .filter(card =>
      hasAnyTag(card, [
        'Defense', 'Coverage', 'Blitz', 'Nickel', 'Dime',
        'Cover-2', 'Cover-3', 'Tampa-2', 'Cover-0', 'Cover-1',
        'Man', 'Zone', 'Spy', 'Contain', 'Gap', 'Prevent'
      ])
    )
    .map(card => card.question);

  // Module 5: Player Analysis 2024-2025 (Intermediate)
  // Tags: 2025, QB, RB, WR, TE, Stats, MVP, OPOY, OROY, Super-Bowl, Teams
  mappings["module-player-analysis"] = all
    .filter(card =>
      (
        hasAnyTag(card, ['2025', 'Stats', 'MVP', 'OPOY', 'OROY', 'Super-Bowl', 'Awards']) ||
        (
          hasAnyTag(card, ['QB', 'RB', 'WR', 'TE']) &&
          matchesDifficulty(card, 'intermediate')
        )
      ) &&
      !hasAnyTag(card, ['Analytics', 'Draft', 'Game-Script']) // Exclude advanced topics
    )
    .map(card => card.question);

  // Module 6: Analytics & Metrics (Advanced)
  // Tags: Analytics, Target-Share, Snap-Count, YAC, Air-Yards, xFP, Regression
  mappings["module-analytics-metrics"] = all
    .filter(card =>
      hasAnyTag(card, [
        'Analytics', 'Target-Share', 'Snap-Count', 'YAC',
        'Air-Yards', 'xFP', 'Regression', 'Opportunity',
        'Volume', 'Usage', 'Red-Zone-Usage'
      ]) &&
      matchesDifficulty(card, 'advanced')
    )
    .map(card => card.question);

  // Module 7: Draft & Waiver Mastery (Advanced)
  // Tags: Draft, ADP, Zero-RB, FAAB, Streaming, Handcuff, Sleeper, Bust
  mappings["module-draft-waiver-mastery"] = all
    .filter(card =>
      hasAnyTag(card, [
        'Draft', 'ADP', 'Zero-RB', 'FAAB', 'Streaming',
        'Handcuff', 'Sleeper', 'Bust', 'Value', 'VBD',
        'Late-Round', 'Breakout'
      ]) &&
      !hasAnyTag(card, ['Game-Script', 'Trade', 'Playoffs']) // Exclude championship topics
    )
    .map(card => card.question);

  // Module 8: Championship Strategy (Advanced)
  // Tags: Game-Script, Trade, Playoffs, Championship, Buy-Low, Sell-High
  mappings["module-championship-strategy"] = all
    .filter(card =>
      hasAnyTag(card, [
        'Game-Script', 'Trade', 'Playoffs', 'Championship',
        'Buy-Low', 'Sell-High', 'Schedule', 'Matchup',
        'Neutral-Game-Script', 'Positive-Script', 'Negative-Script'
      ]) &&
      matchesDifficulty(card, 'advanced')
    )
    .map(card => card.question);

  // Log statistics
  console.log('📊 Flashcard Module Mappings Generated:');
  Object.entries(mappings).forEach(([moduleId, questions]) => {
    console.log(`  ${moduleId}: ${questions.length} cards`);
  });

  return mappings;
}

/**
 * Generate MCQ IDs for each module
 * Uses same logic as flashcards
 */
export function generateMCQModuleMappings(): Record<string, string[]> {
  const { all } = generateMCQByDifficulty();

  const mappings: Record<string, string[]> = {
    "module-football-101": [],
    "module-fantasy-basics": [],
    "module-offensive-playbook": [],
    "module-defensive-schemes": [],
    "module-player-analysis": [],
    "module-analytics-metrics": [],
    "module-draft-waiver-mastery": [],
    "module-championship-strategy": []
  };

  // Module 1: Football 101 (Beginner)
  mappings["module-football-101"] = all
    .filter((mcq: GeneratedMCQ) =>
      matchesDifficulty(mcq, 'beginner') &&
      hasAnyTag(mcq, [
        'Rules', 'Scoring', 'Positions', 'Field', 'Downs', 'Turnover',
        'Game-Structure', 'O-Line', 'Safety', 'Touchdown', 'Field-Goal',
        'PAT', 'First-Down', 'INT', 'Fumble', 'Penalty'
      ])
    )
    .map((mcq: GeneratedMCQ) => mcq.question);

  // Module 2: Fantasy Football Basics (Beginner)
  mappings["module-fantasy-basics"] = all
    .filter((mcq: GeneratedMCQ) =>
      matchesDifficulty(mcq, 'beginner') &&
      hasAnyTag(mcq, [
        'Fantasy', 'PPR', 'Waivers', 'Lineup', 'Bench',
        'Flex', 'WPFL', 'Superflex', 'Scoring', 'Draft'
      ])
    )
    .map((mcq: GeneratedMCQ) => mcq.question);

  // Module 3: Offensive Playbook (Intermediate)
  mappings["module-offensive-playbook"] = all
    .filter((mcq: GeneratedMCQ) =>
      hasAnyTag(mcq, [
        'Offense', 'Formation', 'Route', 'Snap', 'Play-Action',
        'RPO', 'Screen', 'Audible', 'Hard-Count', 'Draw',
        'Motion', 'Empty', 'Bunch', 'Trips', 'Shotgun', 'Pistol'
      ]) &&
      !hasAnyTag(mcq, ['Defense', 'Coverage', 'Blitz'])
    )
    .map((mcq: GeneratedMCQ) => mcq.question);

  // Module 4: Defensive Schemes (Intermediate)
  mappings["module-defensive-schemes"] = all
    .filter((mcq: GeneratedMCQ) =>
      hasAnyTag(mcq, [
        'Defense', 'Coverage', 'Blitz', 'Nickel', 'Dime',
        'Cover-2', 'Cover-3', 'Tampa-2', 'Cover-0', 'Cover-1',
        'Man', 'Zone', 'Spy', 'Contain', 'Gap', 'Prevent'
      ])
    )
    .map((mcq: GeneratedMCQ) => mcq.question);

  // Module 5: Player Analysis 2024-2025 (Intermediate)
  mappings["module-player-analysis"] = all
    .filter((mcq: GeneratedMCQ) =>
      (
        hasAnyTag(mcq, ['2025', 'Stats', 'MVP', 'OPOY', 'OROY', 'Super-Bowl', 'Awards']) ||
        (
          hasAnyTag(mcq, ['QB', 'RB', 'WR', 'TE']) &&
          matchesDifficulty(mcq, 'intermediate')
        )
      ) &&
      !hasAnyTag(mcq, ['Analytics', 'Draft', 'Game-Script'])
    )
    .map((mcq: GeneratedMCQ) => mcq.question);

  // Module 6: Analytics & Metrics (Advanced)
  mappings["module-analytics-metrics"] = all
    .filter((mcq: GeneratedMCQ) =>
      hasAnyTag(mcq, [
        'Analytics', 'Target-Share', 'Snap-Count', 'YAC',
        'Air-Yards', 'xFP', 'Regression', 'Opportunity',
        'Volume', 'Usage', 'Red-Zone-Usage'
      ]) &&
      matchesDifficulty(mcq, 'advanced')
    )
    .map((mcq: GeneratedMCQ) => mcq.question);

  // Module 7: Draft & Waiver Mastery (Advanced)
  mappings["module-draft-waiver-mastery"] = all
    .filter((mcq: GeneratedMCQ) =>
      hasAnyTag(mcq, [
        'Draft', 'ADP', 'Zero-RB', 'FAAB', 'Streaming',
        'Handcuff', 'Sleeper', 'Bust', 'Value', 'VBD',
        'Late-Round', 'Breakout'
      ]) &&
      !hasAnyTag(mcq, ['Game-Script', 'Trade', 'Playoffs'])
    )
    .map((mcq: GeneratedMCQ) => mcq.question);

  // Module 8: Championship Strategy (Advanced)
  mappings["module-championship-strategy"] = all
    .filter((mcq: GeneratedMCQ) =>
      hasAnyTag(mcq, [
        'Game-Script', 'Trade', 'Playoffs', 'Championship',
        'Buy-Low', 'Sell-High', 'Schedule', 'Matchup',
        'Neutral-Game-Script', 'Positive-Script', 'Negative-Script'
      ]) &&
      matchesDifficulty(mcq, 'advanced')
    )
    .map((mcq: GeneratedMCQ) => mcq.question);

  // Log statistics
  console.log('📊 MCQ Module Mappings Generated:');
  Object.entries(mappings).forEach(([moduleId, questions]) => {
    console.log(`  ${moduleId}: ${questions.length} MCQs`);
  });

  return mappings;
}

/**
 * Get all cards for a specific module
 */
export function getCardsForModule(moduleId: string, cardType: 'flashcard' | 'mcq' = 'flashcard'): string[] {
  const mappings = cardType === 'flashcard'
    ? generateFlashcardModuleMappings()
    : generateMCQModuleMappings();

  return mappings[moduleId] || [];
}

/**
 * Get all modules that contain a specific card
 */
export function getModulesForCard(questionText: string, cardType: 'flashcard' | 'mcq' = 'flashcard'): string[] {
  const mappings = cardType === 'flashcard'
    ? generateFlashcardModuleMappings()
    : generateMCQModuleMappings();

  const modulesContainingCard: string[] = [];

  Object.entries(mappings).forEach(([moduleId, questions]) => {
    if (questions.includes(questionText)) {
      modulesContainingCard.push(moduleId);
    }
  });

  return modulesContainingCard;
}

/**
 * Get mapping statistics
 */
export function getModuleMappingStats(): {
  totalFlashcards: number;
  totalMCQs: number;
  modules: Record<string, { flashcards: number; mcqs: number; total: number }>;
} {
  const flashcardMappings = generateFlashcardModuleMappings();
  const mcqMappings = generateMCQModuleMappings();

  const stats = {
    totalFlashcards: 0,
    totalMCQs: 0,
    modules: {} as Record<string, { flashcards: number; mcqs: number; total: number }>
  };

  Object.keys(flashcardMappings).forEach(moduleId => {
    const flashcardCount = flashcardMappings[moduleId]?.length || 0;
    const mcqCount = mcqMappings[moduleId]?.length || 0;

    stats.modules[moduleId] = {
      flashcards: flashcardCount,
      mcqs: mcqCount,
      total: flashcardCount + mcqCount
    };

    stats.totalFlashcards += flashcardCount;
    stats.totalMCQs += mcqCount;
  });

  return stats;
}
