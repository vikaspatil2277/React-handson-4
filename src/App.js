import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import Home from './components/Home'
import Students from './components/Students'

 const App = () => {
  return (
    <div>
  
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Students" element={<Students/>}/>
      </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
