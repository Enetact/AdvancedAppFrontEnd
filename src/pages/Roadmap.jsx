import React from 'react'
export default function Roadmap(){
  return (
    <section>
      <h2>Roadmap</h2>
      <ul className="list-group">
        <li className="list-group-item bg-transparent text-light d-flex justify-content-between align-items-center">
          Installable core <span className="badge bg-success">Done</span>
        </li>
        <li className="list-group-item bg-transparent text-light d-flex justify-content-between align-items-center">
          Offline pages & gallery cache <span className="badge bg-success">Done</span>
        </li>
        <li className="list-group-item bg-transparent text-light d-flex justify-content-between align-items-center">
          Theming tokens <span className="badge bg-success">Done</span>
        </li>
        <li className="list-group-item bg-transparent text-light d-flex justify-content-between align-items-center">
          Real API integration <span className="badge bg-secondary">Planned</span>
        </li>
      </ul>
    </section>
  )
}
