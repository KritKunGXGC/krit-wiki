---
title: "Obsidian + Agentic AI? Full Hermes Obsidian Workflow & Wiki Prep"
source: "https://www.youtube.com/watch?v=znj-WpMj1dI"
author: "Wanderloots"
published: 2026-07-23
created: 2026-08-11
tags:
  - clippings
  - obsidian
  - agentic-ai
---

> [!note] Reconstruction
> The original clipped file was lost. This file was reconstructed from the video metadata and transcript excerpts recovered via web search. Full transcript may be incomplete.

# Obsidian + Agentic AI? Full Hermes Obsidian Workflow & Wiki Prep

## Overview
This video demonstrates how to safely integrate an AI agent (Hermes) into an Obsidian vault using a three-tier access control system (skills, Docker mount controls, system level) and Docker mounting, plus Git version control as an "undo button."

## Key Points

### Basic Hermes + Obsidian Setup
- Hermes uses an Obsidian skill to read/write notes in the vault: create notes, add tags, and link existing notes to new ones.
- Example: Hermes created a note called "poetry" with the tag "topic" and linked an existing haiku note to it; the link appears in the Open Graph View.
- Hermes can read notes in the vault and answer questions about them (e.g., a "code blue" glossary note).

### Version Control (Git) as an Undo Button
- Have Hermes initialize the vault root as a git repo and make a baseline commit.
- Commits act as save points: before/after big projects, tell Hermes to commit; if it makes a mess, roll back to any point.
- Creates `.git` and `.gitignore` files in the vault folder.

### Three-Tier Access Control
1. **Skills layer (soft / best-practices):** Edit the Obsidian skill to add rules like "never write, only read files in folder X" or "never read or write to the private folder." Weak layer — the agent may not always follow its own rules, especially after context compression. This is a best-practices layer, not a security layer.
2. **Docker mount controls (hard):** In `config.yaml`, map host paths to container paths with a mode:
   - Modes: `RO` (read-only), `RW` (read-write, default).
   - Limit a folder (e.g., own notes, journals, book quotes) to `:RO` so Hermes can read but not modify it.
   - **Mask folder:** to block access entirely (e.g., confidential notes, therapy sessions, business strategy), create a separate empty folder on the host at the vault root and bind-mount it to the vault's private folder, so the agent sees an empty folder and cannot reach the real one.
3. **System level:** third way to restrict access at the OS/system level.

## Recommendations
- Always check whether Hermes can perform a task itself before doing it manually.
- Use version control whenever an AI updates a knowledge base.

## References
- Full video: https://www.youtube.com/watch?v=znj-WpMj1dI
- Companion video on Docker mounting (mentioned in the video).
