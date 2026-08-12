---
title: "Vault Setup & Beautification"
date: 2026-08-11
category: "Event"
tags:
  - events
  - obsidian
  - milestone
sources: ["log.md"]
last_updated: 2026-08-12
---

# Vault Setup & Beautification

**วันที่:** 2026-08-11

## สรุป
วันสำคัญของการ Ingest เนื้อหาหลายรายการ พร้อมติดตั้งปลั๊กอินและปรับโฉม vault ให้เป็นระบบที่ใช้งานได้จริง

## รายละเอียด

### การ Ingest เนื้อหา
- `raw/What is OpenClaw Explained for Beginners.md` → [[wiki/sources/What is OpenClaw Explained for Beginners|source]] + synthesis
- `raw/The Free Obsidian Journal that took 400 hours to build.md` → [[wiki/sources/The Free Obsidian Journal that took 400 hours to build|source]] + [[wiki/syntheses/Essential Obsidian Plugins|Essential Obsidian Plugins]]
- `raw/Note Taking & Research Assistant Powered by AI.md` → [[wiki/sources/Note Taking & Research Assistant Powered by AI|source]] + [[wiki/syntheses/English Learning Guide|English Learning Guide]]
- `raw/NotebookLM Mind Map (1).png` → OCR แล้วรวมเข้า source Note Taking (กรอบการเรียนรู้ 7 ด้าน)
- สร้าง concept: [[wiki/concepts/Shadowing Technique|Shadowing Technique]], [[wiki/concepts/CEFR|CEFR]]
- **Restore** `raw/Obsidian_Agentic_AI_Workflow.md` จาก YouTube metadata + transcript

### การติดตั้งปลั๊กอิน (8 ตัว)
Templater, Metadata Menu, Linter, obsidian-git, Homepage, Iconize, Breadcrumbs, Banners

### การปรับโฉม vault
- สร้าง CSS snippet `wiki-beauty.css` (callouts, tables, tag pills, dashboard cards) และเปิดใช้งานใน appearance.json
- สร้าง dashboard ใหม่ด้วย Dataview — index.md กลายเป็นแดชบอร์ด auto-update
- *(หมายเหตุ: การสลับ theme เป็น AnuPpuccin + แต่ง CSS ใหม่ เกิดขึ้นในวันถัดไป — ดู [[wiki/events/2026-08-12 AI Skills & Content Deepening|2026-08-12]])*

## ผลลัพธ์
- เนื้อหาใน wiki โตจาก 3 หน้า เป็น 15+ หน้า
- Vault ใช้งานได้จริง: plugin พื้นฐานครบ, dashboard สวย, ระบบ auto-backup (git)

## ดูเพิ่ม
- [[wiki/events/2026-08-09 Wiki Foundation|Wiki Foundation]]
- [[wiki/events/2026-08-12 AI Skills & Content Deepening|AI Skills & Content Deepening]]
- [[wiki/events/README|Events]]
