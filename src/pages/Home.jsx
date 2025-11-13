import React from 'react'
export default function Home(){
  return (
    <section className="py-5">
      <div className="row align-items-center g-4">
        <div className="col-md-6">
          <h1 className="display-5 fw-bold">A Bootstrap-ready PWA starter</h1>
          <p className="lead">Installable, offline-friendly, and easy to extend. Explore the Gallery and generate a Membership Card.</p>
          <div className="d-flex gap-2">
            <a className="btn btn-brand btn-lg" href="#/gallery">Open Gallery</a>
            <a className="btn btn-outline-light btn-lg" href="#/club">Membership</a>
          </div>
          <div className="alert alert-info mt-3" role="status">This is a demo prototype. Content is placeholder.</div>
        </div>
        <div className="col-md-6">
          <div className="skeleton" aria-hidden="true"></div>
        </div>
      </div>
    </section>
  )
}
