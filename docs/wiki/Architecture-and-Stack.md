# Architecture and Stack

This page summarizes the core architecture and tech stack of **AdvancedAppFrontEnd**.

---

## Tech Stack

- **React** (main UI library)
- **Vite** bundler (dev server and builds)
- **React Router DOM**
  - Uses **HashRouter** for compatibility with static hosting.
- **Bootstrap 5**
  - Loaded via CDN in `public/index.html`.
- **No SSR**
  - No server-side rendering.
- **No additional frameworks or CSS libraries**
  - Keep the stack lightweight and predictable.

---

## Project Layout (Conceptual)

Key areas (by convention):

- `src/App.jsx` – top-level layout and route wiring.
- `src/main.jsx` – React entry point, router initialization, and app bootstrap.
- `src/pages/` – individual pages (Home, About, Gallery, Membership, Roadmap, Community).
- `src/styles.css` – global styles and dark theme via CSS variables.
- `public/manifest.json` – PWA manifest.
- `public/service-worker.js` – service worker with versioned caches and offline strategies.

---

## Design Principles

- Keep the system **lightweight** and framework-stable.
- Avoid unnecessary dependencies.
- Maintain **ASCII-safe** files (no emojis or special characters in scripts).
- Use **explicit, functional comments**.
- Components should be **self-contained**, with no global functions.

For details, see the full engineering specification in `PROMPT-ENGINEERING.md`.
