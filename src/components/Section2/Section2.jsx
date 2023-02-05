import React from 'react'
import './section2.css'
import img1 from '../../assets/services1.jpg'
import img2 from '../../assets/services2.jpg'
import img3 from '../../assets/services3.jpg'
import img4 from '../../assets/services4.jpg'
import img5 from '../../assets/services5.jpg'
import img6 from '../../assets/services6.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const Section2 = () => {
  return (
    <div>
        <div className="sec2-header">
            <h1 className='sec2-header1'>All Services In One</h1>
            <p className='sec2-header2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum labore aliquid, facilis veniam ipsa provident nam similique perferendis vero maxime doloremque at sed odio, repudiandae reprehenderit totam aliquam! Obcaecati reiciendis eligendi nesciunt error dolorum enim quibusdam nisi deserunt fugit cupiditate nulla repellendus distinctio, reprehenderit quia eveniet omnis quasi facilis voluptatum?</p>
        </div>
                  {/* C A R D S */}
        <div className="sec2-cards">

            <motion.div 
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 1.03 }}
            className="card"
            >
                <img  className='card-img'
                src={img1}
                alt="..."
                />
                 <div className='card-btm'>
                <h5 className='card-title'>Holiday packages</h5>
                <p className='card-words'>Some quick example text to build on the card title</p>
                <motion.button
                 whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4 },
                  }}
                className='card-btn'>
                  <Link className='card-btn-link' to='/services'>
                      LEARN MORE
                  </Link>
                  </motion.button>
                </div>
            </motion.div>
            
            <motion.div 
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 1.03 }}
            className="card"
            >
                <img  className='card-img'
                src={img2} 
                alt="..."
                />
                <div className='card-btm'>
                <h5 className='card-title'>Holiday packages</h5>
                <p className='card-words'>Some quick example text to build on the card title</p>
                <motion.button 
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4 },
                  }}
                className='card-btn'><Link className='card-btn-link' to='/services'>
                LEARN MORE
            </Link></motion.button>
                </div>
            </motion.div>

            <motion.div 
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 1.03 }}
            className="card"
            >
            <img  className='card-img'
                src={img3} 
                alt="..."
                />
                 <div className='card-btm'>
                <h5 className='card-title'>Holiday packages</h5>
                <p className='card-words'>Some quick example text to build on the card title</p>
                <motion.button 
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4 },
                  }}
                className='card-btn'><Link className='card-btn-link' to='/services'>
                LEARN MORE
            </Link></motion.button>
                </div>
            </motion.div>

            <motion.div 
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 1.03 }} 
            className="card"
            >
                 <img  className='card-img'
                   src={img4} 
                   alt="..."
                   />
                <div className='card-btm'>
                <h5 className='card-title'>Holiday packages</h5>
                <p className='card-words'>Some quick example text to build on the card title</p>
                <motion.button
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4 },
                  }}
                 className='card-btn'><Link className='card-btn-link' to='/services'>
                 LEARN MORE
             </Link></motion.button>
                </div>
            </motion.div>

            <motion.div
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 1.03 }} 
            className="card"
            >
            <img  className='card-img'
                src={img5} 
                alt="..."
                />
                <div className='card-btm'>
                <h5 className='card-title'>Holiday packages</h5>
                <p className='card-words'>Some quick example text to build on the card title</p>
                <motion.button 
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4 },
                  }}
                className='card-btn'><Link className='card-btn-link' to='/services'>
                LEARN MORE
            </Link></motion.button>
                </div>
            </motion.div>

            <motion.div 
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.4 },
              }}
              whileTap={{ scale: 1.03 }}
            className="card"
            >
            <img  className='card-img'
                src={img6} 
                alt="..."
                />
                 <div className='card-btm'>
                <h5 className='card-title'>Holiday packages</h5>
                <p className='card-words'>Some quick example text to build on the card title</p>
                <motion.button
                whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.4 },
                  }}
                 className='card-btn'><Link className='card-btn-link' to='/services'>
                 LEARN MORE
             </Link></motion.button>
                </div>
            </motion.div>

        </div>
    </div>
  )
}

export default Section2