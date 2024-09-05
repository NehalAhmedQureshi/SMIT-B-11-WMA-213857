// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCrPiyCW4kQ54VcKi-ukZugFE_dFZZMUZI",
  authDomain: "e-comerce-webstore.firebaseapp.com",
  projectId: "e-comerce-webstore",
  storageBucket: "e-comerce-webstore.appspot.com",
  messagingSenderId: "840531690111",
  appId: "1:840531690111:web:f657f500e70dbae4a9b54a",
  measurementId: "G-PM2ZYHYNPP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);