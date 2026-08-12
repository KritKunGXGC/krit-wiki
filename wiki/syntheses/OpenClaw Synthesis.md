---
title: "OpenClaw Synthesis"
category: "Synthesis"
tags:
  - synthesis
  - agentic-ai
  - ai-agents
sources: ["wiki/sources/What is OpenClaw Explained for Beginners.md"]
last_updated: 2026-08-12
---

## สรุปใจความสำคัญ (Executive Summary)
OpenClaw คือเฟรมเวิร์ก AI agent แบบ open-source ที่ทำงานอัตโนมัติ 24/7 บนเครื่องหรือเซิร์ฟเวอร์ของคุณเอง ต่างจากแชทบอททั่วไปตรงที่คุยผ่านแอปที่ใช้อยู่แล้ว (WhatsApp, Telegram, Discord, Slack, iMessage) และลงมือทำงานจริงแทนที่จะตอบอย่างเดียว — มีผู้ใช้จริงกว่า 3 ล้านคน

## การวิเคราะห์เชิงลึก (Deep Analysis)

### กระบวนทัศน์ใหม่: Chatbot → Autonomous Agent
| | ChatGPT/Claude | OpenClaw |
|---|---|---|
| สภาพแวดล้อม | จำกัดอยู่แค่ chat interface | ทำงานบนเครื่อง/เซิร์ฟเวอร์ของคุณ |
| การทำงาน | ตอบคำถาม/สร้างเนื้อหา | ลงมือทำ: จองโรงแรม, ส่งอีเมล, ต่อรองราคา |
| ความจำ | ไม่คงอยู่ (per session) | **Persistent memory** ข้าม session/แอป |
| การเข้าถึง | ไม่แตะไฟล์/ปฏิทินของคุณ | เชื่อมไฟล์, ปฏิทิน, inbox ได้โดยตรง |

### Use cases จริงจากผู้ใช้ (3 รูปแบบที่เห็นชัด)
1. **Second Brain แบบแชร์หน่วยความจำ** — ผู้ใช้สร้าง memory ของตัวเองแล้วแชร์ข้าม agent (Codex, Cursor) ไม่ต้องเล่าประวัติซ้ำ
2. **Personal Dashboard** — ดึงข้อมูลจาก fitness band มาสร้างแดชบอร์ดติดตามนิสัย
3. **ซื้อรถแบบอัตโนมัติ** — agent ต่อรองราคาผ่านอีเมลจนลดลงกว่า **$4,000** โดยเจ้าของแค่ไปเซ็นสัญญา

### แนวคิดที่ขัดแย้ง/น่าสนใจ
- **พลัง vs ความเสี่ยงเป็นของคู่กัน:** agent ที่เข้าถึงไฟล์/อีเมลของคุณได้ คือ "untrusted code with persistent credentials" (คำเตือนของ Microsoft) — ยิ่งอัตโนมัติมาก ยิ่งต้องควบคุมการเข้าถึงมาก
- **ข้อเสียของความสะดวก:** สกิลจาก Claw Hub marketplace 12% พบว่าเป็น malicious (ขโมย crypto wallet, password)
- **Prompt injection เป็นภัยหลัก:** เพราะ agent อ่านเว็บ/อีเมล ศัตรูซ่อนคำสั่งในเนื้อหานั้นได้ (เช่นบั๊ก "Claw Jacked" ที่ปล่อยให้เว็บไซต์เข้าควบคุม agent — ปิดแล้ว)

### การเริ่มต้นและข้อควรระวัง
- ต้องมี: เครื่อง (laptop/VPS) + API key (Claude, OpenAI, Gemini — เริ่มฟรีด้วย Gemini free tier) ใช้เวลาตั้งค่า ~10 นาที
- **Security checklist:** สร้างสกิลเอง (เข้าใจโค้ดใน-นอก), ล็อก agent อย่าให้เปิดสาธารณะ, ระวัง prompt injection, แนะนำรันบน **VPS** แยกจากเครื่องหลัก

### การประยุกต์ใช้
- งาน digital ซ้ำๆ (research, booking, จัดการปฏิทิน) มอบให้ agent ได้
- ใช้ร่วมกับ vault/PKM: หลักการ access control เดียวกับ [[wiki/sources/Obsidian Agentic AI Workflow|Obsidian Agentic AI Workflow]] (อ่านได้อย่างเดียว vs แก้ได้, mask folder ลับ)

## การเชื่อมโยง (Network)
- แหล่งอ้างอิง: [[wiki/sources/What is OpenClaw Explained for Beginners]]
- ผู้สร้างสรรค์: [[wiki/entities/Tech With Lucy|Tech With Lucy]]
- หัวข้อที่เกี่ยวข้อง (agentic AI): [[wiki/sources/Obsidian Agentic AI Workflow|Obsidian Agentic AI Workflow]]
- การเปรียบเทียบ: [[wiki/syntheses/OpenClaw vs Hermes-in-Obsidian|OpenClaw vs Hermes-in-Obsidian]]
