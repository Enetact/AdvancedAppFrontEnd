import React from 'react'
export default function About(){
  return (
    <>
      <section>
        <h2>Our Story</h2>
        <p>We built a simple, scalable PWA scaffold that plays well with Bootstrap and React. The goal is clarity and speed.</p>
      </section>
      <section className="mt-4">
        <h2>Timeline</h2>
        <ol className="list-group list-group-numbered">
          <li className="list-group-item bg-transparent text-light">Phase 1 — Scaffold and install UX</li>
          <li className="list-group-item bg-transparent text-light">Phase 2 — Data-driven pages and offline</li>
          <li className="list-group-item bg-transparent text-light">Phase 3 — Theming and integrations</li>
        </ol>
      </section>
    </>
  )
}
