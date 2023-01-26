import React from 'react'
import './intro.css'
import Carousel from 'react-bootstrap/Carousel';
// import student from '../../assets/students.jpg'
import london from '../../assets/london2.jpg'
import paris from '../../assets/paris6.jpg'
import liberty from '../../assets/liberty1.jpg'


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
                  <p className='intro-words-1'>consectetur adipisicing elit  interdum Nulla</p>
                  <h3 className='intro-words-2'> vitae elit libero pharetra</h3>
                  <p className='intro-words-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laudantium fugit mollitia ut distinctio deserunt minima,
                     maiores, delectus ipsa fuga unde iste, cum est eaque iure rem</p>
                     <button className='intro-btn'>CONTACT US</button>
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
                  <p className='intro-words-1'>consectetur adipisicing elit  interdum Nulla</p>
                  <h3 className='intro-words-2'> vitae elit libero pharetra</h3>
                  <p className='intro-words-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laudantium fugit mollitia ut distinctio deserunt minima,
                     maiores, delectus ipsa fuga unde iste, cum est eaque iure rem</p>
                     <button className='intro-btn'>CONTACT US</button>
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
                  <p className='intro-words-1'>consectetur adipisicing elit  interdum Nulla</p>
                  <h3 className='intro-words-2'> vitae elit libero pharetra</h3>
                  <p className='intro-words-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam laudantium fugit mollitia ut distinctio deserunt minima,
                     maiores, delectus ipsa fuga unde iste, cum est eaque iure rem</p>
                     <button className='intro-btn'>CONTACT US</button>
              </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Intro