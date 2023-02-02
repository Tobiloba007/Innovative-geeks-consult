import React from 'react'
import "./aboutIntro.css"
import { GiBullseye } from 'react-icons/gi'
import { FcBinoculars } from 'react-icons/fc'

const AboutIntro = () => {
  return (
    <div className='aboutIntro-con'>
        <div className='aboutIntro-img'>
            <img className='aboutIntro-img'
            src="https://images.unsplash.com/photo-1562321604-44a63bafb358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fEFpcnBsYW5lJTIwd2luZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className="aboutIntro-content">
                <h1 className="aboutIntro-content-1">INNOVATIVE GEEKS CONSULTS</h1>
                <h1 className="aboutIntro-content-2">ABOUT US</h1>
            </div>
        </div>
        <div className="aboutIntro-div-1">
            <p className='aboutIntro-words'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium, fugit! Vero fuga id saepe officiis ex temporibus veniam nisi labore! Libero, quaerat. Facere officiis illo perspiciatis accusamus nesciunt, voluptatibus adipisci.
            </p>
        </div>

        <div className="aboutIntro-div2">
            <div className="mission-con">
                <h2 className='mission-title'>OUR MISSION<GiBullseye className='mission-icon' /></h2>
                <div className="mission">
                    <p className='mission-words'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis molestias, dicta placeat quibusdam delectus minima eius doloremque veritatis et ad nesciunt possimus quaerat aliquam perferendis. Animi maxime placeat, quo quaerat dolor harum impedit, quidem at error qui velit necessitatibus.
                    </p>
                </div>
            </div>
        </div>
        <div className="aboutIntro-div2">
            <div className="mission-con">
                <h2 className='mission-title'>OUR VISION<FcBinoculars className='mission-icon' /></h2>
                <div className="mission">
                    <p className='mission-words'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officiis molestias, dicta placeat quibusdam delectus minima eius doloremque veritatis et ad nesciunt possimus quaerat aliquam perferendis. Animi maxime placeat, quo quaerat dolor harum impedit, quidem at error qui velit necessitatibus.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutIntro