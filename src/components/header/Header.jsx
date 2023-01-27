import React from 'react'
import './header.css'
import { motion } from 'framer-motion'


const Header = () => {
  return (
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
  )
}

export default Header