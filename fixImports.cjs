const fs = require('fs');
const path = require('path');

const files = ['Exercise1.tsx', 'Exercise2.tsx', 'Exercise3.tsx', 'Exercise4.tsx'];

files.forEach(file => {
  const filePath = path.join('src', 'components', file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Add InlineMath to the import
  content = content.replace(
    /import \{ BlockMath \} from 'react-katex';/,
    "import { BlockMath, InlineMath } from 'react-katex';"
  );
  
  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Imports fixed!');
