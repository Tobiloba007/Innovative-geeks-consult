import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useContext, useEffect } from 'react'
import { db } from '../firebase-config';
import { Context } from './Context';
import './Admin.css'
import Admin from './Admin';

const AdminAbout = () => {
  const {content, setContent,edit, setEdit} = useContext(Context)

  const collectionRef = collection(db, "content")

  const updateContent1 = async (id) => {
      const contentDoc = doc(db, "content", id)
      const newFields = {abIntro: edit}
      await updateDoc(contentDoc, newFields)
      // setEdit("")
  };
  const updateContent2 = async (id) => {
      const contentDoc = doc(db, "content", id)
      const newFields = {abMission: edit}
      await updateDoc(contentDoc, newFields)
      // setEdit("")
  };
  const updateContent3 = async (id) => {
      const contentDoc = doc(db, "content", id)
      const newFields = {abVision: edit}
      await updateDoc(contentDoc, newFields)
      // setEdit("")
  };
  const updateContent4 = async (id) => {
      const contentDoc = doc(db, "content", id)
      const newFields = {abName1: edit}
      await updateDoc(contentDoc, newFields)
      // setEdit("")
  };
  const updateContent5 = async (id) => {
      const contentDoc = doc(db, "content", id)
      const newFields = {abPosition1: edit}
      await updateDoc(contentDoc, newFields)
      // setEdit("")
  };
  const updateContent6 = async (id) => {
      const contentDoc = doc(db, "content", id)
      const newFields = {abName2: edit}
      await updateDoc(contentDoc, newFields)
      // setEdit("")
  };
  const updateContent7 = async (id) => {
      const contentDoc = doc(db, "content", id)
      const newFields = {abPosition2: edit}
      await updateDoc(contentDoc, newFields)
      // setEdit("")
  };
  const updateContent8 = async (id) => {
      const contentDoc = doc(db, "content", id)
      const newFields = {abName3: edit}
      await updateDoc(contentDoc, newFields)
      // setEdit("")
  };
  const updateContent9 = async (id) => {
      const contentDoc = doc(db, "content", id)
      const newFields = {abPosition3: edit}
      await updateDoc(contentDoc, newFields)
      // setEdit("")
  };
  const updateContent10 = async (id) => {
      const contentDoc = doc(db, "content", id)
      const newFields = {abName4: edit}
      await updateDoc(contentDoc, newFields)
      // setEdit("")
  };
  const updateContent11 = async (id) => {
      const contentDoc = doc(db, "content", id)
      const newFields = {abPosition4: edit}
      await updateDoc(contentDoc, newFields)
      // setEdit("")
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
            <h3 className='adminHome-title'>ABOUT PAGE</h3>
        </div>
        <div>
        {content.map((content) => {
          return (
            <div className='map-con'>
              {/* <p className='section-title'></p> */}
                  <div className='allign-content'>
                      <h3 className='allign-content-1'>About Intro : {content.abIntro}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent1(content.id, content.abIntro)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>

                  <div className='allign-content'>
                      <h3 className='allign-content-1'>About Mission : {content.abMission}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent2(content.id, content.abMission)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>

                  <div className='allign-content'>
                      <h3 className='allign-content-1'>About Vision : {content.abVision}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent3(content.id, content.abVision)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>

                           {/* T E A M */}
              <p className='section-title'>OUR TEAM</p>
                  <div className='allign-content'>
                      <h3 className='allign-content-1'>Name1 : {content.abName1}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent4(content.id, content.abName1)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>

                  <div className='allign-content'>
                      <h3 className='allign-content-1'>Position 1 : {content.abPosition1}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent5(content.id, content.abPosition1)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>

                  <div className='allign-content'>
                      <h3 className='allign-content-1'>Name 2 : {content.abName2}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent6(content.id, content.abName2)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>

                  <div className='allign-content'>
                      <h3 className='allign-content-1'>position 2 : {content.abPosition2}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent7(content.id, content.abPosition2)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>

                  <div className='allign-content'>
                      <h3 className='allign-content-1'>Name 3 : {content.abName3}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent8(content.id, content.abName3)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>

                  <div className='allign-content'>
                      <h3 className='allign-content-1'>Position 3 : {content.abPosition3}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent9(content.id, content.abPosition3)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>

                  <div className='allign-content'>
                      <h3 className='allign-content-1'>Name 4 : {content.abName4}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent10(content.id, content.abName4)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>

                  <div className='allign-content'>
                      <h3 className='allign-content-1'>position 4 : {content.abPosition4}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent11(content.id, content.abPosition4)}}
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

export default AdminAbout