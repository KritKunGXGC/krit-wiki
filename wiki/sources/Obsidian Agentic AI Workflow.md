---
title: "Obsidian + Agentic AI? 🧠 Full Hermes Obsidian Workflow & Wiki Prep"
category: "Source"
tags:
  - clippings
  - obsidian
  - agentic-ai
sources: ["raw/Obsidian_Agentic_AI_Workflow.md"]
author: "Wanderloots"
published: 2026-07-23
last_updated: 2026-08-12
---

## Summary
วิดีโอโดย Wanderloots (2026-07-23) สาธิตวิธีผสาน AI agent (Hermes) เข้ากับ Obsidian vault อย่างปลอดภัย ผ่านระบบควบคุมการเข้าถึง 3 ชั้น (skills, Docker mount, system level) และ Git version control ที่ทำหน้าที่เป็น "ปุ่ม undo"

[Watch on YouTube](https://www.youtube.com/watch?v=znj-WpMj1dI)

## Key Points

### Basic Hermes + Obsidian Setup
- Hermes ใช้ Obsidian skill ในการสร้างโน้ต, ตั้ง tag, และลิงก์โน้ตใหม่เข้ากับโน้ตเดิม (เห็นผลใน Open Graph View)
- Hermes อ่านโน้ตใน vault และตอบคำถามจากเนื้อหานั้นได้

### Version Control (Git) เป็นปุ่ม Undo
- ให้ Hermes สร้าง git repo ที่ root และทำ baseline commit
- Commits ทำหน้าที่เป็น save point — ก่อน/หลังโปรเจกต์ใหญ่สั่งให้ commit แล้ว roll back ได้ทุกจุดถ้า agent ทำเนื้อหาเสียหาย
- สร้างไฟล์ `.git` และ `.gitignore` ใน vault

### Three-Tier Access Control
1. **Skills layer (soft/best-practices):** เพิ่มกฎใน Obsidian skill เช่น "ห้ามเขียน มีแต่ read ในโฟลเดอร์ X" หรือ "ห้ามอ่าน/เขียน private folder" — เป็นชั้นที่อ่อน เพราะ agent อาจทำตามกฎไม่ครบ โดยเฉพาะเมื่อ context ถูกบีบอัด จึงเป็นชั้นแนวปฏิบัติ ไม่ใช่ชั้นความปลอดภัย
2. **Docker mount controls (hard):** กำหนดใน `config.yaml` map host path → container path พร้อม mode:
   - Mode: `RO` (read-only), `RW` (read-write, ค่าเริ่มต้น)
   - จำกัดโฟลเดอร์ที่มีโน้ตส่วนตัว (journals, book quotes) เป็น `:RO` ให้ agent อ่านได้แต่แก้ไม่ได้
   - **Mask folder:** กันการเข้าถึงโดยสิ้นเชิง (โฟลเดอร์ลับ เช่น บันทึกการบำบัด/กลยุทธ์ธุรกิจ) — สร้างโฟลเดอร์เปล่าบน host แล้ว bind-mount ทับ private folder ใน vault ให้ agent เห็นโฟลเดอร์ว่าง
3. **System level:** วิธีที่สามในการจำกัดสิทธิ์ระดับ OS

## Recommendations
- ให้ลองให้ Hermes ทำภารกิจเองก่อนเสมอ (เช่น สร้าง git repo) แทนการทำมือ
- ควรใช้ version control ทุกครั้งที่ AI เป็นคนอัปเดต knowledge base

## See Also
- [[wiki/syntheses/FINVA Folder Structure|FINVA Folder Structure]]
- [[wiki/syntheses/Essential Obsidian Plugins|Essential Obsidian Plugins]]
- [[wiki/syntheses/OpenClaw Synthesis|OpenClaw Synthesis]] (agentic AI อีกหัวข้อ)
- [[wiki/entities/Wanderloots|Wanderloots]]
- [[wiki/events/2026-07-23 Obsidian Agentic AI Workflow Published|วิดีโอเผยแพร่ 2026-07-23]]
- การเปรียบเทียบ: [[wiki/syntheses/OpenClaw vs Hermes-in-Obsidian|OpenClaw vs Hermes-in-Obsidian]]
