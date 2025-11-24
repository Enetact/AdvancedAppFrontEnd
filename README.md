# AdvancedAppFrontEnd

AdvancedAppFrontEnd is a React + Vite single page application with React Router and Bootstrap 5, wired as a progressive web app (PWA). It is designed as a lightweight, offline-friendly starter for club or collection style experiences.

---

## Features

- React + Vite single page app (SPA) with hash-based routing for static hosting.
- Pages:
  - **Home**: hero section, quick links to Gallery and Membership.
  - **About**: project goals and a simple timeline.
  - **Gallery**: generated items with rarity and trait filters, cached in localStorage.
  - **Membership (Club)**: local membership card generator with offline persistence.
  - **Roadmap**: simple list of done and planned work.
  - **Community**: local-only subscription form with Bootstrap toast.
- Bootstrap 5 via CDN, custom dark theme via CSS variables.
- PWA:
  - Web app manifest with icons and shortcuts.
  - Service worker with versioned caches and offline strategies.
  - Install UX wired to the `beforeinstallprompt` event and an Install button.

---

## Quick start

See the full setup instructions in [INSTALLATION.md](./INSTALLATION.md). This is the short version.

### Prerequisites

- Node.js 18 or newer.
- npm (bundled with Node).

Check:

```bash
node -v
npm -v
```

### Clone

```bash
git clone https://github.com/Enetact/AdvancedAppFrontEnd.git
cd AdvancedAppFrontEnd
```

### One-shot setup

**Windows:**

```powershell
.\setup-windows.ps1
```

**Linux or macOS (using the Linux script):**

```bash
chmod +x setup-linux.sh
./setup-linux.sh
```

Both scripts:

- Ensure Node.js is at least version 18.
- Install dependencies with `npm ci` or `npm install --include=dev`.
- Start the Vite dev server with `npm run dev`.

When the dev server starts, open the printed localhost URL (for example `http://localhost:5173`) in your browser.

### Manual commands (any OS)

```bash
npm install --include=dev
npm run dev
```

---

## Scripts

```bash
npm run dev      # start Vite dev server in development mode
npm run build    # create a production build
npm run preview  # preview the production build locally
npm run setup    # install dependencies (including dev) using npm
```

---

## Project structure

Key files and directories:

- `src/main.jsx` – React entry point, router and route definitions, service worker registration.
- `src/App.jsx` – top-level layout, navigation, install button, offline banner, and footer.
- `src/pages/` – individual routed pages:
  - `Home.jsx`, `About.jsx`, `Gallery.jsx`, `Club.jsx`, `Roadmap.jsx`, `Community.jsx`.
- `src/styles.css` – global dark theme, brand color, skeleton placeholder, and footer styling.
- `public/manifest.json` – web app manifest.
- `public/service-worker.js` – PWA service worker with caching strategies.
- `setup-linux.sh`, `setup-windows.ps1` – cross-platform setup scripts.
- `PROMPT-ENGINEERING.md` – detailed engineering specification and guardrails.
- `CHANGELOG.md` – high-level summary of changes.

---

## Documentation

Additional documentation lives in `docs/wiki`:

- [Home](./docs/wiki/Home.md)
- [Getting Started](./docs/wiki/Getting-Started.md)
- [Architecture and Stack](./docs/wiki/Architecture-and-Stack.md)
- [Pages and Features](./docs/wiki/Pages-and-Features.md)
- [PWA and Offline](./docs/wiki/PWA-and-Offline.md)
- [Developer Guide](./docs/wiki/Developer-Guide.md)

The engineering prompt specification is part of the repo at [PROMPT-ENGINEERING.md](./PROMPT-ENGINEERING.md).

---

## Security and changes

- Security policy: [SECURITY.md](./SECURITY.md).
- Changes and history: [CHANGELOG.md](./CHANGELOG.md).

When modifying this project, follow the coding and architecture rules in `PROMPT-ENGINEERING.md`, including the requirement to keep the stack lightweight and avoid new dependencies without explicit approval.
