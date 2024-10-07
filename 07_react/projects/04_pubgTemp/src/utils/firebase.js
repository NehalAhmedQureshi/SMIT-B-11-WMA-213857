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
  apiKey: "AIzaSyCEPr3WIif2_-mRPRz6GKozb1Jtif6sToo",
  authDomain: "pubgtemp-77896.firebaseapp.com",
  projectId: "pubgtemp-77896",
  storageBucket: "pubgtemp-77896.appspot.com",
  messagingSenderId: "426048733784",
  appId: "1:426048733784:web:ca328afa10cf96bb18402d",
  measurementId: "G-5TQG5W1J03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const db = getFirestore(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);

export { app, auth, db, storage, analytics };