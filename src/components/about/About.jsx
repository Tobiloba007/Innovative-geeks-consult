import React, { useEffect, useState } from 'react'
import './about.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'


const About = () => {
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
    <div>
        <div className="about-top">
            <div className="about-heading">
                <p className='about-heading-1'>Why Choose Innovative Geeks Consult</p>
                <p className='about-heading-2'>{content.sec3Intro}</p>
            </div>

            <div className="about-content">

                <div className="box box-1">
                    <div className='box-number'>01.</div>
                    <div className="box-content">
                        <p className='box-title'>{content.sec3CardTitle1}</p>
                        <p className='box-words'>{content.sec3CardTexts1}</p>
                        <p className='box-link'>
                            <Link className='box-link-btn' to='/about'>
                              Learn more
                            </Link>
                        </p>
                    </div>
                </div>

                <div className="box box-2">
                    <div className='box-number'>02.</div>
                    <div className="box-content">
                        <p className='box-title'> {content.sec3CardTitle2}</p>
                        <p className='box-words'>{content.sec3CardTexts2}</p>
                        <p className='box-link'>
                        <Link className='box-link-btn' to='/about'>
                              Learn more
                        </Link>
                        </p>
                    </div>
                </div>

                <div className="box box-3">
                    <div className='box-number'>03.</div>
                    <div className="box-content">
                        <p className='box-title'>{content.sec3CardTitle3}</p>
                        <p className='box-words'> {content.sec3CardTexts3}</p>
                        <p className='box-link'>
                        <Link className='box-link-btn' to='/about'>
                              Learn more
                        </Link>
                        </p>    
                    </div>
                </div>

            </div>

        </div>


        <div className="about-btm">

            <div className="about-btm-heading">
                <h1 className='btm-heading-1'>Geeks Tour Packages</h1>
                <p className='btm-heading-2'>{content.sec4Intro}</p>
            </div>

            <div className="about-btm-content">

                <motion.div 
                whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.4 },
                  }}
                className='tour-card'>
                    <img className='tour-card-img'
                    src="https://cdn.pixabay.com/photo/2014/08/24/14/39/girls-426382__340.jpg" alt="" />
                    <div className='tour-card-content'>
                        <h3 className='tour-card-title'>{content.sec4CardTitle1}</h3>
                        <p className='tour-card-words'>{content.sec4CardTexts1}</p>
                        <motion.button 
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.4 },
                          }} whileTap={{ scale: 1.05 }}
                        className='tour-card-btn'>
                            <Link className='tour-card-btn-link' to='/travel'>
                                BOOK NOW
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>

                <motion.div
                whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.4 },
                  }} 
                className='tour-card'>
                    <div className='tour-card-content'>
                        <h3 className='tour-card-title'>{content.sec4CardTitle2}</h3>
                        <p className='tour-card-words tour-card-words-2'>{content.sec4CardTexts2}</p>
                        <motion.button 
                        whileHover={{
                            scale: 1.04,
                            transition: { duration: 0.4 },
                          }}whileTap={{ scale: 1.05 }}
                        className='tour-card-btn'>
                            <Link className='tour-card-btn-link' to='/travel'>
                                BOOK NOW
                            </Link>
                        </motion.button>
                    </div>
                    <img className='tour-card-img'
                    src="https://cdn.pixabay.com/photo/2018/04/09/10/03/zermatt-3303684__340.jpg" alt="" />
                </motion.div>

                <motion.div 
                whileHover={{
                    scale: 1.04,
                    transition: { duration: 0.4 },
                  }}
                className='tour-card'>
                    <img className='tour-card-img'
                    src="https://cdn.pixabay.com/photo/2017/05/12/21/44/couple-2308244__340.jpg" alt="" />
                    <div className='tour-card-content'>
                        <h3 className='tour-card-title'>{content.sec4CardTitle3}</h3>
                        <p className='tour-card-words'>{content.sec4CardTexts3}</p>
                        <motion.button 
                        whileHover={{
                            scale: 1.04,
                            transition: { duration: 0.4 },
                          }}whileTap={{ scale: 1.05 }}
                        className='tour-card-btn'>
                            <Link className='tour-card-btn-link' to='/travel'>
                                BOOK NOW
                            </Link>
                        </motion.button>
                    </div>
                </motion.div>

            </div>
        </div>
    </div>
     ) 
    })}
    </div>
  )
}

export default About