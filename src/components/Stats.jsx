export default function Stats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <StatCard
        label="Total Cards"
        value={stats.total}
        icon="📚"
        color="from-blue-500 to-cyan-500"
        delay="0"
      />
      <StatCard
        label="Due Today"
        value={stats.due}
        icon="⚡"
        color="from-purple-500 to-pink-500"
        delay="100"
      />
      <StatCard
        label="Mastered"
        value={stats.mastered}
        icon="🏆"
        color="from-amber-500 to-orange-500"
        delay="200"
      />
    </div>
  );
}

function StatCard({ label, value, icon, color, delay }) {
  return (
    <div
      className="glass-card rounded-2xl p-6 card-hover group relative overflow-hidden"
      style={{animationDelay: `${delay}ms`}}
    >
      {/* Background gradient on hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <span className="text-4xl transform group-hover:scale-110 transition-transform duration-300">
            {icon}
          </span>
          <div className={`text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${color} text-white opacity-80`}>
            Live
          </div>
        </div>

        <div className="text-5xl font-black text-white mb-2 group-hover:scale-105 transition-transform duration-300">
          {value}
        </div>

        <div className="text-sm font-medium text-purple-300 uppercase tracking-wider">
          {label}
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${color} transition-all duration-1000`}
            style={{width: `${Math.min((value / 207) * 100, 100)}%`}}
          ></div>
        </div>
      </div>
    </div>
  );
}
