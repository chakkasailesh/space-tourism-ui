import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Home, Destination, Crew, Technology } from './components'

const App = () => {
  return (
    <div className="app text-white grid">
      <Header />
      <div className="flex justify-center ">
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
