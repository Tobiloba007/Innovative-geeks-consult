import React from 'react'
import './servicesIntro.css'
import { motion } from 'framer-motion'
import { BiHotel } from 'react-icons/bi'
import { GiPassport } from 'react-icons/gi'
import { FaPassport } from 'react-icons/fa'
import { SlPlane } from 'react-icons/sl'
import { MdOutlineLuggage } from 'react-icons/md'
import { Link } from 'react-router-dom'



const ServicesIntro = () => {

  return (
    <div>
        <div className="services-intro-img">
             <img className='services-intro-img'
             src="https://images.unsplash.com/photo-1562321604-44a63bafb358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fEFpcnBsYW5lJTIwd2luZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
              <div className='services-intro-img-content'>
                  <h1 className='services-intro-content-1'>INNOVATIVE GEEKS CONSULTS</h1>
                  <h1 className='services-intro-content-2'>OUR SERVICES</h1>
                  <Link to='/contact' className='services-intro-btn'>CONTACT US</Link>
              </div>
         </div>

        <div className="main-services">

                {/* 1st  S E R V I C E  */}
            <motion.div
             whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 1.03 }}
              className="services-main-con">
                <div 
                className="services-main-top" >
                    <img  className='services-main-img'
                    src="https://images.unsplash.com/photo-1613244470042-e69e8ccb303a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHBhc3Nwb3J0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="services-main-bottom">
                    <p className='services-main-title'>Immigration Services</p>
                    <div  className='services-main-icon'><BiHotel /></div>
                    <motion.button
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.4 },
                      }}
                    className='services-main-btn'>
                        <Link to='/immigration' className='services-main-btn'>
                          Book Now
                        </Link>
                    </motion.button>
                </div>
            </motion.div>

                {/* 2nd  S E R V I C E  */}
            <motion.div
             whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 1.03 }}
              className="services-main-con">
                <div 
                className="services-main-top" >
                    <img  className='services-main-img'
                    src="https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fHZpc2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="services-main-bottom">
                    <p className='services-main-title'>Study Abroad</p>
                    <div  className='services-main-icon'><GiPassport /></div>
                    <motion.button 
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.4 },
                      }}
                    className='services-main-btn'>
                        <Link to="/study" className='services-main-btn'>
                           Book Now
                        </Link>
                    </motion.button>
                </div>
            </motion.div>

                {/* 3rd  S E R V I C E  */}
            <motion.div
             whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 1.03 }}
              className="services-main-con">
                <div 
                className="services-main-top" >
                    <img  className='services-main-img'
                    src="https://images.unsplash.com/photo-1596456838897-5ce4c2e86d04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fHZpc2F8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="services-main-bottom">
                    <p className='services-main-title'>Visa Counseling</p>
                    <div  className='services-main-icon'><FaPassport /></div>
                    <motion.button 
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.4 },
                      }}
                    className='services-main-btn'>
                        <Link to="/visa" className='services-main-btn'>
                           Book Now
                        </Link>
                    </motion.button>
                </div>
            </motion.div>

                {/* 4th  S E R V I C E  */}
            <motion.div
             whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 1.03 }}
              className="services-main-con">
                <div 
                className="services-main-top" >
                    <img  className='services-main-img'
                    src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZHklMjBhYnJvYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="services-main-bottom">
                    <p className='services-main-title'>Ticketing</p>
                    <div  className='services-main-icon'><SlPlane /></div>
                    <motion.button 
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.4 },
                      }}
                    className='services-main-btn'>
                        <Link to="/ticketing" className='services-main-btn'>
                           Book Now
                        </Link>
                    </motion.button>
                </div>
            </motion.div>

                {/* 5th  S E R V I C E  */}
            <motion.div
             whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 1.03 }}
              className="services-main-con">
                <div 
                className="services-main-top" >
                    <img  className='services-main-img'
                    src="https://images.unsplash.com/photo-1535827841776-24afc1e255ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdGVsJTIwZnJvbnQlMjBkZXNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="services-main-bottom">
                    <p className='services-main-title'>Hotel Reservation</p>
                    <div  className='services-main-icon'><BiHotel /></div>
                    <motion.button 
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.4 },
                      }}
                    className='services-main-btn'>
                        <Link to="/reservation" className='services-main-btn'>
                           Book Now
                        </Link>
                    </motion.button>
                </div>
            </motion.div>

                {/* 6th  S E R V I C E  */}
            <motion.div
             whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 1.03 }}
              className="services-main-con">
                <div 
                className="services-main-top" >
                    <img  className='services-main-img'
                    src="https://plus.unsplash.com/premium_photo-1663045238448-fbabf2e89f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHRyYXZlbCUyMGFuZCUyMHRvdXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="services-main-bottom">
                    <p className='services-main-title'>Travel and Tour</p>
                    <div  className='services-main-icon'><MdOutlineLuggage /></div>
                    <motion.button 
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.4 },
                      }}
                    className='services-main-btn'>
                        <Link to="/travel" className='services-main-btn'>
                           Book Now
                        </Link>
                    </motion.button>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default ServicesIntro