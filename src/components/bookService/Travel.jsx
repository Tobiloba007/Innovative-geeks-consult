import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import './bookservice.css'
import { BsPhoneVibrateFill } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io5'

const Travel = () => {
  return (
    <div>
          <Header />
        <div className="book-intro-img">
            <img 
            className='book-intro-img'
            src="https://images.pexels.com/photos/1973183/pexels-photo-1973183.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <div className='book-intro-content'>
             <h1 className='book-intro-content-1'>INNOVATIVE GEEKS CONSULTS</h1>   
            <i className='book-intro-content-2'>Lorem ipsum dolor sit amet consectetur adipisicing</i>
             </div>
        </div>
      
        <div className="book-main-con">
            <div className="book-main-left">
                <h1 className='book-main-left-title' >
                    Travel And Tour With Us
                </h1>
                <img className='book-main-left-img'
                src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <p className='book-main-left-words'>
                  Maecenas eu ligula ut diam vestibulum molestie. Mauris interdum odio eu commodo iaculis. Fusce pellentesque mollis gravida. Integer tempor elit in ligula imperdiet dictum. Vestibulum commodo massa a dui tempus, vitae molestie lacus imperdiet. Duis in malesuada ex, quis semper nulla. Phasellus at tellus lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras neque neque, ultricies non bibendum et, iaculis sed leo. Nunc a porta turpis. Phasellus sed risus libero. Sed placerat ligula vel maximus dictum. Duis maximus sollicitudin felis, in blandit nunc venenatis in.
               </p>
               <Link className='book-main-left-btn' to='/contact'>Contact Us</Link>
            </div>


            <div className="book-main-right">
            <div className="book-main-right-border">
             <h1 className='book-main-right-title'>Book A Service</h1>
            <form className='book-form'>
              <input className='book-input' type="name" placeholder='Full Name' />
              <input className='book-input' type="email" placeholder='Email' />
              <input className='book-input' type="number" placeholder='Phone' />
              <input className='book-input' type="text" placeholder='subjecct' />
              <input className='book-input' type="text" placeholder='subjecct' />
              <textarea className='book-input-message' placeholder='Message' name="text" rows="7"></textarea>
              <button className='book-btn'>Book Now</button>
            </form>
            </div>
            <div className='book-main-right-bottom'>
                <img className='book-main-right-bottom-img'
                src="https://images.unsplash.com/photo-1569629743817-70d8db6c323b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YWlycGxhbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                <div className='book-main-right-bottom-content'>
                    <h1 className='book-main-right-bottom-content-title'>Any Question ?</h1>
                    <p className='book-main-right-bottom-content-1'>if you require additional information on Tours, Visa Counseling, Immigration, Ticketing, Hotel Reservation and more; Kindly Contact Us:</p>
                    <p className='book-main-right-bottom-content-2'>
                       <BsPhoneVibrateFill className='bottom-content-icon' /> +234 7034 5433
                    </p>
                    <p className='book-main-right-bottom-content-3'>
                       <IoLogoWhatsapp className='bottom-content-icon' />  Chat With Chucks
                    </p>
                </div>
            </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Travel