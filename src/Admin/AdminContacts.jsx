import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react'
import { db } from '../firebase-config';
import Admin from './Admin';
import { Context } from './Context';

const AdminContacts = () => {
    const {content, setContent,edit, setEdit} = useContext(Context)

    const collectionRef = collection(db, "content")
  
    const updateContent1 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {address: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent2 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {phone1: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent3 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {phone2: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent4 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {gmail: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent5 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {facebook: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent6 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {instagram: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent7 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {medium: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent8 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {whatsapp: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent9 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {twitter: edit}
        await updateDoc(contentDoc, newFields)
    };

    
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
        {/* <Admin /> */}
    <div className='AdminHome-wrapper'>
        <div className='adminHome-title'>
           <h3 className='adminHome-title'>CONTACTS PAGE</h3>
        </div>
        <div>
            {content.map((content) => {
                return(
                    <div className='map-con'>

                             {/* <p className='section-title'>Services 1</p> */}
                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Address : {content.address}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent1(content.id, content.address)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Phone 1 : {content.phone1}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent2(content.id, content.phone1)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Phone 2 : {content.phone2}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent3(content.id, content.phone2)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Email Address : {content.gmail}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent4(content.id, content.gmail)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>


                           <p className='section-title'>SOCIAL MEDIA LINKS</p>

                           <div className='allign-content'>
                            <h3 className='allign-content-1'>Facebook : {content.facebook}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent5(content.id, content.facebook)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                           <div className='allign-content'>
                            <h3 className='allign-content-1'>Instagram : {content.instagram}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent6(content.id, content.instagram)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                           <div className='allign-content'>
                            <h3 className='allign-content-1'>Blog (medium) : {content.medium}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent7(content.id, content.medium)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                           <div className='allign-content'>
                            <h3 className='allign-content-1'>Whatsapp : {content.whatsapp}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent8(content.id, content.whatsapp)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                           <div className='allign-content'>
                            <h3 className='allign-content-1'>Twitter : {content.twitter}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent9(content.id, content.twitter)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>


                    </div>
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default AdminContacts