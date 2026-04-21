import fs from 'fs';
import path from 'path';

/**
 * MMS Surgical DNA Extractor v2.3 - "Alpha Regex-Safe"
 * High-fidelity extraction with balanced brace matching and regex-safe lookups.
 */

const COMPONENT_NAME = process.argv[2];
if (!COMPONENT_NAME) {
  console.log('❌ Usage: node scripts/mms-dna-extractor.mjs [ComponentName]');
  process.exit(1);
}

const componentMap = {
  'Slider': 'slider.css',
  'SegmentedControl': 'segmented-control.css',
  'Switch': 'switch.css',
  'Checkbox': 'checkbox.css',
  'MultiSelect': 'select.css'
};

const FILENAME = componentMap[COMPONENT_NAME] || `${COMPONENT_NAME.toLowerCase()}.css`;
const BASE_PATH = process.cwd();
const REFERENCE_PATH = path.join(BASE_PATH, 'Radix Reference/packages/radix-ui-themes/src/components', FILENAME);
const DNA_DIR = path.join(BASE_PATH, 'design-system/mms-design-system/02 - Core/DNA');

// ── UTILS ──────────────────────────────────────────────────

function normalizeValue(val) {
  return val ? val.replace(/\n/g, '').replace(/\s+/g, ' ').trim() : null;
}

function extractProperty(block, prop) {
  const regex = new RegExp(`${prop}:\\s*([^;]*);`, 'm');
  const match = block.match(regex);
  return match ? normalizeValue(match[1]) : null;
}

/**
 * Robustly find a balanced CSS block using a RegExp for the starter pattern.
 */
function extractBalancedBlock(content, startPattern) {
  const match = content.match(startPattern);
  if (!match) return null;

  // Find the first '{' after the selector match
  const openBraceIndex = content.indexOf('{', match.index + match[0].length - 1);
  if (openBraceIndex === -1) return null;

  const startIndex = openBraceIndex + 1;
  let depth = 1;
  let currentIndex = startIndex;

  while (depth > 0 && currentIndex < content.length) {
    const char = content[currentIndex];
    if (char === '{') depth++;
    else if (char === '}') depth--;
    currentIndex++;
  }

  return content.slice(startIndex, currentIndex - 1).trim();
}

// ── CORE ENGINE ─────────────────────────────────────────────

async function extractDNA() {
  try {
    if (!fs.existsSync(REFERENCE_PATH)) {
      throw new Error(`Reference file not found: ${REFERENCE_PATH}`);
    }

    const cssContent = fs.readFileSync(REFERENCE_PATH, 'utf8');
    const dna = {
      component: COMPONENT_NAME,
      extractedAt: new Date().toISOString(),
      pillars: {
        variables: {},
        geometry: {},
        materiality: {}, 
        interaction: {}
      }
    };

    console.log(`🧬 Starting Surgical DNA Extraction v2.3 for ${COMPONENT_NAME}...`);

    // 1. GLOBAL VARIABLE HARVESTING
    const varRegex = /--[\w-]+:\s*(.*?);/g;
    let varMatch;
    while ((varMatch = varRegex.exec(cssContent)) !== null) {
      const [full, val] = varMatch;
      const key = full.split(':')[0].trim();
      dna.pillars.variables[key] = val.trim();
    }

    // 2. GEOMETRY
    const rootBlock = extractBalancedBlock(cssContent, new RegExp(`\\.rt-${COMPONENT_NAME}Root`, 'm'));
    if (rootBlock) {
      dna.pillars.geometry.rootRadius = extractProperty(rootBlock, 'border-radius');
      console.log(`   ✅ Geometry extracted.`);
    }

    // 3. MATERIALITY MATRIX
    const VARIANTS = ['surface', 'classic', 'soft'];
    const CHILD_COMPONENTS = ['Track', 'Range', 'Thumb'];
    const PROPS = ['background-color', 'background-image', 'box-shadow', 'border', 'opacity', '--slider-thumb-box-shadow'];

    VARIANTS.forEach(v => {
      console.log(`   🔍 Scanning Variant: ${v}...`);
      
      const variantPattern = new RegExp(`\\.rt-${COMPONENT_NAME}Root:where\\(\\.rt-variant-${v}\\)`, 'm');
      const variantBlock = extractBalancedBlock(cssContent, variantPattern);

      if (variantBlock) {
        dna.pillars.materiality[v] = {};
        let foundChildren = 0;

        CHILD_COMPONENTS.forEach(child => {
          // Use flexible pattern to handle spacing like "& :where(...)"
          const childPattern = new RegExp(`&\\s*:where\\(\\.rt-${COMPONENT_NAME}${child}\\)`, 'm');
          const childBlock = extractBalancedBlock(variantBlock, childPattern);

          if (childBlock) {
             foundChildren++;
             const extracted = {};
             PROPS.forEach(p => {
               const val = extractProperty(childBlock, p);
               if (val) extracted[p] = val;
             });

             const pseudoTargets = ['::before', '::after'];
             pseudoTargets.forEach(pseudo => {
               const pseudoBlock = extractBalancedBlock(childBlock, new RegExp(`&${pseudo}`, 'm'));
               if (pseudoBlock) {
                 const pseudoProps = {};
                 PROPS.forEach(p => {
                   const val = extractProperty(pseudoBlock, p);
                   if (val) pseudoProps[p] = val;
                 });
                 if (Object.keys(pseudoProps).length > 0) extracted[pseudo] = pseudoProps;
               }
             });

             if (Object.keys(extracted).length > 0) {
               dna.pillars.materiality[v][child] = extracted;
             }
          }
        });
        console.log(`      ✅ Found ${foundChildren} sub-components for ${v}.`);
      } else {
        console.log(`      ⚠️ Variant block ${v} NOT found.`);
      }
    });

    // 4. INTERACTION
    const focusBlock = extractBalancedBlock(cssContent, /&:where\(:focus-visible\)/m);
    if (focusBlock) {
      dna.pillars.interaction.focusRing = extractProperty(focusBlock, 'box-shadow');
      console.log(`   ✅ Interaction extracted.`);
    }

    // SAVE
    if (!fs.existsSync(DNA_DIR)) fs.mkdirSync(DNA_DIR, { recursive: true });
    fs.writeFileSync(path.join(DNA_DIR, `${COMPONENT_NAME}_DNA.json`), JSON.stringify(dna, null, 2));

    console.log(`✨ Success: Slider_DNA.json updated.`);
  } catch (err) {
    console.error('❌ DNA Extraction Error:', err.message);
  }
}

extractDNA();
