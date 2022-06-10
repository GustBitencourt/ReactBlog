import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';

import './App.css'
import { About } from './pages/About';

function App() {

  return (
    <div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
    </div>
  )
}

export default App
