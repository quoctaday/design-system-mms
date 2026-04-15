import fs from 'fs';
import path from 'path';

const THEME_PATH = 'src/styles/theme.css';
const SCAN_DIRS = ['src'];
const FIX_MODE = process.argv.includes('--fix');

const COLORS = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  bold: '\x1b[1m'
};

let errorCount = 0;
let fixCount = 0;

// ─── Utility ──────────────────────────────────────────

function getAllFiles(dir, exts, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== 'dist') {
        getAllFiles(fullPath, exts, files);
      }
    } else if (exts.includes(path.extname(file))) {
      files.push(fullPath);
    }
  }
  return files;
}

// ─── Auditors ─────────────────────────────────────────

/**
 * Checks for circular references in theme.css
 * e.g. --space-1: var(--space-1);
 */
function checkCircularReferences() {
  console.log(`${COLORS.bold}🔍 Checking for Circular References in theme.css...${COLORS.reset}`);
  if (!fs.existsSync(THEME_PATH)) return;

  const content = fs.readFileSync(THEME_PATH, 'utf8');
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    const match = line.match(/^\s*(--[a-zA-Z0-9-]+):\s*var\(\1\)/);
    if (match) {
      console.error(`${COLORS.red}❌ Circular Reference: ${match[1]} in theme.css:${index + 1}${COLORS.reset}`);
      errorCount++;
    }
  });
}

/**
 * Audits a file for legacy tokens and hardcodes
 */
function auditFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const relativePath = path.relative(process.cwd(), filePath);
  let fileModified = false;
  const isDoc = filePath.includes('Doc.tsx') || filePath.includes('Doc.css');

  // Skip documentation for some checks as they naturally show legacy examples
  
  // 1. Legacy Spacing Detection (--spacing-X)
  if (!isDoc && !filePath.endsWith('theme.css')) {
    const legacyRegex = /--spacing-([0-9]+)/g;
    let match;
    while ((match = legacyRegex.exec(content)) !== null) {
      if (FIX_MODE) {
        // Safe auto-fixes for common legacy values
        const val = parseInt(match[1]);
        const map = { 4: 'space-1', 8: 'space-2', 12: 'space-3', 16: 'space-4', 24: 'space-5', 32: 'space-6', 40: 'space-7', 48: 'space-8', 64: 'space-9', 0: 'space-0' };
        if (map[val]) {
          content = content.replace(`--spacing-${val}`, `--${map[val]}`);
          fileModified = true;
          fixCount++;
        } else {
          console.error(`${COLORS.yellow}⚠️ Legacy Token (Unmapped): --spacing-${val} in ${relativePath}${COLORS.reset}`);
          errorCount++;
        }
      } else {
        console.error(`${COLORS.red}❌ Legacy Token: --spacing-${match[1]} in ${relativePath}${COLORS.reset}`);
        errorCount++;
      }
    }
  }

  // 2. Strict Radix Index Check (--space-N where N > 9)
  const radixRegex = /--space-([1-9][0-9]+)/g;
  let rMatch;
  while ((rMatch = radixRegex.exec(content)) !== null) {
      console.error(`${COLORS.red}❌ Non-standard Radix Index: --space-${rMatch[1]} in ${relativePath} (Only 0-9 allowed)${COLORS.reset}`);
      errorCount++;
  }

  // 3. Hardcoded Hex Codes (CSS files only)
  if (filePath.endsWith('.css') && !filePath.includes('theme.css')) {
    const hexRegex = /#([A-Fa-f0-9]{3,8})\b/g;
    let hMatch;
    while ((hMatch = hexRegex.exec(content)) !== null) {
      // Allow if it's in a comment
      const line = content.substring(0, hMatch.index).split('\n').pop() + content.substring(hMatch.index).split('\n')[0];
      if (!line.includes('/*') && !line.includes('//')) {
         console.error(`${COLORS.yellow}⚠️ Hardcoded Hex: ${hMatch[0]} in ${relativePath}${COLORS.reset}`);
         errorCount++;
      }
    }
  }

  // 4. Corrupted Strings Cleanup (Fix mode only)
  if (FIX_MODE) {
    const corruptedReg = /var\(calc\(var\(--space-1\) \/ 2\)0\)/g;
    if (corruptedReg.test(content)) {
      content = content.replace(corruptedReg, 'var(--space-4)');
      fileModified = true;
      fixCount++;
    }
    
    // Fix redundant var(var(...))
    const redVar = /var\(var\(--space-([0-9])\)\)/g;
    if (redVar.test(content)) {
       content = content.replace(redVar, 'var(--space-$1)');
       fileModified = true;
       fixCount++;
    }
  }

  if (fileModified && FIX_MODE) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`${COLORS.green}✅ Fixed: ${relativePath}${COLORS.reset}`);
  }
}

// ─── Execution ────────────────────────────────────────

async function run() {
  console.log(`\n${COLORS.cyan}${COLORS.bold}🛡️  MMS DESIGN GUARDIAN v1.0${COLORS.reset}\n`);
  
  checkCircularReferences();

  const files = [];
  SCAN_DIRS.forEach(dir => getAllFiles(dir, ['.css', '.tsx'], files));

  files.forEach(file => auditFile(file));

  console.log(`\n${COLORS.bold}--- Audit Summary ---${COLORS.reset}`);
  if (errorCount > 0) {
    console.log(`${COLORS.red}Total Issues Found: ${errorCount}${COLORS.reset}`);
    if (!FIX_MODE) {
      console.log(`${COLORS.yellow}💡 Tip: Run "npm run guard:fix" to automatically resolve common issues.${COLORS.reset}`);
    }
  } else {
    console.log(`${COLORS.green}All checks passed! System integrity confirmed.${COLORS.reset}`);
  }

  if (FIX_MODE && fixCount > 0) {
    console.log(`${COLORS.green}Total Issues Fixed: ${fixCount}${COLORS.reset}`);
  }

  if (errorCount > 0 && !FIX_MODE) {
    process.exit(1);
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
