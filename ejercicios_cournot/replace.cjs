const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'components');

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    content = content.replace(/<sup>2<\/sup>/g, '²');
    fs.writeFileSync(fullPath, content);
  }
});
console.log('Replacing done');
