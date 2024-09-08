// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth , createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCUSTaelxphjb0fSp2rUuGFAahfSbNUWc",
  authDomain: "router-8ef8a.firebaseapp.com",
  projectId: "router-8ef8a",
  storageBucket: "router-8ef8a.appspot.com",
  messagingSenderId: "1028131669714",
  appId: "1:1028131669714:web:df3d797d443a0ac8b9cf0b",
  measurementId: "G-KEPBEBS0PM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export {auth , createUserWithEmailAndPassword}