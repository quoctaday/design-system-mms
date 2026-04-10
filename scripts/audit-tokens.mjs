import fs from 'fs';
import path from 'path';

const THEME_PATH = 'src/styles/theme.css';
const SCAN_DIR = 'src';

function getDefinedVars(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const varRegex = /--[a-zA-Z0-9-]+(?=:)/g;
  return new Set(content.match(varRegex) || []);
}

function getUsedVars(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Get all locally defined variables in this file
  const localDefRegex = /(--[a-zA-Z0-9-]+):/g;
  const localDefs = new Set();
  let defMatch;
  while ((defMatch = localDefRegex.exec(content)) !== null) {
    localDefs.add(defMatch[1]);
  }

  const varRegex = /var\((--[a-zA-Z0-9-]+)\)/g;
  const used = [];
  let match;
  while ((match = varRegex.exec(content)) !== null) {
    const varName = match[1];
    // Only report if NOT defined locally
    if (!localDefs.has(varName)) {
      used.push({ name: varName, line: content.substring(0, match.index).split('\n').length });
    }
  }
  return used;
}

function getAllCssFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllCssFiles(fullPath, files);
    } else if (file.endsWith('.css')) {
      files.push(fullPath);
    }
  }
  return files;
}

async function audit() {
  console.log('🔍 Starting Token Integrity Audit...');
  
  if (!fs.existsSync(THEME_PATH)) {
    console.error(`❌ Error: ${THEME_PATH} not found.`);
    process.exit(1);
  }

  const definedVars = getDefinedVars(THEME_PATH);
  const cssFiles = getAllCssFiles(SCAN_DIR).filter(f => !f.endsWith('theme.css'));
  
  let errors = 0;
  
  for (const file of cssFiles) {
    const usedVars = getUsedVars(file);
    const fileName = path.relative(process.cwd(), file);
    
    usedVars.forEach(v => {
      if (!definedVars.has(v.name)) {
        console.error(`❌ Undefined variable: ${v.name} in ${fileName}:${v.line}`);
        errors++;
      }
    });
  }

  if (errors === 0) {
    console.log('✅ Audit passed! All tokens are defined in theme.css.');
  } else {
    console.log(`\n❌ Audit failed with ${errors} error(s). Please define missing tokens in theme.css.`);
    process.exit(1);
  }
}

audit();
