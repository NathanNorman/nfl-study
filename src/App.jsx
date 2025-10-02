import { useState } from 'react';
import { useCards } from './hooks/useCards';
import Header from './components/Header';
import Stats from './components/Stats';
import Flashcard from './components/Flashcard';
import AddCardModal from './components/AddCardModal';

export default function App() {
  const { cards, loading, addCard, updateCard, getDueCards, getStats } = useCards();
  const [isStudying, setIsStudying] = useState(false);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [dueCards, setDueCards] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const stats = getStats();

  const startStudy = () => {
    const due = getDueCards();
    if (due.length === 0) {
      alert('No cards due for review! Great job!');
      return;
    }
    setDueCards(due);
    setCurrentCardIndex(0);
    setIsStudying(true);
  };

  const handleRate = async (rating) => {
    const currentCard = dueCards[currentCardIndex];
    await updateCard(currentCard.id, rating);

    if (currentCardIndex < dueCards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setIsStudying(false);
      setCurrentCardIndex(0);
      setDueCards([]);
    }
  };

  const handleAddCard = async (question, answer, tags) => {
    await addCard(question, answer, tags);
    setShowAddModal(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-2xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Header />
      <Stats stats={stats} />

      {isStudying ? (
        <div className="mb-8">
          <div className="text-white text-center mb-4">
            Card {currentCardIndex + 1} of {dueCards.length}
          </div>
          <Flashcard
            card={dueCards[currentCardIndex]}
            onRate={handleRate}
          />
        </div>
      ) : (
        <>
          {stats.due === 0 ? (
            <div className="bg-white rounded-xl p-12 text-center shadow-2xl mb-8">
              <h2 className="text-3xl font-bold text-purple-600 mb-4">
                🎉 All done for today!
              </h2>
              <p className="text-xl text-gray-600">
                You've reviewed all your due cards. Great work!
              </p>
            </div>
          ) : (
            <div className="text-center mb-8">
              <button
                onClick={startStudy}
                className="bg-green-500 text-white px-10 py-4 rounded-xl text-xl font-bold hover:bg-green-600 transition-all hover:scale-105 shadow-lg"
              >
                Start Studying ({stats.due} cards)
              </button>
            </div>
          )}
        </>
      )}

      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
        >
          Add Card
        </button>
        <button
          onClick={() => alert('NFL data import coming soon!')}
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
        >
          Import NFL Data
        </button>
      </div>

      <AddCardModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddCard}
      />
    </div>
  );
}
