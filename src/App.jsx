import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function App({children}){
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [offline, setOffline] = useState(!navigator.onLine)

  useEffect(() => {
    const bip = (e)=>{ e.preventDefault(); setDeferredPrompt(e) }
    window.addEventListener('beforeinstallprompt', bip)
    const goOnline = ()=> setOffline(false)
    const goOffline = ()=> setOffline(true)
    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)
    return ()=>{
      window.removeEventListener('beforeinstallprompt', bip)
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
  }, [])

  async function confirmInstall(){
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const choice = await deferredPrompt.userChoice
    console.log('[Install] userChoice', choice)
    setDeferredPrompt(null)
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top" aria-label="Primary">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center gap-2" href="#/">
            <img src="/icons/icon-192.png" width="28" height="28" alt="" />
            <span>Club PWA</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain" aria-controls="navMain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMain">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/gallery">Gallery</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/club">Membership</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/roadmap">Roadmap</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/community">Community</NavLink></li>
            </ul>
            <div className="d-flex gap-2">
              <button onClick={confirmInstall} disabled={!deferredPrompt} className="btn btn-sm btn-outline-light">Install</button>
            </div>
          </div>
        </div>
      </nav>

      {offline && (
        <div className="alert alert-warning rounded-0 m-0" role="status" aria-live="polite">
          <div className="container">You're offline. Some content may be outdated.</div>
        </div>
      )}

      <main id="app-root" className="container my-4 flex-grow-1">
        {children}
      </main>

      <footer className="footer py-4 mt-4">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-start gap-3">
          <small>&copy; {new Date().getFullYear()} Club PWA Prototype</small>
          <small>Neutral demo. No affiliation with BAYC/Yuga Labs. No external IP used.</small>
          <small><a href="/manifest.json">Web App Manifest</a></small>
        </div>
      </footer>
    </div>
  )
}
