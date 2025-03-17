// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7i2W7CvUZbRKtlp_jSb0PAMZAbHALOc4",
  authDomain: "planmytrip-5e82a.firebaseapp.com",
  projectId: "planmytrip-5e82a",
  storageBucket: "planmytrip-5e82a.firebasestorage.app",
  messagingSenderId: "109866858254",
  appId: "1:109866858254:web:21986bafcf705deb9c495f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
