# NFL Study - Spaced Repetition Learning

Browser-based spaced repetition flashcard system for mastering NFL fantasy football knowledge.

## Features

- **FSRS Algorithm**: Uses the Free Spaced Repetition Scheduler for optimal learning
- **Browser-Based**: Pure JavaScript - just open `index.html` in your browser
- **Local Storage**: All data saved in your browser
- **Sample Cards**: Includes 2023 NFL stats to get started
- **Easy Card Management**: Add custom flashcards through the UI

## Getting Started

1. Open `index.html` in your web browser
2. Click "Start Studying" to begin with sample cards
3. Review cards and rate your knowledge:
   - **Again**: Didn't know it - see again soon
   - **Hard**: Knew it but struggled - moderate interval
   - **Good**: Knew it well - longer interval
   - **Easy**: Knew it perfectly - much longer interval

## Adding Cards

Click "Add Card" to create your own flashcards about NFL players, stats, or strategies.

## Future Enhancements

- [ ] NFL API integration for automatic player stats
- [ ] Import/export flashcard decks
- [ ] Tag filtering and deck organization
- [ ] Study statistics and progress tracking
- [ ] Mobile-responsive design improvements

## Technical Details

- **FSRS Implementation**: Simplified version of the FSRS-4 algorithm
- **Storage**: Browser localStorage for persistence
- **No Dependencies**: Pure vanilla JavaScript, HTML, CSS
