import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootPath = "/Users/buiquoc/Woker's Document/Antigravity App/Design System For MMS/src";

const mappings = [
  { from: /radius-default/g, to: 'radius-4' },
  { from: /radius-sm/g, to: 'radius-2' },
  { from: /radius-md/g, to: 'radius-3' },
  { from: /radius-lg/g, to: 'radius-5' },
  { from: /radius-xl/g, to: 'radius-6' },
  { from: /radius-container/g, to: 'radius-5' }
];

const directories = [
  path.join(rootPath, 'docs'),
  path.join(rootPath, 'components/docs')
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) return;
  
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    if (stats.isFile() && (file.endsWith('.css') || file.endsWith('.tsx'))) {
      let content = fs.readFileSync(filePath, 'utf8');
      let changed = false;
      
      mappings.forEach(m => {
        if (m.from.test(content)) {
          content = content.replace(m.from, m.to);
          changed = true;
        }
      });
      
      if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
      }
    }
  });
});
