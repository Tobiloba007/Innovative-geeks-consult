import React from 'react'
import './intro.css'
import Carousel from 'react-bootstrap/Carousel';
// import student from '../../assets/students.jpg'
import london from '../../assets/london2.jpg'
import paris from '../../assets/paris6.jpg'
import liberty from '../../assets/liberty1.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'



const Intro = () => {
  return (
    <div className='intro-con'>
        <Carousel fade>
      <Carousel.Item>
        <img
          className="intro-img d-block w-100"
          src={london}  
          alt="First slide"
        />
        <Carousel.Caption>
        <div className='intro-words'>
                  <p
                  className='intro-words-1'>
                    consectetur adipisicing elit  interdum Nulla
                    </p>

                  <motion.h3 
                   initial={{ y: 800, opacity: 0 }}
                   animate={{ y: 0, opacity: 1,
                     transition: { duration: 3, type: "spring",}
                   }}
                  className='intro-words-2'
                  > vitae elit libero pharetra</motion.h3>

                    <motion.div
                  initial={{ y: 700, opacity: 0 }}
                  animate={{ y: 0, opacity: 1,
                    transition: { duration: 1.5, type: "spring", }
                  }}
                    >
                  <p className='intro-words-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laudantium fugit mollitia ut distinctio deserunt minima,
                     maiores, delectus ipsa fuga unde iste, cum est eaque iure rem</p>

                     <motion.button
                     whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.4 },
                    }}
                    whileTap={{ scale: 1 }}
                    to='/contact'
                     className='intro-btn'>
                      <Link className='intro-btn' to='/contact'>CONTACT US</Link>
                      </motion.button>

                      </motion.div>

              </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="intro-img d-block w-100"
          src={paris}
          alt="Second slide"
        />

<Carousel.Caption>
        <div className='intro-words'>
                  <p
                  className='intro-words-1'>
                    consectetur adipisicing elit  interdum Nulla
                    </p>

                  <motion.h3 
                   initial={{ y: 800, opacity: 0 }}
                   animate={{ y: 0, opacity: 1,
                     transition: { duration: 3, type: "spring",}
                   }}
                  className='intro-words-2'
                  > vitae elit libero pharetra</motion.h3>

                    <motion.div
                  initial={{ y: 700, opacity: 0 }}
                  animate={{ y: 0, opacity: 1,
                    transition: { duration: 1.5, type: "spring", }
                  }}
                    >
                  <p className='intro-words-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laudantium fugit mollitia ut distinctio deserunt minima,
                     maiores, delectus ipsa fuga unde iste, cum est eaque iure rem</p>

                     <motion.button
                     whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.4 },
                    }}
                    whileTap={{ scale: 1 }}
                     className='intro-btn'>
                      CONTACT US
                      </motion.button>

                      </motion.div>

              </div>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="intro-img d-block w-100"
          src={liberty}
          alt="Third slide"
        />

<Carousel.Caption>
        <div className='intro-words'>
                  <p
                  className='intro-words-1'>
                    consectetur adipisicing elit  interdum Nulla
                    </p>

                  <motion.h3 
                   initial={{ y: 800, opacity: 0 }}
                   animate={{ y: 0, opacity: 1,
                     transition: { duration: 3, type: "spring",}
                   }}
                  className='intro-words-2'
                  > vitae elit libero pharetra</motion.h3>

                    <motion.div
                  initial={{ y: 700, opacity: 0 }}
                  animate={{ y: 0, opacity: 1,
                    transition: { duration: 1.5, type: "spring", }
                  }}
                    >
                  <p className='intro-words-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laudantium fugit mollitia ut distinctio deserunt minima,
                     maiores, delectus ipsa fuga unde iste, cum est eaque iure rem</p>

                     <motion.button
                     whileHover={{
                      scale: 1.1,
                      transition: { duration: 0.4 },
                    }}
                    whileTap={{ scale: 1 }}
                     className='intro-btn'>
                      CONTACT US
                      </motion.button>

                      </motion.div>

              </div>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Intro