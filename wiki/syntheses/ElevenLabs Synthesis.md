---
title: "ElevenLabs Synthesis"
category: "Synthesis"
tags:
  - synthesis
  - audio
  - voice
  - ai
sources: ["wiki/sources/ElevenLabs.md"]
last_updated: 2026-08-12
---

## สรุปใจความสำคัญ (Executive Summary)
[[wiki/sources/ElevenLabs|ElevenLabs]] เป็นแพลตฟอร์ม AI ด้านเสียงครบวงจรที่ให้บริการทั้งเครื่องมือสร้างสรรค์ (ElevenCreative), การสร้าง Voice Agents (**ElevenAgents**) และ API สำหรับนักพัฒนา (ElevenAPI) — สร้างขึ้นบนรากฐานการวิจัยเสียงเดียวกันที่เริ่มจากโมเดลเสียงเลียนแบบมนุษย์เป็นโมเดลแรกของโลก

> ชื่อผลิตภัณฑ์ ElevenAgents/ElevenCreative/ElevenAPI ใช้ตามที่ปรากฏใน raw source โดยตรง (หน้าเว็บ elevenlabs.io)

## การวิเคราะห์เชิงลึก (Deep Analysis)

### โครงสร้างแพลตฟอร์ม
- **ElevenCreative** — เครื่องมือสร้าง/แก้ไขสื่อ (speech, music, SFX, voice cloning, image/video) สำหรับครีเอเตอร์
- **ElevenAgents** — ตัวแทนสนทนาแบบ omnichannel (โทรศัพท์, แชท, อีเมล, WhatsApp) พร้อม analytics, testing, guardrails และ workflows
- **ElevenAPI** — ชุด API สำหรับนักพัฒนา (TTS, STT, Music) ที่ให้ควบคุมเชิงลึก

### วิวัฒนาการของโมเดล (จากไทม์ไลน์วิจัย)
- **2023:** Eleven Multilingual v2 (ความเหมือนจริง) → Eleven Turbo v2 (ความหน่วงต่ำ)
- **2024:** Eleven Flash v2.5 (ความหน่วงต่ำพิเศษ)
- **2025:** Scribe (ASR) → Eleven v3 (โมเดล TTS ที่ expressive ที่สุด) → Eleven Music
- **2025–2026:** Scribe v2 Realtime → Scribe v2 → Expressive Mode for Agents → Music v2 → **Dubbing v2** (รักษาอารมณ์/การแสดงของต้นฉบับข้ามภาษา — จุดเปลี่ยนสำคัญ)

### แนวคิดที่ขัดแย้ง/น่าสนใจ
- **ความตึงระหว่าง "เครื่องมือ" กับ "แพลตฟอร์ม":** การรวมฝั่งครีเอเตอร์และนักพัฒนาไว้ที่เดียวลดช่องว่างการผลิต แต่ก็ทำให้ตัดสินใจยากขึ้นว่า งานไหนควรใช้ UI สำเร็จรูป (Creative) งานไหนควรเขียนโค้ด (API)
- **ความสามารถเสียงมนุษย์ vs ความเสี่ยง:** voice cloning + expressive agents เปิดประตูทั้งการผลิตเนื้อหาและความเสี่ยงด้าน identity/spoofing — จุดนี้เป็นดาบสองคมที่ผู้ใช้ต้องประเมินเอง
- **Scribe 98% accuracy** — โมเดล STT ที่เป็นส่วนเสริมของระบบนิเวศเสียงเดียวกัน (สำหรับบริบทเปรียบเทียบกับผู้เล่น ASR รายอื่น ต้องหาแหล่งข้อมูลเพิ่มเติมภายหลัง)

### ElevenAgents ในบริบท agentic AI (เชื่อมโยงที่ยังไม่เคยทำ)
ElevenAgents ไม่ได้เป็นแค่ "ฟีเจอร์เสียง" — มันคือ **agent ตัวหนึ่งในคลัสเตอร์ agentic AI ของ wiki นี้** พอเทียบกับ 2 agent อีกตัวจะเห็นจุดยืนที่ต่างกัน:

| มิติ | **ElevenAgents** | **OpenClaw** | **Hermes-in-Obsidian** |
|---|---|---|---|
| Modality | เสียง/แชท (omnichannel) | แอปแชท (WhatsApp, Telegram...) | Obsidian (โน้ต) |
| งานหลัก | CX/บริการลูกค้า (refund, support) | จัดการชีวิตดิจิทัลวงกว้าง | ดูแล knowledge base |
| สภาพแวดล้อม | Cloud (ของ ElevenLabs) | เครื่อง/VPS ของคุณ | Docker + vault |
| Guardrails | มีในตัว (policy-based) | ต้องตั้งเอง (VPS, skills) | 3 ชั้น (skill/Docker/mask) |
| ย้อนกลับ | ไม่ได้พูดถึง | ยาก (โลกภายนอก) | **Git undo ได้** |

*(OpenClaw = [[wiki/syntheses/OpenClaw Synthesis|OpenClaw Synthesis]], Hermes = [[wiki/syntheses/OpenClaw vs Hermes-in-Obsidian|OpenClaw vs Hermes-in-Obsidian]])*

**ข้อสังเกตเชิงวิเคราะห์:**
- **ElevenAgents เป็น agent "แบบปิด" ที่ปลอดภัยสุดใน 3 ตัว** — guardrails/analytics มีในตัว ผู้ใช้ไม่ต้องตั้งค่าความปลอดภัยเอง (ต่างจาก OpenClaw ที่ต้องคุม VPS เอง) แต่ก็แลกกับ**การไม่เป็นเจ้าของ** (โค้ด/ข้อมูลอยู่ใน cloud ของ ElevenLabs)
- **จุดร่วมที่สำคัญ:** ทั้ง 3 ตัวเสี่ยง **prompt injection** — ElevenAgents อ่านอีเมล/แชทลูกค้า, OpenClaw อ่านเว็บ/อีเมล, Hermes อ่านโน้ต — ความเสี่ยงเป็น class เดียวกัน แม้จุดควบคุมต่างกัน
- **มุมที่ ElevenLabs ต่างจากอีก 2 ตัว:** เป็น agent ตัวเดียวที่มี **ตลาด B2B จริง** (Deliveroo, Meesho, Cars24) — อีก 2 ตัวเป็น consumer/DIY — สะท้อนว่า "agent" กำลังแยกเป็น 2 ตลาด: enterprise CX (ปิด, มี SLA) vs personal automation (เปิด, DIY)

### Dubbing v2 ↔ Shadowing: สองปรัชญาที่สวนทางกัน
เชื่อมโยงกับ [[wiki/syntheses/English Learning Guide|English Learning Guide]]:
- **Dubbing v2** รักษา "อารมณ์และการแสดงของต้นฉบับข้ามภาษา" — แปลว่า AI ทำให้**ไม่ต้องฟังเสียงต้นฉบับ**ก็เข้าใจอารมณ์
- **Shadowing** (เทคนิคใน [[wiki/concepts/Shadowing Technique|Shadowing Technique]]) กลับเน้น**เลียนแบบเสียงต้นฉบับ**ด้วยตัวเองเพื่อฝึกกล้ามเนื้อเสียง
- **ความตึง:** ยิ่ง AI แปล/พากย์เก่งขึ้น (Dubbing) ยิ่งลดแรงจูงใจในการฝึกทักษะการฟัง/พูดจริง (Shadowing) — สะดวก แต่ทักษะภาษาที่ "active" (พูดเอง) ไม่ได้มาโดยอัตโนมัติจากการฟัง AI แปล
- **นัยยะ (so what):** เครื่องมือ AI เสียงเก่งขึ้น ไม่ได้แทนที่การฝึก แต่เปลี่ยน "สิ่งที่ต้องฝึก" — การฟังอาจถูก AI ช่วยได้ แต่การพูดออกเสียงยังต้องใช้กล้ามเนื้อจริง

### คำถามเปิด (Open Questions)
- guardrails ของ ElevenAgents "เพียงพอ" จริงไหมเมื่อ scale ถึงหมื่นสายสนทนา? — source เป็นหน้าขายของบริษัท ให้ข้อมูลด้านเดียว
- หาก voice cloning แพร่หลาย เกณฑ์ "เสียงใครเป็นของใคร" จะเปลี่ยนไปไหม? — นอกขอบเขต source (ต้องหาแหล่งกฎหมาย/นโยบายเพิ่มเติม)

### การประยุกต์ใช้
- **ครีเอเตอร์:** พากย์เสียง/พ็อดแคสต์/เพลงประกอบ โดยไม่ต้องจ้างนักพากย์ — เห็นได้จากกรณี NVIDIA, Duolingo, Clay
- **ธุรกิจ:** Voice agents สำหรับ CX แบบ omnichannel — Deliveroo, Meesho, Cars24 ใช้ลดต้นทุนบริการลูกค้าแบบ real-time หลายภาษา
- **นักพัฒนา:** ใช้ TTS/STT/Music API ฝังในแอปของตัวเอง (เช่น Eleven Flash 75ms เหมาะกับ conversational use case)

### ข้อควรระวัง
- TTS API รองรับ 29+ ภาษา ขณะที่ speech generation รองรับ 70+ ภาษา — ต้องเช็คสเปคต่อ feature ก่อนใช้งานจริง
- Voice cloning และ agents ควรใช้ภายใต้ policy ที่ชัดเจน (guardrails ใน ElevenAgents มีไว้ตอบโจทย์นี้)

## การเชื่อมโยง (Network)
- เชื่อมโยงกับ: [[wiki/MOCs/AI Audio MOC|AI Audio MOC]], [[wiki/sources/ElevenLabs|ElevenLabs]]
- เปรียบเทียบ agentic AI: [[wiki/syntheses/OpenClaw Synthesis|OpenClaw Synthesis]], [[wiki/syntheses/OpenClaw vs Hermes-in-Obsidian|OpenClaw vs Hermes-in-Obsidian]]
- ความตึงกับการเรียนรู้: [[wiki/syntheses/English Learning Guide|English Learning Guide]] (Dubbing vs Shadowing), [[wiki/concepts/Shadowing Technique|Shadowing Technique]]
