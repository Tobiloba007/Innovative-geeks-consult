import React from 'react'
import './header.css'


const Header = () => {
  return (
    <div className='nav-con'>
        <div className="header-left">
            <h1>GEEKS CONSULT</h1>
        </div>
        <div className="header-right">
            <p className='nav-links'>HOME</p>
            <p className='nav-links'>ABOUT US</p>
            <p className='nav-links'>SERVICES</p>
            <p className='nav-links'>GALLERY</p>
            <button className='nav-btn'>CONTACT US</button>
        </div>
    </div>
  )
}

export default Header