import { getPrerequisiteStatus } from '../utils/prerequisites';
import type { Flashcard } from '../types';

interface PrerequisiteStatusProps {
  card: Flashcard;
  allCards: Flashcard[];
}

/**
 * Shows prerequisite status for a card
 * Displays which concepts need to be mastered before this card is available
 */
export default function PrerequisiteStatus({ card, allCards }: PrerequisiteStatusProps) {
  if (!card) return null;

  const status = getPrerequisiteStatus(card, allCards);

  if (!status.hasPrerequisites) return null;

  return (
    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
      <div className="font-semibold text-yellow-900 mb-2">
        🔒 Prerequisites Required:
      </div>
      {status.all.map(prereq => (
        <div key={prereq.id} className="text-sm mb-1">
          {prereq.mastered ? '✅' : '🔒'} {prereq.question || prereq.id}
          {!prereq.mastered && prereq.stability && (
            <span className="text-yellow-700 ml-2">
              (Study {Math.ceil(7 - prereq.stability)} more times)
            </span>
          )}
        </div>
      ))}
      {!status.allMastered && (
        <div className="text-xs text-yellow-700 mt-2">
          💡 Master these concepts first to unlock this card
        </div>
      )}
    </div>
  );
}
