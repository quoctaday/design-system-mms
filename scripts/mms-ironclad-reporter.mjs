import fs from 'fs';
import path from 'path';

/**
 * MMS Ironclad Auditor v5.2 - "UI-Native Precision"
 * Upgraded to support v6.0 Constitutional Laws:
 * - Structural Primitives (1px/0.5px) bypass.
 * - Prop-Value Precise Matching.
 * - Local Interaction Filter Validation.
 */

const COMPONENT_NAME = process.argv[2];
if (!COMPONENT_NAME) {
  console.log('❌ Usage: node scripts/mms-ironclad-reporter.mjs [ComponentName]');
  process.exit(1);
}

const BASE_PATH = process.cwd();
const THEME_PATH = path.join(BASE_PATH, 'src/styles/theme.css');
const DNA_PATH = path.join(BASE_PATH, `design-system/mms-design-system/02 - Core/DNA/${COMPONENT_NAME}_DNA.json`);
const REPORT_DIR = path.join(BASE_PATH, 'design-system/mms-design-system/02 - Core/Reports');

// Registry
const componentRegistry = {
  'Slider': { css: 'src/components/ui/Slider/Slider.css', prefix: 'mms-slider', children: ['Track', 'Range', 'Thumb'], globals: '--slider-track-size: calc(var(--space-2) * 1.25);\n  --slider-thumb-box-shadow: 0 0 0 1px var(--black-a4);\n  --slider-range-high-contrast-background-image: none;' },
  'SegmentedControl': { css: 'src/components/ui/SegmentedControl/SegmentedControl.css', prefix: 'mms-segmented', children: ['Indicator', 'Item'] },
  'Button': { css: 'src/components/ui/Button/Button.css', prefix: 'mms-button', children: [''] },
  'Switch': { css: 'src/components/ui/Switch/Switch.css', prefix: 'mms-switch', children: ['Track', 'Thumb'] }
};

const config = componentRegistry[COMPONENT_NAME];
if (!config) {
  console.error(`❌ Component ${COMPONENT_NAME} not found in registry.`);
  process.exit(1);
}
const CSS_PATH = path.join(BASE_PATH, config.css);

// ── 1. TOKEN RESOLVER ────────────────────────────────────────

class TokenResolver {
  constructor(themePath) {
    this.tokens = new Map();
    this.loadTheme(themePath);
  }

  loadTheme(filePath) {
    if (!fs.existsSync(filePath)) return;
    const content = fs.readFileSync(filePath, 'utf8');
    const regex = /--([\w-]+):\s*([^;]+);/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
      this.tokens.set(match[1], match[2].trim());
    }
  }

  resolve(value) {
    if (!value || typeof value !== 'string') return value;
    let resolved = value;
    let depth = 0;
    while (resolved.includes('var(--') && depth < 5) {
      resolved = resolved.replace(/var\(--([\w-]+)\)/g, (match, name) => {
        return this.tokens.get(name) || match;
      });
      depth++;
    }
    return resolved;
  }

  // Deep normalization of color/shadow fragments
  normalizeFragment(f) {
     return f.toLowerCase()
      .replace(/\s+/g, ' ')
      .replace(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,?\s*([\d.]+)?\s*\)/g, (m, r, g, b, a) => {
        // Simple normalization for basic color comparison
        return `color(${r},${g},${b},${a || 1})`;
      })
      .trim();
  }

  detectRedundancy(value) {
    const resolved = this.resolve(value);
    const fragments = resolved.split(/,(?![^(]*\))/).map(f => this.normalizeFragment(f));
    const seen = new Set();
    const redundancies = [];

    fragments.forEach((f, i) => {
      if (f === 'none' || f === '') return;
      if (seen.has(f)) {
        redundancies.push(f);
      }
      seen.add(f);
      
      // Structural Redundancy: Multiple Rings
      if (f.includes('0 0 0 1px') || f.includes('0 0 0 0.5px')) {
          const isInset = f.includes('inset');
          const ringKey = `ring-${isInset ? 'inset' : 'outset'}`;
          if (seen.has(ringKey)) {
              redundancies.push(`Structural redundant ${isInset ? 'inset' : 'outset'} ring`);
          }
          seen.add(ringKey);
      }
    });

    return redundancies;
  }
}

// ── 2. AUDIT UTILS ──────────────────────────────────────────

function normalize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/\s+/g, ' ').trim();
}

function checkParity(dnaValue, cssContent, resolver, propName = "") {
  if (!dnaValue) return { passed: true };
  
  const normalizedDNA = normalize(dnaValue);
  const normalizedCSS = normalize(cssContent);

  // 1. Exact Structural Match (Law of 1px)
  if (normalizedCSS.includes(normalizedDNA)) return { passed: true, method: 'exact' };

  // 2. Resolve both and compare
  const resDNA = normalize(resolver.resolve(dnaValue));
  const resCSS = normalize(resolver.resolve(cssContent));
  
  if (resCSS.includes(resDNA)) {
    // Flag hardcoded colors/spacing (Semantic drift)
    const isSemanticColor = /#[0-9a-f]|rgba?\(|hsla?\(/.test(normalizedCSS) && !/var\(--/.test(normalizedCSS);
    const isHardSpacing = /[:\s][2-9][0-9]*px/.test(normalizedCSS);
    
    if (isSemanticColor) return { passed: false, error: 'Semantic Hardcode: Use tokens for colors.' };
    if (isHardSpacing) return { passed: false, error: 'Spacing Hardcode: Use modular spacing tokens.' };
    
    return { passed: true, method: 'resolved' };
  }

  return { passed: false, error: 'Parity Mismatch: Does not mirror DNA.' };
}

// ── 3. MAIN ENGINE ──────────────────────────────────────────

async function runAudit() {
  try {
    const resolver = new TokenResolver(THEME_PATH);
    const dna = JSON.parse(fs.readFileSync(DNA_PATH, 'utf8'));
    const css = fs.readFileSync(CSS_PATH, 'utf8');

    const report = {
      component: COMPONENT_NAME,
      timestamp: new Date().toISOString(),
      score: 0,
      totalChecks: 0,
      passedChecks: 0,
      details: [],
      ghosts: []
    };

    // 0. GHOST DETECTION (Scans CSS for undocumented variants)
    const variantRegex = new RegExp(`\\.${config.prefix}-variant-([\\w-]+)`, 'g');
    let vMatch;
    const cssVariants = new Set();
    while ((vMatch = variantRegex.exec(css)) !== null) {
      cssVariants.add(vMatch[1]);
    }
    
    cssVariants.forEach(cv => {
      if (!dna.pillars.materiality[cv]) {
        report.ghosts.push({ type: 'Ghost Variant', name: cv, message: 'Found in CSS but missing from DNA certification.' });
      }
    });

    // 1. GLOBAL VARIABLES AUDIT
    Object.entries(dna.pillars.variables).forEach(([key, dnaEntry]) => {
      const val = typeof dnaEntry === 'object' ? dnaEntry.value : dnaEntry;
      report.totalChecks++;
      const passed = css.includes(key) && checkParity(val, css, resolver);
      if (passed) report.passedChecks++;
      report.details.push({ type: 'Variable', key, status: passed ? '✅' : '❌', expected: val });
    });

    // 2. GEOMETRY AUDIT
    if (dna.pillars.geometry?.rootRadius) {
      const dnaEntry = dna.pillars.geometry.rootRadius;
      const val = typeof dnaEntry === 'object' ? dnaEntry.value : dnaEntry;
      report.totalChecks++;
      const passed = checkParity(val, css, resolver);
      if (passed) report.passedChecks++;
      report.details.push({ type: 'Geometry', key: 'rootRadius', status: passed ? '✅' : '❌', expected: val });
    }

    // 3. MATERIALITY MATRIX AUDIT
    const variants = Object.keys(dna.pillars.materiality);
    const children = config.children || [];

    variants.forEach(v => {
      const vDNA = dna.pillars.materiality[v];
      if (!vDNA) return;

      children.forEach(child => {
        const childDNA = vDNA[child];
        if (!childDNA) return;

        const variantClass = `.${config.prefix}-variant-${v}`;
        const childClass = child ? `.${config.prefix}-${child.toLowerCase()}` : '';
        
        Object.entries(childDNA).forEach(([prop, dnaEntry]) => {
          // Skip metadata keys starting with _
          if (prop.startsWith('_')) return;

          const val = typeof dnaEntry === 'object' ? dnaEntry.value : dnaEntry;
          if (typeof val === 'string') {
            report.totalChecks++;
            const variantBlockRegex = new RegExp(`${variantClass.replace('.', '\\.')}[^{]*?${childClass.replace('.', '\\.')}[^{]*?{([^}]*)}`, 'm');
            const match = css.match(variantBlockRegex);
            
            // PROP-VALUE PRECISION: Find the specific property within the block
            let propertyMatch = null;
            if (match) {
              const propRegex = new RegExp(`${prop}\\s*:\\s*([^;]+);`, 'i');
              propertyMatch = match[1].match(propRegex);
            }

            const parity = checkParity(val, propertyMatch ? propertyMatch[1] : (match ? match[1] : ""), resolver, prop);
            if (parity.passed) report.passedChecks++;

            const redundancies = resolver.detectRedundancy(resolver.resolve(val));
            report.details.push({ 
              type: `Materiality (${v})`, 
              key: `${child || 'Root'} ${prop}`, 
              status: parity.passed ? '✅' : '❌', 
              expected: val,
              warning: parity.error || (redundancies.length > 0 ? `Redundancy: ${redundancies.join(', ')}` : null)
            });
          }
        });
      });
    });

    // CALCULATE SCORE (Ghosts penalize the final score)
    const baseScore = Math.round((report.passedChecks / report.totalChecks) * 100);
    report.score = Math.max(0, baseScore - (report.ghosts.length * 10));

    // GENERATE MARKDOWN
    let md = `# Ironclad Audit Report v5.1: ${COMPONENT_NAME}\n\n`;
    md += `**Timestamp:** ${report.timestamp}\n`;
    md += `**Parity Score:** ${report.score >= 100 ? '🛡️ MIRROR CERTIFIED' : '⚠️ REFINEMENT NEEDED'} (${report.score}%)\n\n`;
    
    if (report.ghosts.length > 0) {
      md += `### 👻 Ghost Entities Detected\n`;
      report.ghosts.forEach(g => md += `- **${g.name}**: ${g.message}\n`);
      md += `\n`;
    }

    md += `| Category | Property | Status | Expected DNA | Warnings |\n`;
    md += `| :--- | :--- | :---: | :--- | :--- |\n`;
    report.details.forEach(d => {
      md += `| ${d.type} | ${d.key} | ${d.status} | \`${d.expected}\` | ${d.warning || '-'} |\n`;
    });

    if (!fs.existsSync(REPORT_DIR)) fs.mkdirSync(REPORT_DIR, { recursive: true });
    fs.writeFileSync(path.join(REPORT_DIR, `${COMPONENT_NAME}_Ironclad_Report.md`), md);

    console.log(`📊 Audit v5.1 Complete for ${COMPONENT_NAME}. Score: ${report.score}%`);
  } catch (err) {
    console.error('❌ Audit Error:', err.message);
  }
}

runAudit();
