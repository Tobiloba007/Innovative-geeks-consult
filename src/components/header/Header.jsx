import React from 'react'
import './header.css'
import { motion } from 'framer-motion'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='nav-wrapper'>
    <div className='nav-con'>  
        <div className="header-left">
            <h1>GEEKS LOGO</h1>
        </div>
        <div className="header-right">
            <Link to='/' className='nav-links'>HOME</Link>
            <Link to='/about' className='nav-links'>ABOUT US</Link>
            <Link to='/services' className='nav-links'>SERVICES</Link>
            <a href='#' className='nav-links'>BLOG</a>
            <motion.button 
             whileHover={{
              scale: 1.1,
              transition: { duration: 0.4 },
            }}
            whileTap={{ scale: 1 }}
            className='nav-btn'>
              <Link className="btn-link" to='/contact'>
                  CONTACT US
              </Link>
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
        <Link to='/' className='nav-link'>HOME</Link>
          <hr className='hr-line'/>
        </li>
        <li class="nav-item">
        <Link to='/about' className='nav-link'>ABOUT US</Link>
          <hr className='hr-line'/>
        </li>
        <li class="nav-item">
        <Link to='/services' className='nav-link'>SERVICES</Link>
          <hr className='hr-line'/>
        </li>
        <li class="nav-item">
        <a href='#' className='nav-link'>BLOG</a>
        <hr className='hr-line'/>
        </li>
        <li class="nav-item">
        <button className='nav-btn'>
          <Link className="btn-link" to='/contact'>
              Contact Us
          </Link>
          </button>
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