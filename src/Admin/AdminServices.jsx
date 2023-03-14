import { collection, doc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useContext, useEffect } from 'react'
import { db } from '../firebase-config'
import Admin from './Admin'
import './Admin.css'
import { Context } from './Context'

const AdminServices = () => {
    const {content, setContent,edit, setEdit} = useContext(Context)

    const collectionRef = collection(db, "content")
  
    const updateContent1 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {serTitle1: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent2 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {serTexts1: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent3 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {serTitle2: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent4 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {serTexts2: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent5 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {serTitle3: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent6 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {serTexts3: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent7 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {serTitle4: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent8 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {serTexts4: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent9= async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {serTitle5: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent10= async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {serTexts5: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent11 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {serTitle6: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent12 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {serTexts6: edit}
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
            <h3 className='adminHome-title'>SERVICES PAGE</h3>
        </div>
        <div>
            {content.map((content) => {
                return (
                    <div className='map-con'>

                              {/* S E R V I C E S   1 */}
                         <p className='section-title'>Services 1</p>
                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Services title : {content.serTitle1}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent1(content.id, content.serTitle1)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Services texts : {content.serTexts1}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent2(content.id, content.serTexts1)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                              {/* S E R V I C E S   2 */}
                         <p className='section-title'>Services 2</p>
                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Services title : {content.serTitle2}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent3(content.id, content.serTitle2)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Services texts : {content.serTexts2}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent4(content.id, content.serTexts2)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                              {/* S E R V I C E S   3 */}
                         <p className='section-title'>Services 3</p>
                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Services title : {content.serTitle3}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent5(content.id, content.serTitle3)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Services texts : {content.serTexts3}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent6(content.id, content.serTexts3)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                              {/* S E R V I C E S   4*/}
                         <p className='section-title'>Services 4</p>
                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Services title : {content.serTitle4}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent7(content.id, content.serTitle4)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Services texts : {content.serTexts4}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent8(content.id, content.serTexts4)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                              {/* S E R V I C E S   5 */}
                         <p className='section-title'>Services 5</p>
                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Services title : {content.serTitle5}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent9(content.id, content.serTitle5)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Services texts : {content.serTexts5}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent10(content.id, content.serTexts5)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                              {/* S E R V I C E S   6 */}
                         <p className='section-title'>Services 6</p>
                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Services title : {content.serTitle6}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent11(content.id, content.serTitle6)}}
                              className="update-btn"
                              >update</button>
                            </span>
                        </div>

                        <div className='allign-content'>
                            <h3 className='allign-content-1'>Services texts : {content.serTexts6}</h3> 
                            <span className='allign-content-2'>
                              <input type="text" 
                              className='update-input'
                              placeholder='Edit Field 1'
                              onChange={(event) => {setEdit(event.target.value)}}
                              />
                              <button
                              onClick={(event) => {updateContent12(content.id, content.serTexts6)}}
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

export default AdminServices