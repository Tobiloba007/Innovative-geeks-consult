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
                <li>67 adjacent Olarem filling station, <br /> Basorun ibadan oyo state.</li>
                <li>+234 811 7300 983</li>
                <li>+234 816 4913 064</li>
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
            <a className='footer-social-links' href="https://wa.me/message/2IFPXCLV5O36A1" target="_blank" rel="noreferrer"><FaWhatsapp className='footer-socials-li' /></a>
            <a className='footer-social-links' href="https://www.facebook.com/profile.php?id=100063643676480&mibextid=ZbWKwL" target="_blank" rel="noreferrer"><AiFillFacebook className='footer-socials-li' /></a>
            <a className='footer-social-links' href="https://www.instagram.com/invites/contact/?i=10qkgzzkz0s6j&utm_content=nxoya3o" target="_blank" rel="noreferrer"><BsInstagram className='footer-socials-li' /></a>
            <a className='footer-social-links' href="https://twitter.com/innovative_gc?t=BdC7kFdJB7Qe2cCTZ9wt1A&s=08" target="_blank" rel="noreferrer"><IoLogoTwitter className='footer-socials-li' /></a>
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