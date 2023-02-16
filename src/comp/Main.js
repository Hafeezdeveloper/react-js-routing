import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './config/About'
import Contact from './config/Contact'
import Dashboard from './config/Dashboard/Dashboard'
import Home from './config/Home'
import Profile from './config/profile'


const Main = () => {
  return (
    // <div>
      <BrowserRouter>
      <Routes>
           <Route path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='profile/:' element={<Profile />} />
          <Route path='dashboard/*' element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
    // </div>
  )
}

export default Main
