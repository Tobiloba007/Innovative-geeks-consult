import { initializeApp } from "firebase/app"; 
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBoBhKhVaLKPGwjZvNwSdGhV1Ypq5E6eI8",
    authDomain: "geeks-consults.firebaseapp.com",
    projectId: "geeks-consults",
    storageBucket: "geeks-consults.appspot.com",
    messagingSenderId: "719626522462",
    appId: "1:719626522462:web:ce63a78b155af18c7109cf",
    measurementId: "G-VT54H4FH4C"
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app);

  export const storage = getStorage(app);