# LLM Wiki Schema & Instructions

Welcome! This is the core instruction manual (the Schema) for maintaining and growing this LLM Wiki. It serves as your foundational mandate and guides all operations including **Ingestion**, **Querying**, and **Linting**.

---

## 1. Directory Structure

The wiki is organized into the following workspace structure:

- `raw/` - **Raw Sources**: A curated collection of immutable source documents (articles, papers, books, notes, transcripts, etc.). These are the source of truth and are never modified by the LLM.
- `notes/` - **Personal Notes**: Free-form notes written directly by the user, for human reading. Not raw sources, not wiki content. AI agents should never edit, lint, restructure, or enforce schema on files here. Only read from here if the user explicitly asks you to reference or ingest something from it. When asked to ingest, the AI reads the note and creates wiki pages that reference it — the note itself stays untouched and is never rewritten or reformatted for machine readability.
- `notes/ingested/` - **Ingested Reading Copies**: When the user requests an ingest of external content (URL, video, article, etc.), the AI saves a human-readable copy here as `<Title>.md` tagged `#ingested`, for the user's own reading. Copies are grouped into **Thai category subfolders** (`Obsidian และ PKM/`, `AI/`, `เรียนภาษาอังกฤษ/`, `ซอฟต์แวร์และโปรแกรมมิ่ง/`, `แนวคิดและประวัติศาสตร์/`). Adding new files here is part of the ingest workflow; existing files are never edited or deleted by the AI. (No date prefix in filenames — on name collision append a numeric suffix, e.g. `-2`.)
- `wiki/` - **Wiki Pages**: LLM-generated and maintained markdown files representing concepts, entities, themes, memory, and syntheses.
  - `wiki/concepts/`, `wiki/entities/`, `wiki/sources/`, `wiki/events/`, `wiki/syntheses/`, `wiki/memory/` - the six page categories.
  - `wiki/MOCs/` - **Maps of Content**: navigation hubs that index related pages by topic.
  - `wiki/Bases/` - **Obsidian Bases**: database view files (`.base`) over wiki and notes.
  - `wiki/canvases/` - **Canvases**: visual canvas diagrams (e.g. app overviews).
- `_system/` - **Operational System**: `lint.js`, `TEMPLATE*` files, and instructions. Never listed in `index.md`.
- `_archive/` - **Archive**: files with no active links (e.g. old drawings). Never linted.
- `index.md` - **Content Index**: A content-oriented, categorized catalog of all pages in the `wiki/` directory. Updated on every ingest.
- `log.md` - **Chronological Log**: An append-only record of all wiki events (ingest, query, lint, edit) with standard timestamps and activity type.
- `AGENTS.md` - **System Schema**: This file, containing structural mandates and operational rules.

---

## 2. Document Conventions

### File Naming
- **Raw sources**: Match the original title or a clean slug, e.g., `raw/web_clipper_article.md` or `raw/meeting_2026-08-09.txt`.
- **Wiki pages**: Use Clean Title Caps and spaces, e.g., `wiki/Artificial Intelligence.md` or `wiki/Vannevar Bush.md`.

### Directory Categories
- `entities/` - People, organizations, and other distinct subjects.
- `concepts/` - Abstract ideas, theories, or methodologies.
- `sources/` - References to curated external content.
- `events/` - Chronological occurrences.
- `memory/` - Operational notes, preferences, or personal tracking.
- `MOCs/` - Maps of Content for indexing related knowledge.
- `syntheses/` - LLM-generated summaries and analytical insights.
- `_system/` - Operational files, templates, and instructions (NEVER listed in index.md).

### Frontmatter Metadata
Every wiki page (`wiki/*.md`) MUST begin with standard YAML frontmatter:
```yaml
---
title: "Page Title"
category: "Entity | Concept | Source | Event | Memory | MOC | Synthesis"
tags: []
sources: [] # Paths to raw/ source files used to construct/update this page
last_updated: YYYY-MM-DD
---
```

### Wiki Links
- Reference other wiki pages using standard markdown relative links or Obsidian double-brackets: `[[Page Name]]` or `[Page Name](./Page Name.md)`.
- Always prefer local relative links or standard double-brackets to ensure excellent rendering both in plain text markdown and inside Obsidian. E.g., `[[Vannevar Bush]]` or `[Vannevar Bush](./Vannevar Bush.md)`.

---

## 3. Operational Workflows

### A. Ingestion Workflow (Adding New Knowledge)
When the user requests to ingest a raw file (e.g., `raw/source_doc.md`):
1. **Read & Analyze**: Carefully read the raw source document. Identify key insights, entities, concepts, dates, and connections.
2. **Consult & Propose**:
   - Summarize the main takeaways for the user.
   - Propose a plan of action detailing:
     - Which new wiki pages to **create** (e.g., `wiki/New Topic.md`).
     - Which existing wiki pages to **update** with new information and cross-references.
     - How the index and log will be updated.
3. **Draft/Modify Wiki Pages**:
   - Write new pages or update existing ones using the surgical editing tools (`replace` or `write_file`).
   - Ensure every page includes appropriate YAML frontmatter, structured headings, robust summaries, and proper outbound links to other related concepts.
   - Mention and cite the raw source under a `## Sources` section at the bottom of the page.
   - When ingesting **external** content (URL, video, article — anything not already in the vault), also save a human-readable copy to `notes/ingested/` as `<Title>.md` tagged `#ingested` in the matching Thai category subfolder, so the user has a pleasant reading copy. Cite this copy alongside the original in the page's `sources:` field.
4. **Update Index (`index.md`)**:
   - Add new entries to their respective category.
   - Keep summaries updated.
5. **Update Log (`log.md`)**:
   - Append a line detailing the ingest event. E.g., `## [YYYY-MM-DD] ingest | Title of the Source`.
6. **Report Success**: Present the user with a summary of the work done, highlighting the newly created links and syntheses.

### B. Querying Workflow (Answering Questions & Exploring)
When the user asks a question:
1. **Consult Index**: Scan `index.md` (and use regex search tools if needed) to locate relevant wiki pages.
2. **Gather Context**: Read the relevant wiki pages and, if necessary, the original raw sources.
3. **Formulate & Propose**:
   - Draft a comprehensive, synthesized answer with clear citations to wiki pages (and raw sources).
   - If the answer represents a valuable new synthesis or concept, suggest saving it as a new wiki page (e.g., `wiki/Synthesis of X and Y.md`). If the user agrees, proceed to create it, update the index, and log the action.

### C. Linting Workflow (Health Checks & Maintenance)
The user can periodically ask to "lint" or health-check the wiki.
1. **Audit Files**:
   - Look for **contradictions** between different pages.
   - Identify **stale claims** that newer sources have superseded.
   - Locate **orphan pages** (pages with no inbound links).
   - Find **missing cross-references** (e.g., page A mentions concept B, but doesn't link to `[[Concept B]]`).
   - Identify **data gaps** or uncreated pages that are referenced.
2. **Propose Fixes**: Present a detailed report of findings and suggest corrections.
3. **Apply Corrections**: With user confirmation, perform surgical edits to link pages, resolve contradictions, and clean up the wiki graph.

> 💡 **Automated check**: Run `node _system/lint.js` from the vault root for a mechanical health check (dead links, orphans, frontmatter schema, invalid categories). Run it before/after every ingest or lint pass.

---

## 4. Operational Guardrails

- **Zero Tolerance for Slop**: Write clear, insightful, and professional prose. Avoid fluff.
- **Compounding Artifact**: The wiki must get richer, more interconnected, and more coherent over time.
- **Maintain Log and Index Continuously**: Every change to a wiki page must be reflected in `log.md` and, if a page was created/deleted, in `index.md`.
- **Date Format**: Always use the standard ISO format `YYYY-MM-DD` for metadata and logs (e.g., `2026-08-09`).