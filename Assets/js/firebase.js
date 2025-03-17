// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrkwdoIk4DFavf4wia-j_mTTC-fOs-uow",
    authDomain: "planmytrip-8b3ba.firebaseapp.com",
    projectId: "planmytrip-8b3ba",
    storageBucket: "planmytrip-8b3ba.firebasestorage.app",
    messagingSenderId: "450578397626",
    appId: "1:450578397626:web:85fa66fff35c22a5674583"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
