// Fix plain text references to q_1 / q_2 / C_1 / C_2 in paragraph text (not inside BlockMath)
// These appear in <p> tags after we ran the conversion script
const fs = require('fs');
const path = require('path');

const files = ['Exercise1.tsx', 'Exercise2.tsx', 'Exercise3.tsx', 'Exercise4.tsx'];

files.forEach(file => {
  const filePath = path.join('src', 'components', file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix plain text in <p> tags: q_1 -> q₁, q_2 -> q₂, C_1 -> C₁, C_2 -> C₂
  // We only want to fix outside of backtick template literals (math strings)
  // Strategy: split on backtick zones, fix only outside them
  const parts = content.split(/(`[^`]*`)/g);
  const fixed = parts.map((part, i) => {
    // Odd-indexed parts are inside backticks (math strings) - leave them alone
    if (i % 2 === 1) return part;
    // Even-indexed parts are JSX/text - fix raw variable names in paragraph text
    return part
      .replace(/\bq_1\b/g, 'q₁')
      .replace(/\bq_2\b/g, 'q₂')
      .replace(/\bC_1\b/g, 'C₁')
      .replace(/\bC_2\b/g, 'C₂');
  });
  content = fixed.join('');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed plain text in ${file}`);
});
