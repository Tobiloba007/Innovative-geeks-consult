import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Routes>
      <Route  path='/' element={<Home /> } />
      <Route  path='/about' element={<AboutUs />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </>
  );
}

export default App;
