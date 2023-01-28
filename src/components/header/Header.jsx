import React from 'react'
import './header.css'
import { motion } from 'framer-motion'
import { RxHamburgerMenu } from 'react-icons/rx'


const Header = () => {
  return (
    <div className='nav-wrapper'>
    <div className='nav-con'>  
        <div className="header-left">
            <h1>GEEKS LOGO</h1>
        </div>
        <div className="header-right">
            <p className='nav-links'>HOME</p>
            <p className='nav-links'>ABOUT US</p>
            <p className='nav-links'>SERVICES</p>
            <p className='nav-links'>GALLERY</p>
            <motion.button 
             whileHover={{
              scale: 1.1,
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 1 }}
            className='nav-btn'>
              CONTACT US
            </motion.button>
        </div>
    </div>
             
                 {/* BOOTSTRAP NAVBAR */}
<div className='boot-nav'>
                 <nav class="navbar  navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">GEEKS LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"><RxHamburgerMenu /></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav nav-links-div">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <hr className='hr-line'/>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
          <hr className='hr-line'/>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
          <hr className='hr-line'/>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Gallery</a>
        <hr className='hr-line'/>
        </li>
        <li class="nav-item">
        <button className='nav-btn'>Contact Us</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

    </div>
  )
}

export default Header