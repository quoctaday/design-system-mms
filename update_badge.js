const fs = require('fs');
const path = require('path');

const badgePath = path.join(__dirname, 'src/components/ui/Badge/Badge.css');
let css = fs.readFileSync(badgePath, 'utf8');

const colors = {
  success: 'green',
  error: 'red',
  warning: 'amber',
  secondary: 'lime',
  gray: 'gray',
  black: 'black', // Black is tricky, usually gray
  purple: 'purple',
  orange: 'orange',
  blue: 'blue',
  sky: 'sky',
  pink: 'pink',
  teal: 'teal'
};

for (const [badgeColor, radixColor] of Object.entries(colors)) {
  const regex = new RegExp(`(\\.mms-badge-color-${badgeColor}\\s*\\{[^}]*\\})`, 'g');
  
  let scaleA = radixColor === 'black' ? 'gray' : radixColor;
  let scaleS = radixColor === 'black' ? 'gray' : radixColor;
  
  let newBlock = `.mms-badge-color-${badgeColor} {
  --badge-bg-solid: var(--${scaleS}-9);
  --badge-bg-soft: var(--${scaleA}-a3);
  --badge-text-soft: var(--${scaleA}-a11);
  --badge-bg-surface: var(--${scaleA}-a2);
  --badge-border-surface: var(--${scaleA}-a6);
  --badge-text-surface: var(--${scaleA}-a11);
  --badge-border-outline: var(--${scaleA}-a8);
  --badge-text-outline: var(--${scaleA}-a11);
  --badge-text-ghost: var(--${scaleA}-a11);`;

  if (radixColor === 'amber' || radixColor === 'sky' || radixColor === 'lime') {
     newBlock = newBlock.replace(`--badge-bg-solid: var(--${scaleS}-9);`, `--badge-bg-solid: var(--${scaleS}-9);\n  --badge-text-solid: var(--content-strong);`);
  }
  
  if (radixColor === 'black') {
      newBlock = newBlock.replace(`--badge-bg-solid: var(--gray-9);`, `--badge-bg-solid: var(--black);\n  --badge-text-solid: var(--white);`);
  }

  newBlock += '\n}';
  
  css = css.replace(regex, newBlock);
}

fs.writeFileSync(badgePath, css);
console.log("Badge.css Updated!");
