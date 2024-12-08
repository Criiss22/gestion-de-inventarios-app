// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRzfpA2txMQW0GZ459OJ2CB-QIjJRpnOw",
  authDomain: "gestion-inventarios-18d34.firebaseapp.com",
  projectId: "gestion-inventarios-18d34",
  storageBucket: "gestion-inventarios-18d34.firebasestorage.app",
  messagingSenderId: "480596853574",
  appId: "1:480596853574:web:ea2e0e687e94d38b285b47",
  measurementId: "G-WECK2DFZFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);