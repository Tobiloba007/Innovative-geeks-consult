import './Admin.css'
import React, { useState, useEffect, useContext } from 'react'
import { db } from '../firebase-config'
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, updateDoc } from 'firebase/firestore';
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';
import Admin from './Admin';


const AdminHome = () => {
    const {content, setContent,edit, setEdit} = useContext(Context)

    const collectionRef = collection(db, "content")

    const updateContent1 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {intro1: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent2 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {intro2: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent3 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {intro3: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent4 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec2Title: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent5 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec2Para: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent6 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec2CardTitle1: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent7 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec2CardText1: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent8 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec2CardTitle2: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent9 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec2CardText2: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent10 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec2CardTitle3: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent11 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec2CardText3: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent12 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec3Intro: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent13 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec3CardTitle1: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent14 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec3CardTexts1: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent15 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec3CardTitle2: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent16 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec3CardTexts2: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent17 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec3CardTitle3: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent18 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec3CardTexts3: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent19 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec4Intro: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent20 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec4CardTitle1: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent21= async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec4CardTexts1: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent22 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec4CardTitle2: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent23 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec4CardTexts2: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent24 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec4CardTitle3: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent25 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {sec4CardTexts3: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent26 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {review1: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent27 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {reviewName1: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent28 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {review2: edit}
        await updateDoc(contentDoc, newFields)
    };
    const updateContent29 = async (id) => {
        const contentDoc = doc(db, "content", id)
        const newFields = {reviewName2: edit}
        await updateDoc(contentDoc, newFields)
    };
  

    // const deleteContent = async (id) => {
    //     const contentDoc = doc(db, "content", id);
    //     await deleteDoc(contentDoc)
    // };

    // const changeintro1 = async (id) => {
    //     const docRef = doc(db, "content", "ivaxZqLLvJxlb9gVtgr7")
    //     await setDoc(docRef, {...content[0], intro1: edit})
    // }

    // const navigate = useNavigate();

    // const servicesPage = () => {
    //     navigate("/admin-about");
    // }


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
            <h3 className='adminHome-title'>HOME PAGE</h3>
        </div>
            <div>
            {content.map((content) => {
                return(
                   <div className='map-con'>
                        <p className='section-title'>Intro messages</p>

                                {/* INTRO */}

                                {/* FIELD 1 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>intro 1 : {content.intro1}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent1(content.id, content.intro1)}}
                        className="update-btn"
                        >update</button>
                        {/* <button
                        onClick={() => {deleteContent(content.id)}} 
                        className="delete-btn"
                        >Delete</button> */}
                      </span>
                    </div>
                             
                                 {/* FIELD 2 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>intro 2 : {content.intro2}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 2'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={() => {updateContent2(content.id, content.intro2)}}
                        className="update-btn"
                        >update</button>
                        {/* <button
                        onClick={() => {deleteContent(content.id)}} 
                        className="delete-btn"
                        >Delete</button> */}
                      </span>
                    </div>

                                 {/* FIELD 3 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>intro 3 : {content.intro3}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 3'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent3(content.id, content.intro3)}}
                        className="update-btn"
                        >update</button>
                        {/* <button
                        onClick={() => {deleteContent(content.id)}} 
                        className="delete-btn"
                        >Delete</button> */}
                      </span>
                    </div>

                        {/* S E C T I O N   2 */}

                        <p className='section-title'>SECTION 2</p>

                                {/* FIELD 4 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>sec2Title : {content.sec2Title}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent4(content.id, content.sec2Title)}}
                        className="update-btn"
                        >update</button>
                        {/* <button
                        onClick={() => {deleteContent(content.id)}} 
                        className="delete-btn"
                        >Delete</button> */}
                      </span>
                    </div>
                                {/* FIELD 5 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>sec2Para : {content.sec2Para}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent5(content.id, content.sec2Para)}}
                        className="update-btn"
                        >update</button>
                        {/* <button
                        onClick={() => {deleteContent(content.id)}} 
                        className="delete-btn"
                        >Delete</button> */}
                      </span>
                    </div>


                                {/* FIELD 6 */}
                       <p className='section-title'>SECTION 2 (card 1)</p>

                    <div className='allign-content'>
                      <h3 className='allign-content-1'>First card title : {content.sec2CardTitle1}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent6(content.id, content.sec2CardTitle1)}}
                        className="update-btn"
                        >update</button>
                        {/* <button
                        onClick={() => {deleteContent(content.id)}} 
                        className="delete-btn"
                        >Delete</button> */}
                      </span>
                    </div>
                                {/* FIELD 7 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>First card text : {content.sec2CardText1}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent7(content.id, content.sec2CardText1)}}
                        className="update-btn"
                        >update</button>
                        {/* <button
                        onClick={() => {deleteContent(content.id)}} 
                        className="delete-btn"
                        >Delete</button> */}
                      </span>
                    </div>

                                {/* FIELD 8 */}
                      <p className='section-title'>SECTION 2 (card 2)</p>

                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Second card title  : {content.sec2CardTitle2}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent8(content.id, content.sec2CardTitle2)}}
                        className="update-btn"
                        >update</button>
                        {/* <button
                        onClick={() => {deleteContent(content.id)}} 
                        className="delete-btn"
                        >Delete</button> */}
                      </span>
                    </div>
                                {/* FIELD 9 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>First card text : {content.sec2CardText2}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent9(content.id, content.sec2CardText2)}}
                        className="update-btn"
                        >update</button>
                        {/* <button
                        onClick={() => {deleteContent(content.id)}} 
                        className="delete-btn"
                        >Delete</button> */}
                      </span>
                    </div>

                                {/* FIELD 10 */}
                     <p className='section-title'>SECTION 2 (card 3)</p>  

                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Third card title  : {content.sec2CardTitle3}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent10(content.id, content.sec2CardTitle3)}}
                        className="update-btn"
                        >update</button>
                        {/* <button
                        onClick={() => {deleteContent(content.id)}} 
                        className="delete-btn"
                        >Delete</button> */}
                      </span>
                    </div>
                                {/* FIELD 11 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>First card text : {content.sec2CardText3}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent11(content.id, content.sec2CardText3)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>


                                {/* S E C T I O N  3 */}

                      <p className='section-title'>SECTION 3</p>  
                                {/* FIELD 12 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Section 3 intro : {content.sec3Intro}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent12(content.id, content.sec3Intro)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 13 */}
                     <p className='section-title'>SECTION 3 (card 1)</p>  

                    <div className='allign-content'>
                      <h3 className='allign-content-1'>First card title : {content.sec3CardTitle1}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent13(content.id, content.sec3CardTitle1)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 14 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>First card texts : {content.sec3CardTexts1}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent14(content.id, content.sec3CardTexts1)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 15 */}
                      <p className='section-title'>SECTION 3 (card 2)</p>  
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Second card title : {content.sec3CardTitle2}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent15(content.id, content.sec3CardTitle2)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 16 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Second card texts : {content.sec3CardTexts2}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent16(content.id, content.sec3CardTexts2)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 17 */}
                       <p className='section-title'>SECTION 3 (card 3)</p>  

                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Third card title : {content.sec3CardTitle3}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent17(content.id, content.sec3CardTitle3)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 18 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Third card texts : {content.sec3CardTexts3}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent18(content.id, content.sec3CardTexts3)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>


                                {/* S E C T I O N  4 */}

                      <p className='section-title'>SECTION 4</p>  
                                {/* FIELD 19 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Section 4 intro : {content.sec4Intro}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent19(content.id, content.sec4Intro)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 20 */}
                     <p className='section-title'>SECTION 4 (card 1)</p>  

                    <div className='allign-content'>
                      <h3 className='allign-content-1'>First card title : {content.sec4CardTitle1}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent20(content.id, content.sec4CardTitle1)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 21 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>First card texts : {content.sec4CardTexts1}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent21(content.id, content.sec4CardTexts1)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 22 */}
                      <p className='section-title'>SECTION 4 (card 2)</p>  
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Second card title : {content.sec4CardTitle2}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent22(content.id, content.sec4CardTitle2)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 23 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Second card texts : {content.sec4CardTexts2}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent23(content.id, content.sec4CardTexts2)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 24 */}
                       <p className='section-title'>SECTION 4 (card 3)</p>  

                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Third card title : {content.sec4CardTitle3}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent24(content.id, content.sec4CardTitle3)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 25 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Third card texts : {content.sec4CardTexts3}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent25(content.id, content.sec4CardTexts3)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>


                                {/* R E V I E W S */}

                                {/* FIELD 26 */}
                      <p className='section-title'>REVIEW 1</p>  
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>First Review : {content.review1}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent26(content.id, content.review1)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 27 */}
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Review Name : {content.reviewName1}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent27(content.id, content.reviewName1)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 28 */}
                      <p className='section-title'>REVIEW 2</p>  
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Second Review : {content.review2}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent28(content.id, content.review2)}}
                        className="update-btn"
                        >update</button>
                      </span>
                    </div>
                                {/* FIELD 29 */} 
                    <div className='allign-content'>
                      <h3 className='allign-content-1'>Review Name : {content.reviewName2}</h3> 
                      <span className='allign-content-2'>
                        <input type="text" 
                        className='update-input'
                        placeholder='Edit Field 1'
                        onChange={(event) => {setEdit(event.target.value)}}
                        />
                        <button
                        onClick={(event) => {updateContent29(content.id, content.reviewName2)}}
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

export default AdminHome;