# NFL Study - Spaced Repetition Learning

Browser-based spaced repetition flashcard system for mastering NFL fantasy football knowledge.

## Features

- **FSRS Algorithm**: Uses the official [ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs) library - scientifically-proven spaced repetition
- **Modern Stack**: React + Vite + Tailwind CSS for fast, responsive UI
- **Persistent Storage**: IndexedDB via localforage for reliable data persistence
- **Comprehensive Content**: 200+ flashcards covering:
  - 2024 NFL season stats and 2025 fantasy projections
  - All major player positions (QB, RB, WR, TE)
  - Fantasy football strategy and concepts
  - Draft strategy, waiver wire, playoffs
  - Teams, awards, and Super Bowl LIX results
- **Easy Card Management**: Add custom flashcards through beautiful modal UI

## Getting Started

### Development

```bash
npm install
npm run dev
```

Opens at http://localhost:3000 with hot reload.

### Production Build

```bash
npm run build
npm run preview
```

## How to Study

The app auto-loads 200+ flashcards on first run covering:
- **Player Stats**: 2024 season achievements and 2025 fantasy outlook
- **Super Bowl LIX**: Eagles defeated Chiefs 40-22
- **2024 Awards**: Josh Allen (MVP), Jayden Daniels (OROY), Saquon Barkley (OPOY)
- **Fantasy Strategy**: Draft strategy, waiver wire, advanced metrics
- **All Positions**: QB, RB, WR, TE with elite players

### Studying

1. Click "Start Studying" to begin with due cards
2. Review cards and rate your knowledge:
   - **Again**: Didn't know it - see again soon
   - **Hard**: Knew it but struggled - moderate interval
   - **Good**: Knew it well - longer interval
   - **Easy**: Knew it perfectly - much longer interval

The FSRS algorithm optimizes your study schedule based on your ratings.

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first styling
- **ts-fsrs** - Official FSRS spaced repetition algorithm
- **localforage** - IndexedDB wrapper for better storage
- **date-fns** - Date utilities

## Content Database

### 🌱 Beginner Level (80+ cards)
**Perfect if you're new to football:**
- Basic rules (scoring, downs, game structure)
- Position explanations (QB, RB, WR, TE, etc.)
- Formations (Shotgun, Pistol, I-Formation)
- Route tree basics (Routes 0-9)
- Field zones and terminology
- Simple turnovers and penalties

### ⚡ Intermediate Level (250+ cards)
**For fantasy players who know the basics:**
- 2024 season stats and 2025 projections
- All major players (QB, RB, WR, TE)
- Fantasy strategy (draft, waiver wire, playoffs)
- Your WPFL roster analysis
- Team context and matchups
- Bye week planning
- Trade strategy

### 🔥 Advanced Level (50+ cards)
**For experienced fantasy experts:**
- Advanced analytics (target share, snap counts, opportunity share)
- Route tree mastery (even/odd routes, numbering system)
- Deep draft strategy (Zero RB, auction theory)
- Trade timing and psychology
- Dynasty/Keeper concepts
- Regression analysis
- Meta-game strategy

### 📊 Total: 380+ Flashcards

### Featured Content
- Josh Allen 2024 MVP (historic stat line)
- Jayden Daniels OROY (3,500 pass + 800 rush yards)
- Saquon Barkley 2,005-yard season + OPOY
- Ja'Marr Chase Receiving Triple Crown
- Super Bowl LIX: Eagles 40, Chiefs 22 (Jalen Hurts MVP)
- Your complete WPFL roster analysis

## Future Enhancements

- [ ] Live NFL API integration for real-time stats
- [ ] Import/export flashcard decks
- [ ] Tag filtering and deck organization
- [ ] Detailed study statistics and progress tracking
- [ ] Dark mode support
- [ ] Mobile app version
