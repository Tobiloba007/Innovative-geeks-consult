import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact'
import Immigration from './components/bookService/immigration';
import Study from './components/bookService/Study';
import Visa from './components/bookService/Visa';
import Ticketing from './components/bookService/Ticketing';
import Reservation from './components/bookService/Reservation';
import Travel from './components/bookService/Travel';

function App() {
  return (
    <>
    <Routes>

      <Route  path='/' element={<Home /> } />
      <Route  path='/about' element={<AboutUs />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />

      <Route path='/immigration' element={<Immigration />} />
      <Route path='/study' element={<Study />} />
      <Route path='/visa' element={<Visa />} />
      <Route path='/ticketing' element={<Ticketing />} />
      <Route path='/reservation' element={<Reservation />} />
      <Route path='/travel' element={<Travel />} />
      
    </Routes>
    </>
  );
}

export default App;
