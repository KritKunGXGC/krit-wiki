---
title: "8 Obsidian Plugins That I Can't Live Without"
category: "Source"
tags:
  - source
  - obsidian
  - plugins
  - pkm
sources: ["raw/8 Obsidian Plugins That I Can't Live Without.md"]
last_updated: 2026-08-12
---

# 8 Obsidian Plugins That I Can't Live Without

> วิดีโอ YouTube โดย [[wiki/entities/Mike Schmitz|Mike Schmitz]] (Practical PKM) เผยแพร่ 2025-08-15 — 8 plugins "S-tier" ที่เขาขาดไม่ได้ จากทั้งหมด 39 ตัวที่ติดตั้ง

## สรุปใจความสำคัญ (Summary)

Mike Schmitz ลองใช้ Obsidian plugins มานับร้อยตัว แต่จาก 39 ตัวที่ติดตั้งอยู่จริง มีเพียง **8 ตัวที่เป็น "S-tier"** — ระดับที่ workflow ของเขาพึ่งพาจริงจน "ไม่รู้จะทำยังไงถ้าไม่ได้ใช้" ข้อโต้แย้งหลักคือ **plugin hygiene**: ใช้ plugins ให้น้อยที่สุดเท่าที่จำเป็น เพราะ plugins เยอะทำให้ Obsidian โหลดช้าและ performance ลดลง — แต่ไม่มีสูตรเดียวที่ใช้ได้กับทุกคน ("find your own sweet spot")

### 8 Essential Plugins (เรียงตามที่เล่า → ตัวสำคัญสุดท้าย)

| ลำดับ | Plugin | หน้าที่ | เหตุผลที่ขาดไม่ได้ |
|---|---|---|---|
| 1 | **Calendar** (liamcain) | คลิกวันที่ใน sidebar → สร้าง/กระโดด daily note | ทำงานคู่กับ Daily Notes core; ควรเป็น built-in feature; โชว์ week number → กระโดด weekly note |
| 2 | **Periodic Notes** (liamcain) | weekly/monthly/quarterly/yearly notes | ขับ **multiscale planning** ของ Cal Newport (quarterly→weekly→daily); ผู้พัฒนาเดียวกับ Calendar — "peanut butter and jelly" |
| 3 | **Dataview** | inline JS queries | เริ่มลดการใช้เพราะ **Bases** (Obsidian 1.9) แต่ inline JS ยังขาดไม่ได้; Datacore = successor กำลังพัฒนา |
| 4 | **Keep the Rhythm** | heat map จำนวนคำที่เขียน | สร้างแรงจูงใจเขียนต่อเนื่อง (don't break the chain) — Obsidian underrated ในฐานะ writing app |
| 5 | **Templater** | "Templates++" — template automation | folder templates อัตโนมัติต่อโฟลเดอร์ (video scripts, book notes, sermon notes, kanban boards) |
| 6 | **QuickAdd** | custom macros คุม Obsidian จากคีย์บอร์ด | capture journal → append ไป daily note; สร้างไฟล์ + card บน kanban พร้อมกัน; ใช้กับทุกอย่าง (people notes, task lists) |
| 7 | **Tasks** | task/project management ใน plain text | ขับ task dashboard + people notes + reading plan; มี API (QuickAdd เพิ่มงานได้); integrate กับ Morgen (time-blocking) |
| 8 | **Actions URI** (czottmann) | สะพานให้ iOS shortcuts เขียนลง Obsidian | **"duct tape" ของ digital journaling** — รับค่า rating จาก Actions for Obsidian (iOS) → แทรกลง daily note ตรง placeholder; ถ้าไม่มี คงเลิก journal ใน Obsidian |

## ข้อโต้แย้งหลัก (Core Argument)

- **Plugin PSA:** "use as few Obsidian plugins as you can" — 39 ตัวที่ใช้อยู่ "ส่วนใหญ่เป็น nice-to-have" มีแค่ 8 ที่ workflow พึ่งพาจริง
- **PKM stack framework:** เลือก plugins โดยดูว่า fit กับ workflow และแอปที่ใช้ใน PKM stack อย่างไร — "plug the right apps into the right places" เพื่อให้ข้อมูลไหลเข้าออกระบบ
- **ความสำคัญของจำนวน:** ทั้งจำนวน plugins และจำนวนโน้ตใน vault ส่งผลต่อ performance — ต้องหาจุดสมดุลของตัวเอง

## ข้อมูลที่น่าสนใจ (Beyond the List)

- **Bases มาแทน Dataview:** เขาวางแผนย้าย Dataview queries ส่วนใหญ่ไป Bases codeblocks (Obsidian 1.9) — เหลือแค่ inline JS ที่ยังต้องพึ่ง
- **Automation ที่ซ้อนกัน:** QuickAdd + Tasks API + Actions URI ทำงานร่วมกันเป็น chain (iOS → Actions URI → daily note → Tasks dashboard)
- **Liam Cain:** ผู้พัฒนา Calendar + Periodic Notes เป็นสมาชิกทีม Obsidian — plugins "กึ่งทางการ"

## ดูเพิ่ม
- Synthesis: [[wiki/syntheses/Essential Obsidian Plugins|Essential Obsidian Plugins]] — เปรียบเทียบมุมมอง plugin 3 แนวทาง
- ผู้สร้างสรรค์: [[wiki/entities/Mike Schmitz|Mike Schmitz]]
- เหตุการณ์: [[wiki/events/2025-08-15 8 Obsidian Plugins Published|วิดีโอเผยแพร่ 2025-08-15]]
- แนวคิดที่เกี่ยวข้อง: [[wiki/concepts/Bases|Bases]], [[wiki/concepts/Obsidian|Obsidian]]
- MOC: [[wiki/MOCs/Obsidian & PKM|Obsidian & PKM MOC]]
