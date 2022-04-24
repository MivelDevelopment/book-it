// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, EmailAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcMffi2Sfde9B_vGzc12BL2X8csKp1cLs",
    authDomain: "book-it-5d7b6.firebaseapp.com",
    projectId: "book-it-5d7b6",
    storageBucket: "book-it-5d7b6.appspot.com",
    messagingSenderId: "1029317697938",
    appId: "1:1029317697938:web:b126521b462431bda1a14b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new EmailAuthProvider();