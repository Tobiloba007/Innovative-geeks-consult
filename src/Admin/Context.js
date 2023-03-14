import React, { createContext, useState } from 'react'

export const Context = createContext();

const ContextProvider = ({children}) => {
    // const [user, setUser] = useState("james");
    const [content, setContent] = useState([]);
    const [edit, setEdit] = useState("");
    const [intro1, setIntro1] = useState("");
    const [intro2, setIntro2] = useState("");
    const [intro3, setIntro3] = useState("");
    const [sec2Title, setSec2Title] = useState("");
    const [sec2Para, setsec2Para] = useState("");

  return (
    <Context.Provider value={{
      content, setContent, intro1, setIntro1, intro2, setIntro2, intro3, setIntro3, edit, setEdit,
      sec2Title, setSec2Title, sec2Para, setsec2Para
       }}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider