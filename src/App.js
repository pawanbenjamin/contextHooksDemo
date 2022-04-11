import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Me from './components/Me'

import useAuth from './hooks/useAuth'

function App() {
  const { user } = useAuth()

  console.log(user)
  return (
    <div>
      <header>
        <h1>Welcome {user.name}!</h1>
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
