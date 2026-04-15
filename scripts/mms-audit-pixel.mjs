import fs from 'fs';
import path from 'path';

const THEME_PATH = 'src/styles/theme.css';
const SCAN_DIR = 'src/components/ui';

// Allowed hardcoded values for specific functional CSS (e.g., 1px borders, 0)
const ALLOWED_LITERALS = ['0', '1px', '0px', 'none', '100%', '50%', 'inherit', 'transparent', 'currentColor'];

// Standard Radii in pixels (MMS Scale)
const ALLOWED_RADII = ['3px', '4px', '6px', '8px', '12px', '16px', '9999px'];
const DEPRECATED_RADII = [
  '--radius-xs', '--radius-sm', '--radius-md', '--radius-lg', '--radius-xl', 
  '--radius-default', '--radius-container'
];

function getDefinedVars(filePath) {
  if (!fs.existsSync(filePath)) return new Set();
  const content = fs.readFileSync(filePath, 'utf8');
  const varRegex = /--[a-zA-Z0-9-]+(?=:)/g;
  return new Set(content.match(varRegex) || []);
}

function getAllFiles(dir, ext, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, ext, files);
    } else if (file.endsWith(ext)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function audit() {
  const target = process.argv[2]; // e.g. "BrandSwitcher"
  
  if (target) {
    console.log(`🛡️  MMS Targeted Audit: Scanning only "${target}"...`);
  } else {
    console.log('🛡️  MMS Full Pixel-Perfect Audit in progress...');
  }
  
  const definedVars = getDefinedVars(THEME_PATH);
  let cssFiles = getAllFiles(SCAN_DIR, '.css');
  let tsxFiles = getAllFiles(SCAN_DIR, '.tsx');
  
  // Filter by target if provided
  if (target) {
    const filterFn = f => f.toLowerCase().includes(target.toLowerCase());
    cssFiles = cssFiles.filter(filterFn);
    tsxFiles = tsxFiles.filter(filterFn);
    
    if (cssFiles.length === 0 && tsxFiles.length === 0) {
      console.error(`❌ No files found matching target: "${target}"`);
      process.exit(1);
    }
  }
  
  let errors = 0;
  let warnings = 0;

  // 1. Audit CSS for Hardcoded Values & Tokens
  cssFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    const fileName = path.relative(process.cwd(), file);

    const localVars = getDefinedVars(file);
    const allValidVars = new Set([...definedVars, ...localVars]);

    lines.forEach((line, index) => {
      const lineNum = index + 1;
      const cleanLine = line.trim();

      if (!cleanLine || cleanLine.startsWith('/*')) return;

      // Check for Hardcoded Colors (Broad)
      const colorMatch = cleanLine.match(/(#[0-9a-fA-F]{3,8}|rgba?\(.*?\)|hsla?\(.*?\))/g);
      if (colorMatch) {
        console.error(`❌ [Hardcode Color] ${fileName}:${lineNum} -> "${colorMatch[0]}" (Use MMS Tokens)`);
        errors++;
      }

      // Check for Spacing Violations (Padding, Margin, Gap)
      if (cleanLine.match(/(padding|margin|gap):/)) {
        const val = cleanLine.match(/:\s*([^;!]+)/)?.[1].trim();
        if (val && !val.includes('var(--spacing-') && !ALLOWED_LITERALS.includes(val)) {
          console.error(`❌ [Spacing Violation] ${fileName}:${lineNum} -> "${val}" (Must use var(--spacing-X))`);
          errors++;
        }
      }

      // Check for Typography Violations (Strict)
      if (cleanLine.includes('font-size:')) {
        const val = cleanLine.match(/font-size:\s*([^;!]+)/)?.[1].trim();
        if (val && (val.includes('px') || val.includes('var(--spacing-'))) {
           if (!ALLOWED_LITERALS.includes(val)) {
              console.error(`❌ [Typography Violation] ${fileName}:${lineNum} -> "${val}" (Must use var(--font-size-X), not spacing or px)`);
              errors++;
           }
        }
      }

      // Check for Weight Violations
      if (cleanLine.includes('font-weight:')) {
        const val = cleanLine.match(/font-weight:\s*([^;!]+)/)?.[1].trim();
        if (val && !val.includes('var(--font-weight-') && !ALLOWED_LITERALS.includes(val)) {
          console.warn(`⚠️ [Weight Warning] ${fileName}:${lineNum} -> "${val}" (Prefer var(--font-weight-X))`);
          warnings++;
        }
      }

      // Check for Size (Height) Violations in components
      if (cleanLine.match(/^height:/)) {
        const val = cleanLine.match(/height:\s*([^;!]+)/)?.[1].trim();
        if (val && !val.includes('var(--size-') && !val.includes('var(--spacing-') && !ALLOWED_LITERALS.includes(val) && !val.includes('100vh')) {
           console.warn(`⚠️ [Sizing Warning] ${fileName}:${lineNum} -> "${val}" (Check if var(--size-X) is applicable)`);
           warnings++;
        }
      }

      // Check for Shadow Violations
      if (cleanLine.includes('box-shadow:') && !cleanLine.includes('var(--shadow-') && !cleanLine.includes('none')) {
        console.error(`❌ [Shadow Violation] ${fileName}:${lineNum} -> Use standard --shadow tokens or borders.`);
        errors++;
      }
      
      // Check for Radius Violations
      if (cleanLine.includes('border-radius:')) {
        const val = cleanLine.match(/border-radius:\s*([^;!]+)/)?.[1].trim();
        if (val && !val.includes('var(--radius-') && !val.includes('calc(') && !ALLOWED_LITERALS.includes(val)) {
           console.error(`❌ [Radius Violation] ${fileName}:${lineNum} -> "${val}" (Must use var(--radius-X))`);
           errors++;
        }
      }

      // Check for Undefined Tokens (The "Broad" catch-all)
      const tokenMatch = cleanLine.match(/var\((--[a-zA-Z0-9-]+)(?:,\s*([^)]+))?\)/g);
      if (tokenMatch) {
        tokenMatch.forEach(t => {
          const m = t.match(/var\((--[a-zA-Z0-9-]+)(?:,\s*([^)]+))?\)/);
          const varName = m[1];
          const fallback = m[2]?.trim();

          if (!allValidVars.has(varName)) {
            console.error(`❌ [Undefined Token] ${fileName}:${lineNum} -> ${varName} (Not in theme.css or local scope)`);
            errors++;
          }

          // Anti-Hardcoded Fallback Rule
          if (fallback && fallback.match(/[0-9]+px|#[0-9a-fA-F]+/)) {
             if (fallback !== '1px' && fallback !== '0' && fallback !== '0px') {
                console.error(`❌ [Hardcoded Fallback] ${fileName}:${lineNum} -> "${fallback}" (Fallbacks must be tokens or 1px/0)`);
                errors++;
             }
          }

          // Banned/Deprecated Tokens
          if (DEPRECATED_RADII.includes(varName)) {
            console.error(`❌ [Deprecated Token] ${fileName}:${lineNum} -> ${varName} (Migrate to numerical --radius-1...4)`);
            errors++;
          }

          // Anti-Primitive Rule: Check if a component is using a primitive color directly (e.g., --blue-9)
          if (varName.match(/^--(blue|green|red|amber|purple|pink|teal|sky|orange|lime)-[0-9]+$/)) {
             console.warn(`⚠️ [Primitive Usage] ${fileName}:${lineNum} -> ${varName} (Prefer semantic roles like --brand-9 or --success-9)`);
             warnings++;
          }
        });
      }

      // Check for calc() hardcoding
      if (cleanLine.includes('calc(')) {
        const calcMatch = cleanLine.match(/calc\(([^)]+)\)/);
        if (calcMatch) {
          const inner = calcMatch[1];
          if (inner.match(/[2-9][0-9]*px/) || inner.match(/1[0-9]+px/)) {
            console.warn(`⚠️ [Calc Hardcode] ${fileName}:${lineNum} -> Avoid hardcoded px in calc(). Use tokens.`);
            warnings++;
          }
        }
      }
    });
  });

  // 2. Audit TSX for In-line Style Crimes
  tsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const fileName = path.relative(process.cwd(), file);

    if (content.includes('style={{')) {
      console.warn(`⚠️  [Inline Style Detected] ${fileName} -> Verify that styles are token-bound.`);
      warnings++;
    }
  });

  console.log('\n--- Audit Summary ---');
  if (errors === 0) {
    console.log(`✅ Passed with ${warnings} warnings.`);
  } else {
    console.log(`❌ Failed with ${errors} errors and ${warnings} warnings.`);
    process.exit(1);
  }
}

audit();
