# PWA and Offline Behavior

AdvancedAppFrontEnd is designed to be installable and work offline where supported.

---

## PWA Requirements

- `manifest.json` must be present in `/public`.
- Service worker in `/public/service-worker.js` must:
  - Precache the core shell and icons.
  - Use **stale-while-revalidate** for navigations.
  - Use **cache-first** for icons and fonts.
  - Version caches and clean up old versions.
- The app must be installable in:
  - Chrome
  - Edge
  - Safari (where supported)
- HashRouter paths must work offline.

---

## Install UX

- `beforeinstallprompt` is wired to show a visible **Install** button in the UI.
- The manifest and icons are served correctly so browsers can recognize the app as installable.

---

## Offline Data

- Mock data for the **Gallery** is stored in **localStorage** to be reused offline.
- Membership card data is stored locally in **localStorage** and restored on app startup.

---

## Caching Strategy

At a high level:

- Shell and icons are precached so the app loads even without a network.
- Navigations use **stale-while-revalidate** to give fast responses and refresh in the background.
- Static assets such as icons and fonts use **cache-first** for reliability.

For the precise implementation, see `public/service-worker.js`.
