// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7f694.firebaseapp.com",
  projectId: "mern-estate-7f694",
  storageBucket: "mern-estate-7f694.appspot.com",
  messagingSenderId: "397614047516",
  appId: "1:397614047516:web:80c6476ff3152ce4705ad9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);