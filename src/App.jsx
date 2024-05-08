import React from 'react'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

      </Routes>
      <h1>Hello</h1>
    </>
  )
}

export default App