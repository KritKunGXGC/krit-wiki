#!/usr/bin/env node
/**
 * site/transform.mjs — สร้าง Quartz `content/` จาก vault
 *
 * หน้าที่:
 *  1. คัดลอก wiki/ → content/wiki/ (ข้าม .base/.canvas)
 *  2. คัดลอก AGENTS.md + log.md → content/ (ให้ลิงก์ [[AGENTS.md]]/[[log]] resolve)
 *  3. แปลง plain wikilinks ([[Foo]] / [[Foo|alias]]) → [[wiki/.../Foo|alias]]
 *     และลิงก์ไป .base/.canvas → ข้อความธรรมดา (ไม่ publish ไฟล์พวกนั้น)
 *  4. แทนที่บล็อก ```dataview``` ด้วยเวอร์ชันคงที่/คำอธิบาย
 *  5. สร้าง content/index.md (landing page) พร้อมสถิติจริงจากหน้าใน wiki/
 *
 * Usage: node site/transform.mjs <contentDir>
 */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, copyFileSync, existsSync, rmSync } from "node:fs"
import { join, dirname, basename } from "node:path"
import { fileURLToPath } from "node:url"

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url))
const ROOT = join(SCRIPT_DIR, "..") // vault root
const WIKI = join(ROOT, "wiki")
const contentDir = process.argv[2] || join(ROOT, "site", ".out")

// ---------- utils ----------
function walk(dir, out = []) {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name)
    if (e.isDirectory()) walk(p, out)
    else out.push(p)
  }
  return out
}

/** crude YAML frontmatter parse (only flat keys) */
function readFrontmatter(p) {
  try {
    const s = readFileSync(p, "utf8")
    const m = s.match(/^---\r?\n([\s\S]*?)\r?\n---/)
    if (!m) return {}
    const fm = {}
    for (const line of m[1].split(/\r?\n/)) {
      const kv = line.match(/^(\w+):\s*(.*)$/)
      if (kv) fm[kv[1]] = kv[2].replace(/^"(.*)"$/, "$1").trim()
    }
    return fm
  } catch {
    return {}
  }
}

const relToRoot = (p) => p.slice(ROOT.length + 1).split("\\").join("/")
// mdFiles เก็บ path ใน content dir → ต้อง slice ด้วย contentDir (ต่างจาก relToRoot ที่ใช้กับ source)
const relToContent = (p) => p.slice(contentDir.length + 1).split("\\").join("/")
const isWiki = (p) => relToContent(p).startsWith("wiki/")

// ---------- 1. copy ----------
console.log("→ cleaning + copying wiki/ …")
rmSync(contentDir, { recursive: true, force: true })
const mdFiles = []
let skipped = 0
for (const f of walk(WIKI)) {
  if (f.endsWith(".base") || f.endsWith(".canvas")) { skipped++; continue }
  const r = relToRoot(f)
  const dest = join(contentDir, r)
  mkdirSync(dirname(dest), { recursive: true })
  copyFileSync(f, dest)
  mdFiles.push(dest)
}
for (const rf of ["AGENTS.md", "log.md"]) {
  const src = join(ROOT, rf)
  if (existsSync(src)) {
    const dest = join(contentDir, rf)
    mkdirSync(dirname(dest), { recursive: true })
    copyFileSync(src, dest)
    mdFiles.push(dest)
  }
}
console.log(`  copied ${mdFiles.length} .md files (skipped ${skipped} .base/.canvas)`)

// ---------- 2. title → path map ----------
const map = new Map([["index", "index"]])
for (const f of mdFiles) {
  const r = relToContent(f).replace(/\.md$/, "")
  const b = basename(r)
  if (!map.has(b)) map.set(b, r)
  const fm = readFrontmatter(f)
  if (fm.title && !map.has(fm.title)) map.set(fm.title, r)
}

// ---------- 3. wikilink rewrite ----------
const wikilinkRe = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g
let rewritten = 0

function rewriteWikilinks(text) {
  return text.replace(wikilinkRe, (whole, target, alias) => {
    const t = target.trim()
    // path-style links (wiki/…) pass through; .base/.canvas → plain text
    if (t.startsWith("wiki/") || t === "index") {
      if (/\.(base|canvas)$/i.test(t)) return alias ? alias.trim() : t
      return whole
    }
    let core = t
    let section = ""
    const hash = t.indexOf("#")
    if (hash !== -1) { core = t.slice(0, hash); section = t.slice(hash) }
    core = core.replace(/\.md$/i, "").trim()
    const path = map.get(core)
    if (path) {
      rewritten++
      return `[[${path}${section}|${(alias || t).trim()}]]`
    }
    return whole
  })
}

// ---------- 4. dataview blocks → static ----------
function fmtDate(d) {
  if (!d) return ""
  const m = String(d).match(/^\d{4}-\d{2}-\d{2}/)
  return m ? m[0] : String(d).slice(0, 10)
}

function replaceDataview(text, filePath) {
  const recent = []
  const ev = []
  for (const f of mdFiles) {
    const fm = readFrontmatter(f)
    if (fm.last_updated && isWiki(f)) {
      recent.push({ path: relToContent(f).replace(/\.md$/, ""), title: fm.title || basename(f, ".md"), d: fm.last_updated })
    }
    if (fm.date && isWiki(f) && relToContent(f).startsWith("wiki/events/")) {
      ev.push({ path: relToContent(f).replace(/\.md$/, ""), title: fm.title || basename(f, ".md"), d: fmtDate(fm.date) })
    }
  }
  recent.sort((a, b) => (a.d < b.d ? 1 : -1))
  ev.sort((a, b) => (a.d > b.d ? 1 : -1))

  return text.replace(/```dataview[\s\S]*?```/g, (blk) => {
    const q = blk.match(/FROM\s+"([^"]+)"/)
    const from = q ? q[1] : ""
    const limit = (blk.match(/LIMIT\s+(\d+)/) || [])[1]
    const n = limit ? parseInt(limit, 10) : 5

    if (from === "wiki") {
      const rows = recent.slice(0, n)
        .map((r) => `- [[${r.path}|${r.title}]] — ${r.d}`)
        .join("\n")
      return rows
    }
    if (from === "wiki/events") {
      const rows = ev.slice(0, n)
        .map((r) => `- [[${r.path}|${r.title}]] — ${r.d}`)
        .join("\n")
      return rows
    }
    if (from === "notes" || from.startsWith("notes")) {
      return "> [!warning] พื้นที่ส่วนตัว\n> `notes/` เป็นโน้ตส่วนตัวของคุณ — **ไม่ถูกนำขึ้นเว็บ** ดูเวอร์ชันสดได้ใน Obsidian"
    }
    return `> [!info] บล็อกไดนามิก (Dataview)\n> query \`${from || "(ไม่ระบุ)"}\` นี้ทำงานใน Obsidian เท่านั้น`
  })
}

// ---------- apply rewrites ----------
for (const f of mdFiles) {
  let text = readFileSync(f, "utf8")
  const before = text
  text = rewriteWikilinks(text)
  if (isWiki(f)) text = replaceDataview(text, f)
  if (text !== before) writeFileSync(f, text)
}
console.log(`  rewritten ${rewritten} plain wikilinks → path-style`)

// ---------- 5. landing page ----------
const cats = {}
for (const f of mdFiles) {
  if (!isWiki(f)) continue
  const c = readFrontmatter(f).category
  if (c) cats[c] = (cats[c] || 0) + 1
}
const statCard = (n, label, accent) =>
  `<div class="stat" style="--accent:${accent}"><div class="stat-num">${n}</div><div class="stat-label">${label}</div></div>`
const stats = [
  statCard(cats["Concept"] || 0, "Concepts", "#8caaee"),
  statCard(cats["Entity"] || 0, "Entities", "#e78284"),
  statCard(cats["Source"] || 0, "Sources", "#81c8be"),
  statCard(cats["Synthesis"] || 0, "Syntheses", "#c6a0f6"),
  statCard(cats["Event"] || 0, "Events", "#eebebe"),
  statCard((cats["MOC"] || 0) + (cats["Memory"] || 0), "MOCs & Memory", "#babbf1"),
]

const recentPages = [...mdFiles]
  .filter((f) => isWiki(f))
  .map((f) => ({ path: relToContent(f).replace(/\.md$/, ""), title: readFrontmatter(f).title || basename(f, ".md"), d: readFrontmatter(f).last_updated }))
  .filter((r) => r.d)
  .sort((a, b) => (a.d < b.d ? 1 : -1))
  .slice(0, 8)
const recentList = recentPages.map((r) => `- [[${r.path}|${r.title}]] — ${r.d}`).join("\n")

const events = [...mdFiles]
  .filter((f) => isWiki(f) && relToContent(f).startsWith("wiki/events/"))
  .map((f) => ({ path: relToContent(f).replace(/\.md$/, ""), title: readFrontmatter(f).title || basename(f, ".md"), d: fmtDate(readFrontmatter(f).date) }))
  .filter((r) => r.d)
  .sort((a, b) => (a.d < b.d ? -1 : 1))
  .slice(0, 6)
const eventList = events.map((r) => `- [[${r.path}|${r.title}]] — ${r.d}`).join("\n")

const totalPages = Object.values(cats).reduce((a, b) => a + b, 0)
const badges = [
  "🤖 AI-maintained",
  `📄 ${totalPages} หน้า`,
  `🗓️ ${cats["Event"] || 0} เหตุการณ์`,
  "🚀 อัปเดตอัตโนมัติ",
].map((b) => `  <span class="hero-badge">${b}</span>`).join("\n")

const folderCount = {
  concepts: cats["Concept"] || 0,
  entities: cats["Entity"] || 0,
  sources: cats["Source"] || 0,
  syntheses: cats["Synthesis"] || 0,
  events: cats["Event"] || 0,
  MOCs: (cats["MOC"] || 0) + (cats["Memory"] || 0),
}
const catLabels = {
  concepts: "🧠 แนวคิด",
  entities: "👤 บุคคล",
  sources: "📚 แหล่งข้อมูล",
  syntheses: "🔬 บทวิเคราะห์",
  events: "🗓️ เหตุการณ์",
  MOCs: "🗺️ แผนที่เนื้อหา",
}
const catNav = Object.entries(catLabels)
  .map(([k, label]) => `  <a href="/wiki/${k}/">${label} · ${folderCount[k]}</a>`)
  .join("\n")

// tag cloud from frontmatter
const tagCount = {}
for (const f of mdFiles) {
  if (!isWiki(f)) continue
  const raw = readFrontmatter(f).tags || ""
  for (const t of raw.split(",")) {
    let tag = t.trim()
    tag = tag.replace(/^["'\[\]#]+/, "").replace(/["'\]]+$/, "")
    if (tag) tagCount[tag] = (tagCount[tag] || 0) + 1
  }
}
const topTags = Object.entries(tagCount)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 14)
const tagCloud = topTags
  .map(([t, n]) => `  <a href="/tags/${t.toLowerCase().replace(/\s+/g, "-")}">#${t} <span class="count">×${n}</span></a>`)
  .join("\n")

const landing = `---
title: "Krit Wiki"
description: "ศูนย์รวมองค์ความรู้ของ krit — living wiki ที่ AI ดูแลเนื้อหา (concepts, entities, sources, syntheses, events)"
---

<div class="site-hero">

# Krit Wiki

ศูนย์รวมองค์ความรู้ของ **krit** — ฐานความรู้แบบ *Living Wiki* ที่ AI ดูแลเนื้อหาอย่างต่อเนื่อง ทั้งแนวคิด บุคคล แหล่งข้อมูล บทวิเคราะห์ และไทม์ไลน์เหตุการณ์

<div class="hero-badges">
${badges}
</div>

</div>

## สำรวจหมวดหมู่

<div class="cat-nav">
${catNav}
</div>

## เริ่มต้นตรงนี้

> [!tip] **เริ่มต้นที่นี่**
> - **[[wiki/MOCs/MOC Hub|MOC Hub]]** — จุดเดียวที่รวมทุกแผนที่เนื้อหา + syntheses สำคัญ
> - **[[wiki/MOCs/AI Audio MOC|AI Audio MOC]]** · **[[wiki/MOCs/Obsidian & PKM|Obsidian & PKM MOC]]** — สองแผนที่เนื้อหาหลัก
> - **[[wiki/README|Wiki Map of Content]]** — index รายการทุกหน้าใน \`wiki/\`
> - **Syntheses คัดสรร:** [[wiki/syntheses/English Learning Guide|English Learning Guide]] · [[wiki/syntheses/OpenClaw vs Hermes-in-Obsidian|OpenClaw vs Hermes]] · [[wiki/syntheses/Free Software Stack|Free Software Stack]]

> [!info] โครงสร้าง
> - \`wiki/concepts/\` — แนวคิด ทฤษฎี วิธีการ (Memex, CEFR, Vibe Coding…)
> - \`wiki/entities/\` — คนและองค์กร (Vannevar Bush, ครีเอเตอร์ผู้สร้างเนื้อหา…)
> - \`wiki/sources/\` — เอกสารอ้างอิง + \`wiki/syntheses/\` — บทวิเคราะห์สังเคราะห์
> - \`wiki/events/\` — ไทม์ไลน์เหตุการณ์ · \`wiki/MOCs/\` — แผนที่เนื้อหา
> - \`notes/\` — พื้นที่ส่วนตัวของคุณ (ไม่ถูกนำขึ้นเว็บนี้)

## สถิติเนื้อหา

<div class="stat-grid">
${stats.join("\n")}
</div>

## คลังความรู้

${tagCloud ? `<div class="tag-cloud">\n${tagCloud}\n</div>` : "- _(ยังไม่มีแท็ก)_"}

## เพิ่งอัปเดตล่าสุด

${recentList || "- _(ยังไม่มีข้อมูล)_"}

## ไทม์ไลน์ล่าสุด

${eventList || "- _(ยังไม่มีข้อมูล)_"}

---

> [!note] เกี่ยวกับเว็บนี้
> สร้างจาก \`wiki/\` ด้วย [Quartz](https://quartz.jzhao.xyz) — อัปเดตอัตโนมัติทุกครั้งที่ push ขึ้น GitHub
> - แดชบอร์ด Dataview แบบสด (สถิติ, ฐานข้อมูล, timeline เต็ม) ใช้งานใน **Obsidian** เท่านั้น
> - Source: [github.com/KritKunGXGC/krit-wiki](https://github.com/KritKunGXGC/krit-wiki)
`

writeFileSync(join(contentDir, "index.md"), landing)
console.log("  generated content/index.md (landing page)")
console.log("✅ transform complete →", contentDir)
