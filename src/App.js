import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Me from './components/Me'

function App() {
  return (
    <div>
      <header>
        <h1>Hello There!</h1>
        <Link to="/">Home</Link>
        <Link to="/me">Me</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </div>
  )
}

export default App
