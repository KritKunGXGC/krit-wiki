---
title: "Vault Manual"
category: "Memory"
tags:
  - memory
  - manual
  - vault
sources: []
last_updated: 2026-08-12
---

# 📖 Vault Manual — คู่มือใช้ vault นี้

คู่มือสำหรับผู้ใช้ (มนุษย์) — วิธีใช้ทุกอย่างใน vault นี้ โดยไม่ต้องพึ่ง AI

## โครงสร้าง vault
| โฟลเดอร์ | คืออะไร | ใครจัดการ |
|---|---|---|
| `raw/` | inbox เอกสารต้นฉบับ (อ่านอย่างเดียว) | AI อ่านเพื่อ ingest |
| `wiki/` | ความรู้กลั่นกรอง (มี schema + lint) | AI ดูแล |
| `notes/` | พื้นที่ส่วนตัวของคุณ (ไม่มีกฎ) | **คุณคนเดียว** |
| `_system/` | กฎ + templates + lint | AI |

## เริ่มต้นใช้
1. เปิด Obsidian → homepage โหลด `index.md` (แดชบอร์ด) อัตโนมัติ
2. หาอะไร → `Ctrl/Cmd+Shift+F` (ค้นหาทั่ว vault) หรือ **Omnisearch** (`Ctrl/Cmd+O`)
3. ดูทุกหน้าเป็นฐานข้อมูล → เปิด `wiki/Bases/Wiki Library.base` หรือ `wiki/Bases/Notes Library.base`

## จด / จับเร็ว (Capture)
- **Daily note:** สร้างไฟล์ชื่อ `YYYY-MM-DD.md` ใน `notes/daily/` → Templater เติม template ให้อัตโนมัติ (ค้นด้วยแท็ก `#journal`)
- **Quick capture:** สร้างไฟล์ใน `notes/inbox/` → วาง URL → Templater ดึงจาก clipboard ให้ (แท็ก `#inbox`)
- **โน้ตธรรมดา:** เขียนอะไรก็ได้ใน `notes/` — ไม่มีกฎ ไม่ต้อง frontmatter
- **หน้า wiki ใหม่:** `Ctrl+P` → \"Templater: Create new note from template\" → เลือก Concept / Source / Event / Synthesis

## ขอให้ AI ช่วย
- **ingest เนื้อหาภายนอก (URL/วิดีโอ):** บอกชื่อ → AI สร้างหน้า wiki + เก็บสำเนาอ่านง่ายใน `notes/ingested/` (`#ingested`)
- **ingest จาก notes/:** ชี้ไฟล์เฉพาะแล้วขอ ingest — AI อ่านอย่างเดียว ไม่แก้โน้ตต้นฉบับ
- **lint:** บอกว่า \"lint\" → AI รัน `node _system/lint.js` (ตรวจ 12 อย่าง: dead links, orphans, canvas, dates, duplicate titles...)
- **ขยาย/เชื่อมโยง:** ขอ \"deepen\" หรือ \"cross-link\" หน้าใดก็ได้

## เครื่องมือที่ติดตั้งแล้ว (เด่นๆ)
| เครื่องมือ | ใช้ทำอะไร |
|---|---|
| **Dataview** | index/dashboard อัตโนมัติใน `index.md` |
| **Bases** | ฐานข้อมูล `wiki/` + `notes/` (เปิด `.base`) |
| **Templater** | templates ทุกประเภท (`_system/TEMPLATE*`) |
| **Omnisearch** | ค้นหาเนื้อหาทั้งหมด (ไม่ใช่แค่ชื่อไฟล์) |
| **Mindmap NextGen / Enhancing Mindmap** | แปลง `#`/`-` เป็น mind map |
| **Canvas** | แผนผังกล่องเชื่อม (`wiki/canvases/`) |
| **obsidian-git** | auto backup ทุก 10 นาที |
| **Linter** | จัด format อัตโนมัติ (ข้าม `raw/`, `notes/`) |
| **Smart Connections** | ค้นหา/เชื่อมโยงเชิงความหมาย |

## กติกาสำคัญ
- **AI ห้ามแก้** `raw/` และ `notes/` (raw = แหล่งต้นฉบับ, notes = ของคุณ) — อ่านได้เมื่อขอเท่านั้น
- ทุกการแก้หน้า `wiki/` ต้องมี frontmatter ครบ + `last_updated` + บันทึก `log.md`

## ดูเพิ่ม
- [[wiki/README|Wiki Map of Content]] · [[wiki/MOCs/MOC Hub|MOC Hub]] · [[index|แดชบอร์ด]]
