---
title: "AI Skills & Content Deepening"
date: 2026-08-12
category: "Event"
tags:
  - events
  - wiki
  - milestone
sources: ["log.md"]
last_updated: 2026-08-12
---

# AI Skills & Content Deepening

**วันที่:** 2026-08-12

## สรุป
วันที่ระบบ wiki เติบโตเต็มตัว — ติดตั้ง AI skills, ตรวจสอบคุณภาพ (lint), และขยายเนื้อหาให้ลึกขึ้น

## รายละเอียด

### การติดตั้ง AI Skills (6 ตัว ผ่าน `npx skills add`)
- **obsidian-power-user** — ผู้เชี่ยวชาญ Obsidian เต็มรูปแบบ (Dataview, Templater, canvas, CSS...)
- **Document skills** — docx, pdf, pptx, xlsx (สร้าง/แก้ไฟล์เอกสาร)
- **smart-tagger** — แนะนำแท็กจากเนื้อหา

### การตรวจสอบคุณภาพ (Lint)
- ตรวจ raw/ → wiki/ coverage ครบ 8/8 + 1 image
- ตัดลิงก์ข้ามที่ผิดหมวด (AI-Audio ↔ OpenClaw/FINVA/Memex)
- สร้าง [[wiki/entities/Tim Miller|Tim Miller]], [[wiki/entities/Focus Café|Focus Café]], [[wiki/entities/Tech With Lucy|Tech With Lucy]], [[wiki/entities/Wanderloots|Wanderloots]]
- สร้าง `wiki/events/` placeholder + `_system/lint.js` (lint script ถาวร)
- แก้ orphan: ลิงก์ [[wiki/README|Wiki MOC]] จาก index.md

### การขยายเนื้อหา
- สร้าง [[wiki/MOCs/Obsidian & PKM|Obsidian & PKM MOC]] + concept ใหม่ 5 หน้า: [[wiki/concepts/MOC (Map of Content)|MOC]], [[wiki/concepts/PARA|PARA]], [[wiki/concepts/Bases|Bases]], [[wiki/concepts/Spaced Repetition|Spaced Repetition]], [[wiki/concepts/IELTS|IELTS]]
- ขยาย synthesis ทั้ง 5 ให้ลึกขึ้น (39–46 บรรทัด/หน้า)

### การปรับแต่งเพิ่มเติม
- ตั้งค่า plugins ที่เหลือ: Iconize, Metadata Menu, Breadcrumbs
- เก็บแท็กสีให้ครบ (colored-tags 31 สี)

## ผลลัพธ์
- Wiki 30 หน้า: dead links = 0, orphans = 0, frontmatter ครบทุกหน้า
- ระบบตรวจสอบคุณภาพอัตโนมัติพร้อมใช้ (`node _system/lint.js`)

## ดูเพิ่ม
- [[wiki/events/2026-08-11 Vault Setup & Beautification|Vault Setup & Beautification]]
- [[wiki/events/README|Events]]
