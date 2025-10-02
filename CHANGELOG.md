# Changelog

## 2025-10-02 - Quality Improvements & Randomization

### Card Quality Improvements

**Removed 13 Low-Value Cards:**
- Deleted overly basic questions (quarters in game, quarter length, end zones, etc.)
- Removed position abbreviation cards (QB=Quarterback, RB=Running Back, etc.)
- Removed specific 2024 stat memorization cards (exact yardage totals)
- Removed obvious questions (tackle definition, 2-point conversion value from name)

**Added 6 Definition Cards:**
- `What is a PAT (Point After Touchdown)?` - Defines PAT before asking point value
- `What is a 2-point conversion?` - Explains concept with context
- `What is 'pass interference'?` - Detailed definition with examples
- `What's the penalty for pass interference?` - Explains impact
- `What is a 'handcuff' in fantasy football?` - Defines backup RB strategy
- `Why are handcuffs important?` - Explains value of handcuffs

**Refactored 2 Too-Easy Cards:**
- `What are the main jobs of the defensive line?` - Now includes 3 specific responsibilities
- (2-point conversion question removed entirely)

### New Features

**Category-Based Grouping:**
- Cards are now automatically grouped by category (based on tags)
- Categories presented in consistent alphabetical order
- Example categories: Scoring, Downs, Positions, Defense, Penalties, etc.

**Randomization System:**
- **Card Order:** Cards shuffled within each category on every study session
- **MCQ Choices:** Answer options (A/B/C/D) randomized for each question
- Uses Fisher-Yates shuffle algorithm for true randomization
- Happens every time you start studying (not just once)

### Debug Mode

**New Debug Review System:**
- Access via "🐛 Debug Mode" button in header or `/debug.html`
- Review all cards with side-by-side question/answer
- Categorize cards: Too Easy, Low Value, Missing Info, Missing Definition, Good
- Export reviews to JSON
- Process reviews with `node scripts/process-reviews.js <export.json>`
- Generates actionable reports in `review-output/` directory

**Debug Mode Outputs:**
- `ACTION-ITEMS.md` - Concrete tasks with checklists
- `SUMMARY.md` - Statistics and overview
- Category-specific files (`too-easy.md`, `low-value.md`, etc.)

### Technical Changes

**New Files:**
- `src/utils/shuffle.js` - Randomization utilities
- `src/DebugApp.jsx` - Debug review interface
- `src/debug-main.jsx` - Debug mode entry point
- `debug.html` - Debug mode HTML entry
- `scripts/process-reviews.js` - Review export processor
- `docs/DEBUG-MODE.md` - Debug mode documentation

**Modified Files:**
- `src/hooks/useCards.js` - Added category grouping and randomization
- `src/hooks/useMCQ.js` - Added answer choice shuffling
- `src/data/beginner/footballBasics.js` - Removed 9 low-value cards, added 4 definition cards
- `src/data/intermediate/playerKnowledge.js` - Removed 4 low-value cards, added 2 handcuff definition cards
- `src/data/players2025.js` - Removed 3 stat memorization cards
- `src/components/Header.jsx` - Added Debug Mode link
- `vite.config.js` - Added debug.html to build inputs

### Card Count Changes

**Before:** ~380 cards
**After:** ~373 cards (net -7 cards)

- Removed: 13 low-value cards
- Added: 6 definition cards
- Modified: 2 cards for better quality

**Quality Impact:**
- Review showed 75% of cards were "Good" quality
- Remaining 25% issues addressed in this update
- Net result: Higher quality, more learnable card set

### How to Use

**Study with Category Grouping:**
```bash
npm run dev
# Cards now grouped by category and shuffled within each category
# Each study session has different card order
```

**Review Card Quality:**
```bash
# Open debug mode
npm run dev
# Click "🐛 Debug Mode" button
# Review and categorize cards
# Export when done
# Process: node scripts/process-reviews.js <export-file.json>
```

**Verify Changes:**
```bash
# Clear existing data to load new cards
# In browser console (F12):
indexedDB.deleteDatabase('nfl-study');
location.reload();
```

### Breaking Changes

None - all changes are backward compatible. Existing user data will work with new code.

### Future Enhancements

Based on debug mode feedback, future improvements could include:
- Inline card editing in debug mode
- Bulk operations (delete, difficulty reassignment)
- Search and filter by content
- More granular category management
- Export/import card decks
