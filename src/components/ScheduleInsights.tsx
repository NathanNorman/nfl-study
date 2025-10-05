import { formatDistanceToNow, format } from 'date-fns';
import type { Flashcard } from '../types';

interface ScheduleInsightsProps {
  cards: Flashcard[];
}

export default function ScheduleInsights({ cards }: ScheduleInsightsProps) {
  if (!cards || cards.length === 0) return null;

  // Calculate insights
  const now = new Date();
  const dueNow = cards.filter(c => new Date(c.due) <= now);
  const dueToday = cards.filter(c => {
    const due = new Date(c.due);
    const today = new Date().setHours(23, 59, 59, 999);
    return due <= today;
  });
  const dueTomorrow = cards.filter(c => {
    const due = new Date(c.due);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(23, 59, 59, 999);
    const dayAfter = new Date();
    dayAfter.setDate(dayAfter.getDate() + 2);
    dayAfter.setHours(0, 0, 0, 0);
    return due > new Date() && due >= dayAfter.setHours(0, 0, 0, 0) && due <= tomorrow;
  });
  const dueThisWeek = cards.filter(c => {
    const due = new Date(c.due);
    const weekFromNow = new Date();
    weekFromNow.setDate(weekFromNow.getDate() + 7);
    return due > now && due <= weekFromNow;
  });

  // State breakdown
  const newCards = cards.filter(c => c.state === 0);
  const learning = cards.filter(c => c.state === 1);
  const review = cards.filter(c => c.state === 2);
  const relearning = cards.filter(c => c.state === 3);

  // Find next due card
  const futureCards = cards.filter(c => new Date(c.due) > now);
  const nextDue = futureCards.sort((a, b) => new Date(a.due) - new Date(b.due))[0];

  return (
    <div className="glass-card rounded-2xl p-6 mb-8">
      <h3 className="text-xl font-bold gradient-text mb-4">📊 FSRS Schedule Insights</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <InsightCard label="Due Now" value={dueNow.length} color="text-green-400" />
        <InsightCard label="Due Today" value={dueToday.length} color="text-blue-400" />
        <InsightCard label="Due Tomorrow" value={dueTomorrow.length} color="text-purple-400" />
        <InsightCard label="Due This Week" value={dueThisWeek.length} color="text-pink-400" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StateCard label="New" value={newCards.length} emoji="🆕" color="from-blue-500 to-cyan-500" />
        <StateCard label="Learning" value={learning.length} emoji="📖" color="from-orange-500 to-amber-500" />
        <StateCard label="Review" value={review.length} emoji="✅" color="from-green-500 to-emerald-500" />
        <StateCard label="Relearning" value={relearning.length} emoji="🔄" color="from-red-500 to-orange-500" />
      </div>

      {nextDue && dueNow.length === 0 && (
        <div className="glass px-4 py-3 rounded-xl border border-purple-400/30">
          <div className="flex items-center justify-between">
            <span className="text-purple-200 text-sm font-semibold">⏰ Next Card Due:</span>
            <span className="text-white font-bold">
              {formatDistanceToNow(new Date(nextDue.due), { addSuffix: true })}
            </span>
          </div>
          <div className="text-purple-400 text-xs mt-1">
            {format(new Date(nextDue.due), 'MMM d, yyyy h:mm a')}
          </div>
        </div>
      )}
    </div>
  );
}

function InsightCard({ label, value, color }) {
  return (
    <div className="glass px-4 py-3 rounded-xl text-center">
      <div className={`text-2xl font-black ${color}`}>{value}</div>
      <div className="text-purple-300 text-xs mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

function StateCard({ label, value, emoji, color }) {
  return (
    <div className="glass px-4 py-3 rounded-xl text-center">
      <div className="text-xl mb-1">{emoji}</div>
      <div className="text-xl font-black text-white">{value}</div>
      <div className={`text-xs mt-1 font-semibold bg-gradient-to-r ${color} bg-clip-text text-transparent uppercase tracking-wider`}>
        {label}
      </div>
    </div>
  );
}
