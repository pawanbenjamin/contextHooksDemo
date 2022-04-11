import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Me from './components/Me'

function App() {
  return (
    <div>
      <header>
        <h1>Hello There!</h1>
        <Link to="/">Home</Link>
        <Link to="/me">Me</Link>
        <Link to="/login">Login</Link>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/me" element={<Me />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
