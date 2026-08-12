---
title: "Essential Obsidian Plugins"
category: "Synthesis"
tags:
  - synthesis
  - obsidian
  - plugins
sources: ["wiki/sources/The Free Obsidian Journal that took 400 hours to build.md"]
last_updated: 2026-08-12
---

## สรุปใจความสำคัญ (Executive Summary)
การจัดการปลั๊กอินใน Obsidian ควรเน้นความเรียบง่ายและเลือกเฉพาะปลั๊กอินที่ช่วยเพิ่มคุณภาพชีวิต (Quality of Life) โดยไม่สร้างความซับซ้อนเกินจำเป็น — ใช้ปลั๊กอิน "unobtrusive" ที่ทำงานเบื้องหลัง

## การวิเคราะห์เชิงลึก (Deep Analysis)

### 3 หลุมพรางของปลั๊กอิน (จาก Focus Café)
1. **ความซับซ้อนเกินจำเป็น** — จุดแข็งของ Obsidian คือความเรียบง่าย; ปลั๊กอินมากไปจะกลืนความเรียบง่ายนั้น
2. **ความเสี่ยง support หยุด** — ผู้พัฒนาเป็นอาสาสมัคร; เมื่อหยุดดูแลแล้ว Obsidian อัปเดต อาจทำให้ปลั๊กอินพัง vault
3. **Markdown ไม่บริสุทธิ์** — ปลั๊กอินหลายตัวแทรก syntax พิเศษ ทำให้โน้ตอ่านไม่รู้เรื่องเมื่อเปิดเป็นไฟล์ text ธรรมดา และผูกติดกับปลั๊กอินนั้น

### เกณฑ์คัดเลือก 3 ข้อ
- **Unobtrusive** — ไม่รบกวน อยู่เบื้องหลังจนกว่าจะต้องใช้
- **เพิ่มคุณภาพชีวิตจริงๆ** — ทำให้ใช้งานง่ายขึ้นโดยไม่เปลี่ยนแนวคิดหลักของ Obsidian
- **ไม่เพิ่มความซับซ้อน** — ยิ่งน้อยยิ่งดี

### 6 ปลั๊กอินที่แนะนำ (รายละเอียดเพิ่ม)
| ปลั๊กอิน | หน้าที่ | เหตุผลที่เด่น |
|---|---|---|
| **Sort and Permute Lines** | เรียง/สับบรรทัดและ heading | เจ๋งกับ list แบบเท่ๆ ที่ใช้ประจำ |
| **Settings Search** | ค้นหาในเมนู settings | หา setting ได้โดยไม่ต้องจำตำแหน่งเมนู |
| **Recent Files** | แสดงไฟล์ล่าสุดใน panel | ควรเป็น native feature; กระโดดกลับงานเก่าได้ทันที |
| **Tag Wrangler** | จัดการแท็กแบบ bulk (rename/merge) | แก้ tag ซ้ำซ้อน (goal/goals) ได้ในคลิกเดียว |
| **Paste Image Rename** | ตั้งชื่อรูปเมื่อวาง paste | เลิกชื่อ genric "Pasted image 12345" |
| **Omnisearch** | รวม quick switcher + ค้นหาทั่วเนื้อหา | **"ถ้ามีปลั๊กอินเดียว ต้องเป็นตัวนี้"** — ค้นหาคำในเนื้อหา (ไม่ใช่แค่ชื่อไฟล์), map hotkey แทน quick switcher, แทรกลิงก์ไฟล์จาก search modal ได้ |

### ความตึงเครียด: ปรัชญา "6 ตัวพอ" vs ความเป็นจริงของ vault นี้ (26 ตัว)
จุดที่ source ไม่ได้พูดถึงโดยตรงแต่**ตรวจสอบได้จาก vault นี้เอง** (จาก `.obsidian/community-plugins.json`):

| ปลั๊กอินของ Focus Café | สถานะใน vault นี้ |
|---|---|
| Omnisearch | ✅ ติดตั้งแล้ว |
| Recent Files | ✅ ติดตั้งแล้ว |
| Tag Wrangler | ✅ ติดตั้งแล้ว |
| Sort and Permute Lines | ❌ ยังไม่ติดตั้ง |
| Settings Search | ❌ ยังไม่ติดตั้ง |
| Paste Image Rename | ❌ ยังไม่ติดตั้ง |

- **3 ใน 6 ที่แนะนำ ติดตั้งแล้วจริง** — ส่วนที่เลือกใช้อ้างอิงจากเกณฑ์เดียวกัน (ค้นหา = Omnisearch ถูกใช้ใน dashboard ของ vault นี้, Recent Files ใช้เปิดใช้กับ dashboard)
- **ส่วนที่ยังไม่ติดตั้งนั้น "ถูกคัดออก" ตามเกณฑ์ 3 ข้อเอง:** Sort and Permute Lines (ไม่ค่อยได้ใช้กับโน้ตวิกิ), Settings Search (ตั้งค่าครั้งเดียวจบ ไม่ได้เข้าบ่อย), Paste Image Rename (vault นี้ใช้รูปน้อย — มีแค่ mind map ที่ฝัง canvas)
- **แต่ vault นี้ติดตั้งรวม 26 ตัว** — มากกว่าปรัชญา "น้อยยิ่งดี" ของ Focus Café เกือบ 4 เท่า → คำอธิบายคือ vault นี้มี **ชั้น automation ที่บทความไม่ได้ครอบคลุม** (Linter, obsidian-git, Templater, Dataview, Bases — เป็น "โครงสร้างพื้นฐาน" ที่ทำงานเบื้องหลัง ไม่ใช่ plugins "ใช้งานประจำวัน") — นี่คือ**มุมที่ทั้ง 2 ฝ่ายต่างถูก**: เกณฑ์ unobtrusive ยังใช้ได้ แต่ vault แบบ LLM-managed ต้องการชั้น automation ที่ "ซ่อนอยู่" ซึ่งไม่ขัดกับความเรียบง่ายที่ผู้ใช้มองเห็น

### เปรียบเทียบกับปรัชญา CyanVoxel (ตรงข้ามกันโดยตรง)
- Focus Café: "น้อยยิ่งดี — 6 ตัวก็พอ" ([[wiki/sources/The Free Obsidian Journal that took 400 hours to build|Journal]])
- CyanVoxel: "Overkill is a feature — 17 ตัว ถ้าสนุกก็ดี" ([[wiki/syntheses/CyanVoxel Vault System|CyanVoxel Vault System]])
- ทั้ง 2 เห็นพ้องกันใน **เกณฑ์คัดเลือก** (ต้อง unobtrusive/เพิ่มคุณภาพชีวิต) แต่**ต่างกันที่เป้าหมาย**: Focus Café เน้นความสงบในการเขียน ส่วน CyanVoxel เน้นความสนุกและความเป็นส่วนตัว — vault นี้ (26 ตัว) อยู่กลางๆ: automation เยอะตามแบบ CyanVoxel แต่ plugins ที่ "ผู้ใช้เห็น" ก็คัดตามเกณฑ์ Focus Café

### การประยุกต์ใช้
- ติดตั้งเฉพาะที่ "ต้องใช้จริง" ตามเกณฑ์ 3 ข้อ — ไม่ใช่ติดตามกระแส
- จัดการความเสี่ยง support หยุด: เลือกปลั๊กอินยอดนิยม/มี社区ใหญ่ และหมั่นตรวจว่า vault ยังเป็น Markdown บริสุทธิ์
- สำหรับผู้ที่เพิ่งเริ่ม: เริ่มจาก Omnisearch + Recent Files ก่อน แล้วค่อยๆ เพิ่ม

## การเชื่อมโยง (Network)
- เชื่อมโยงกับ: [[wiki/sources/The Free Obsidian Journal that took 400 hours to build]]
- แนวคิดที่เกี่ยวข้อง: [[wiki/syntheses/FINVA Folder Structure|FINVA Folder Structure]], [[wiki/concepts/MOC (Map of Content)|MOC (Map of Content)]]
- ข้อมูลอ้างอิงเพิ่มเติม: [[wiki/sources/Obsidian Agentic AI Workflow|Obsidian Agentic AI Workflow]]
- เปรียบเทียบ: [[wiki/syntheses/CyanVoxel Vault System|CyanVoxel Vault System]] (ปรัชญา plugins ตรงข้ามกัน)
- MOC: [[wiki/MOCs/Obsidian & PKM|Obsidian & PKM MOC]]
