# QA Test Checklist - NFL Study App

## ✅ Build Verification
- [x] Vite build succeeds (62 modules)
- [x] No build errors or warnings
- [x] Both index.html and mcq.html generated
- [x] Assets properly bundled (CSS 26KB, JS 247KB)

## ✅ File Structure
- [x] 19 data files created
- [x] Organized in beginner/, intermediate/, advanced/
- [x] MCQ variants in mcq/ subdirectory
- [x] Image reference system created
- [x] Generators for difficulty-based content

## ✅ Content Created

### Beginner Level
- [x] 66+ football basics cards (rules, scoring, downs)
- [x] Position explanations (QB, RB, WR, TE, etc.)
- [x] Formation basics (Shotgun, Pistol, I-Formation)
- [x] Route tree fundamentals (Routes 0-9)
- [x] 15+ beginner MCQ questions

### Intermediate Level
- [x] Player stats and 2025 projections
- [x] Fantasy strategy concepts
- [x] Your WPFL roster cards
- [x] Team/Super Bowl content
- [x] 40+ intermediate MCQ questions

### Advanced Level
- [x] Advanced analytics (target share, snap %, opportunity %)
- [x] Deep strategy (trade timing, Zero RB, auction)
- [x] Dynasty/Keeper concepts
- [x] Psychology (biases, sunk cost)
- [x] Advanced MCQ questions

## 🔍 BROWSER TESTING REQUIRED

### Test 1: Flashcard Mode (http://localhost:8080)
1. Clear IndexedDB (F12 → Application → IndexedDB → nfl-study → Delete)
2. Refresh page
3. Check console for:
   - "Generated X flashcards"
   - "Difficulty breakdown: beginner: X, intermediate: Y, advanced: Z"
4. Verify stats show total card count
5. Click "Start Studying"
6. Verify difficulty badges show (🌱, ⚡, or 🔥)
7. Test flashcard flow (show answer → rate → next card)
8. Verify answer resets on new card

### Test 2: MCQ Mode (http://localhost:8080/mcq.html)
1. Open MCQ mode
2. Clear mcq-cards from IndexedDB if needed
3. Refresh
4. Check console for MCQ generation log
5. Click "Start MCQ Quiz"
6. Verify 4 options (A, B, C, D)
7. Click an answer
8. Verify correct answer highlights green ✅
9. Verify wrong answer highlights red ❌
10. Verify auto-advance after 1.5 seconds
11. Verify difficulty badge shows

### Test 3: Mode Switching
1. From flashcard mode, click "MCQ Mode" button
2. Verify it navigates to /mcq.html
3. From MCQ mode, click "Switch to Flashcard Mode"
4. Verify it returns to /

### Test 4: Difficulty Distribution
1. Study 20-30 cards in flashcard mode
2. Note difficulty badges
3. Should see mix of 🌱, ⚡, and 🔥
4. Beginners should see mostly 🌱 early on

## ⚠️ Known Limitations
- Node ESM tests fail (expected - browser handles differently)
- Images are placeholders (need real diagrams added)
- No filtering by difficulty yet (could add later)

## 📊 Expected Totals
- Beginner: ~80-100 cards
- Intermediate: ~250 cards  
- Advanced: ~50 cards
- **TOTAL: ~380-400 flashcards**
- MCQ: ~55 questions

## 🐛 Issues to Watch For
- [ ] Cards not loading (0 total) - clear IndexedDB
- [ ] Difficulty badges not showing - check console errors
- [ ] Answer showing on next card - should be fixed
- [ ] MCQ options not shuffling - verify shuffle function
- [ ] Score not tracking in MCQ - check state updates
