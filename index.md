---
title: "Knowledge Hub"
last_updated: 2026-08-12
---

<div class="hero">

# Knowledge Hub

ศูนย์กลางองค์ความรู้ของ krit — แดชบอร์ดดึงข้อมูลจากทุกหน้าใน `wiki/` และ `notes/` อัตโนมัติด้วย Dataview

</div>

## เริ่มต้นตรงนี้ {: #start-here}

> [!tip] **เริ่มต้นที่นี่**
> - **[[wiki/MOCs/_Hub|MOC Hub]]** — จุดเดียวที่รวมทุกแผนที่เนื้อหา + syntheses สำคัญ
> - **[[wiki/MOCs/AI-Audio|AI Audio MOC]]** · **[[wiki/MOCs/Obsidian & PKM|Obsidian & PKM MOC]]** — สองแผนที่เนื้อหาหลัก
> - **[[wiki/memory/Vault Manual|📖 Vault Manual]]** — คู่มือใช้ vault นี้ (capture, ingest, lint, plugins)
> - **[[wiki/Bases/Wiki Library.base|🗄️ Wiki Library]]** · **[[wiki/Bases/Notes Library.base|🗄️ Notes Library]]** — ฐานข้อมูลทุกหน้า
> - **[[wiki/README|Wiki Map of Content]]** — index รายการทุกหน้าใน `wiki/`
> - **Syntheses คัดสรร:** [[wiki/syntheses/English Learning Guide|English Learning Guide]] · [[wiki/syntheses/OpenClaw vs Hermes-in-Obsidian|OpenClaw vs Hermes]] · [[wiki/syntheses/Free Software Stack|Free Software Stack]]

> [!info] โครงสร้าง vault
> - `raw/` = **inbox** — เอกสารต้นฉบับ (อ่านอย่างเดียว ไม่แก้ไข)
> - `wiki/` = **ความรู้ที่ยังมีชีวิต** — concepts/entities/sources/syntheses/events/MOCs ที่ LLM ดูแล
> - `notes/` = **พื้นที่ของคุณ** — โน้ตส่วนตัว + สำเนาอ่านง่าย (`notes/ingested/`) · AI ไม่แตะ
> - `_system/` = **กฎ + templates + lint** — AGENTS.md schema, TEMPLATE*, lint.js

> [!tip] 🔍 ค้นหา
> `Ctrl+Shift+F` = ค้นทั่ว vault · `Ctrl+O` = **Omnisearch** (เนื้อหา ไม่ใช่แค่ชื่อไฟล์) · แท็กเด่น: `#ingested` (สำเนาที่ ingest) · `#journal` (daily) · `#inbox` (capture)

<div class="dash-grid">
  <a class="dash-card" href="#entities" style="--accent: #e78284">
    <span class="dash-count">$= dv.pages('"wiki/entities"').length</span>
    <span class="dash-label">Entities</span>
  </a>
  <a class="dash-card" href="#concepts" style="--accent: #8caaee">
    <span class="dash-count">$= dv.pages('"wiki/concepts"').length</span>
    <span class="dash-label">Concepts</span>
  </a>
  <a class="dash-card" href="#sources" style="--accent: #81c8be">
    <span class="dash-count">$= dv.pages('"wiki/sources"').length</span>
    <span class="dash-label">Sources</span>
  </a>
  <a class="dash-card" href="#syntheses" style="--accent: #c6a0f6">
    <span class="dash-count">$= dv.pages('"wiki/syntheses"').length</span>
    <span class="dash-label">Syntheses</span>
  </a>
  <a class="dash-card" href="#mocs-memory" style="--accent: #babbf1">
    <span class="dash-count">$= dv.pages('"wiki/MOCs" or "wiki/memory"').length</span>
    <span class="dash-label">MOCs & Memory</span>
  </a>
  <a class="dash-card" href="#timeline" style="--accent: #eebebe">
    <span class="dash-count">$= dv.pages('"wiki/events"').where(p => p.date).length</span>
    <span class="dash-label">Timeline</span>
  </a>
  <a class="dash-card" href="#latest" style="--accent: #f4b8e4">
    <span class="dash-count">$= dv.pages('"wiki"').where(p => p.last_updated).length</span>
    <span class="dash-label">Updated Notes</span>
  </a>
  <a class="dash-card" href="#notes" style="--accent: #a6e3a1">
    <span class="dash-count">$= dv.pages('"notes"').where(p => !p.file.name.includes("README")).length</span>
    <span class="dash-label">Personal Notes</span>
  </a>
  <a class="dash-card" href="#raw" style="--accent: #ef9f76">
    <span class="dash-count">$= dv.pages('"raw"').length</span>
    <span class="dash-label">Raw Inbox</span>
  </a>
</div>

## Concepts {: #concepts}

```dataview
TABLE WITHOUT ID
  file.link AS "Concept",
  tags AS "Tags",
  last_updated AS "อัปเดต"
FROM "wiki/concepts"
SORT file.name ASC
```

## Entities {: #entities}

```dataview
TABLE WITHOUT ID
  file.link AS "Entity",
  tags AS "Tags",
  last_updated AS "อัปเดต"
FROM "wiki/entities"
SORT file.name ASC
```

## Sources {: #sources}

```dataview
TABLE WITHOUT ID
  file.link AS "Source",
  tags AS "Tags",
  last_updated AS "อัปเดต"
FROM "wiki/sources"
SORT file.name ASC
```

## Syntheses {: #syntheses}

```dataview
TABLE WITHOUT ID
  file.link AS "Synthesis",
  tags AS "Tags",
  last_updated AS "อัปเดต"
FROM "wiki/syntheses"
SORT file.name ASC
```

## MOCs & Memory {: #mocs-memory}

> แผนที่เนื้อหา: [[wiki/README|Wiki Map of Content]] — ภาพรวมโครงสร้างและรายการหน้าทั้งหมดใน `wiki/`
> คู่มือ: [[wiki/memory/Vault Manual|Vault Manual]] · ระบบ: [[wiki/memory/System Preferences & Agentic Memory|System Preferences & Agentic Memory]]

```dataview
TABLE WITHOUT ID
  file.link AS "หน้า",
  category AS "หมวด",
  tags AS "Tags"
FROM "wiki/MOCs" OR "wiki/memory"
SORT category ASC, file.name ASC
```

## Timeline {: #timeline}

> เหตุการณ์สำคัญของ vault และการเผยแพร่เนื้อหา — เรียงตามวันที่ (เก่า → ใหม่)

```dataview
TABLE WITHOUT ID
  dateformat(date(date), "yyyy-MM-dd") AS "วันที่",
  file.link AS "เหตุการณ์",
  tags AS "Tags"
FROM "wiki/events"
WHERE date
SORT date(date) ASC
```

## Notes ของคุณ {: #notes}

> พื้นที่ส่วนตัว: [[wiki/memory/Vault Manual|คู่มือ]] · `notes/` = เขียนเอง · `notes/ingested/` = สำเนาอ่านง่ายจากที่ ingest แล้ว (`#ingested`)

```dataview
TABLE WITHOUT ID
  file.link AS "โน้ต",
  file.folder AS "ที่อยู่",
  dateformat(file.mtime, "yyyy-MM-dd") AS "แก้ไขล่าสุด"
FROM "notes"
WHERE !contains(file.name, "README")
SORT file.mtime DESC
LIMIT 15
```

## อัปเดตล่าสุด {: #latest}

```dataview
LIST
FROM "wiki"
SORT last_updated DESC
LIMIT 8
```

## Raw Inbox {: #raw}

```dataview
LIST
FROM "raw"
SORT file.name ASC
```
