import React, { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header, Home, Destination, Crew, Technology } from './components'

export const Context = createContext('home')

const App = () => {
  const [child, setChild] = useState('home')
  return (
    <Context.Provider value={setChild}>
      <div className={`app text-white grid ${child}`}>
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
    </Context.Provider>
  )
}

export default App
