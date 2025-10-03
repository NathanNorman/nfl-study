/**
 * Prerequisites System
 *
 * Ensures students learn foundational concepts before advanced cards that use those terms.
 *
 * How it works:
 * 1. Cards can have a `prerequisites` field with concept IDs they depend on
 * 2. Concept definitions are tagged with `defines: "concept-id"`
 * 3. Cards only appear in study queue after prerequisites are "mastered"
 * 4. Mastered = FSRS state is "Review" (state 2) with stability > 7 days
 */

import { State } from './fsrs';

/**
 * Check if a card's prerequisites are mastered
 * @param {Object} card - The card to check
 * @param {Array} allCards - All cards in the system
 * @returns {boolean} - True if all prerequisites are mastered
 */
export function arePrerequisitesMastered(card, allCards) {
  // No prerequisites = always available
  if (!card.prerequisites || card.prerequisites.length === 0) {
    return true;
  }

  // Check each prerequisite
  return card.prerequisites.every(prereqId => {
    // Find the card that defines this concept
    const prereqCard = allCards.find(c => c.defines === prereqId);

    if (!prereqCard) {
      console.warn(`Warning: Prerequisite "${prereqId}" not found for card:`, card.question);
      return true; // Don't block if prerequisite doesn't exist
    }

    // Prerequisite is mastered if:
    // 1. State is Review (2) - card has graduated from learning
    // 2. Stability > 7 days - student remembers it well
    const isMastered = prereqCard.state === State.Review && prereqCard.stability > 7;

    return isMastered;
  });
}

/**
 * Filter cards to only show those with mastered prerequisites
 * @param {Array} cards - Cards to filter
 * @param {Array} allCards - All cards (needed to check prerequisites)
 * @returns {Array} - Filtered cards
 */
export function filterByPrerequisites(cards, allCards) {
  return cards.filter(card => arePrerequisitesMastered(card, allCards));
}

/**
 * Get locked cards (prerequisites not yet mastered)
 * @param {Array} cards - Cards to check
 * @param {Array} allCards - All cards
 * @returns {Array} - Cards that are locked
 */
export function getLockedCards(cards, allCards) {
  return cards.filter(card => !arePrerequisitesMastered(card, allCards));
}

/**
 * Get prerequisites status for a card
 * @param {Object} card - Card to check
 * @param {Array} allCards - All cards
 * @returns {Object} - Status of each prerequisite
 */
export function getPrerequisiteStatus(card, allCards) {
  if (!card.prerequisites || card.prerequisites.length === 0) {
    return { hasPrerequisites: false, all: [] };
  }

  const status = card.prerequisites.map(prereqId => {
    const prereqCard = allCards.find(c => c.defines === prereqId);

    if (!prereqCard) {
      return {
        id: prereqId,
        exists: false,
        mastered: false,
        question: null
      };
    }

    const isMastered = prereqCard.state === State.Review && prereqCard.stability > 7;

    return {
      id: prereqId,
      exists: true,
      mastered: isMastered,
      question: prereqCard.question,
      state: prereqCard.state,
      stability: prereqCard.stability,
      dueDate: prereqCard.due
    };
  });

  return {
    hasPrerequisites: true,
    all: status,
    allMastered: status.every(s => s.mastered)
  };
}

/**
 * Concept IDs used throughout the app
 * These IDs connect definition cards to cards that use the terms
 */
export const CONCEPTS = {
  // Basic Scoring
  PAT: 'pat',
  TWO_POINT_CONVERSION: 'two-point-conversion',
  FIELD_GOAL: 'field-goal',
  SAFETY: 'safety',

  // Penalties
  PASS_INTERFERENCE: 'pass-interference',
  HOLDING: 'holding',
  FALSE_START: 'false-start',

  // Offensive Concepts
  SNAP: 'snap',
  PLAY_ACTION: 'play-action',
  AUDIBLE: 'audible',
  RPO: 'rpo',
  SCREEN_PASS: 'screen-pass',
  HARD_COUNT: 'hard-count',

  // Defensive Concepts
  BLITZ: 'blitz',
  MAN_COVERAGE: 'man-coverage',
  ZONE_COVERAGE: 'zone-coverage',
  COVER_2: 'cover-2',
  COVER_3: 'cover-3',
  NICKEL: 'nickel',
  DIME: 'dime',

  // Fantasy Football
  PPR: 'ppr',
  HANDCUFF: 'handcuff',
  FAAB: 'faab',
  ADP: 'adp',
  FLOOR: 'floor',
  CEILING: 'ceiling',
  WAIVER_WIRE: 'waiver-wire',

  // Analytics
  TARGET_SHARE: 'target-share',
  SNAP_COUNT: 'snap-count',
  RED_ZONE: 'red-zone',
  YAC: 'yac',
  AIR_YARDS: 'air-yards',
  OPPORTUNITY_SHARE: 'opportunity-share',

  // Strategy
  GAME_SCRIPT: 'game-script',
  REGRESSION: 'regression',
  ZERO_RB: 'zero-rb',
  STACKING: 'stacking'
};
