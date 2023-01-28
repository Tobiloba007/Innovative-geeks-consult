import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Home from './components/Home';

function App() {
  return (
    <>
    <Routes>
      <Route  path='/' element={<Home /> } />
      <Route  path='/about' element={<AboutUs />} />
    </Routes>
    </>
  );
}

export default App;
