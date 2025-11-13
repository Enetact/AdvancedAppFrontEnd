import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './styles.css'
import { registerSW } from './sw-register'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Club from './pages/Club'
import Roadmap from './pages/Roadmap'
import Community from './pages/Community'

registerSW()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/club" element={<Club/>} />
          <Route path="/roadmap" element={<Roadmap/>} />
          <Route path="/community" element={<Community/>} />
        </Routes>
      </App>
    </HashRouter>
  </React.StrictMode>)
