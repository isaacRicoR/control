import fs from 'fs/promises';
import path from 'path';

const ARGS = process.argv.slice(2);
const IS_STRICT = ARGS.includes('--strict');

const CONFIG = {
  excludeDirs: [
    'node_modules',
    '.git',
    'dist',
    'build',
    'out',
    'coverage',
    '.next',
    '.turbo',
    '.cache'
  ],
  excludeExts: [
    '.md',
    '.mdx',
    '.png',
    '.jpg',
    '.jpeg',
    '.webp',
    '.svg',
    '.ico',
    '.pdf',
    '.woff',
    '.woff2',
    '.ttf',
    '.otf'
  ],
  allowPaths: [
    'apps/control/app/globals.css',
    'packages/console/tokens/',
    'docs/'
  ],
  regex: {
    hex: /#[0-9a-fA-F]{3,8}\b/g,
    functions: /(?:rgb|rgba|hsl|hsla)\(\s*[^)]+\)/g,
    names: /\b(?:red|blue|green|black|white|gray|grey|yellow|orange|purple|pink|cyan|magenta)\b/gi
  }
};

async function getFiles(dir) {
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      if (CONFIG.excludeDirs.includes(dirent.name)) return [];
      return getFiles(res);
    } else {
      const ext = path.extname(res).toLowerCase();
      if (CONFIG.excludeExts.includes(ext)) return [];
      return res;
    }
  }));
  return files.flat();
}

function isAllowed(filePath) {
  const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
  
  // Always exclude the script itself to avoid false positives from its own regexes
  if (relativePath === 'scripts/scan-hardcoded-colors.mjs') return true;

  if (IS_STRICT) return false;
  
  return CONFIG.allowPaths.some(allowed => {
    if (allowed.endsWith('/')) {
      return relativePath.startsWith(allowed);
    }
    return relativePath === allowed;
  });
}

async function scanFile(filePath) {
  try {
    const isFileAllowed = isAllowed(filePath);
    const content = await fs.readFile(filePath, 'utf-8');
    const lines = content.split('\n');
    const findings = [];

    lines.forEach((line, lineIdx) => {
      const matches = [];
      
      // Hex
      const hexMatches = line.matchAll(CONFIG.regex.hex);
      for (const match of hexMatches) {
        matches.push({ type: 'hex', match: match[0], index: match.index });
      }
      
      // Functions
      const funcMatches = line.matchAll(CONFIG.regex.functions);
      for (const match of funcMatches) {
        matches.push({ type: 'func', match: match[0], index: match.index });
      }
      
      // Names
      const nameMatches = line.matchAll(CONFIG.regex.names);
      for (const match of nameMatches) {
        matches.push({ type: 'name', match: match[0], index: match.index });
      }

      matches.forEach(m => {
        findings.push({
          line: lineIdx + 1,
          col: m.index + 1,
          match: m.match,
          snippet: line.trim().substring(0, 100),
          isAllowed: isFileAllowed
        });
      });
    });

    return findings;
  } catch (err) {
    // Fail silently for binary or unreadable files
    return [];
  }
}

async function main() {
  const rootDir = process.cwd();
  const allFiles = await getFiles(rootDir);
  
  console.log(`Scanning ${allFiles.length} files...${IS_STRICT ? ' [STRICT MODE]' : ''}`);
  
  let totalFindings = 0;
  const fileFindingsMap = new Map();
  let filesScannedCount = 0;

  for (const file of allFiles) {
    const findings = await scanFile(file);
    filesScannedCount++;
    
    const unallowedFindings = findings.filter(f => !f.isAllowed);
    
    if (unallowedFindings.length > 0) {
      const relativePath = path.relative(rootDir, file).replace(/\\/g, '/');
      
      unallowedFindings.forEach(f => {
        console.log(`${relativePath}:${f.line}:${f.col} - Found: ${f.match} | "${f.snippet}"`);
      });
      
      totalFindings += unallowedFindings.length;
      fileFindingsMap.set(relativePath, unallowedFindings.length);
    }
  }

  console.log('\n--- Summary ---');
  console.log(`Total files scanned: ${allFiles.length}`);
  console.log(`Total findings (outside allowlist): ${totalFindings}`);
  
  if (fileFindingsMap.size > 0) {
    console.log('\nTop 10 files with most findings:');
    const sortedFiles = Array.from(fileFindingsMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);
    
    sortedFiles.forEach(([file, count]) => {
      console.log(`${count} findings: ${file}`);
    });
  }

  process.exit(totalFindings > 0 ? 1 : 0);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
