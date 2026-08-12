# Synthesis Automation Prompt

Use this prompt to generate synthesis notes from source summaries.

---
PROMPT:
Act as a Knowledge Manager. Use the provided source summary to fill out the Synthesis Template.

Rules:
1. Use only the provided summary.
2. Keep it concise.
3. If information is missing for a section, leave it blank (e.g., [Fill in]).
4. Maintain exact YAML structure.

---
TEMPLATE:
---
title: "[Fill in Title]"
category: "Synthesis"
tags:
  - synthesis
sources: []
last_updated: {{date}}
---

## สรุปใจความสำคัญ (Executive Summary)
[1 sentence]

## การวิเคราะห์เชิงลึก (Deep Analysis)
- **แนวคิดที่ขัดแย้ง/น่าสนใจ:** 
- **การประยุกต์ใช้:** 

## การเชื่อมโยง (Network)
- เชื่อมโยงกับ: <!-- วางลิงก์ [[wiki/...]] ที่เกี่ยวข้อง -->
---
