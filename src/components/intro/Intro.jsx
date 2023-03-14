import React, { useEffect, useState } from 'react'
import './intro.css'
import Carousel from 'react-bootstrap/Carousel';
import london from '../../assets/london2.jpg'
import paris from '../../assets/paris6.jpg'
import liberty from '../../assets/liberty1.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';


const Intro = () => {

  const [content, setContent] = useState([]);

  const collectionRef = collection(db, "content")
  useEffect(() => {
    const getContent = async () => {
      const data = await getDocs(collectionRef)
      console.log(data);
      setContent(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    getContent();
  },[])

  return (
    <div>

      {content.map((content) => {
        return(

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
                    {content.intro1}
                    </p>

                  <motion.h3 
                   initial={{ y: 800, opacity: 0 }}
                   animate={{ y: 0, opacity: 1,
                     transition: { duration: 3, type: "spring",}
                   }}
                  className='intro-words-2'
                  > 
                  {content.intro2}
                  </motion.h3>

                    <motion.div
                  initial={{ y: 700, opacity: 0 }}
                  animate={{ y: 0, opacity: 1,
                    transition: { duration: 1.5, type: "spring", }
                  }}
                    >
                  <p className='intro-words-3'>
                     {content.intro3}
                     </p>

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
                    {content.intro1}
                    </p>

                  <motion.h3 
                   initial={{ y: 800, opacity: 0 }}
                   animate={{ y: 0, opacity: 1,
                     transition: { duration: 3, type: "spring",}
                   }}
                  className='intro-words-2'
                  > 
                  {content.intro2}
                  </motion.h3>

                    <motion.div
                  initial={{ y: 700, opacity: 0 }}
                  animate={{ y: 0, opacity: 1,
                    transition: { duration: 1.5, type: "spring", }
                  }}
                    >
                  <p className='intro-words-3'>
                     {content.intro3}
                     </p>

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
                    {content.intro1}
                    </p>

                  <motion.h3 
                   initial={{ y: 800, opacity: 0 }}
                   animate={{ y: 0, opacity: 1,
                    transition: { duration: 3, type: "spring",}
                   }}
                  className='intro-words-2'
                  > 
                  {content.intro2}
                  </motion.h3>

                    <motion.div
                  initial={{ y: 700, opacity: 0 }}
                  animate={{ y: 0, opacity: 1,
                    transition: { duration: 1.5, type: "spring", }
                  }}
                    >
                  <p className='intro-words-3'>
                     {content.intro3}
                     </p>

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
    })}
    </div>
  )
}

export default Intro