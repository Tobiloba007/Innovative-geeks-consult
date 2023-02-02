import React from 'react'
import './contact.css'
import { MdLocationOn } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { GrFacebookOption } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { ImWhatsapp } from 'react-icons/im'
import { SiTwitter } from 'react-icons/si'

const Contact = () => {
  return (
    <div>
      <div className="contact-intro-img">
        <img className='contact-intro-img'
        src="https://images.unsplash.com/photo-1562321604-44a63bafb358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fEFpcnBsYW5lJTIwd2luZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
        <div className="contact-intro-content">
           <h1 className='contact-intro-content-1'>INNOVATIVE GEEKS CONSULTS</h1>
           <h1 className='contact-intro-content-2'>CONTACT US</h1>
        </div>
      </div>

      <div className="contact-main">

        <div className="contact-main-top">
        <div className="contact-main-div">
          <MdLocationOn className='contact-main-icon' />
          <h1 className='contact-card-title'>Innovative Geeks Consults Ltd.</h1>
          <p className='contact-card-words'>12, Mawamiwale Street, off Mio sinile busstop, ilakoji, illaro.</p>
        </div>
        <div className="contact-main-div">
          <FaPhone className='contact-main-icon' />
          <h1 className='contact-card-title'>Telephone</h1>
          <p className='contact-card-words'>+234 7054790081 <br /> +234 2023456789</p>
        </div>
        <div className="contact-main-div">
          <MdEmail className='contact-main-icon' />
          <h1 className='contact-card-title'>Business Inquiries</h1>
          <p className='contact-card-words info-email'>info@innovativegeeksconsults.com</p>
        </div>
        </div>

        <div className="contact-main-bottom">
          <h1 className='contact-main-bottom-title'>Get In Touch</h1>
          <div className='contact-main-bottom-icons'>
            <GrFacebookOption className='contact-main-bottom-socials icon-1' />
            <BsInstagram className='contact-main-bottom-socials icon-2' />
            <FcGoogle className='contact-main-bottom-socials icon-3' />
            <ImWhatsapp className='contact-main-bottom-socials icon-4' />
            <SiTwitter className='contact-main-bottom-socials icon-5' />
          </div>
        </div>
      </div>


      <div className="contact-message">
        <h1 className='contact-message-title'>Or Send Us A Message</h1>
        <div className="contact-message-con">
           <div className="contact-message-left">
             <img className='contact-message-left-img'
             src="https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
           </div>
           <div className="contact-message-right">
            <form className='contact-message-form'>
              <input className='contact-input' type="name" placeholder='Full Name' />
              <input className='contact-input' type="email" placeholder='Email' />
              <input className='contact-input' type="number" placeholder='Phone' />
              <input className='contact-input' type="text" placeholder='subjecct' />
              <textarea className='contact-input-message' placeholder='Message' name="text" rows="7"></textarea>
              <button className='contact-message-btn'>Send</button>
            </form>
           </div>
        </div>
      </div>

    </div>
  )
}

export default Contact