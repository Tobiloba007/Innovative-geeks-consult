import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import Admin from './Admin/Admin';
import AdminAbout from './Admin/AdminAbout';
import AdminServices from './Admin/AdminServices';
import AdminContacts from './Admin/AdminContacts';
import AdminHome from './Admin/AdminHome';
import AdminImages from './Admin/AdminImages';

function App() {
  return (
    <>
    <BrowserRouter >
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

      <Route path='/admin' element={<Admin />} />
      <Route path='/admin-home' element={<AdminHome />} />
      <Route path='/admin-about' element={<AdminAbout />} />
      <Route path='/admin-services' element={<AdminServices />} />
      <Route path='/admin-contacts' element={<AdminContacts />} />
      <Route path='/admin-images' element={<AdminImages />} />
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
