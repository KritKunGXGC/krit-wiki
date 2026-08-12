---
title: "Bases"
category: "Concept"
tags:
  - obsidian
  - organization
  - databases
sources: ["raw/How I use Folders in Obsidian.md"]
last_updated: 2026-08-12
---

# Bases

**Bases** คือฟีเจอร์ฐานข้อมูลในตัวของ Obsidian ที่ให้สร้างมุมมอง (views) แบบตาราง/การ์ดจากโน้ต โดยใช้ frontmatter (metadata) เป็นตัวกรองและจัดเรียงอัตโนมัติ

## หลักการ
- ทำงานคล้าย MOC แต่จัดระเบียบผ่าน **metadata** (properties/frontmatter) แทนลิงก์
- "Organize your files retroactively" — โน้ตถูกจัดหมวดอัตโนมัติตามค่า metadata ที่เพิ่มทีหลัง โดยไม่ต้องย้ายไฟล์
- ใช้คู่กับ [[wiki/concepts/MOC (Map of Content)|MOCs]] และการตั้งชื่อโน้ตที่ดี เพื่อแทนที่ความจำเป็นของโฟลเดอร์จัดหมวด

## การประยุกต์
- สร้าง Base สำหรับโน้ตแต่ละประเภท (เช่น งานประจำ, โปรเจกต์, บทความ) แล้วกรองด้วย field เช่น `status`, `category`, `tags`
- เหมาะกับผู้ใช้ที่ต้องการ "sort ตัวเอง" มากกว่าการย้ายไฟล์ไปมาระหว่างโฟลเดอร์

## ใน vault นี้
- มี Base พร้อมใช้ 2 ตัว: `wiki/Bases/Wiki Library.base` (ทุกหน้าใน `wiki/` จัดกลุ่มตามหมวด, Timeline events) และ `wiki/Bases/Notes Library.base` (โน้ตส่วนตัวใน `notes/`)
- เปิดไฟล์ `.base` ใน Obsidian → กรอง/เรียง/สลับมุมมอง (ตาราง/การ์ด) ได้ทันที — ดูวิธีใช้ใน [[wiki/memory/Vault Manual|Vault Manual]]

## แหล่งอ้างอิง
- [[wiki/sources/How I use Folders in Obsidian|How I use Folders in Obsidian]] — Tim Miller แนะนำ "Getting Started with Obsidian Bases"

## Sources
- `raw/How I use Folders in Obsidian.md`
- ดูเพิ่ม: [[wiki/syntheses/FINVA Folder Structure|FINVA Folder Structure]]
