# Pages and Features

This app is structured as a single-page application (SPA) with multiple routed views.

Below is a summary of each page’s responsibilities.

---

## Home

- Hero description of the club / project.
- Links to **Gallery** and **Membership**.
- Static placeholder media block.

---

## About

- Describes project goals.
- Shows a simple three-phase timeline.

---

## Gallery

- Contains many generated mock items.
- Each item includes:
  - `id`
  - `name`
  - `rarity`
  - 3–5 traits
- Filtering:
  - Rarity dropdown
  - Trait substring text input
- Uses **localStorage** to store mock data for offline reuse.
- Uses Bootstrap cards and skeleton loaders for UX.

---

## Membership (Club)

- User enters a name to generate a membership card.
- Uses a safe, opaque pattern to generate IDs.
- Persists the membership card in **localStorage** and loads it on app startup.

---

## Roadmap

- Lists finished and planned phases.
- Each item labeled with Bootstrap badges.

---

## Community

- Email form with a local-only toast notification.
- No external API calls (no network dependency).

For implementation details (props, hooks, routes), see the code under `src/pages/` and `PROMPT-ENGINEERING.md`.
