import React from 'react'
import './servicesIntro.css'
import { servicesItems } from '../servicesItem'
import { motion } from 'framer-motion'


const ServicesIntro = () => {
  return (
    <div>
        <div className="services-intro-img">
             <img className='services-intro-img'
             src="https://images.unsplash.com/photo-1562321604-44a63bafb358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fEFpcnBsYW5lJTIwd2luZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
              <div className='services-intro-img-content'>
                  <h1 className='services-intro-content-1'>INNOVATIVE GEEKS CONSULTS</h1>
                  <h1 className='services-intro-content-2'>OUR SERVICES</h1>
                  <button className='services-intro-btn'>CONTACT US</button>
              </div>
         </div>

        <div className="main-services">

            {servicesItems.map((items) => {
                return (
            <motion.div
             whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 1.03 }}
             className="services-main-con">
                <div className="services-main-top">
                    <img  className='services-main-img'
                    src={items.img} alt="" />
                </div>
                <div className="services-main-bottom">
                    <p className='services-main-title'>{items.title}</p>
                    <div  className='services-main-icon'>{items.icon}</div>
                    <motion.button 
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.4 },
                      }}
                    className='services-main-btn'>Book Now</motion.button>
                </div>
            </motion.div>
                )
            })}


            {/* <div className="services-main-con">
                <div className="services-main-top">
                    <img className='services-main-img'
                    src="https://images.unsplash.com/photo-1620505074728-ebf981053d46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="services-main-bottom">
                    <p className='services-main-title'>Hotel Reservation</p>
                    <div><BiHotel className='services-main-icon' /></div>
                    <button className='services-main-btn'>Book Now</button>
                </div>
            </div>

            <div className="services-main-con">
                <div className="services-main-top">
                    <img className='services-main-img'
                    src="https://images.unsplash.com/photo-1620505074728-ebf981053d46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="services-main-bottom">
                    <p className='services-main-title'>Hotel Reservation</p>
                    <div><BiHotel className='services-main-icon' /></div>
                    <button className='services-main-btn'>Book Now</button>
                </div>
            </div>

            <div className="services-main-con">
                <div className="services-main-top">
                    <img className='services-main-img'
                    src="https://images.unsplash.com/photo-1620505074728-ebf981053d46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="services-main-bottom">
                    <p className='services-main-title'>Hotel Reservation</p>
                    <div><BiHotel className='services-main-icon' /></div>
                    <button className='services-main-btn'>Book Now</button>
                </div>
            </div>

            <div className="services-main-con">
                <div className="services-main-top">
                    <img className='services-main-img'
                    src="https://images.unsplash.com/photo-1620505074728-ebf981053d46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="services-main-bottom">
                    <p className='services-main-title'>Hotel Reservation</p>
                    <div><BiHotel className='services-main-icon' /></div>
                    <button className='services-main-btn'>Book Now</button>
                </div>
            </div>

            <div className="services-main-con">
                <div className="services-main-top">
                    <img className='services-main-img'
                    src="https://images.unsplash.com/photo-1620505074728-ebf981053d46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmlraW5pc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                </div>
                <div className="services-main-bottom">
                    <p className='services-main-title'>Hotel Reservation</p>
                    <div><BiHotel className='services-main-icon' /></div>
                    <button className='services-main-btn'>Book Now</button>
                </div>
            </div> */}

        </div>
    </div>
  )
}

export default ServicesIntro