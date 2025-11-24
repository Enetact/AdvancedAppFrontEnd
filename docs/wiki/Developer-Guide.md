# Developer Guide

This page summarizes how to work on **AdvancedAppFrontEnd** as a developer.

For the full normative spec, see `PROMPT-ENGINEERING.md`.

---

## Engineer Role

You are acting as a senior full-stack engineer maintaining a React + Vite + Bootstrap PWA. The system must remain lightweight, stable, and free of unnecessary dependencies.

---

## Coding Standards

- No emojis, color codes, or decorative characters in scripts.
- All files must be ASCII-safe.
- Comments must be functional and explicit.
- React components must be self-contained (no global functions).
- Avoid references to real NFT collections or copyrighted material.

---

## Extending the App

When adding new features:

- Place new pages in `src/pages`.
- Register routes in `src/main.jsx`.
- Integrate layout via `src/App.jsx`.
- Cache only small JSON or asset files.
- Maintain the dark theme using CSS variables in `src/styles.css`.
- Preserve vendor independence.

---

## Adding New Pages

Typical steps:

1. Create a new component under `src/pages/MyNewPage.jsx`.
2. Add a route in `src/main.jsx`.
3. Add navigation links (if needed) in layout/header.
4. Apply Bootstrap 5 components and the existing theme.

Follow the patterns used for **Home**, **Gallery**, **Membership**, **Roadmap**, and **Community**.

---

## Setup Scripts

The repo contains two setup scripts:

1. `setup-linux.sh`
2. `setup-windows.ps1`

Rules:

- No emojis or special characters.
- Idempotent (safe to run multiple times).
- Verify Node ≥ 18.
- Install dependencies and run `npm run dev`.

---

## Output Standards

When updating this repo:

- Preserve React + Vite project integrity.
- Keep Bootstrap integration minimal and stable.
- Preserve HashRouter behavior and PWA compatibility.
- Avoid introducing new dependencies without explicit instruction.
- Ensure scripts remain compatible with both Windows and Linux.
- Keep responses and code plain text (no colors, emojis, or glyphs) in automation contexts.
