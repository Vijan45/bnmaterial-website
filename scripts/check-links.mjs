import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
const root = 'dist';
const files = [];
async function walk(d) {
  for (const e of await readdir(d, { withFileTypes: true })) {
    const p = join(d, e.name);
    e.isDirectory() ? await walk(p) : files.push(p);
  }
}
await walk(root);
const html = files.filter((f) => f.endsWith('.html'));
const routes = new Set(
  html.map(
    (f) =>
      '/' +
      f
        .slice(root.length + 1)
        .replaceAll('\\', '/')
        .replace(/index\.html$/, '')
        .replace(/\.html$/, '')
        .replace(/\/$/, ''),
  ),
);
routes.add('/');
const broken = [];
for (const f of html) {
  const s = await readFile(f, 'utf8');
  for (const m of s.matchAll(/href="(\/[^"#?]*)/g)) {
    let h = m[1].replace(/\/$/, '') || '/';
    if (!routes.has(h) && !files.some((x) => x.replaceAll('\\', '/').endsWith(h)))
      broken.push(`${f}: ${h}`);
  }
}
if (broken.length) {
  console.error(broken.join('\n'));
  process.exit(1);
}
console.log(`Checked ${html.length} HTML files; no broken internal links.`);
