import React from 'react'
import './header.css'
import { motion } from 'framer-motion'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.jpeg'


const Header = () => {

  return (
    <div className='nav-wrapper'>
    <div className='nav-con'>  
        <div className="header-left">
          <Link to='/'>
             <img className='nav-logo' src={Logo} alt="lLogo" />
          </Link>
        </div>
        <div className="header-right">
            <Link to='/' className='nav-links'>HOME</Link>
            <Link to='/about' className='nav-links'>ABOUT US</Link>
            <Link to='/services' className='nav-links'>SERVICES</Link>
            <a href='https://medium.com/' target="_blank" rel="noreferrer" className='nav-links'>BLOG</a>
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
  <div className="container-fluid">
    <Link to='/'>
    <img className='navbar-brand' src={Logo} alt="lLogo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"><RxHamburgerMenu /></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav nav-links-div">
        <li className="nav-item">
        <Link to='/' className='nav-link'>HOME</Link>
          <hr className='hr-line'/>
        </li>
        <li className="nav-item">
        <Link to='/about' className='nav-link'>ABOUT US</Link>
          <hr className='hr-line'/>
        </li>
        <li className="nav-item">
        <Link to='/services' className='nav-link'>SERVICES</Link>
          <hr className='hr-line'/>
        </li>
        <li className="nav-item">
        <a href='https://medium.com/' target="_blank" rel="noreferrer" className='nav-link'>BLOG</a>
        <hr className='hr-line'/>
        </li>
        <li className="nav-item">
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