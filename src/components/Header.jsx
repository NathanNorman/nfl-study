export default function Header({ totalCards = 413 }) {
  return (
    <header className="text-center mb-12 relative">
      <div className="absolute inset-0 blur-3xl opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative">
        <div className="inline-block mb-4">
          <div className="text-7xl mb-2 animate-bounce">🏈</div>
        </div>

        <h1 className="text-6xl font-black mb-4 gradient-text shine tracking-tight">
          NFL Study
        </h1>

        <p className="text-xl text-purple-200 font-light tracking-wide">
          Master fantasy football with{' '}
          <span className="text-purple-300 font-semibold">spaced repetition</span>
        </p>

        <div className="mt-6 flex items-center justify-center gap-3 text-sm text-purple-300">
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>{totalCards} Flashcards</span>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <span>FSRS Algorithm</span>
          </div>
          <a
            href="/debug.html"
            className="flex items-center gap-2 glass px-4 py-2 rounded-full hover:bg-purple-500/20 transition-colors"
            title="Debug Mode - Review all cards"
          >
            <span>🐛</span>
            <span>Debug Mode</span>
          </a>
        </div>
      </div>
    </header>
  );
}
