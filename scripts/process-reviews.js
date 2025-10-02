#!/usr/bin/env node

/**
 * Process Debug Mode Review Export
 *
 * This script processes the JSON export from debug mode and generates
 * actionable reports and files for each review category.
 *
 * Usage:
 *   node scripts/process-reviews.js <path-to-review-export.json>
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function processReviews(exportPath) {
  console.log('📖 Reading export file:', exportPath);
  const data = JSON.parse(readFileSync(exportPath, 'utf8'));

  console.log('\n📊 Review Statistics:');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  // Group cards by review category
  const byCategory = {
    'too-easy': [],
    'low-value': [],
    'missing-info': [],
    'missing-definition': [],
    'good': []
  };

  data.cards.forEach(card => {
    if (byCategory[card.review]) {
      byCategory[card.review].push(card);
    }
  });

  // Print statistics
  Object.entries(byCategory).forEach(([category, cards]) => {
    const label = {
      'too-easy': 'Too Easy - Refactor',
      'low-value': 'Low Value - Remove',
      'missing-info': 'Not Enough Info',
      'missing-definition': 'Missing Definition',
      'good': 'Good Cards'
    }[category];
    console.log(`  ${label}: ${cards.length}`);
  });

  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log(`  Total Reviewed: ${data.cards.length}`);
  console.log('');

  // Create output directory
  const outputDir = join(__dirname, '..', 'review-output');
  mkdirSync(outputDir, { recursive: true });

  // Generate reports for each category
  generateCategoryReports(byCategory, outputDir);

  // Generate action items
  generateActionItems(byCategory, outputDir);

  // Generate summary report
  generateSummaryReport(data, byCategory, outputDir);

  console.log('✅ Processing complete!');
  console.log(`📁 Output directory: ${outputDir}`);
}

function generateCategoryReports(byCategory, outputDir) {
  console.log('📝 Generating category reports...');

  Object.entries(byCategory).forEach(([category, cards]) => {
    if (cards.length === 0) return;

    const filename = `${category}.md`;
    const filepath = join(outputDir, filename);

    const categoryNames = {
      'too-easy': 'Too Easy - Refactor',
      'low-value': 'Low Value - Remove',
      'missing-info': 'Not Enough Info to Answer',
      'missing-definition': 'Introduces Concept Without Definition',
      'good': 'Good Cards'
    };

    let content = `# ${categoryNames[category]}\n\n`;
    content += `**Total Cards:** ${cards.length}\n\n`;
    content += `---\n\n`;

    cards.forEach((card, index) => {
      content += `## ${index + 1}. [${card.difficulty.toUpperCase()}] ${card.question}\n\n`;
      content += `**Answer:** ${card.answer}\n\n`;
      if (card.tags && card.tags.length > 0) {
        content += `**Tags:** ${card.tags.join(', ')}\n\n`;
      }
      content += `**ID:** \`${card.id}\`\n\n`;
      content += `---\n\n`;
    });

    writeFileSync(filepath, content);
    console.log(`  ✓ ${filename} (${cards.length} cards)`);
  });
}

function generateActionItems(byCategory, outputDir) {
  console.log('\n📋 Generating action items...');

  const filepath = join(outputDir, 'ACTION-ITEMS.md');

  let content = `# Action Items from Card Review\n\n`;
  content += `Generated: ${new Date().toISOString()}\n\n`;
  content += `---\n\n`;

  // Too Easy - Refactor
  if (byCategory['too-easy'].length > 0) {
    content += `## 🔄 Too Easy - Refactor (${byCategory['too-easy'].length} cards)\n\n`;
    content += `**Action:** Make these questions more challenging or split into multiple cards.\n\n`;
    byCategory['too-easy'].forEach(card => {
      content += `- [ ] **${card.question}** (${card.difficulty})\n`;
      content += `  - ID: \`${card.id}\`\n`;
      content += `  - Current answer: "${card.answer.substring(0, 80)}${card.answer.length > 80 ? '...' : ''}"\n`;
    });
    content += `\n`;
  }

  // Low Value - Remove
  if (byCategory['low-value'].length > 0) {
    content += `## 🗑️  Low Value - Remove (${byCategory['low-value'].length} cards)\n\n`;
    content += `**Action:** Delete these cards from the data files.\n\n`;
    content += `\`\`\`javascript\n`;
    content += `// Card IDs to remove:\n`;
    byCategory['low-value'].forEach(card => {
      content += `// "${card.question}" (${card.id})\n`;
    });
    content += `\`\`\`\n\n`;
  }

  // Missing Info
  if (byCategory['missing-info'].length > 0) {
    content += `## ℹ️  Not Enough Info to Answer (${byCategory['missing-info'].length} cards)\n\n`;
    content += `**Action:** Add more context or information to make these answerable.\n\n`;
    byCategory['missing-info'].forEach(card => {
      content += `- [ ] **${card.question}**\n`;
      content += `  - Current answer: "${card.answer}"\n`;
      content += `  - Need to add: _[specify what info is missing]_\n`;
    });
    content += `\n`;
  }

  // Missing Definition
  if (byCategory['missing-definition'].length > 0) {
    content += `## 📖 Introduces Concept Without Definition (${byCategory['missing-definition'].length} cards)\n\n`;
    content += `**Action:** Add prerequisite cards that define the concepts first.\n\n`;
    byCategory['missing-definition'].forEach(card => {
      content += `- [ ] **${card.question}**\n`;
      content += `  - Undefined concept(s): _[specify what needs definition]_\n`;
      content += `  - Add card(s) explaining: _[concept definition]_\n`;
    });
    content += `\n`;
  }

  // Summary
  const totalIssues = byCategory['too-easy'].length +
                      byCategory['low-value'].length +
                      byCategory['missing-info'].length +
                      byCategory['missing-definition'].length;

  content += `---\n\n`;
  content += `## Summary\n\n`;
  content += `- **Total Issues:** ${totalIssues}\n`;
  content += `- **Good Cards:** ${byCategory['good'].length}\n`;
  content += `- **Completion Rate:** ${Math.round((byCategory['good'].length / (totalIssues + byCategory['good'].length)) * 100)}% quality\n`;

  writeFileSync(filepath, content);
  console.log(`  ✓ ACTION-ITEMS.md`);
}

function generateSummaryReport(data, byCategory, outputDir) {
  console.log('\n📊 Generating summary report...');

  const filepath = join(outputDir, 'SUMMARY.md');

  let content = `# Card Review Summary\n\n`;
  content += `**Date:** ${new Date(data.timestamp).toLocaleString()}\n\n`;
  content += `**Total Cards Reviewed:** ${data.cards.length}\n\n`;
  content += `---\n\n`;

  content += `## Statistics by Category\n\n`;
  content += `| Category | Count | Percentage |\n`;
  content += `|----------|-------|------------|\n`;

  const total = data.cards.length;
  Object.entries(byCategory).forEach(([category, cards]) => {
    const label = {
      'too-easy': '🔄 Too Easy',
      'low-value': '🗑️  Low Value',
      'missing-info': 'ℹ️  Missing Info',
      'missing-definition': '📖 Missing Definition',
      'good': '✅ Good'
    }[category];
    const percentage = total > 0 ? Math.round((cards.length / total) * 100) : 0;
    content += `| ${label} | ${cards.length} | ${percentage}% |\n`;
  });

  content += `\n## Statistics by Difficulty\n\n`;

  const byDifficulty = { beginner: 0, intermediate: 0, advanced: 0 };
  data.cards.forEach(card => {
    if (byDifficulty[card.difficulty] !== undefined) {
      byDifficulty[card.difficulty]++;
    }
  });

  content += `| Difficulty | Count |\n`;
  content += `|------------|-------|\n`;
  content += `| 🌱 Beginner | ${byDifficulty.beginner} |\n`;
  content += `| ⚡ Intermediate | ${byDifficulty.intermediate} |\n`;
  content += `| 🔥 Advanced | ${byDifficulty.advanced} |\n`;

  content += `\n## Next Steps\n\n`;
  content += `1. Review \`ACTION-ITEMS.md\` for detailed tasks\n`;
  content += `2. Review individual category files for full card details\n`;
  content += `3. Make updates to data files in \`src/data/\`\n`;
  content += `4. Test changes in debug mode\n`;

  writeFileSync(filepath, content);
  console.log(`  ✓ SUMMARY.md`);
}

// Main execution
if (process.argv.length < 3) {
  console.error('Usage: node scripts/process-reviews.js <path-to-review-export.json>');
  process.exit(1);
}

try {
  processReviews(process.argv[2]);
} catch (error) {
  console.error('❌ Error processing reviews:', error.message);
  process.exit(1);
}
