const fs = require('fs');
const files = [
  'src/components/Exercise1.tsx',
  'src/components/Exercise2.tsx',
  'src/components/Exercise3.tsx',
  'src/components/Exercise4.tsx'
];
files.forEach(f => {
  let text = fs.readFileSync(f, 'utf8');
  text = text.replace(/<sup>/g, '');
  text = text.replace(/<\/sup>/g, '²');
  fs.writeFileSync(f, text);
});
console.log('Fixed');
