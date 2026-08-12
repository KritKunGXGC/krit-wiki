# Change Log

This is an append-only chronological log of all operations performed on this wiki.

---

## [2026-08-09] ingest | raw/memex_clipping.md
- Created [[Vannevar Bush]] page under Entity category.
- Created [[Memex]] page under Concept category.
- Created [[Associative Trails]] page under Concept category.
- Updated `index.md` cataloging these pages.

## [2026-08-09] setup | Initialized LLM Wiki structure
- Created `GEMINI.md` (System Schema & Instructions)
- Created `index.md` (Content Index)
- Created `log.md` (Change Log)
- Configured directory layout (`raw/` and `wiki/` folders)

## [2026-08-11] structure | Improved wiki folder documentation
- Rewrote `wiki/README.md` as a Map of Content (MOC) with structure overview, page listings, and cross-references
- Added `wiki/events/README.md` placeholder to document the reserved Events category
- Fixed inconsistent links in root `index.md` — all wiki page references now use the `wiki/` prefix consistently
- Updated `index.md` last_updated date to 2026-08-11

## [2026-08-11] audit | Retroactively catalogued pre-existing content (ElevenLabs, Obsidian Agentic AI Workflow, Wanderloots, AI-Audio, Preferences) that existed without log entries

## [2026-08-11] cleanup | Resolving naming collisions, consolidating sources, and deprecating redundant index
- Renamed `wiki/syntheses/ElevenLabs.md` to `ElevenLabs-Synthesis.md`
- Deleted redundant `wiki/sources/Wanderloots.md`
- Deprecated `wiki/index.md`, consolidated content into root `./index.md`
- Updated all broken links and index references to match new structure

## [2026-08-11] cleanup | Sanitizing graph and removing redundant template
- Deleted `wiki/events/TEMPLATE.md`
- Sanitized phantom wikilink in `_system/SYNTHESIS_INSTRUCTIONS.md`

## [2026-08-11] ingest | raw/What is OpenClaw Explained for Beginners.md
- Created synthesis page under wiki/syntheses/What is OpenClaw Explained for Beginners.md

## [2026-08-11] ingest | The Free Obsidian Journal that took 400 hours to build
- Created [[wiki/sources/The Free Obsidian Journal that took 400 hours to build]] and its summary.
- Created [[wiki/syntheses/Essential Obsidian Plugins]] synthesis.
- Updated index.md.

## [2026-08-11] cleanup | Consolidated summary files into parent sources
- Merged content from 4 summary files into parent source files under `## Summary` section.
- Deleted redundant summary files.
- Updated index.md references.

## [2026-08-11] lint | Fixed broken links, index gaps, and placeholder content
- Replaced 3 broken `[[ElevenLabs-Summary]]` links with `[[ElevenLabs]]` in `wiki/concepts/Memex.md`, `wiki/concepts/Associative Trails.md`, and `wiki/MOCs/AI-Audio.md`.
- Added missing `[[wiki/sources/What is OpenClaw Explained for Beginners]]` entry to `index.md` Sources section.
- Fixed non-rendering YouTube embed and removed placeholder text in `wiki/sources/Obsidian Agentic AI Workflow.md`.
- Added source link to `wiki/syntheses/What is OpenClaw Explained for Beginners.md` network section (resolves orphan source page).
- Updated `wiki/README.md` MOC to list all 5 sources, syntheses, and MOCs.

## [2026-08-11] ingest | raw/Note Taking & Research Assistant Powered by AI.md
- Created [[wiki/sources/Note Taking & Research Assistant Powered by AI]] under Source category.
- Created [[wiki/syntheses/English Learning Guide]] synthesis under Syntheses category.
- Updated index.md with both new pages.

## [2026-08-11] cleanup | Standardized wikilink style
- Replaced 4 bare wikilinks with `wiki/`-prefixed or relative links for consistent rendering: `wiki/concepts/Associative Trails.md`, `wiki/MOCs/AI-Audio.md` (2 places), `wiki/syntheses/Essential Obsidian Plugins.md`.

## [2026-08-11] ingest | raw/NotebookLM Mind Map (1).png (merged with Note Taking source)
- OCR'd the mind map image (Windows OCR) and added `English Learning Framework (Mind Map)` section to `wiki/sources/Note Taking & Research Assistant Powered by AI.md`.
- Added `raw/NotebookLM Mind Map (1).png` to the source page's frontmatter `sources` list.
- Expanded `wiki/syntheses/English Learning Guide.md` Deep Analysis to cover the 7-domain learning framework.

## [2026-08-11] restore | Recovered missing raw source for Obsidian_Agentic_AI_Workflow
- Reconstructed `raw/Obsidian_Agentic_AI_Workflow.md` from YouTube video metadata + transcript excerpts recovered via web search (video by Wanderloots, 2026-07-23). (Raw file name unchanged — see 2026-08-12 rename below.)
- Rewrote `wiki/sources/Obsidian Agentic AI Workflow.md`: set author to Wanderloots, added real `sources` reference, removed both missing-file warnings, and expanded content with key points (3-tier access control, Git version control, Docker mount modes, mask folder).

## [2026-08-11] cosmetic | Obsidian vault beautification (plugins, colors, dashboard, CSS)
- Enabled previously installed but disabled plugins: `editing-toolbar`, `recent-files-obsidian`, `smart-connections` (added to `community-plugins.json`).
- Configured `colored-tags` data.json with fixed category colors (clippings, synthesis, moc, obsidian, english-learning, ielts, openclaw, agentic-ai, system, etc.).
- Configured `graph.json` with color groups per tag (synthesis, MOC, obsidian, clippings, english-learning, ielts, openclaw/agentic-ai, system), showTags on, hideUnresolved on, showOrphans off.
- Created `.obsidian/snippets/wiki-beauty.css` (callouts, tables, headings, properties, tag pills, dashboard cards) and enabled it in `appearance.json`.
- Rebuilt root `index.md` as a Dataview-driven dashboard: per-category tables, stats, and recent-pages list that update automatically on every ingest. NOTE: index.md no longer contains static links — maintain wiki pages and the index refreshes itself.

## [2026-08-11] cosmetic | Installed 8 more community plugins
- Downloaded from GitHub releases into `.obsidian/plugins/`: Templater, Metadata Menu, Linter, obsidian-git, Homepage, Iconize, Breadcrumbs, Banners.
- Added all 8 to `community-plugins.json` (enabled).
- Pre-configured: Homepage → opens `index.md` on startup; Templater → template folder `_system`; obsidian-git → auto backup every 10 min with commit message "vault backup: {{date}}".
- Remaining plugins (Linter, Metadata Menu, Iconize, Breadcrumbs, Banners) to be configured in the Obsidian Settings UI after reload.

## [2026-08-11] improvement | Configured new plugins + deepened wiki content
- Configured **Linter** (`obsidian-linter/data.json`): lint-on-save enabled, auto-updates `last_updated` via YAML Timestamp (format YYYY-MM-DD), YAML format/title, no-tabs, trailing-spaces, space-after-list-markers, paragraph/heading blank lines, line-break-at-document-end, empty-line-around code fences/embeds/tables. `title-match-file-name` disabled to preserve descriptive titles. Ignores `.obsidian`, `.agents`, `.claude`.
- Configured **Banners** (`obsidian-banners/data.json`): gradient style, height 300, drag/replace/zoom/fade enabled.
- Upgraded `_system/TEMPLATE.md` to Templater syntax (`<% tp.file.title %>`, `<% tp.date.now("YYYY-MM-DD") %>`) and replaced empty `[[ ]]` placeholder with a comment.
- Cleaned empty `[[ ]]` placeholder in `_system/SYNTHESIS_INSTRUCTIONS.md`.
- Created concept pages from the English Learning source: `wiki/concepts/Shadowing Technique.md` and `wiki/concepts/CEFR.md`; cross-linked from the source page and the English Learning Guide synthesis.

## [2026-08-12] setup | Configured remaining plugins (Iconize, Metadata Menu, Breadcrumbs)
- **Iconize** (`obsidian-iconize/data.json`): folder icons for `wiki/entities` (users), `wiki/concepts` (lightbulb), `wiki/sources` (book-open), `wiki/events` (calendar-days), `wiki/memory` (brain), `wiki/MOCs` (network), `wiki/syntheses` (layers), `wiki` (folder-tree), `raw` (inbox), `_system` (settings). Rule matching by full path, native Lucide pack (`Li:` prefix).
- **Metadata Menu** (`metadata-menu/data.json`): defined preset fields matching the wiki's frontmatter schema — `title` (input), `category` (select: Entity/Concept/Source/Event/Memory/MOC/Synthesis), `tags` + `sources` (multiselect), `last_updated` (date, YYYY-MM-DD) for property pickers and in-note field editing.
- **Breadcrumbs** (`breadcrumbs/data.json`): verified against plugin source (v4.21.10) — config already present and matches current `DEFAULT_SETTINGS` (up/down/same/next/prev hierarchy). No changes needed; trail/tree will render once notes adopt hierarchy fields.

## [2026-08-12] cosmetic | AnuPpuccin theme + redesigned dashboard + CSS overhaul
- Switched theme to **AnuPpuccin** (catppuccin palette), base font size 17 (`appearance.json`).
- Rewrote `wiki-beauty.css` for the new theme: gradient hero title, section heading accent dots, refined callouts/tables (accent-tinted headers, row hover), rounded properties panel, tag pills, code blocks, blockquotes, slim scrollbar, file explorer hover/active states.
- Redesigned `index.md` dashboard: hero header + 6 gradient stat cards (Entities/Concepts/Sources/Syntheses/MOCs & Memory/Updated Notes) driven by Dataview inline expressions with hover lift/glow, each linking to its section; added heading anchors.

## [2026-08-12] cleanup | Linter rule audit
- Disabled `rule:yaml-format` (all options were off → near no-op; removed YAML rewrite churn risk).
- Added `raw/` to `foldersToIgnore` so imported clippings are not reformatted on save.

## [2026-08-12] cleanup | Aligned page names with content
- `wiki/sources/ElevenLabs.md`: title "Free AI Voice Generator & Voice Agents Platform" → "ElevenLabs" (matches page focus + filename).
- `wiki/concepts/CEFR.md`: title "CEFR" → "CEFR (Common European Framework of Reference for Languages)" (matches H1 + content).
- `wiki/sources/What is OpenClaw Explained for Beginners.md`: removed " - Summary" suffix from H1 (matches title/filename).
- Renamed `wiki/memory/Preferences.md` → `System Preferences & Agentic Memory.md` (filename now reflects content); no links referenced the old name.

## [2026-08-12] setup | Installed 6 AI skills into `.agents/skills/` (via `npx skills add`)
- **obsidian-power-user** from `sleestk/skills-pipeline` (path `Obsidian/SKILL.md`, + `references/`, `.claude-plugin/`): full-featured Obsidian expert — vault design, Dataview, Templater, canvas, bases, Publish, CSS snippets, URI links, MOCs.
- **Document skills** from `anthropics/skills` (paths `skills/docx|pdf|pptx|xlsx/SKILL.md`): `docx` (create/edit Word + .dotx, tracked changes), `pdf` (read/extract/merge/OCR/forms), `pptx` (decks/templates), `xlsx` (spreadsheets/formulas/cleaning); each ships helper `scripts/`.
- **smart-tagger** from `tpitsunov/obsidian-skills` (path `smart_tagger/SKILL.md`): semantic tag suggestion from note content.
- All copied (not symlinked) into `.agents/skills/`; `skills-lock.json` updated with source/skillPath/computedHash for the 6 new entries (11 total). Verified SKILL.md present in every folder.

## [2026-08-12] improvement | Applied new skills: tagging, cross-linking, raw audit, dashboard polish
- **Smart Tagger** — enriched tags on 6 pages using existing vault vocabulary + consistent thematic tags:
  - `sources/What is OpenClaw Explained for Beginners` + `syntheses/What is OpenClaw Explained for Beginners`: added `agentic-ai`, `ai-agents`.
  - `sources/ElevenLabs` + `syntheses/ElevenLabs-Synthesis` + `MOCs/AI-Audio`: added `audio`, `ai`, `voice`.
  - `MOCs/AI-Audio`: normalized tag `MOC` → `moc` (matches lowercase tag style elsewhere).
  - `memory/System Preferences & Agentic Memory`: added `preferences`, `agentic-memory`.
- **obsidian-power-user** — filled missing cross-references so no page is orphaned:
  - Added `## See Also` to 4 source pages (How I use Folders → FINVA Folder Structure; The Free Obsidian Journal → Essential Obsidian Plugins; What is OpenClaw → its Synthesis + AI Audio MOC; ElevenLabs → AI Audio MOC + ElevenLabs Synthesis).
  - Linked the previously orphaned `memory/System Preferences & Agentic Memory` from `index.md` (MOCs & Memory section).
  - Verified: zero dead wikilinks in `wiki/` (script check), all `last_updated` bumped to 2026-08-12.
- **raw/ audit** — confirmed every file in `raw/` is referenced/ingested by a wiki page (8/9; `README.md` is the folder's own doc). Nothing to delete; inbox is clean.
- **Dashboard/CSS** — `index.md`: added Raw Inbox stat card (red accent) + Raw Inbox dataview section; added memory-page link in MOCs & Memory. `wiki-beauty.css`: dataview list views render as hoverable cards, tag chips compacted inside tables.

## [2026-08-12] lint | Full wiki linting pass (contradictions, orphans, stale claims, cross-refs)
- **Removed spurious cross-links** (over-connected topics from earlier cross-ref pass):
  - `sources/What is OpenClaw...` + `syntheses/What is OpenClaw...`: dropped unrelated AI-Audio MOC link.
  - `syntheses/OpenClaw`: dropped unrelated Memex link.
  - `syntheses/FINVA Folder Structure`: dropped unrelated AI-Audio MOC link.
  - `MOCs/AI-Audio` + `sources/ElevenLabs`: dropped weak Memex links.
  - `concepts/Memex` + `concepts/Associative Trails`: removed ungrounded claim that "AI audio platforms like ElevenLabs evolve this concept" (not in `raw/memex_clipping.md`).
  - `sources/Obsidian Agentic AI Workflow`: dropped stretched Memex link.
- **Resolved orphan `wiki/README.md`**: linked from `index.md` MOCs & Memory section (0 → 1 inbound).
- **Created `wiki/events/README.md`** placeholder — matches log.md claim, wiki/README.md, and Iconize config for the reserved Events category.
- **Created 4 author entity pages** resolving phantom wikilinks in raw frontmatter: [[wiki/entities/Tim Miller]], [[wiki/entities/Focus Café]], [[wiki/entities/Tech With Lucy]], [[wiki/entities/Wanderloots]].
- **Strengthened See Also links**: How I use Folders → Obsidian Agentic AI Workflow + Tim Miller; Journal → Focus Café; Obsidian_Agentic → Wanderloots; OpenClaw source/synthesis → Tech With Lucy.
- **Completed agentic-AI cluster**: OpenClaw synthesis ↔ Obsidian Agentic AI Workflow (ทั้งคู่เป็นเนื้อหา agentic-AI) — ลิงก์ข้ามที่สมเหตุสมผลซึ่ง lint พลาดในรอบแรก

## [2026-08-12] improvement | Deepened wiki content + new MOC/concepts + lint tooling
- **Created MOC `wiki/MOCs/Obsidian & PKM.md`** — คุมกลุ่ม Obsidian workflows (FINVA, Essential Plugins, Agentic AI Workflow) พร้อมลิงก์ไป concept/entity ที่เกี่ยวข้อง
- **Created 5 concept pages**: [[wiki/concepts/MOC (Map of Content)]], [[wiki/concepts/PARA]], [[wiki/concepts/Bases]], [[wiki/concepts/Spaced Repetition]], [[wiki/concepts/IELTS]] — อ้างอิงจาก raw source เดิมทั้งหมด
- **Expanded all 5 syntheses** (ElevenLabs, English Learning Guide, Essential Obsidian Plugins, FINVA, OpenClaw): เพิ่ม Deep Analysis, ข้อขัดแย้ง, การประยุกต์ใช้, ตารางเปรียบเทียบ — จาก ~21 บรรทัดเป็น ~40–60 บรรทัด
- **Created permanent lint script `_system/lint.js`** (dead links, orphans, frontmatter, categories) + บันทึกวิธีใช้ใน AGENTS.md §Linting Workflow
- **Colored-tags**: เพิ่มสีแท็กใหม่ (author, youtube, cloud, pkm, exams, memory, study-skills, databases, productivity)
- Updated `wiki/README.md` MOC (concepts 9 หน้า, MOCs 2 หน้า), log ตามเหตุการณ์จริง

## [2026-08-12] ingest | Event pages: vault timeline
- Created 3 event pages under `wiki/events/` from `log.md` history:
  - [[wiki/events/2026-08-09 Wiki Foundation]] — schema, folder structure, first ingest (Memex)
  - [[wiki/events/2026-08-11 Vault Setup & Beautification]] — content ingests, 8 plugins, dashboard/CSS overhaul
  - [[wiki/events/2026-08-12 AI Skills & Content Deepening]] — AI skills, lint passes, MOC/concepts/syntheses expansion
- Updated `wiki/events/README.md` to list event pages + how to add new ones; updated `wiki/README.md` Events section in MOC

## [2026-08-12] ingest | Content publication events
- Created 5 event pages for content publication dates (from raw frontmatter `published`):
  - [[wiki/events/1945-07 As We May Think Published]] — Vannevar Bush article (Memex origin)
  - [[wiki/events/2025-07-07 How I use Folders in Obsidian Published]] — FINVA article by Tim Miller
  - [[wiki/events/2026-05-28 ElevenLabs Site Snapshot]] — ElevenLabs site snapshot (web clip date)
  - [[wiki/events/2026-07-01 What is OpenClaw Published]] — OpenClaw explainer by Tech With Lucy
  - [[wiki/events/2026-07-23 Obsidian Agentic AI Workflow Published]] — Hermes+Obsidian video by Wanderloots
- Cross-linked events ↔ source pages (See Also on 4 source pages)
- Note: `raw/Note Taking...` and `raw/The Free Obsidian Journal...` have no `published` date in source — no event page created (avoid inventing data)
- Updated `wiki/events/README.md` (grouped by vault history vs content publications) + `wiki/README.md` MOC

## [2026-08-12] ingest | raw/Every Free App + Every Programming Language
- Ingested 2 new raw files:
  - `raw/Every Free App You Actually Need Explained in 20 Minutes.md` (Asylum, 2026-06-09) → [[wiki/sources/Every Free App You Actually Need Explained in 20 Minutes]] + [[wiki/syntheses/Free Software Stack]] + entity [[wiki/entities/Asylum]] + concept [[wiki/concepts/Free and Open Source Software (FOSS)]]
  - `raw/Every Programming Language Explained in 16 Minutes.md` (Just Explained, 2026-08-08) → [[wiki/sources/Every Programming Language Explained in 16 Minutes]] + [[wiki/syntheses/Programming Languages Explained]] + entity [[wiki/entities/Just Explained]] + concept [[wiki/concepts/Vibe Coding]]
- Created 2 event pages: 2026-06-09 (Free Apps) + 2026-08-08 (Programming Languages)
- Cross-linked: Obsidian & PKM MOC ↔ Free Software Stack (Obsidian เป็น FOSS), Vibe Coding ↔ AI/agent cluster
- Updated wiki/README.md MOC, events/README.md, log.md

## [2026-08-12] cosmetic | Timeline section in dashboard
- Added `date` field to frontmatter of all 8 event pages (for Dataview sorting)
- Added **Timeline** section to `index.md`: Dataview table of all events sorted by `date` ASC (1945 → 2026)
- Added **Timeline** stat card to dashboard grid (rosewater accent, counts pages with `date` field)

## [2026-08-12] ingest | Synthesis: OpenClaw vs Hermes-in-Obsidian
- Created [[wiki/syntheses/OpenClaw vs Hermes-in-Obsidian]] — เปรียบเทียบ agentic AI สองแนวทาง: general-purpose (OpenClaw) vs domain-specific (Hermes-in-Obsidian)
- เนื้อหาครอบคลุม: ตารางเปรียบเทียบ 8 มิติ, ปรัชญา "Git undo" vs "undo ยากในโลกภายนอก", ความเสี่ยงร่วม (prompt injection) และจุดต่าง (Claw Hub vs context compression), การใช้ร่วมกันแบบแยกสิทธิ์
- Cross-linked ไปกลับ: OpenClaw synthesis, Obsidian Agentic AI Workflow source, Obsidian & PKM MOC, entities (Tech With Lucy, Wanderloots), events (วิดีโอทั้งสอง)
- Updated wiki/README.md Syntheses section + log
- Updated `wiki/README.md` MOC to list new entities + events placeholder; bumped `last_updated` only on pages actually edited (FINVA Folder Structure, Obsidian Agentic AI Workflow).
- Verified with script: zero dead wikilinks; all 24 wiki pages have full frontmatter.

## [2026-08-12] ingest | Full raw/ ingestion verification pass
- Audited every file in `raw/` against `wiki/` — confirmed 8/8 source documents already ingested (README.md is the folder's own doc):
  - `raw/Free AI Voice Generator & Voice Agents Platform.md` → [[wiki/sources/ElevenLabs]]
  - `raw/How I use Folders in Obsidian.md` → [[wiki/sources/How I use Folders in Obsidian]]
  - `raw/memex_clipping.md` → [[wiki/entities/Vannevar Bush]] + [[wiki/concepts/Memex]] + [[wiki/concepts/Associative Trails]]
  - `raw/Note Taking & Research Assistant Powered by AI.md` → [[wiki/sources/Note Taking & Research Assistant Powered by AI]] (+ `NotebookLM Mind Map (1).png` merged in)
  - `raw/Obsidian_Agentic_AI_Workflow.md` → [[wiki/sources/Obsidian Agentic AI Workflow]]
  - `raw/The Free Obsidian Journal that took 400 hours to build.md` → [[wiki/sources/The Free Obsidian Journal that took 400 hours to build]]
  - `raw/What is OpenClaw Explained for Beginners.md` → [[wiki/sources/What is OpenClaw Explained for Beginners]]
- Added missing `## Summary` to `wiki/sources/What is OpenClaw Explained for Beginners.md` (all other source pages have one).
- Cleaned redundant `(from ...)` text in Sources sections of Memex, Associative Trails, and Vannevar Bush pages.
- Normalized fragile `../`-relative wikilinks to `wiki/`-prefixed links in Memex, Associative Trails, Vannevar Bush, CEFR, Shadowing Technique (consistent with vault-wide convention).
- Rewrote `wiki/README.md` MOC: added frontmatter (category: MOC), listed all 6 sources, 5 syntheses, 4 concepts, memory page; switched links to `wiki/`-prefixed style.
- Verified with script: all 19 wiki pages have full frontmatter (title, category, tags, sources, last_updated); zero dead wikilinks.
- `index.md` is Dataview-driven and auto-catalogs; no static changes required.

## [2026-08-12] cleanup | Navigation tidy: MOC Hub + naming standardization + archive
- **Created MOC Hub** `wiki/MOCs/_Hub.md` — จุดเริ่มต้นนำทางเดียว: ลิงก์ทุก MOC (AI-Audio, Obsidian & PKM, wiki/README) + syntheses สำคัญ 7 รายการ + events/memory/index พร้อมคำอธิบายหนึ่งบรรทัด; ลิงก์จาก `index.md` Start Here block
- **index.md**: เพิ่มส่วน "เริ่มต้นตรงนี้" (ลิงก์ Hub, MOCs, README, syntheses คัดสรร) + callout อธิบายโครงสร้าง vault (raw/ = inbox, wiki/ = knowledge, _system/ = rules) — คง Dashboards Dataview เดิมไว้ครบ
- **Naming standardization**: renamed `wiki/sources/Obsidian_Agentic_AI_Workflow.md` → `wiki/sources/Obsidian Agentic AI Workflow.md` (underscores → spaces ให้ตรง convention); อัปเดตลิงก์ใน 10 ไฟล์ (entities/Wanderloots, events ×2, MOCs/Obsidian & PKM, README, sources/How I use Folders, syntheses ×4) + log.md; `raw/` ไม่แตะ (ชื่อ raw file คงเดิม)
- **Reachability fix**: FOSS concept ได้ลิงก์ขาเข้าเพิ่มจาก Free Software Stack synthesis + Every Free App source; 1945-07 event ได้ลิงก์ขาเข้าจาก Vannevar Bush + Memex (ไม่ถูกเข้าถึงผ่าน index เท่านั้น)
- **Bidirectional navigation**: เพิ่ม backlink "กลับไป MOC Hub" ในหน้า AI-Audio MOC + Obsidian & PKM MOC — Hub มีลิงก์ขาเข้าครบ 4 จุด (index, README, MOC ทั้งสอง)
- **Archive**: moved `Excalidraw/Drawing 2026-08-12 01.45.49.excalidraw.md` (ไม่มีลิงก์อ้างอิง) → `_archive/Excalidraw/`; ลบโฟลเดอร์ `Excalidraw/` ที่ว่าง (ไม่ลบไฟล์)
- ไม่พบ empty folders ใน `wiki/`, ไม่พบ near-duplicate pages, syntheses ทั้งหมด ≥ 39 บรรทัด (ไม่มี thin)
- Verified: lint clean, zero dead links, zero orphans (49+1 หน้า)

## [2026-08-12] cosmetic | Graph View: node colors by category + theme polish
- `.obsidian/graph.json`: replaced tag-based color groups with `category:`-based groups using catppuccin palette — Entity=teal, Concept=blue, Source=sapphire, Event=red, Memory=lavender, MOC=mauve, Synthesis=peach; added gray group for `"raw"` inbox files.
- `wiki-beauty.css`: added Graph View section (default/highlighted node fill, focal circle, edge + highlight lines, labels, arrows) using `--ctp-*` variables so the graph matches AnuPpuccin.

## 2026-08-12 (late) - Rename duplicate synthesis page
- ตั้งชื่อซ้ำ: wiki/syntheses/What is OpenClaw Explained for Beginners มีชื่อเดียวกันกับ wiki/sources/... (quick switcher/กราฟสับสน)
- Rename เป็น wiki/syntheses/OpenClaw Synthesis.md + อัปเดตลิงก์ 8 ไฟล์ + alias (README, _Hub) + frontmatter title
- ตรวจ: lint 50/0/0 ✓, stale refs 0 ✓

## [2026-08-12] setup | Installed 2 mind map plugins (manual, GitHub releases)
- **Mindmap NextGen** v1.16.0 (`obsidian-mindmap-nextgen`) — แปลง `#` headings + `-` lists ในโน้ตเป็น mind map อัตโนมัติ (viewer/embed ด้วย code block ```markmap)
- **Enhancing Mindmap** v0.2.5 (`obsidian-enhancing-mindmap`) — แก้ไข mind map แบบสองทาง: วาดใน map → markdown อัปเดตตาม และกลับกัน
- ติดตั้งผ่าน GitHub releases → `unzip` ลง `.obsidian/plugins/` (3 ไฟล์: main.js, manifest.json, styles.css แต่ละตัว) + ลงทะเบียนใน `community-plugins.json` (รวม 26 plugins) — ติดตั้งตอน Obsidian ปิดเพื่อกัน config ถูกเขียนทับ
- ลบไฟล์ชั่วคราว `_system/_tmp_install/`, `_system/diagnose.js` (สคริปต์วินิจฉัยเก่า) — ตรวจ: lint 50/0/0 ✓

## [2026-08-12] content | Mind map: Every Free App You Actually Need
- เพิ่มส่วน `## Mind Map` (markmap code block) ใน `wiki/sources/Every Free App You Actually Need Explained in 20 Minutes.md` — Render เป็นแผนผังด้วย Mindmap NextGen
- โครงสร้าง 12 แขนง: หลักการ, Office (LibreOffice), Media Player (VLC), Video Editing (Resolve), Streaming (OBS), Photo (GIMP), Audio (Audacity), 3D (Blender), Notes (Obsidian), Coding (Scratch), Game Engine (Godot), Honorable Mentions (HandBrake/7-Zip) + สรุป
- ข้อมูลอ้างอิงจาก raw transcript จริง (ปีก่อตั้ง, โปรเจกต์ตัวอย่าง, ราคาที่แทนที่)

## [2026-08-12] content | Canvas แทน mind map: Every Free App
- สร้าง `wiki/canvases/Every Free App You Actually Need.canvas` (JSON Canvas 1.0): root node + 12 กล่องแอป (LibreOffice, VLC, Resolve, OBS, GIMP, Audacity, Blender, Obsidian, Scratch, Godot, HandBrake, 7-Zip) เรียง grid 3 คอลัมน์ เชื่อมด้วย edges สีตามหมวด + ลูกศร
- แทนที่ markmap code block ในหน้า source ด้วย `![[wiki/canvases/Every Free App You Actually Need.canvas|500]]` (embed canvas ขนาด 500px)
- อัปเกรด `_system/lint.js`: รองรับ `.canvas` (walk + resolve) — embed canvas ไม่เป็น dead link อีกต่อไป
- ตรวจ: 13 nodes / 12 edges, ids unique, ไม่มี dangling edges, lint 50/0/0 ✓

## [2026-08-12] ingest | raw/Form, Function, & Fun! - My Obsidian Vault Tour 2024
- Ingest วิดีโอ CyanVoxel Vault Tour 2024 (เผยแพร่ 2024-03-17) — theming/CSS, 17 plugins, ระบบองค์กร Zettelkasten × PARA × MOCs
- สร้าง 5 หน้า: [[wiki/sources/Form Function Fun - My Obsidian Vault Tour 2024]] + [[wiki/syntheses/CyanVoxel Vault System]] + entity [[wiki/entities/CyanVoxel]] + concept [[wiki/concepts/Zettelkasten]] (ใหม่) + event [[wiki/events/2024-03-17 Form Function Fun Published]]
- Cross-link: Obsidian & PKM MOC (+2 ลิงก์: synthesis/source/concept/entity), PARA (เพิ่มมุมมอง CyanVoxel), event ↔ Vault Setup & Beautification
- อัปเดต wiki/README.md MOC + events/README.md + log.md

## [2026-08-12] cosmetic | Graph View beautification (forces, arrows, colors, CSS)
- `.obsidian/graph.json`: แยกสีให้ชัดเจนตาม Catppuccin — Entity=teal, Concept=blue, **Source=green** (เดิม sapphire ใกล้ blue เกินไป), Event=red, **Memory=yellow** (เดิม lavender), MOC=mauve, Synthesis=peach, raw=gray
- **แรงจัดวางใหม่**: linkDistance 250→140 (กราฟแน่นขึ้น), repelStrength 12, linkStrength 1.5, centerStrength 0.5, nodeSizeMultiplier 1.3, lineSizeMultiplier 1.1
- **showArrow: true** (ลิงก์ชี้ทิศดูเป็นระบบ), textFadeMultiplier 0.3 (label จางเมื่อซูมออก — ลดความรก), scale 0.8
- `wiki-beauty.css` Graph View section: ambient radial-gradient background (mauve/sky soft glow), node `drop-shadow` glow on hover/focus, link brightness on hover, **glassmorphism control panel** (blur + rounded + shadow), local-graph colors ให้ตรงกัน
- ตรวจ: JSON valid ✓, CSS braces balanced ✓, lint 50/0/0 ✓

## [2026-08-12] setup | Personal notes space (`notes/`)
- สร้างโฟลเดอร์ `notes/` ระดับบนสุด — พื้นที่ส่วนตัวของมนุษย์: free-form, ไม่มี frontmatter, ไม่มี naming convention บังคับ (อยู่นอกขอบเขต LLM Wiki)
- `notes/README.md` อธิบายวัตถุประสงค์ + กฎ "AI ห้ามแตะ" (ห้ามแก้/ลินต์/จัดโครงสร้าง/บังคับ schema — อ่านได้เมื่อผู้ใช้ขอเท่านั้น)
- อัปเดต `AGENTS.md` §Directory Structure: เพิ่มรายการ `notes/` ระบุชัดว่าไม่อยู่ในขอบเขตการดำเนินงานของ AI
- อัปเดต `_system/lint.js`: walk() ข้ามโฟลเดอร์ `notes/` — ถูกยกเว้นจากทุกเช็ค (frontmatter, dead links, orphans)
- ตรวจ: lint ผ่าน ไม่นับ `notes/` ✓

## [2026-08-12] ingest | notes/My English Learning Routine.md (personal note → source)
- สร้างโน้ตตัวอย่าง `notes/My English Learning Routine.md` (โน้ตส่วนตัวของผู้ใช้ — ตามคำขอเพื่อสาธิต workflow "notes → wiki")
- Ingest ตาม workflow เดียวกับ raw/: สร้าง [[wiki/sources/My English Learning Routine]] โดย frontmatter `sources` อ้างอิง `notes/My English Learning Routine.md`
- โน้ตต้นฉบับคงอยู่ใน `notes/` ไม่ถูกแก้ — หน้า wiki เป็นเพียงตัวแทนที่เชื่อมเข้ากับกราฟความรู้
- Cross-link: English Learning Guide synthesis (Network section) + wiki/README.md Sources (+2 inbound — ไม่เป็น orphan); หน้าใหม่ลิงก์ออกไป CEFR, IELTS, Shadowing Technique, Spaced Repetition
- ตรวจ: lint 56/0/0 ✓

## [2026-08-12] setup | Clarified notes/ governance: human-readable, AI ingests by reading only
- อัปเดต AGENTS.md §Directory Structure (`notes/`): ระบุชัดว่าโน้ตเขียนโดยคนเพื่อคนอ่าน (human-first) — AI ingest ได้โดย "อ่านแล้วสร้าง wiki pages อ้างอิงกลับ" แต่ห้ามเขียนทับ/แปลงโน้ตต้นฉบับให้เป็นรูปแบบสำหรับเครื่องอ่าน
- อัปเดต `notes/README.md`: เพิ่มกฎ "ห้าม rewrite โน้ตให้ AI-friendly" + อธิบายว่า ingestion = AI อ่าน → สร้างหน้า wiki → โน้ตต้นฉบับคงเดิม 100%

## [2026-08-12] setup | Ingest workflow: reading copies in notes/ingested/ + findability
- เปลี่ยน workflow: ทุกครั้งที่ผู้ใช้ขอ ingest เนื้อหาภายนอก (URL/วิดีโอ/บทความ) AI จะบันทึกสำเนาแบบอ่านง่ายลง `notes/ingested/` (ชื่อ `YYYY-MM-DD <Title>.md`, แท็ก `#ingested`) — เป็นสำเนาสำหรับอ่านส่วนตัว ไม่ถูกแก้/ลบทีหลัง
- อัปเดต AGENTS.md: เพิ่ม bullet `notes/ingested/` ใน Directory Structure + เพิ่มขั้นตอนใน Ingestion Workflow (บันทึกสำเนา + อ้างอิงใน `sources:`)
- อัปเดต `notes/README.md`: เพิ่มส่วน Ingested copies + วิธีค้นหา (global search, Omnisearch, แท็ก `#ingested`) + Dataview index อัตโนมัติรายการโน้ตทั้งหมด (ใหม่สุดบนสุด)
- สร้าง `notes/ingested/README.md` อธิบายโฟลเดอร์

## [2026-08-12] content | Backfill reading copies: notes/ingested/ (raw sources ทั้งหมด)
- สร้างสำเนาอ่านง่าย 10 ไฟล์ใน `notes/ingested/` จาก raw sources ทั้งหมด (ตาม workflow ใหม่ — ฉบับสำหรับคนอ่าน):
  - Every Free App (Asylum), Every Programming Language (Just Explained), Form Function Fun (CyanVoxel), How I use Folders (Tim Miller), ElevenLabs, Note Taking & Research Assistant (Gemini Notebook), Obsidian Agentic AI Workflow (Wanderloots), Free Obsidian Journal (Focus Café), What is OpenClaw (Tech With Lucy), Memex Clipping
- แต่ละไฟล์: ชื่อ `2026-08-12 <Title>.md`, แท็ก `#ingested`, header ระบุผู้เขียน/วันที่/ลิงก์ต้นฉบับ, เนื้อหาทำความสะอาดจาก transcript (ลบ [music] artifacts, จัดโครงสร้างหัวข้อให้อ่านง่าย)
- `raw/` และ `wiki/` ไม่ถูกแตะ; lint ยังไม่นับ `notes/` — สำเนาไม่กระทบ health check

## [2026-08-12] cosmetic | Notes beautification (notes-beauty.css)
- สร้าง `.obsidian/snippets/notes-beauty.css` — snippet ใหม่ scoped เฉพาะหน้า notes/ ผ่าน `cssclasses: notes-beauty` (theme-agnostic ใช้ตัวแปรมาตรฐาน Obsidian ใช้ได้ทุกธีม รวม Blue Topaz ปัจจุบัน)
- สไตล์: title gradient text + hero metadata card (blockquote ใต้ H1, แถบไล่สี + เงา), หัวข้อ h2 แบบแถบสีข้าง, ลิสต์ลูกศร → + marker สี, ตารางขอบมน + header ไล่สี, divider gradient, inline code/tag pill warm accent (orange→pink ต่างจาก mauve ของ wiki)
- เพิ่ม `cssclasses: notes-beauty` ให้สำเนา `notes/ingested/` 10 ไฟล์ + `notes/README.md` (index Dataview)
- เปิดใช้ snippet ใน `appearance.json` (enabledCssSnippets + notes-beauty) — ตอน Obsidian ปิด เพื่อกัน config ถูกเขียนทับ
- ไอเดียต่อยอดจากความรู้ที่ ingest ไว้ (CyanVoxel Vault System: class-based CSS ต่อโน้ต)
