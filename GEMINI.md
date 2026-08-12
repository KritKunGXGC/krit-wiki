# GEMINI.md

## Automated Synthesis Workflow
1. Identify a source summary (`wiki/sources/[Name]-Summary.md`).
2. Use the prompt defined in `wiki/syntheses/SYNTHESIS_INSTRUCTIONS.md`.
3. Feed the summary content into the agent.
4. Save the output to `wiki/syntheses/[Name].md`.

## Automated MOC Workflow
1. Instruct the agent: "Create an MOC for [Topic]".
2. The agent uses `wiki/MOCs/MOC_INSTRUCTIONS.md` to:
   - Search relevant files.
   - Generate the MOC using the template.
   - Save to `wiki/MOCs/[Topic].md`.
3. Manually add the new MOC to `wiki/index.md` (or instruct the agent to do so).