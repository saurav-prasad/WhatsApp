// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTlxDo4QrjIiEPMFvsm7QyVe6rt_3pBpw",
    authDomain: "whatsapp-clone-dfda3.firebaseapp.com",
    projectId: "whatsapp-clone-dfda3",
    storageBucket: "whatsapp-clone-dfda3.appspot.com",
    messagingSenderId: "784941996474",
    appId: "1:784941996474:web:18f46043e0bc4e971d2583",
    measurementId: "G-LYLVM7E2DQ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
 const db = getFirestore(app);
export default db;
