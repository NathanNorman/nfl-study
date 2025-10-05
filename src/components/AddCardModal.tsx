import { useState } from 'react';

interface AddCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (question: string, answer: string, tags: string[]) => void;
}

export default function AddCardModal({ isOpen, onClose, onAdd }: AddCardModalProps) {
  const [question, setQuestion] = useState<string>('');
  const [answer, setAnswer] = useState<string>('');
  const [tags, setTags] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tagArray = tags.split(',').map(t => t.trim()).filter(Boolean);
    onAdd(question, answer, tagArray);
    setQuestion('');
    setAnswer('');
    setTags('');
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="glass-card rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-black gradient-text">
            Create Flashcard
          </h2>
          <button
            onClick={onClose}
            className="text-purple-300 hover:text-white hover:rotate-90 transition-all duration-300 text-2xl"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-purple-200 font-semibold mb-3 text-sm uppercase tracking-wider">
              Question
            </label>
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full px-4 py-4 glass rounded-xl text-white placeholder-purple-400/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-200 resize-none"
              rows={3}
              placeholder="What's the question?"
              required
            />
          </div>

          <div>
            <label className="block text-purple-200 font-semibold mb-3 text-sm uppercase tracking-wider">
              Answer
            </label>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="w-full px-4 py-4 glass rounded-xl text-white placeholder-purple-400/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-200 resize-none"
              rows={3}
              placeholder="What's the answer?"
              required
            />
          </div>

          <div>
            <label className="block text-purple-200 font-semibold mb-3 text-sm uppercase tracking-wider">
              Tags (Optional)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-4 py-4 glass rounded-xl text-white placeholder-purple-400/50 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-200"
              placeholder="QB, 2025, Fantasy"
            />
            <p className="text-purple-400 text-sm mt-2">Separate tags with commas</p>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 glass hover:bg-white/10 text-purple-200 px-6 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-6 py-4 rounded-xl font-bold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 shine hover:scale-105"
            >
              Create Card ✨
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
