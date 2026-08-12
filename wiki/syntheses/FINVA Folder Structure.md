---
title: "FINVA Folder Structure"
category: "Synthesis"
tags:
  - synthesis
  - organization
  - obsidian
sources: ["wiki/sources/How I use Folders in Obsidian.md"]
last_updated: 2026-08-12
---

## สรุปใจความสำคัญ (Executive Summary)
FINVA คือระบบการจัดการโฟลเดอร์ใน Obsidian ที่เน้นใช้โฟลเดอร์เพื่อกำหนด **Workflow** (Fleeting → In Progress → Notes → Views → Archives) โดยใช้ Links และ [[wiki/concepts/MOC (Map of Content)|MOCs]] ในการจัดการเนื้อหาแทนที่การจัดหมวดหมู่แบบโฟลเดอร์ตายตัว

## การวิเคราะห์เชิงลึก (Deep Analysis)

### หลักการ 5 โฟลเดอร์
1. **Fleeting** — จุดเริ่มต้นโน้ตทุกอัน ("back of the napkin") มีกฎ 2 ข้อ: (ก) ทุกโน้ตต้อง refactor ก่อนออกจากโฟลเดอร์, (ข) ต้อง refactor อย่างน้อยสัปดาห์ละครั้ง
2. **In Progress** — โน้ต "โปรเจกต์" ที่ใช้เวลาทำ >5 นาที (กัน Fleeting ตัน)
3. **Notes** — permanent notes ที่ "complete enough" — กลับมาอ่านปีต่อมายังเข้าใจได้
4. **Views** — ไม่ใช่โฟลเดอร์จัดหมวด แต่เป็นเครื่องมือจัดระเบียบย้อนหลัง: MOCs + [[wiki/concepts/Bases|Bases]]
5. **Archives** — ที่เก็บของเก่า (มรดกจาก [[wiki/concepts/PARA|PARA]] — โฟลเดอร์เดียวที่ Tim Miller เก็บไว้)

### แนวคิดที่ขัดแย้ง/น่าสนใจ
- **โฟลเดอร์ = workflow ไม่ใช่ organization:** Tim Miller ยอมรับตรงๆ ว่าโฟลเดอร์ 4 แรก "ไม่ได้จัดอะไรเลย" — หัวข้อปนกันหมด สิ่งที่จัดระเบียบจริงคือ Views (MOC/Base) และชื่อโน้ตที่ดี
- **ชื่อโน้ตสำคัญที่สุด:** แทนที่จะทำโน้ต "Facts about Kangaroos" ให้ทำ "Kangaroos are marsupials" + "Kangaroos have pouches" — main idea ต้องอยู่ในชื่อ
- **ค้านกับ PARA:** ใช้ PARA มาหลายปีแต่ "Projects vs Areas" กำกวมเกินไป (ดูหน้า [[wiki/concepts/PARA|PARA]])
- **Search ≠ ยาแก้อ่อนแอ:** Tim Miller ยอมรับว่าเขา "ผอมยกเว้นกล้ามลูกหนู" — เก่งค้นหามาก ระบบนี้จึงออกแบบมาให้ search + links ช่วยชดเชย

### การประยุกต์ใช้
- เริ่มจาก 5 โฟลเดอร์ + กฎ refactor รายสัปดาห์ แล้วใช้ MOC/Base คุมหัวข้อที่กำลังโต
- ใช้กับ vault ที่มี AI agent ได้ (ดู [[wiki/sources/Obsidian Agentic AI Workflow|Obsidian Agentic AI Workflow]]) — โฟลเดอร์ที่ชัดเจนทำให้ตั้งกฎ access control ได้ง่าย
- ลิงก์ระหว่างโน้ต + Graph View/Backlinks เป็นวิธีหาของหลัก แทนการย้ายไฟล์

## การเชื่อมโยง (Network)
- เชื่อมโยงกับ: [[wiki/sources/How I use Folders in Obsidian]]
- แนวคิดที่เกี่ยวข้อง: [[wiki/concepts/PARA|PARA]], [[wiki/concepts/MOC (Map of Content)|MOC]], [[wiki/concepts/Bases|Bases]]
- ข้อมูลอ้างอิงเพิ่มเติม: [[wiki/sources/Obsidian Agentic AI Workflow|Obsidian Agentic AI Workflow]] (ประยุกต์กับ Agentic AI)
- MOC: [[wiki/MOCs/Obsidian & PKM|Obsidian & PKM MOC]]
