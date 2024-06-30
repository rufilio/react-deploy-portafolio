// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMCqYSc1c576V3J0F9kl1IQflXMkWlGRY",
  authDomain: "portafolio-26550.firebaseapp.com",
  projectId: "portafolio-26550",
  storageBucket: "portafolio-26550.appspot.com",
  messagingSenderId: "85629868845",
  appId: "1:85629868845:web:c8fa18895ba75f965c91a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

