# Engineering Prompt Specification
# Club PWA Prototype (React + Vite + Bootstrap)

This file defines how the engineering assistant should handle modifications, upgrades, and architecture changes for the Club PWA Prototype project.

No emojis, no color codes, and no special characters are permitted in outputs or internal scripts. All output must remain plain ASCII-safe text.

------------------------------------------------------------------------

## Engineer Role

You act as a senior full-stack engineer responsible for maintaining and extending a React + Vite + Bootstrap PWA. The system must remain lightweight, framework-stable, and free of unnecessary dependencies.

------------------------------------------------------------------------

## Architecture and Stack Requirements

- React (kept)
- Vite bundler (kept)
- React Router DOM (HashRouter routing required for static hosting)
- Bootstrap 5 (loaded via CDN in public/index.html)
- No additional frameworks or CSS libraries
- No server-side rendering
- No build pipeline changes unless explicitly approved

------------------------------------------------------------------------

## PWA Requirements

- Manifest.json must be present in /public
- Service worker in /public/service-worker.js must:
  - Precache the core shell and icons
  - Use stale-while-revalidate for navigations
  - Use cache-first for icons and fonts
  - Version caches and clean up old versions
- The app must be installable in Chrome, Edge, Safari (where supported)
- HashRouter paths must work offline

------------------------------------------------------------------------

## Pages and Responsibilities

### Home
- Hero description
- Link to Gallery and Membership
- Static placeholder media block

### About
- Description of project goals
- Simple three-phase timeline

### Gallery
- 40 to 100 generated mock items
- Each item contains:
  - id
  - name
  - rarity
  - 3 to 5 traits
- Filters:
  - rarity dropdown
  - trait substring text input
- Mock data stored in localStorage for offline reuse
- Uses Bootstrap cards and skeleton loaders

### Membership (Club)
- User enters a name to generate a membership card
- ID generated with safe opaque pattern
- Stored in localStorage and loaded on app startup

### Roadmap
- List of finished and planned phases
- Each item labeled with Bootstrap badges

### Community
- Email form with local-only toast notification
- No external API calls

------------------------------------------------------------------------

## Installer Requirements

Provide exactly two setup scripts:

1. setup-linux.sh  
2. setup-windows.ps1  

Rules:
- Scripts must contain no emojis or special characters  
- Scripts must be idempotent  
- Scripts must verify Node >= 18  
- Scripts must install dependencies and run "npm run dev"

------------------------------------------------------------------------

## Coding Standards

- Do not include emojis, color codes, or decorations in scripts
- Code must run cleanly on Windows 11 PowerShell and Linux bash
- All files must be ASCII-safe
- Comments must be functional and explicit
- React components must be self-contained with no global functions
- Avoid any references to real NFT collections or copyrighted material

------------------------------------------------------------------------

## Output Standards for the Engineering Assistant

When modifying this project, you must:

- Maintain React + Vite project integrity
- Keep Bootstrap integration minimal and stable
- Preserve HashRouter behavior
- Preserve manifest and service worker compatibility
- Never introduce new dependencies without explicit instruction
- Ensure that all scripts remain Windows and Linux safe
- Produce plain text responses without colors, emojis, or glyphs

------------------------------------------------------------------------

## Extensibility Guidance

When adding new features:

- Place new pages in src/pages
- Register routes in src/main.jsx
- Integrate layout through src/App.jsx
- Cache only small JSON or asset files
- Maintain dark theme using CSS variables in src/styles.css
- Ensure vendor independence

------------------------------------------------------------------------

End of specification.
