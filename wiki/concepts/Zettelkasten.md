---
title: "Zettelkasten"
category: "Concept"
tags: ["pkm", "knowledge-management", "note-taking", "obsidian"]
sources: ["raw/Form, Function, & Fun! - My Obsidian Vault Tour 2024.md"]
last_updated: 2026-08-12
---

# Zettelkasten

Zettelkasten (ภาษาเยอรมัน: "กล่องบันทึก") เป็นระบบจัดการความรู้ที่แบ่งโน้ตออกเป็น 3 ประเภทตามระดับการกลั่นกรอง และเน้นการ **linking** ระหว่างโน้ตเพื่อสร้างเครือข่ายความรู้

## สามประเภทโน้ต
- **Fleeting Notes** — ความคิด/ไอเดียดิบที่เก็บระหว่างวัน ยังไม่ต้องลึก เป็นจุดเริ่มต้นสำหรับคิดต่อและทบทวน
- **Literature Notes** — บันทึกจากแหล่งที่ไม่ได้สร้างเอง: บทความ หนังสือ คำคม วิดีโอ
- **Permanent Notes** — ผลลัพธ์ที่กลั่นแล้วจากการรวม fleeting + literature notes

## หัวใจของระบบ: การ Linking
- อ้างอิงโน้ตข้ามกัน (cross-referencing) คือกุญแจสำคัญในการใช้ประโยชน์
- [[wiki/concepts/MOC (Map of Content)|MOC (Map of Content)]] — โครงสร้างที่ช่วย visualize ลิงก์ที่สร้างเมื่อ vault โตขึ้น

## ในวิดีโอนี้
- CyanVoxel ใช้ Zettelkasten ร่วมกับ [[wiki/concepts/PARA|PARA]] — Zettelkasten สำหรับ "ความรู้เชิงลึก" ส่วน PARA สำหรับ "การจัดการชีวิตจริง" (โปรเจกต์/พื้นที่/ทรัพยากร/คลัง)
- เชื่อมโยงกับ [[wiki/concepts/Associative Trails|Associative Trails]] และ [[wiki/concepts/Memex|Memex]] — แนวคิดเครือข่ายความรู้ที่มีมาก่อน Obsidian

## เปรียบเทียบกับระบบอื่น (จากแหล่งใน vault)
| ระบบ | โฟกัส | โครงสร้าง | เหมาะกับ |
|---|---|---|---|
| **Zettelkasten** | ความรู้เชิงลึก | Fleeting / Literature / Permanent + linking | สะสมและเชื่อมโยงความรู้ข้ามหัวข้อ |
| **PARA** (Tiago Forte) | การจัดการชีวิต/งาน | Projects / Areas / Resources / Archives | โปรเจกต์ที่มี deadline (CyanVoxel ใช้คู่ Zettelkasten) |
| **FINVA** (Tim Miller) | Workflow 5 โฟลเดอร์ | Fleeting / In Progress / Notes / Views / Archives | จัดการ "สถานะ" ของโน้ต ไม่ใช่หมวดหมู่ |

## ใน vault นี้: notes/ ↔ wiki/
- `notes/` (พื้นที่ส่วนตัวของมนุษย์) ทำงานเป็น **Fleeting Notes** — เขียนเร็ว ไม่มีกฎ ไม่ต้อง frontmatter
- `wiki/` (ที่ LLM ดูแล) ทำงานเป็น **Permanent Notes** — กลั่นกรองแล้ว มี schema, ลิงก์ครบ, lint ตรวจ
- เมื่อโน้ตใน `notes/` พร้อม "graduated" → ขอ AI ingest เป็น wiki source (คล้ายแนวคิดโน้ต graduate ระหว่างสถานะของ [[wiki/concepts/PARA|PARA]]/FINVA)

## Sources
- `raw/Form, Function, & Fun! - My Obsidian Vault Tour 2024.md`
