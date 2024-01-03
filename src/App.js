import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar, Home, Destination, Crew, Technology } from './components'

const App = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
