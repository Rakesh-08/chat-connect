
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCncMaKC_3qXravksyjoNWiqnkokXykDFM",
  authDomain: "chat-connect-37978.firebaseapp.com",
  projectId: "chat-connect-37978",
  storageBucket: "chat-connect-37978.appspot.com",
  messagingSenderId: "313552133662",
  appId: "1:313552133662:web:c66919519358d999bb580f",
  measurementId: "G-TWM6NB9CXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);
