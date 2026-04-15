import fs from 'fs';
import path from 'path';

/**
 * MMS Design System Codemod
 * Focuses on bulk replacement of legacy values with semantic tokens.
 */

const TARGET_DIRS = ['src/components/ui', 'src/styles'];
const FILE_EXTENSIONS = ['.css', '.tsx', '.ts'];

// --- Transformation Map ---
const TRANSFORM_MAP = {
  // Radius Token Migration (Migrating legacy to Numerical Scale)
  'var(--radius-xs)': 'var(--radius-1)',
  'var(--radius-sm)': 'var(--radius-1)',
  'var(--radius-md)': 'var(--radius-2)',
  'var(--radius-lg)': 'var(--radius-3)',
  'var(--radius-xl)': 'var(--radius-4)',

  // Class Suffix Migration (for CSS classes and React props)
  'radius-xs': 'radius-1',
  'radius-sm': 'radius-1',
  'radius-md': 'radius-2',
  'radius-lg': 'radius-3',
  'radius-xl': 'radius-4',
};

function getAllFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, files);
    } else {
      if (FILE_EXTENSIONS.some(ext => file.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  return files;
}

function applyTransform() {
  console.log('🚀 Starting MMS Design Codemod...');
  let modifiedCount = 0;

  const allFiles = TARGET_DIRS.flatMap(dir => getAllFiles(dir));

  allFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanged = false;

    Object.entries(TRANSFORM_MAP).forEach(([search, replace]) => {
      if (content.includes(search)) {
        content = content.split(search).join(replace);
        hasChanged = true;
      }
    });

    if (hasChanged) {
      fs.writeFileSync(file, content);
      console.log(`✅ Modified: ${path.relative(process.cwd(), file)}`);
      modifiedCount++;
    }
  });

  console.log(`\n--- Codemod Complete ---`);
  console.log(`Files modified: ${modifiedCount}`);
}

applyTransform();
