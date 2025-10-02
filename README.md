# NFL Study - Spaced Repetition Learning

Browser-based spaced repetition flashcard system for mastering NFL fantasy football knowledge.

## Features

- **FSRS Algorithm**: Uses the official [ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs) library - scientifically-proven spaced repetition
- **Modern Stack**: React + Vite + Tailwind CSS for fast, responsive UI
- **Persistent Storage**: IndexedDB via localforage for reliable data persistence
- **Sample Cards**: Includes 2023 NFL stats to get started
- **Easy Card Management**: Add custom flashcards through beautiful modal UI

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## How to Study

1. Click "Start Studying" to begin with due cards
2. Review cards and rate your knowledge:
   - **Again**: Didn't know it - see again soon
   - **Hard**: Knew it but struggled - moderate interval
   - **Good**: Knew it well - longer interval
   - **Easy**: Knew it perfectly - much longer interval

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first styling
- **ts-fsrs** - Official FSRS spaced repetition algorithm
- **localforage** - IndexedDB wrapper for better storage
- **date-fns** - Date utilities

## Future Enhancements

- [ ] NFL API integration for automatic player stats
- [ ] Import/export flashcard decks
- [ ] Tag filtering and deck organization
- [ ] Study statistics and progress tracking
- [ ] Dark mode support
