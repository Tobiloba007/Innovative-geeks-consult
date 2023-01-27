import React from 'react'
import './footer.css'
import {FaWhatsapp} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io' 
import {AiFillFacebook} from 'react-icons/ai' 
import {RxDividerVertical} from 'react-icons/rx' 

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
                <li>ABOUT US</li>
                <li>BLOG</li>
                <li>SERVICES</li>
                <li>CONTACT US</li>
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