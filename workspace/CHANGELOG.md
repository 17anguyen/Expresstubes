<instructions>
## 🚨 MANDATORY: CHANGELOG TRACKING 🚨

You MUST maintain this file to track your work across messages. This is NON-NEGOTIABLE.

---

## INSTRUCTIONS

- **MAX 5 lines** per entry - be concise but informative
- **Include file paths** of key files modified or discovered
- **Note patterns/conventions** found in the codebase
- **Sort entries by date** in DESCENDING order (most recent first)
- If this file gets corrupted, messy, or unsorted -> re-create it. 
- CRITICAL: Updating this file at the END of EVERY response is MANDATORY.
- CRITICAL: Keep this file under 300 lines. You are allowed to summarize, change the format, delete entries, etc., in order to keep it under the limit.

</instructions>

<changelog>
<!-- NEXT_ENTRY_HERE -->

### [2026-02-20] — Switched Back to TypeScript
- Deleted all `.jsx` files (vite.config.js, src/index.jsx, App.jsx, all component/page JSX files)
- Project now exclusively uses TypeScript (.tsx/.ts files)
- index.html already references src/index.tsx as entry point

### [2026-02-20] — Logo Replacement
- Replaced logo in `src/components/Logo.tsx` with ExpressTubes branding image
- Hosted new logo asset and updated component to use `<img>` tag instead of background-image
- Maintained existing dimensions (234x67px) and responsive styling
</changelog>
