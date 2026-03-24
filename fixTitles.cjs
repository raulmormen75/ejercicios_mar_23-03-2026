// Fix accordion titles: replace ^2 back to ² and q_1/q_2 back to q₁/q₂
const fs = require('fs');
const path = require('path');

const files = ['Exercise1.tsx', 'Exercise2.tsx', 'Exercise3.tsx', 'Exercise4.tsx'];
files.forEach(file => {
  const filePath = path.join('src', 'components', file);
  let content = fs.readFileSync(filePath, 'utf8');
  // Fix accordion title attribute only
  content = content.replace(/(\<Accordion title=")([^"]+)(")/g, (match, pre, title, post) => {
    let fixed = title
      .replace(/q_1/g, 'q₁')
      .replace(/q_2/g, 'q₂')
      .replace(/\^2/g, '²')
      .replace(/C_1/g, 'C₁')
      .replace(/C_2/g, 'C₂');
    return pre + fixed + post;
  });
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed ${file}`);
});
