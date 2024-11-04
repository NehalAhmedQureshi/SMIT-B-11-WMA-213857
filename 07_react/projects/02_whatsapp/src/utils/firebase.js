// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8SQ0qL-cqkgR2tRbl2H_VWVBvbHInqRw",
  authDomain: "whatsapp-clone-b4473.firebaseapp.com",
  projectId: "whatsapp-clone-b4473",
  storageBucket: "whatsapp-clone-b4473.firebasestorage.app",
  messagingSenderId: "119720548202",
  appId: "1:119720548202:web:8af4b5c73fbfa5ae537713",
  measurementId: "G-3XQZ1ZY1CV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {auth , db}
