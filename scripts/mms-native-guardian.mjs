import fs from 'fs';
import path from 'path';

/**
 * MMS Native Guardian: Automated Architectural Audit
 * Ensures components follow the Native MMS Architecture and prevents recurring errors.
 */

const SCAN_DIR = 'src/components/ui';
const ENGINE_PATH = 'src/lib/mms-engine.ts';
const PROPS_PATH = 'src/helpers/extract-mms-props.ts';

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
  console.log('🛡️  MMS Native Guardian: Architectural Audit in progress...');
  
  const tsxFiles = getAllFiles(SCAN_DIR, '.tsx');
  let errors = 0;
  let warnings = 0;

  tsxFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const lines = content.split('\n');
    const fileName = path.relative(process.cwd(), file);
    
    // 1. Zero Radix Dependency Check
    if (content.includes('radix-ui')) {
      console.error(`❌ [Architecture Violation] ${fileName} -> Contains Radix UI imports. MMS components must be Native.`);
      errors++;
    }

    lines.forEach((line, index) => {
      const lineNum = index + 1;

      // 2. Path Depth Check (Self-Improving: Learning from past path errors)
      // Standard: src/components/ui/Atom/Atom.tsx (3 levels deep from src)
      // Import should be ../../../lib/mms-engine
      if (line.includes('from') && (line.includes('mms-engine') || line.includes('extract-mms-props'))) {
        const importPath = line.match(/from\s+['"]([^'"]+)['"]/)?.[1];
        if (importPath) {
          const depth = (importPath.match(/\.\.\//g) || []).length;
          const componentDepth = fileName.split(path.sep).length - 1; // src/components/ui/Atom/Atom.tsx -> 4 parts -> 3 levels from src
          
          if (depth !== componentDepth - 1) { // -1 because src is not part of the relative path if importing from lib
             // Specifically for our structure: components/ui/Atom/File.tsx -> ../../../lib
             const expectedDepth = 3; 
             if (depth !== expectedDepth && fileName.includes('components/ui/')) {
                console.error(`❌ [Path Depth Error] ${fileName}:${lineNum} -> Import depth is ${depth}, expected ${expectedDepth} (../../../).`);
                errors++;
             }
          }
        }
      }

      // 3. Lucide-React Direct Import Check (Anti-Pattern)
      if (line.includes("from 'lucide-react'")) {
        console.warn(`⚠️ [Icon Pattern Warning] ${fileName}:${lineNum} -> Direct Lucide import detected. Prefer MMS Icon atoms if available.`);
        warnings++;
      }
    });

    // 4. Engine Alignment Check for complex components
    if (content.includes('useState') && content.includes('useEffect') && !content.includes('mms-engine')) {
       if (content.length > 2000) { // Arbitrary size for "complex"
         console.warn(`⚠️ [Engine Alignment] ${fileName} -> Complex component detected without mms-engine hooks. Consider refactoring.`);
         warnings++;
       }
    }
  });

  console.log('\n--- Architecture Summary ---');
  if (errors === 0) {
    console.log(`✅ Architecture Audit Passed with ${warnings} warnings.`);
  } else {
    console.log(`❌ Architecture Audit Failed with ${errors} errors and ${warnings} warnings.`);
    process.exit(1);
  }
}

audit();
