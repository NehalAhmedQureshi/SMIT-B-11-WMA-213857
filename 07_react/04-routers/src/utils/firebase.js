// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
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
// <<<<<<< HEAD:07_react/04-routers/src/firebase.js
// const analytics = getAnalytics(app);
// const auth = getAuth(app)
// =======
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
// >>>>>>> dccfe38a8931db7e20c44f917ee1655e6b8631fe:07_react/04-routers/src/utils/firebase.js

export { app, auth, db, storage, analytics };