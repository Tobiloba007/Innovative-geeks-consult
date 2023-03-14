import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase-config';
import "./aboutTeam.css"

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
          src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <p className='member-name'>{about.abName1}</p>
          <p className='member-position'>{about.abPosition1}</p>
        </div>

        <div className="member-div member-2">
          <img  className='member-img'
          src="https://images.unsplash.com/photo-1667665970124-2273c6ef3489?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p className='member-name'>{about.abName2}</p>
          <p className='member-position'>{about.abPosition2}</p>
        </div>

        <div className="member-div member-3">
          <img  className='member-img'
          src="https://images.unsplash.com/photo-1667665970121-c3504c519cda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXQlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p className='member-name'>{about.abName3}</p>
          <p className='member-position'>{about.abPosition3}</p>
        </div>

        <div className="member-div member-4">
          <img  className='member-img'
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p className='member-name'>{about.abName4}</p>
          <p className='member-position'>{about.abPosition4}</p>
        </div>

      </div>
    </div>
    )})}
    </div>
  )
}

export default AboutTeam