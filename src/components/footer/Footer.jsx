import React from 'react'
import './footer.css'
import {FaWhatsapp} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io' 
import {AiFillFacebook} from 'react-icons/ai' 
import {RxDividerVertical} from 'react-icons/rx' 
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
    <div className='footer-con'>
        <div className="address">
            <p className='footer-title'>ADDRESS</p>
            <ul className='footer-li-div'>
                <li>12, Mawamiwale Street, off Mio <br /> sinile busstop, ilakoji, illaro.</li>
                <li>+234 7054790081</li>
                <li>+234 2023456789</li>
            </ul>
        </div>
        <div className="links">
            <p className='footer-title'>LINKS</p>
            <ul className='footer-li-div'>
                <li><Link className='link-list' to='/about'>ABOUT US</Link></li>
                <li><a className='link-list' target="_blank" rel="noreferrer" href='https://medium.com/'>BLOG</a></li>
                <li><Link className='link-list' to='/services'>SERVICES</Link></li>
                <li><Link className='link-list' to='/contact'>CONTACT US</Link></li>
            </ul>
        </div>
        <div className="socials">
            <p className='footer-title title-socials'>SOCIALS</p>
            <div className='footer-socials'>
            <FaWhatsapp className='footer-socials-li' />
            <AiFillFacebook className='footer-socials-li' />
            <BsInstagram className='footer-socials-li' />
            <IoLogoTwitter className='footer-socials-li' />
            </div>
        </div>
    </div>

        <div className='footer-bumbum'>
            <p className='footer-bumbum-words'>© 2023 Innovative Geeks Consult</p>
            <p className='footer-bumbum-divider'><RxDividerVertical /></p> 
            <p className='footer-bumbum-words'>All RIghts Reserved</p>
        </div>

    </div>
  )
}

export default Footer