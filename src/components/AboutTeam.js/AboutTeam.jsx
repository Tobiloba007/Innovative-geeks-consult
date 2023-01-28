import React from 'react'
import "./aboutTeam.css"

const AboutTeam = () => {
  return (
    <div className='aboutTeam-con'>
      <div className="aboutTeam-div-1">
        <h2 className='aboutTeam-title'>OUR TEAM</h2>
      </div>
      
      <div className="aboutTeam-div-2">

        <div className="member-div member-1">
          <img  className='member-img'
          src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <p className='member-name'>John Doe</p>
          <p className='member-position'>Managing Director</p>
        </div>

        <div className="member-div member-2">
          <img  className='member-img'
          src="https://images.unsplash.com/photo-1667665970124-2273c6ef3489?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p className='member-name'>John Doe</p>
          <p className='member-position'>Managing Director</p>
        </div>

        <div className="member-div member-3">
          <img  className='member-img'
          src="https://images.unsplash.com/photo-1667665970121-c3504c519cda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXQlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p className='member-name'>John Doe</p>
          <p className='member-position'>Managing Director</p>
        </div>

        <div className="member-div member-4">
          <img  className='member-img'
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
          <p className='member-name'>John Doe</p>
          <p className='member-position'>Managing Director</p>
        </div>

      </div>
    </div>
  )
}

export default AboutTeam