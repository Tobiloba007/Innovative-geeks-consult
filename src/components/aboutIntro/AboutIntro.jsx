import React from 'react'
import "./aboutIntro.css"
import { GiBullseye } from 'react-icons/gi'
import { FcBinoculars } from 'react-icons/fc'

const AboutIntro = () => {
  return (
    <div className='aboutIntro-con'>
        <div className="aboutIntro-div-1">
            <h1 className='aboutIntro-title'>ABOUT US</h1>
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