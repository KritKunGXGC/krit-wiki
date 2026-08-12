---
title: "Free Software Stack"
category: "Synthesis"
tags:
  - synthesis
  - open-source
  - free-software
sources: ["wiki/sources/Every Free App You Actually Need Explained in 20 Minutes.md"]
last_updated: 2026-08-12
---

## สรุปใจความสำคัญ (Executive Summary)
ฟรีซอฟต์แวร์/open-source ระดับมืออาชีพสามารถแทนที่ชุดโปรแกรมเสียเงินมูลค่า $1,000+/ปี ได้เกือบทั้งหมด — สิ่งที่ต้องแลกคือเวลาเรียนรู้ที่มากขึ้น ไม่ใช่เงิน

## การวิเคราะห์เชิงลึก (Deep Analysis)

### แนวคิดที่ขัดแย้ง/น่าสนใจ
- **"ฟรี ≠ โปรเจกต์สมัครเล่น"** — เครื่องมือฟรีหลายตัวใช้งานในระดับโปรจริง: DaVinci Resolve เกรดสีหนังฮอลลีวูด (John Wick, La La Land), Blender ใช้ใน Spider-Verse และ Next Gen, OBS กลายเป็นมาตรฐานวงการสตรีม
- **การแลกเปลี่ยน "เงิน ↔ เวลา"** — ฟรีซอฟต์แวร์มี learning curve สูง (Resolve, Blender) และ UI บางตัวเก่า (GIMP) แต่เมื่อผ่านจุดนั้นไปแล้ว คุณภาพเทียบเท่าหรือดีกว่า
- **กระแสตรงข้ามกับตลาด** — ปี 2026 แม้แต่แอปเครื่องคิดเลขยังอยากได้ account; ฟรีซอฟต์แวร์ที่ local/offline (ไม่ส่ง telemetry, ไม่มี subscription) กลายเป็นของหายากและมีคุณค่า

### ความตึงเครียด: "Obsidian อยู่ในสแตกนี้จริงไหม?" (ตรวจสอบแล้ว)
วิดีโอจัด Obsidian อยู่ในรายชื่อแอปฟรี แต่**ตัวซอฟต์แวร์ Obsidian ไม่ใช่ open-source** — ตรวจสอบจากแหล่งภายนอกแล้ว:

> **Verified:** Obsidian core app เป็น **proprietary/closed-source** — ใช้งานฟรีได้ทุกจุดประสงค์ (personal + commercial) ตามนโยบาย 2025 แต่โค้ดเป็นลิขสิทธิ์ของบริษัท (อ้างอิง: [obsidian.md/license](https://obsidian.md/license), [blog "Obsidian is now free for work"](https://obsidian.md/blog/free-for-work/)) — สิ่งที่ "เปิด" คือ **รูปแบบข้อมูล** (Markdown ไฟล์ท้องถิ่น, ผู้ใช้เป็นเจ้าของข้อมูล) และเครื่องมือรอบข้างบางตัว (Obsidian API, Web Clipper, Importer — MIT license)

**นัยยะเชิงวิเคราะห์:**
- **"ฟรี" กับ "open-source" เป็นคนละเรื่อง** — Obsidian ฟรี (price) แต่ไม่เปิด (freedom) — ต่างจากทุกตัวในลิสต์ (VLC/GIMP/Blender เป็น GPL/MIT จริง)
- **จุดที่ Obsidian ยัง "เหมือน" FOSS:** ข้อมูลอยู่ใน Markdown ธรรมดา — ถ้า Obsidian หายไป คุณยังย้ายข้อมูลออกได้ (ต่างจาก Notion/Google Docs ที่ lock-in) — "ข้อมูลเปิด" ช่วยชดเชย "โค้ดปิด"
- **ทำไมวิดีโอถึงรวมมันเข้าไป:** มุมของวิดีโอคือ "ฟรีสำหรับผู้ใช้" (price) ไม่ใช่ "เสรีภาพซอฟต์แวร์" (freedom) — เป็นการมองคนละมิติ และหน้า [[wiki/concepts/Free and Open Source Software (FOSS)|FOSS]] ใน wiki นี้แยกสองมิตินี้ไว้ชัดเจน
- **ข้อควรระวัง:** ถ้าเป้าหมายคือ "เสรีภาพซอฟต์แวร์เต็มรูปแบบ" Obsidian ไม่เข้าเกณฑ์ — ทางเลือก FOSS จริงสำหรับโน้ตคือ Logseq/Joplin/Obsidian-ทางเลือกอื่น (นอกขอบเขต source — ต้อง research เพิ่ม)

### เปรียบเทียบ: สแตกแอปฟรี vs สแตกภาษาฟรี
เชื่อมโยงกับ [[wiki/syntheses/Programming Languages Explained|Programming Languages Explained]] — ทั้ง 2 เป็น "ระบบนิเวศเครื่องมือฟรี" แต่คนละชั้น:
- **เห็นพ้อง:** ทั้งคู่เลือกตามงาน ไม่ใช่ตามกระแส (ภาษาแรกตามเป้าหมาย ↔ สแตกตามสายงาน)
- **ต่างที่อายุขัย:** ภาษาโปรแกรมมีอายุเป็นทศวรรษ (C 50 ปี, ยังรัน Mars rover) แต่แอปฟรีมีวงจรชีวิตสั้นกว่าและเปลี่ยนเร็ว — "ลงทุนเรียนภาษา" ให้ผลตอบแทนยาวกว่า "ลงทุนเรียนแอป"
- **ต่างที่การ lock-in:** สแตกแอปฟรี (GIMP/Resolve) ใช้ไฟล์ open format เช่นกัน แต่การย้าย workflow ระหว่างแอปยากกว่าการย้ายภาษา (ภาษาแชร์ syntax/concept กัน)

### เกณฑ์ "เลือกน้อยแต่ดี" ที่เกิดซ้ำ
หลักการเดียวกับ [[wiki/syntheses/Essential Obsidian Plugins|Essential Obsidian Plugins]] ของ Focus Café ปรากฏซ้ำในสแตกนี้:
- **วิดีโอ Asylum:** เลือก 12 แอปจากทั้งหมดที่เคยลอง — คัดตาม "งานที่ทำบ่อย"
- **Focus Café:** เลือก 6 plugins จากทั้งหมด — คัดตามเกณฑ์ unobtrusive
- **บทเรียนข้ามแหล่ง:** "เครื่องมือฟรีที่ดี = จำนวนน้อยที่ใช้จริง" เป็น pattern ที่เกิดซ้ำใน wiki — ตรงข้ามกับกระแส "สะสมเครื่องมือ"

### การประยุกต์ใช้
- **สายครีเอเตอร์:** Resolve (ตัดต่อ/สี) + OBS (สตรีม/อัด) + Audacity (เสียง) + Blender (3D/VFX) — แทนชุด Adobe ทั้งหมด
- **สาย office/งานเอกสาร:** LibreOffice — รัฐบาลหลายประเทศใช้จริง (France, Italy)
- **สายพัฒนาเกม:** Godot (MIT, ไม่เก็บค่าใช้จ่าย) — ทางเลือกที่นักพัฒนา "เป็นเจ้าของงานที่ทำ"
- **PKM:** [[wiki/concepts/Obsidian|Obsidian]] — โน้ต Markdown ท้องถิ่น (ดู [[wiki/MOCs/Obsidian & PKM|Obsidian & PKM MOC]]) — **ฟรีแต่ไม่ใช่ FOSS** (ดูหัวข้อด้านบน)

### ข้อควรระวัง
- ตรวจสอบ feature ขั้นสูงที่อาจต่างจากเวอร์ชันเสียเงิน (Excel macros, CMYK, บาง plugins)
- พิจารณา GPU สำหรับ Resolve/Blender และเวลาที่ต้องลงทุนเรียนรู้

## การเชื่อมโยง (Network)
- แนวคิดหลัก: [[wiki/concepts/Free and Open Source Software (FOSS)|FOSS]] — กรอบแนวคิดเบื้องหลังสแตกทั้งหมดนี้
- เชื่อมโยงกับ: [[wiki/sources/Every Free App You Actually Need Explained in 20 Minutes]]
- ผู้สร้างสรรค์: [[wiki/entities/Asylum|Asylum]]
- เปรียบเทียบ: [[wiki/syntheses/Programming Languages Explained|Programming Languages Explained]] (ระบบนิเวศฟรีคนละชั้น), [[wiki/syntheses/Essential Obsidian Plugins|Essential Obsidian Plugins]] (เกณฑ์ "เลือกน้อยแต่ดี" ข้ามแหล่ง)
- MOC: [[wiki/MOCs/Obsidian & PKM|Obsidian & PKM MOC]] (Obsidian เป็นหนึ่งในสแตกนี้)
- เหตุการณ์: [[wiki/events/2026-06-09 Every Free App You Actually Need Published|วิดีโอ 2026-06-09]]
