import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MdLocationOn } from 'react-icons/md'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { GrFacebookOption } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { ImWhatsapp } from 'react-icons/im'
import { SiTwitter } from 'react-icons/si'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7f78ya9', 'template_s3f08po', form.current, 'hOky1WXI3jMpeCzkR')

      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

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
          <p className='contact-card-words'>67 Adjacent Olarem Filling Station, Basorun Ibadan Oyo State.</p>
        </div>
        <div className="contact-main-div">
          <FaPhone className='contact-main-icon' />
          <h1 className='contact-card-title'>Telephone</h1>
          <p className='contact-card-words'>+234 811 7300 983 <br /> +234 816 4913 064</p>
        </div>
        <div className="contact-main-div">
          <MdEmail className='contact-main-icon' />
          <h1 className='contact-card-title'>Business Inquiries</h1>
          <p className='contact-card-words info-email'>Innovativegeeksconsults@gmail.com</p>
        </div>
        </div>

        <div className="contact-main-bottom">
          <h1 className='contact-main-bottom-title'>Get In Touch</h1>
          <div className='contact-main-bottom-icons'>
            <a href="https://www.facebook.com/profile.php?id=100063643676480&mibextid=ZbWKwL"
            target="_blank" without rel="noreferrer"
            ><GrFacebookOption className='contact-main-bottom-socials icon-1' /></a>

            <a href="https://www.instagram.com/invites/contact/?i=10qkgzzkz0s6j&utm_content=nxoya3o"
            target="_blank" without rel="noreferrer"
            > <BsInstagram className='contact-main-bottom-socials icon-2' /></a>

            {/* <a href="#" */}
            {/* target="_blank" without rel="noreferrer"> */}
            <FcGoogle className='contact-main-bottom-socials icon-3' />
            {/* </a> */}

            <a href="https://wa.me/message/2IFPXCLV5O36A1"
            target="_blank" without rel="noreferrer"
            ><ImWhatsapp className='contact-main-bottom-socials icon-4' /></a>

            <a href="https://twitter.com/innovative_gc?t=BdC7kFdJB7Qe2cCTZ9wt1A&s=08"
            target="_blank" without rel="noreferrer"
            ><SiTwitter className='contact-main-bottom-socials icon-5' /></a>

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

            <form className='contact-message-form' ref={form} onSubmit={sendEmail}>
              <input className='contact-input' type="text" name="user_name" placeholder='Full Name' />
              <input className='contact-input' type="email" name="user_email" placeholder='Email' />
              <input className='contact-input' type="number" name='user_phone' placeholder='Phone' />
              <input className='contact-input' type="text" name='user_subject' placeholder='subjecct' />
              <textarea className='contact-input-message' placeholder='Message' name="message" rows="7"></textarea>
              <button className='contact-message-btn' type="submit">Send</button>
            </form>

           </div>
        </div>
      </div>

    </div>
  )
}

export default Contact