const fs = require('fs');
const path = require('path');

const mappings = {
  '--text-primary': '--text-emphasis',
  '--text-secondary': '--text-subtle',
  '--text-tertiary': '--text-muted',
  '--text-inverse': '--text-on-color',
  '--text-colored-brand': '--text-brand',
  '--text-colored-success': '--text-success',
  '--text-colored-error': '--text-error',
  '--text-strong-950': '--text-contrast',
  '--icon-primary': '--icon-emphasis',
  '--icon-secondary': '--icon-subtle',
  '--icon-tertiary': '--icon-muted',
  '--icon-inverse': '--icon-on-color',
  '--surface-default': '--bg-surface',
  '--surface-invert': '--bg-contrast',
  '--surface-page': '--bg-app',
  '--neutral-0': '--bg-pure',
  '--neutral-50-99': '--bg-surface-subtle',
  '--border-default': '--border-standard',
  '--border-subtle': '--border-low'
};

function walkSync(currentDirPath, callback) {
  fs.readdirSync(currentDirPath).forEach(function (name) {
    var filePath = path.join(currentDirPath, name);
    var stat = fs.statSync(filePath);
    if (stat.isFile()) {
      callback(filePath, stat);
    } else if (stat.isDirectory()) {
      walkSync(filePath, callback);
    }
  });
}

function processFile(filePath) {
  if (!filePath.endsWith('.css') && !filePath.endsWith('.tsx') && !filePath.endsWith('.ts')) return;

  const originalContent = fs.readFileSync(filePath, 'utf8');
  let newContent = originalContent;

  for (const [oldToken, newToken] of Object.entries(mappings)) {
    // Replace all occurrences of oldToken
    const regex = new RegExp(oldToken, 'g');
    newContent = newContent.replace(regex, newToken);
  }

  if (originalContent !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('Updated:', filePath);
  }
}

const targetDir = path.join("/Users/buiquoc/Woker's Document/Antigravity App/Design System For MMS", 'src');
walkSync(targetDir, processFile);
console.log('Migration complete.');
