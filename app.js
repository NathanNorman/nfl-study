/**
 * NFL Study - Spaced Repetition Learning App
 */

class NFLStudyApp {
    constructor() {
        this.fsrs = new FSRS();
        this.cards = [];
        this.currentCard = null;
        this.dueCards = [];
        this.loadData();
        this.initEventListeners();
        this.updateStats();
        this.loadSampleCards();
    }

    /**
     * Initialize event listeners
     */
    initEventListeners() {
        document.getElementById('startStudy').addEventListener('click', () => this.startStudy());
        document.getElementById('addCard').addEventListener('click', () => this.showAddCardModal());
        document.getElementById('importData').addEventListener('click', () => this.importNFLData());
        document.getElementById('showAnswer').addEventListener('click', () => this.showAnswer());
        document.getElementById('cancelAdd').addEventListener('click', () => this.hideAddCardModal());
        document.getElementById('addCardForm').addEventListener('submit', (e) => this.handleAddCard(e));

        // Rating buttons
        document.querySelectorAll('.rating-buttons .btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const rating = parseInt(e.target.dataset.rating);
                this.rateCard(rating);
            });
        });
    }

    /**
     * Load data from localStorage
     */
    loadData() {
        const stored = localStorage.getItem('nflStudyCards');
        if (stored) {
            this.cards = JSON.parse(stored);
            // Convert date strings back to Date objects
            this.cards.forEach(card => {
                card.due = new Date(card.due);
                if (card.lastReview) {
                    card.lastReview = new Date(card.lastReview);
                }
            });
        }
    }

    /**
     * Save data to localStorage
     */
    saveData() {
        localStorage.setItem('nflStudyCards', JSON.stringify(this.cards));
    }

    /**
     * Load sample NFL cards if no cards exist
     */
    loadSampleCards() {
        if (this.cards.length === 0) {
            const sampleCards = [
                {
                    question: "Who led the NFL in rushing yards in the 2023 season?",
                    answer: "Christian McCaffrey (San Francisco 49ers) - 1,459 yards",
                    tags: ["RB", "2023", "Stats"]
                },
                {
                    question: "Which QB threw the most touchdown passes in 2023?",
                    answer: "Dak Prescott (Dallas Cowboys) - 36 TDs",
                    tags: ["QB", "2023", "Stats"]
                },
                {
                    question: "Who had the most receiving yards in 2023?",
                    answer: "CeeDee Lamb (Dallas Cowboys) - 1,749 yards",
                    tags: ["WR", "2023", "Stats"]
                },
                {
                    question: "What team had the #1 scoring defense in 2023?",
                    answer: "Baltimore Ravens - 16.5 points per game",
                    tags: ["Defense", "2023", "Stats"]
                },
                {
                    question: "Which rookie RB had the most rushing yards in 2023?",
                    answer: "Jahmyr Gibbs (Detroit Lions) - 945 yards",
                    tags: ["RB", "Rookie", "2023"]
                }
            ];

            sampleCards.forEach(sample => {
                const card = this.fsrs.initCard();
                card.question = sample.question;
                card.answer = sample.answer;
                card.tags = sample.tags;
                card.id = Date.now() + Math.random();
                this.cards.push(card);
            });

            this.saveData();
            this.updateStats();
        }
    }

    /**
     * Update statistics display
     */
    updateStats() {
        const total = this.cards.length;
        const due = this.cards.filter(card => this.fsrs.isDue(card)).length;
        const mastered = this.cards.filter(card =>
            card.state === 2 && card.scheduledDays > 21
        ).length;

        document.getElementById('totalCards').textContent = total;
        document.getElementById('dueCards').textContent = due;
        document.getElementById('masteredCards').textContent = mastered;
    }

    /**
     * Start study session
     */
    startStudy() {
        this.dueCards = this.cards.filter(card => this.fsrs.isDue(card));

        if (this.dueCards.length === 0) {
            document.getElementById('studyArea').classList.add('hidden');
            document.getElementById('completedMessage').classList.remove('hidden');
            document.getElementById('startStudy').classList.remove('hidden');
            return;
        }

        document.getElementById('startStudy').classList.add('hidden');
        document.getElementById('completedMessage').classList.add('hidden');
        document.getElementById('studyArea').classList.remove('hidden');

        this.showNextCard();
    }

    /**
     * Show next card in study session
     */
    showNextCard() {
        if (this.dueCards.length === 0) {
            this.endStudySession();
            return;
        }

        this.currentCard = this.dueCards[0];

        document.getElementById('cardFront').textContent = this.currentCard.question;
        document.getElementById('cardBack').textContent = this.currentCard.answer;
        document.getElementById('cardBack').classList.add('hidden');
        document.getElementById('showAnswer').classList.remove('hidden');
        document.getElementById('ratingButtons').classList.add('hidden');
    }

    /**
     * Show answer for current card
     */
    showAnswer() {
        document.getElementById('cardBack').classList.remove('hidden');
        document.getElementById('showAnswer').classList.add('hidden');
        document.getElementById('ratingButtons').classList.remove('hidden');
    }

    /**
     * Rate current card
     */
    rateCard(rating) {
        // Update card with FSRS algorithm
        const updatedCard = this.fsrs.schedule(this.currentCard, rating);

        // Update in main cards array
        const index = this.cards.findIndex(card => card.id === updatedCard.id);
        if (index !== -1) {
            this.cards[index] = updatedCard;
        }

        // Remove from due cards
        this.dueCards.shift();

        this.saveData();
        this.updateStats();
        this.showNextCard();
    }

    /**
     * End study session
     */
    endStudySession() {
        document.getElementById('studyArea').classList.add('hidden');
        document.getElementById('completedMessage').classList.remove('hidden');
        document.getElementById('startStudy').classList.remove('hidden');
    }

    /**
     * Show add card modal
     */
    showAddCardModal() {
        document.getElementById('addCardModal').classList.remove('hidden');
        document.getElementById('cardQuestion').focus();
    }

    /**
     * Hide add card modal
     */
    hideAddCardModal() {
        document.getElementById('addCardModal').classList.add('hidden');
        document.getElementById('addCardForm').reset();
    }

    /**
     * Handle add card form submission
     */
    handleAddCard(e) {
        e.preventDefault();

        const question = document.getElementById('cardQuestion').value.trim();
        const answer = document.getElementById('cardAnswer').value.trim();
        const tagsInput = document.getElementById('cardTags').value.trim();
        const tags = tagsInput ? tagsInput.split(',').map(tag => tag.trim()) : [];

        const card = this.fsrs.initCard();
        card.question = question;
        card.answer = answer;
        card.tags = tags;
        card.id = Date.now() + Math.random();

        this.cards.push(card);
        this.saveData();
        this.updateStats();
        this.hideAddCardModal();
    }

    /**
     * Import NFL data (placeholder for future API integration)
     */
    importNFLData() {
        alert('NFL data import coming soon!\n\nThis will fetch current player stats and generate flashcards automatically.');
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new NFLStudyApp();
});
