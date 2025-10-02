# How to Clear Data and Load New Content

## You Have Old Data!

If you see:
- **207 cards** instead of 323
- **0 beginner, 0 intermediate, 0 advanced**
- No difficulty badges on cards

You need to clear your old data!

## Steps to Clear:

### Option 1: Browser DevTools (Easiest)
1. Press **F12** (or **Cmd+Option+I** on Mac)
2. Click **Application** tab
3. In left sidebar, expand **IndexedDB**
4. Find **nfl-study** database
5. Right-click → **Delete database**
6. **Refresh the page** (Cmd+R or F5)

### Option 2: Clear Site Data
1. Press **F12**
2. Click **Application** tab
3. Click **Clear storage** (left sidebar)
4. Check **IndexedDB**
5. Click **Clear site data**
6. **Refresh the page**

### Option 3: Hard Refresh
- **Mac**: Cmd+Shift+R
- **Windows**: Ctrl+Shift+R

## What You Should See After Clearing:

**Flashcard Mode:**
- Total Cards: **323** (not 207)
- Beginner: **66 cards** 🌱
- Intermediate: **210 cards** ⚡
- Advanced: **47 cards** 🔥

**MCQ Mode:**
- Total Cards: **78**
- Beginner: **15 cards** 🌱
- Intermediate: **49 cards** ⚡
- Advanced: **14 cards** 🔥

## Console Will Show:
```
🔍 [loadCards] Generated 323 flashcards
🔍 [loadCards] Difficulty breakdown: {beginner: 66, intermediate: 210, advanced: 47}
```

---

**If you still see 207 cards after clearing, close ALL browser tabs and try again!**
