# Debug Mode - Card Review System

This debug mode allows you to rapidly review all flashcards and categorize them for quality improvement.

## Access Debug Mode

1. **From the main app:** Click the "🐛 Debug Mode" button in the header
2. **Direct URL:** Navigate to `/debug.html`
3. **Dev server:** http://localhost:3000/debug.html

## Review Process

### Step 1: Review Cards

Each card displays:
- **Question** and **Answer** side-by-side
- **Difficulty level** (🌱 Beginner, ⚡ Intermediate, 🔥 Advanced)
- **Tags** for categorization
- **Card ID** for tracking

### Step 2: Categorize Cards

Click one of the category buttons for each card:

- **Too Easy - Refactor** 🔄
  - Card is too simple or obvious
  - Should be made more challenging or split into multiple cards
  - Example: "What does QB stand for?" → Too basic

- **Low Value - Remove** 🗑️
  - Card doesn't provide useful learning value
  - Redundant with other cards
  - Not relevant to fantasy football mastery
  - Should be deleted

- **Not Enough Info** ℹ️
  - Question cannot be answered with current information
  - Missing context or data
  - Needs additional details added

- **Missing Definition** 📖
  - Uses terminology or concepts without defining them first
  - Needs prerequisite cards created
  - Example: Asks about "target share" without explaining what it is

- **✓ Good** ✅
  - Card is well-written and valuable
  - Clear question with informative answer
  - Appropriate difficulty level
  - No changes needed

### Step 3: Track Progress

The header shows real-time statistics:
- **Reviewed/Total**: How many cards you've categorized
- **By Category**: Count for each category
- **Unreviewed**: How many cards left to review

Use filters to focus on:
- **All**: See all cards
- **Unreviewed**: Only cards you haven't categorized yet
- **By Category**: View cards in a specific category

### Step 4: Export Reviews

Click **"Export Reviews"** to download a JSON file containing:
- All your categorizations
- Full card details
- Timestamp of export
- Ready for processing

The export saves to: `card-reviews-YYYY-MM-DD.json`

## Processing Review Data

After exporting your reviews, process them with the included script:

```bash
node scripts/process-reviews.js path/to/card-reviews-YYYY-MM-DD.json
```

This generates in `review-output/`:

### Generated Files

1. **`SUMMARY.md`**
   - Overall statistics
   - Breakdown by category and difficulty
   - Next steps

2. **`ACTION-ITEMS.md`**
   - Concrete tasks for each category
   - Checklist format for easy tracking
   - Specific recommendations

3. **`too-easy.md`**
   - Full details of cards marked "Too Easy"
   - Refactoring suggestions

4. **`low-value.md`**
   - Cards to remove
   - IDs for deletion

5. **`missing-info.md`**
   - Cards needing more information
   - Space to note what's missing

6. **`missing-definition.md`**
   - Cards using undefined concepts
   - Prerequisite cards to create

7. **`good.md`**
   - Cards that are well-written
   - Reference for quality standards

## Example Workflow

```bash
# 1. Start dev server
npm run dev

# 2. Open debug mode
# Navigate to http://localhost:3000/debug.html

# 3. Review all 380+ cards (mark each with a category)

# 4. Export reviews when done
# Click "Export Reviews" button
# Saves to Downloads/card-reviews-2025-10-02.json

# 5. Process the export
node scripts/process-reviews.js ~/Downloads/card-reviews-2025-10-02.json

# 6. Review the output
ls review-output/
# ACTION-ITEMS.md  SUMMARY.md  too-easy.md  low-value.md  etc.

# 7. Read ACTION-ITEMS.md for next steps
cat review-output/ACTION-ITEMS.md

# 8. Make improvements to data files based on action items
```

## Taking Action on Reviews

### For "Too Easy" Cards

1. Open the data file containing the card
2. Either:
   - Make the question more specific/challenging
   - Split into multiple cards with increasing difficulty
   - Add depth to the answer

### For "Low Value" Cards

1. Find the card in the appropriate data file using the ID
2. Delete the card object
3. Test that regeneration works

### For "Missing Info" Cards

1. Research the correct/complete information
2. Update the answer with additional context
3. Consider adding tags or references

### For "Missing Definition" Cards

1. Identify the undefined concept
2. Create a new beginner-level card defining the concept
3. Update tags to link related cards
4. Ensure the definition card appears before the advanced usage

## Tips for Effective Review

### Speed Tips

- Use keyboard shortcuts (browser-specific)
- Focus on one category at a time using filters
- Review by difficulty level (beginner → intermediate → advanced)
- Take breaks every 50-100 cards

### Quality Tips

- Be honest about card quality
- Consider the target audience (fantasy football players)
- Think about card dependencies (is prerequisite knowledge needed?)
- Verify facts and stats are accurate

### Organization Tips

- Review all cards in one session if possible (maintains consistency)
- Use the "Unreviewed" filter to track progress
- Export frequently in case of browser issues
- Keep notes separately for complex refactoring ideas

## Data Persistence

- Reviews are saved to browser IndexedDB under key `debug-card-reviews`
- Data persists across page refreshes
- Clearing browser data will erase reviews (export first!)
- Each browser/profile has separate storage

## Clearing Review Data

To start over:

1. **Via UI**: Click "Clear All" button (requires confirmation)
2. **Via Console**:
   ```javascript
   localforage.removeItem('debug-card-reviews');
   location.reload();
   ```

## Troubleshooting

**Cards not loading:**
```javascript
// In browser console
localStorage.clear();
location.reload();
```

**Export button not working:**
- Check browser allows downloads
- Try a different browser
- Use console to manually export:
  ```javascript
  const reviews = await localforage.getItem('debug-card-reviews');
  console.log(JSON.stringify({timestamp: new Date(), reviews}, null, 2));
  ```

**Script errors:**
```bash
# Ensure you're using Node.js 16+
node --version

# Run from project root
cd /path/to/nfl-study
node scripts/process-reviews.js path/to/export.json
```

## Integration with Main App

Debug mode is separate from the study app:
- Uses the same card data source
- Does NOT affect your study progress
- Does NOT modify FSRS scheduling
- Purely for card quality review

## Future Enhancements

Potential improvements:
- [ ] Bulk edit mode
- [ ] Inline editing of cards
- [ ] Comparison with FSRS performance data
- [ ] Difficulty reassignment
- [ ] Tag management
- [ ] Search and filter by content
- [ ] Notes field for each card
- [ ] Collaboration features for team review
