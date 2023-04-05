import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase-config';
import "./aboutTeam.css"
import img1 from '../../assets/teamMember1.jpg'
import img2 from '../../assets/teamMember2.jpg'
import img3 from '../../assets/teamMember3.jpg'

const AboutTeam = () => {
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
      {content.map((about)=>{
        return (
    <div className='aboutTeam-con'>
      <div className="aboutTeam-div-1">
        <h2 className='aboutTeam-title'>OUR TEAM</h2>
      </div>
      
      <div className="aboutTeam-div-2">

        <div className="member-div member-1">
          <img  className='member-img'
          src={img1} alt="" />
          <p className='member-name'>{about.abName1}</p>
          <p className='member-position'>{about.abPosition1}</p>
        </div>

        <div className="member-div member-2">
          <img  className='member-img'
          src={img2} alt="" />
          <p className='member-name'>{about.abName2}</p>
          <p className='member-position'>{about.abPosition2}</p>
        </div>

        <div className="member-div member-3">
          <img  className='member-img'
          src={img3} alt="" />
          <p className='member-name'>{about.abName3}</p>
          <p className='member-position'>{about.abPosition3}</p>
        </div>

        {/* <div className="member-div member-4">
          <img  className='member-img'
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p className='member-name'>{about.abName4}</p>
          <p className='member-position'>{about.abPosition4}</p>
        </div> */}

      </div>
    </div>
    )})}
    </div>
  )
}

export default AboutTeam