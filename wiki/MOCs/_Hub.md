---
title: "MOC Hub"
category: "MOC"
tags:
  - moc
  - navigation
  - hub
sources: []
last_updated: 2026-08-12
---

# MOC Hub

> จุดเริ่มต้นเดียวสำหรับนำทางทั้ง vault — รวม **ทุก MOC** หน้า index หลัก และ synthesis สำคัญ ไว้ในที่เดียว

## แผนที่เนื้อหา (MOCs)

| ลิงก์ | คำอธิบาย |
|---|---|
| [[wiki/README|Wiki Map of Content]] | **index หลักของ `wiki/` ทั้งหมด** — รายการทุกหน้าแบ่งตามหมวด (concepts, entities, sources, syntheses, events…) |
| [[wiki/MOCs/Obsidian & PKM|Obsidian & PKM MOC]] | Obsidian, PKM, โครงสร้างโฟลเดอร์, ปลั๊กอิน, และ AI agent ใน vault |
| [[wiki/MOCs/AI-Audio|AI Audio MOC]] | เทคโนโลยี AI ด้านเสียง, voice, และเครื่องมือสร้างสรรค์ |

## Syntheses สำคัญ

- [[wiki/syntheses/English Learning Guide|English Learning Guide]] — กรอบเรียนภาษาอังกฤษด้วยตัวเอง (CEFR + Shadowing + การเลือกสำเนียง)
- [[wiki/syntheses/Essential Obsidian Plugins|Essential Obsidian Plugins]] — ปรัชญาปลั๊กอินน้อยแต่คุ้ม + 6 ตัวที่แนะนำ
- [[wiki/syntheses/FINVA Folder Structure|FINVA Folder Structure]] — จัดโฟลเดอร์ตาม workflow (Fleeting → Archives) ไม่ใช่หมวดหมู่
- [[wiki/syntheses/Free Software Stack|Free Software Stack]] — ฟรีซอฟต์แวร์แทนชุดโปรแกรม $1,000+/ปี
- [[wiki/syntheses/OpenClaw vs Hermes-in-Obsidian|OpenClaw vs Hermes-in-Obsidian]] — เปรียบเทียบ agentic AI สองแนวทาง (ทั่วไป vs เฉพาะทาง)
- [[wiki/syntheses/Programming Languages Explained|Programming Languages Explained]] — ภาพรวมภาษาโปรแกรม 12 ภาษา + ทำไมต้องเรียนในยุค AI
- [[wiki/syntheses/OpenClaw Synthesis|OpenClaw Synthesis]] — กระบวนทัศน์ autonomous agent + ความเสี่ยงความปลอดภัย

## ระบบอื่นใน vault

- [[wiki/events/README|Events]] — ไทม์ไลน์เหตุการณ์ของ vault และการเผยแพร่เนื้อหา
- [[wiki/memory/System Preferences & Agentic Memory|System Preferences & Agentic Memory]] — ภาษา/โทน/บริบทสำหรับ agentic memory
- [[wiki/memory/Vault Manual|Vault Manual]] — คู่มือผู้ใช้ (capture, ingest, lint, plugins)
- [[index|Knowledge Hub (index.md)]] — แดชบอร์ด Dataview ที่ root ของ vault

## 📈 สิ่งที่กำลังเติบโต (อัตโนมัติ)

### เพิ่งอัปเดตล่าสุด

```dataview
LIST
FROM "wiki"
SORT last_updated DESC
LIMIT 5
```

### เหตุการณ์ล่าสุด

```dataview
TABLE WITHOUT ID
  dateformat(date(date), "yyyy-MM-dd") AS "วันที่",
  file.link AS "เหตุการณ์"
FROM "wiki/events"
WHERE date
SORT date(date) DESC
LIMIT 4
```

### โน้ตส่วนตัวล่าสุด

```dataview
TABLE WITHOUT ID
  file.link AS "โน้ต",
  file.folder AS "ที่อยู่"
FROM "notes"
WHERE !contains(file.name, "README")
SORT file.mtime DESC
LIMIT 5
```

---
*สร้างขึ้นเพื่อให้การนำทาง vault เริ่มจากจุดเดียว — อัปเดตเมื่อมี MOC หรือ synthesis ใหม่*
