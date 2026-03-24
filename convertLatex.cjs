const fs = require('fs');
const path = require('path');

const files = ['Exercise1.tsx', 'Exercise2.tsx', 'Exercise3.tsx', 'Exercise4.tsx'];

files.forEach(file => {
  let content = fs.readFileSync(path.join('src', 'components', file), 'utf8');

  // Replace <Frac n="x" d="y"/> with \frac{x}{y}
  content = content.replace(/<Frac n="([^"]+)" d="([^"]+)"\s*\/>/g, '\\frac{$1}{$2}');
  
  // Replace <Pi sub="x"/> with \pi_x
  content = content.replace(/<Pi sub="([^"]+)"\s*\/>/g, '\\pi_$1');
  
  // Replace q<sub>1</sub> with q_1
  content = content.replace(/q<sub>1<\/sub>/g, 'q_1');
  content = content.replace(/q<sub>2<\/sub>/g, 'q_2');
  content = content.replace(/C<sub>1<\/sub>/g, 'C_1');
  content = content.replace(/C<sub>2<\/sub>/g, 'C_2');
  
  // Replace <br/> inside MathBlock with \\
  content = content.replace(/<br\/>/g, '\\\\');
  
  // Replace ² with ^2
  content = content.replace(/²/g, '^2');

  // Replace · with \cdot
  content = content.replace(/·/g, '\\cdot ');

  // Look for <MathBlock>...</MathBlock> and turn inner text into a string literal wrapped in BlockMath
  // Because the inner text might contain multiple lines, we wrap it in {` `}
  content = content.replace(/<MathBlock>([\s\S]*?)<\/MathBlock>/g, (match, inner) => {
    // Escape backticks if any
    let cleanInner = inner.replace(/`/g, '\\`');
    // Remove inline JS curly brackets if we had any, though we converted components already
    // Actually, earlier we had ` - (<Frac...>)` so it became ` - (\frac{...})`
    // We should make sure no {} wrap remains from previous React injections.
    // Like `{` \frac{...} `}`? No, previous was just JSX: `<Frac/>` without `{}`.
    return `<BlockMath math={\`${cleanInner.trim()}\`} />`;
  });

  // Now replace the imports
  content = content.replace(/import \{ MathBlock, Frac, Pi \} from '\.\/MathUI';/, "import { BlockMath } from 'react-katex';\nimport 'katex/dist/katex.min.css';");
  
  // Also fix <li> elements replacing <sub> etc
  content = content.replace(/<li>(.*?)<\/li>/g, (match, inner) => {
    // If it has math in it, wrap in InlineMath
    if (inner.includes('q_') || inner.includes('\\pi') || inner.includes('P*') || inner.includes('Q*')) {
        let math = inner.replace(/\*/g, '^*').replace(/≈/g, '\\approx').replace(/=/g, '=');
        return `<li><InlineMath math={\`${math}\`} /></li>`;
    }
    return match;
  });

  // For Summary.tsx
  fs.writeFileSync(path.join('src', 'components', file), content, 'utf8');
});

// Now do Summary.tsx
let summary = fs.readFileSync(path.join('src', 'components', 'Summary.tsx'), 'utf8');
summary = summary.replace(/q<sub>1<\/sub>/g, 'q_1');
summary = summary.replace(/q<sub>2<\/sub>/g, 'q_2');
summary = summary.replace(/<Pi sub="1"\/>/g, '\\pi_1');
summary = summary.replace(/<Pi sub="2"\/>/g, '\\pi_2');
summary = summary.replace(/<Pi sub="1"\s*\/>/g, '\\pi_1');
summary = summary.replace(/<Pi sub="2"\s*\/>/g, '\\pi_2');
summary = summary.replace(/²/g, '^2');
summary = summary.replace(/import \{ Pi \} from '\.\/MathUI';/, "import { InlineMath } from 'react-katex';\nimport 'katex/dist/katex.min.css';");
summary = summary.replace(/<li>(.*?q_1.*?)<\/li>/g, (match, inner) => `<li><InlineMath math={\`${inner.replace(/\*/g, '^*').replace(/≈/g, '\\approx')}\`} /></li>`);
summary = summary.replace(/<li>(.*?q_2.*?)<\/li>/g, (match, inner) => `<li><InlineMath math={\`${inner.replace(/\*/g, '^*').replace(/≈/g, '\\approx')}\`} /></li>`);
summary = summary.replace(/<li>(.*?Q\*.*?)<\/li>/g, (match, inner) => `<li><InlineMath math={\`${inner.replace(/\*/g, '^*').replace(/≈/g, '\\approx')}\`} /></li>`);
summary = summary.replace(/<li>(.*?P\*.*?)<\/li>/g, (match, inner) => `<li><InlineMath math={\`${inner.replace(/\*/g, '^*').replace(/≈/g, '\\approx')}\`} /></li>`);
summary = summary.replace(/<li>(.*?\\[pP]i_1.*?)<\/li>/g, (match, inner) => `<li><InlineMath math={\`${inner.replace(/\*/g, '^*').replace(/≈/g, '\\approx')}\`} /></li>`);
summary = summary.replace(/<li>(.*?\\[pP]i_2.*?)<\/li>/g, (match, inner) => `<li><InlineMath math={\`${inner.replace(/\*/g, '^*').replace(/≈/g, '\\approx')}\`} /></li>`);
summary = summary.replace(/<InlineMath math={`([^`]+)`} \/>/g, (match, math) => {
    return `<InlineMath math={\`${math.replace(/<\/?span[^>]*>/g, '')}\`} />`;
});
fs.writeFileSync(path.join('src', 'components', 'Summary.tsx'), summary, 'utf8');

console.log('Conversion to pure LaTeX complete!');
