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
  apiKey: "AIzaSyBnkuOgE0nROdH2BovaDExYJ0BYwN_q7nY",
  authDomain: "pubgtemp-e6dd0.firebaseapp.com",
  projectId: "pubgtemp-e6dd0",
  storageBucket: "pubgtemp-e6dd0.appspot.com",
  messagingSenderId: "501333335956",
  appId: "1:501333335956:web:98817acfdd0a53a8e6b981",
  measurementId: "G-01QM3WNJE9"
};

// Ininptialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { app, auth, db, storage, analytics };