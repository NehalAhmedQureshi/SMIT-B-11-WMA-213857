// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdedKW_QSkfJW5DUXlnjx9uI6WRTkRSUI",
  authDomain: "biddingapp-bac16.firebaseapp.com",
  projectId: "biddingapp-bac16",
  storageBucket: "biddingapp-bac16.appspot.com",
  messagingSenderId: "341270160185",
  appId: "1:341270160185:web:e94a5720a05fd68a96fee8",
  measurementId: "G-5DTKNVWYG1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
const db = getDatabase(app)
const storageDB = storageBucket(app)

export { auth , db , storageDB }