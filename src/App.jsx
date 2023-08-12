import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css';
import Home from './components/home/HomePage';
import Projects from './components/projects/Projects';
import Contacts from './components/contacts/Contacts';
import NavBar from './components/global/Navbar';

function App() {
  return (
    <>
    <main>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </main>
    </>
  )
}

export default App
