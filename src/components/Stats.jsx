export default function Stats({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
      <StatCard label="Total Cards" value={stats.total} />
      <StatCard label="Due Today" value={stats.due} />
      <StatCard label="Mastered" value={stats.mastered} />
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-xl p-6 text-center shadow-lg">
      <div className="text-4xl font-bold text-purple-600">{value}</div>
      <div className="text-gray-600 mt-2">{label}</div>
    </div>
  );
}
