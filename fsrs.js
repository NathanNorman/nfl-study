/**
 * Free Spaced Repetition Scheduler (FSRS) - Simplified Implementation
 * Based on the FSRS algorithm for optimal spaced repetition
 */

class FSRS {
    constructor() {
        // Default parameters optimized for learning
        this.params = {
            requestRetention: 0.9,
            maximumInterval: 36500,
            w: [0.4, 0.6, 2.4, 5.8, 4.93, 0.94, 0.86, 0.01, 1.49, 0.14, 0.94, 2.18, 0.05, 0.34, 1.26, 0.29, 2.61]
        };
    }

    /**
     * Initialize a new card
     */
    initCard() {
        return {
            due: new Date(),
            stability: 0,
            difficulty: 0,
            elapsedDays: 0,
            scheduledDays: 0,
            reps: 0,
            lapses: 0,
            state: 0, // 0: new, 1: learning, 2: review, 3: relearning
            lastReview: null
        };
    }

    /**
     * Calculate next review based on rating
     * @param {Object} card - The flashcard object
     * @param {number} rating - User rating (1: Again, 2: Hard, 3: Good, 4: Easy)
     * @returns {Object} Updated card with new scheduling
     */
    schedule(card, rating) {
        const now = new Date();
        card = { ...card };

        if (card.state === 0) {
            // New card
            card.elapsedDays = 0;
        } else {
            card.elapsedDays = this.getDaysBetween(card.lastReview, now);
        }

        card.lastReview = now;
        card.reps++;

        switch (rating) {
            case 1: // Again
                card.lapses++;
                card.scheduledDays = 1;
                card.state = card.state === 2 ? 3 : 1;
                card.difficulty = Math.min(card.difficulty + 0.2, 1);
                break;
            case 2: // Hard
                card.scheduledDays = this.calculateInterval(card, 2);
                card.difficulty = Math.min(card.difficulty + 0.15, 1);
                card.state = 2;
                break;
            case 3: // Good
                card.scheduledDays = this.calculateInterval(card, 3);
                card.state = 2;
                break;
            case 4: // Easy
                card.scheduledDays = this.calculateInterval(card, 4);
                card.difficulty = Math.max(card.difficulty - 0.15, 0);
                card.state = 2;
                break;
        }

        card.due = new Date(now.getTime() + card.scheduledDays * 24 * 60 * 60 * 1000);
        card.stability = card.scheduledDays;

        return card;
    }

    /**
     * Calculate interval based on card history and rating
     */
    calculateInterval(card, rating) {
        if (card.reps === 1) {
            // First review
            return rating === 4 ? 4 : rating === 3 ? 1 : 0.5;
        }

        let interval = card.stability || 1;

        // Apply rating multiplier
        switch (rating) {
            case 2: // Hard
                interval *= 1.2;
                break;
            case 3: // Good
                interval *= 2.5;
                break;
            case 4: // Easy
                interval *= 3.5;
                break;
        }

        // Apply difficulty modifier
        const difficultyFactor = 1 - (card.difficulty * 0.3);
        interval *= difficultyFactor;

        return Math.min(Math.max(Math.round(interval), 1), this.params.maximumInterval);
    }

    /**
     * Get days between two dates
     */
    getDaysBetween(date1, date2) {
        const oneDay = 24 * 60 * 60 * 1000;
        return Math.round(Math.abs((date2 - date1) / oneDay));
    }

    /**
     * Check if card is due for review
     */
    isDue(card) {
        return new Date() >= new Date(card.due);
    }

    /**
     * Get card state as string
     */
    getStateString(state) {
        const states = ['New', 'Learning', 'Review', 'Relearning'];
        return states[state] || 'Unknown';
    }
}

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FSRS;
}
