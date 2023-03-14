import React, { useEffect, useState } from 'react'
import './footer.css'
import {FaWhatsapp} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io' 
import {AiFillFacebook} from 'react-icons/ai' 
import {RxDividerVertical} from 'react-icons/rx' 
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'

const Footer = () => {
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
        {content.map((footer)=>{
          return(
    <div className='footer-wrapper'>
    <div className='footer-con'>
        <div className="address">
            <p className='footer-title'>ADDRESS</p>
            <ul className='footer-li-div'>
                <li className='footer-address-address'>{footer.address}</li>
                <li>{footer.phone1}</li>
                <li>{footer.phone2}</li>
            </ul>
        </div>
        <div className="links">
            <p className='footer-title'>LINKS</p>
            <ul className='footer-li-div'>
                <li><Link className='link-list' to='/about'>ABOUT US</Link></li>
                <li><a className='link-list' target="_blank" rel="noreferrer" href={footer.medium}>BLOG</a></li>
                <li><Link className='link-list' to='/services'>SERVICES</Link></li>
                <li><Link className='link-list' to='/contact'>CONTACT US</Link></li>
            </ul>
        </div>
        <div className="socials">
            <p className='footer-title title-socials'>SOCIALS</p>
            <div className='footer-socials'>
            <a className='footer-social-links' href={footer.whatsapp} target="_blank" rel="noreferrer"><FaWhatsapp className='footer-socials-li' /></a>
            <a className='footer-social-links' href={footer.facebook} target="_blank" rel="noreferrer"><AiFillFacebook className='footer-socials-li' /></a>
            <a className='footer-social-links' href={footer.instagram} target="_blank" rel="noreferrer"><BsInstagram className='footer-socials-li' /></a>
            <a className='footer-social-links' href={footer.twitter} target="_blank" rel="noreferrer"><IoLogoTwitter className='footer-socials-li' /></a>
            </div>
        </div>
    </div>

        <div className='footer-bumbum'>
            <p className='footer-bumbum-words'>© 2023 Innovative Geeks Consult</p>
            <p className='footer-bumbum-divider'><RxDividerVertical /></p> 
            <p className='footer-bumbum-words'>All RIghts Reserved</p>
        </div>

    </div>
    )
})}
</div>
  )
}

export default Footer