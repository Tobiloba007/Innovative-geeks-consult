import React, { useEffect, useState } from 'react'
import "./aboutIntro.css"
import { GiBullseye } from 'react-icons/gi'
import { FcBinoculars } from 'react-icons/fc'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'

const AboutIntro = () => {
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
    {content.map((about) => {
      return(
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
                {about.abIntro}
            </p>
        </div>

        <div className="aboutIntro-div2">
            <div className="mission-con">
                <h2 className='mission-title'>OUR MISSION<GiBullseye className='mission-icon' /></h2>
                <div className="mission">
                    <p className='mission-words'>
                    {about.abMission}
                    </p>
                </div>
            </div>
        </div>
        <div className="aboutIntro-div2">
            <div className="mission-con">
                <h2 className='mission-title'>OUR VISION<FcBinoculars className='mission-icon' /></h2>
                <div className="mission">
                    <p className='mission-words'>
                    {about.abVision}
                    </p>
                </div>
            </div>
        </div>
    </div>
     ) 
    })}
  </div>
  )
}

export default AboutIntro