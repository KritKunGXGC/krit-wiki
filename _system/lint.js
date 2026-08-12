#!/usr/bin/env node
/**
 * Vault Doctor — ตรวจสุขภาพ vault ตาม AGENTS.md (Linting Workflow)
 *
 * วิธีใช้ (จาก root ของ vault):
 *   node _system/lint.js
 *
 * ตรวจสอบ 12 อย่าง:
 *   [1]  Dead wikilinks (ลิงก์ที่ resolve ไม่ได้)
 *   [2]  Orphan pages (หน้าใน wiki/ ที่ไม่มีลิงก์ขาเข้า)
 *   [3]  Frontmatter schema (title, category, tags, sources, last_updated)
 *   [4]  หมวดหมู่ที่ถูกต้อง (Entity/Concept/Source/Event/Memory/MOC/Synthesis)
 *   [5]  Event ต้องมี date field + format YYYY-MM-DD
 *   [6]  Canvas JSON valid (ids unique, edges ไม่ dangling)
 *   [7]  Title ซ้ำกัน (duplicate frontmatter titles)
 *   [8]  Basename ซ้ำกัน (ไฟล์ชื่อเดียวกันในโฟลเดอร์ต่างกัน — ทำลิงก์สับสน)
 *   [9]  raw/ ไฟล์ที่ยังไม่ถูกอ้างอิงโดยหน้า wiki ใด
 *   [10] Stale heading anchors ([[page#heading]] ที่ heading ไม่มีจริง)
 *   [11] (WARN) ชื่อไฟล์ไม่ตรงกับ frontmatter title
 *   [12] ข้ามโฟลเดอร์ `notes/` ทั้งหมด (พื้นที่ส่วนตัวของผู้ใช้)
 */
const fs = require('fs');
const path = require('path');

const VALID_CATEGORIES = ['Entity', 'Concept', 'Source', 'Event', 'Memory', 'MOC', 'Synthesis'];
const EXCLUDED_DIRS = new Set(['notes', '_archive']); // personal space + archived files — never linted

function walk(dir, want = ['.md', '.canvas', '.base']) {
  if (!fs.existsSync(dir)) return [];
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (dir === '.' && EXCLUDED_DIRS.has(e.name)) continue;
      out.push(...walk(p, want));
    } else if (want.some(x => e.name.endsWith(x))) out.push(p.split(path.sep).join('/'));
  }
  return out;
}

const allMd = walk('wiki').filter(f => f.endsWith('.md'));
const allCanvas = walk('.').filter(f => f.endsWith('.canvas'));
const wikiPages = new Set(allMd);
const rootPages = new Set(walk('.').filter(f => f.endsWith('.md') || f.endsWith('.canvas') || f.endsWith('.base')));
const rawFiles = walk('raw').filter(f => f.endsWith('.md') && !path.basename(f).toLowerCase().startsWith('readme'));

const errors = [];
const warnings = [];
const orphans = [];

function resolve(from, target) {
  const d = path.posix.dirname(from);
  if (target.startsWith('../') || target.startsWith('./')) {
    return path.posix.normalize(path.posix.join(d, target));
  }
  return path.posix.normalize(target);
}

const cache = {};
function read(p) {
  if (!(p in cache)) cache[p] = fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
  return cache[p];
}
function headingsOf(p) {
  const c = read(p);
  if (!c) return [];
  return [...c.matchAll(/^#{1,6}\s+(.+)$/gm)].map(m => m[1].trim().toLowerCase());
}

// ---- Pass 1: link analysis + frontmatter on wiki pages ----
const inbound = {};
for (const p of wikiPages) inbound[p] = 0;

for (const f of wikiPages) {
  const content = read(f);
  const re = /\[\[([^\]|#]+)(?:#([^\]|]+))?/g;
  let m;
  while ((m = re.exec(content))) {
    const target = m[1].trim();
    const anchor = m[2] ? m[2].trim().toLowerCase() : null;
    const cand = resolve(f, target);
    const ok = cand.endsWith('.md')
      ? (wikiPages.has(cand) || rootPages.has(cand))
      : (cand.endsWith('.canvas') || cand.endsWith('.base'))
        ? rootPages.has(cand)
        : (wikiPages.has(cand + '.md') || rootPages.has(cand + '.md'));
    if (!ok) {
      errors.push(`DEAD LINK: ${f} -> [[${target}]]`);
      continue;
    }
    const page = cand.endsWith('.md') ? cand : cand + '.md';
    if (wikiPages.has(page) && page !== f) inbound[page]++;
    // [10] stale heading anchor
    if (anchor && page.endsWith('.md') && !anchor.startsWith('^')) {
      const heads = headingsOf(page);
      if (heads.length && !heads.includes(anchor)) {
        warnings.push(`STALE ANCHOR: ${f} -> [[${target}#${m[2].trim()}]] (หา heading ไม่พบ)`);
      }
    }
  }

  // [3] frontmatter
  const fm = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fm) { errors.push(`NO FRONTMATTER: ${f}`); continue; }
  const t = fm[1];
  for (const k of ['title:', 'category:', 'tags:', 'sources:', 'last_updated:']) {
    if (!t.includes(k)) errors.push(`MISSING FIELD ${k.replace(':', '')}: ${f}`);
  }
  const catMatch = t.match(/category:\s*"?([^"\n]+)"?/);
  if (catMatch && !VALID_CATEGORIES.includes(catMatch[1].trim())) {
    errors.push(`INVALID CATEGORY "${catMatch[1].trim()}": ${f}`);
  }
  // [5] event pages must have date + format
  if (catMatch && catMatch[1].trim() === 'Event' && !path.basename(f).startsWith('README') && !t.includes('date:')) {
    errors.push(`MISSING FIELD date (required for Event pages): ${f}`);
  }
  if (catMatch && catMatch[1].trim() === 'Event' && !path.basename(f).startsWith('README')) {
    const dm = t.match(/date:\s*"?([^"\n]+)"?/);
    if (dm && !/^\d{4}-\d{2}-\d{2}$/.test(dm[1].trim())) {
      errors.push(`BAD DATE FORMAT "${dm[1].trim()}" (expect YYYY-MM-DD): ${f}`);
    }
  }
  // [11] title vs filename (warning only — some titles are intentionally descriptive)
  const titleMatch = t.match(/title:\s*"([^"]+)"/);
  const base = path.basename(f, '.md').toLowerCase();
  if (titleMatch && titleMatch[1].toLowerCase() !== base && !path.basename(f).startsWith('README')) {
    warnings.push(`TITLE != FILENAME: "${titleMatch[1]}" vs ${path.basename(f)}`);
  }
}

for (const p of wikiPages) if (inbound[p] === 0) orphans.push(p);

// [7] duplicate titles
const titleMap = {};
for (const f of wikiPages) {
  const m = read(f).match(/title:\s*"([^"]+)"/);
  if (m) (titleMap[m[1].toLowerCase()] ??= []).push(f);
}
for (const [t, files] of Object.entries(titleMap)) {
  if (files.length > 1) errors.push(`DUP TITLE "${t}": ${files.join(' , ')}`);
}

// [8] duplicate basenames
const baseMap = {};
for (const f of wikiPages) {
  const b = path.basename(f, '.md').toLowerCase();
  (baseMap[b] ??= []).push(f);
}
for (const [b, files] of Object.entries(baseMap)) {
  if (files.length > 1) warnings.push(`DUP BASENAME "${b}": ${files.join(' , ')}`);
}

// [6] canvas JSON validation
for (const c of allCanvas) {
  try {
    const j = JSON.parse(read(c));
    if (!Array.isArray(j.nodes) || !Array.isArray(j.edges)) {
      errors.push(`CANVAS BAD STRUCTURE (missing nodes/edges): ${c}`);
      continue;
    }
    const ids = new Set(j.nodes.map(n => n.id));
    const eIds = new Set(j.edges.map(e => e.id));
    const dup = j.nodes.map(n => n.id).filter((v, i, a) => a.indexOf(v) !== i)
      .concat(j.edges.map(e => e.id).filter((v, i, a) => a.indexOf(v) !== i));
    if (dup.length) errors.push(`CANVAS DUP IDS ${[...new Set(dup)].join(',')}: ${c}`);
    const dangling = j.edges.filter(e => !ids.has(e.fromNode) || !ids.has(e.toNode));
    if (dangling.length) errors.push(`CANVAS DANGLING EDGES ${dangling.length}: ${c}`);
    for (const n of j.nodes) {
      for (const k of ['type', 'x', 'y', 'width', 'height']) {
        if (!(k in n)) { errors.push(`CANVAS NODE MISSING ${k}: ${c}`); break; }
      }
    }
  } catch (e) {
    errors.push(`CANVAS INVALID JSON: ${c} (${e.message.split('\n')[0]})`);
  }
}

// [9] raw files never referenced by wiki content or sources frontmatter
const wikiContent = [...wikiPages].map(p => read(p)).join('\n');
for (const r of rawFiles) {
  const base = path.basename(r);
  if (!wikiContent.includes(base)) {
    warnings.push(`RAW UNREFERENCED: ${r} (ยังไม่มีหน้า wiki ใดอ้างอิง)`);
  }
}

// ---- Report ----
const dead = errors.filter(e => e.startsWith('DEAD'));
const other = errors.filter(e => !e.startsWith('DEAD'));
console.log('==========================================');
console.log('  🩺 Vault Doctor — Health Report');
console.log('==========================================');
console.log(`Pages scanned: ${wikiPages.size}  |  Canvases: ${allCanvas.length}  |  Raw sources: ${rawFiles.length}`);
console.log('');
console.log(`[1] Dead links        : ${dead.length}`);
console.log(`[2] Orphans (0 in)    : ${orphans.length}`);
console.log(`[3] Frontmatter       : ${other.filter(e => e.startsWith('MISSING') || e.startsWith('NO FRONT')).length}`);
console.log(`[4] Categories        : ${other.filter(e => e.startsWith('INVALID CATEGORY')).length}`);
console.log(`[5] Event dates       : ${other.filter(e => e.startsWith('MISSING FIELD date') || e.startsWith('BAD DATE')).length}`);
console.log(`[6] Canvas issues     : ${other.filter(e => e.startsWith('CANVAS')).length}`);
console.log(`[7] Duplicate titles  : ${other.filter(e => e.startsWith('DUP TITLE')).length}`);
console.log(`[9] Unlinked raw      : ${warnings.filter(w => w.startsWith('RAW UNREFERENCED')).length}`);
console.log(`[10] Stale anchors    : ${warnings.filter(w => w.startsWith('STALE ANCHOR')).length}`);
console.log(`[11] Title != file    : ${warnings.filter(w => w.startsWith('TITLE !=')).length}`);
console.log(`[8] Duplicate names   : ${warnings.filter(w => w.startsWith('DUP BASENAME')).length}`);
console.log('');
if (orphans.length) { console.log('⚠️  Orphans:'); orphans.forEach(o => console.log(`    ${o}`)); }
if (dead.length) { console.log('⚠️  Dead links:'); dead.forEach(e => console.log(`    ${e}`)); }
if (other.length) { console.log('⚠️  Errors:'); other.forEach(e => console.log(`    ${e}`)); }
if (warnings.length) { console.log('ℹ️  Warnings:'); warnings.forEach(w => console.log(`    ${w}`)); }
const total = errors.length + orphans.length;
console.log('');
if (total === 0) {
  console.log('✅ Vault is healthy.' + (warnings.length ? ` (${warnings.length} warnings — informational)` : ''));
  process.exit(0);
} else {
  console.log(`⚠️  Fix ${total} error(s) above.`);
  process.exit(1);
}
