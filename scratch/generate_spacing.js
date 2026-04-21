const bps = [
  { name: 'xs', query: '(min-width: 520px)' },
  { name: 'sm', query: '(min-width: 768px)' },
  { name: 'md', query: '(min-width: 1024px)' },
  { name: 'lg', query: '(min-width: 1280px)' },
  { name: 'xl', query: '(min-width: 1640px)' }
];

const directions = [
  { key: 'p', props: ['padding'] },
  { key: 'px', props: ['padding-left', 'padding-right'] },
  { key: 'py', props: ['padding-top', 'padding-bottom'] },
  { key: 'pt', props: ['padding-top'] },
  { key: 'pr', props: ['padding-right'] },
  { key: 'pb', props: ['padding-bottom'] },
  { key: 'pl', props: ['padding-left'] },
  { key: 'm', props: ['margin'] },
  { key: 'mx', props: ['margin-left', 'margin-right'] },
  { key: 'my', props: ['margin-top', 'margin-bottom'] },
  { key: 'mt', props: ['margin-top'] },
  { key: 'mr', props: ['margin-right'] },
  { key: 'mb', props: ['margin-bottom'] },
  { key: 'ml', props: ['margin-left'] }
];

const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let css = '/* \n * WOKER DESIGN SYSTEM - Spacing Utilities\n * Generated for Mathematical Concentricity & Scaling Support\n */\n\n';

// Initial
directions.forEach(dir => {
  values.forEach(val => {
    const rules = dir.props.map(p => `${p}: var(--space-${val});`).join(' ');
    css += `.wds-r-${dir.key}-${val} { ${rules} }\n`;
  });
  css += '\n';
});

// Breakpoints
bps.forEach(bp => {
  css += `\n/* Breakpoint: ${bp.name} */\n@media ${bp.query} {\n`;
  directions.forEach(dir => {
    values.forEach(val => {
      const rules = dir.props.map(p => `${p}: var(--space-${val});`).join(' ');
      css += `  .wds-r-${bp.name}-${dir.key}-${val} { ${rules} }\n`;
    });
  });
  css += '}\n';
});

process.stdout.write(css);
