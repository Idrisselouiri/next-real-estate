// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: "full-stack-real-estate-425912.firebaseapp.com",
  projectId: "full-stack-real-estate-425912",
  storageBucket: "full-stack-real-estate-425912.appspot.com",
  messagingSenderId: "925217467678",
  appId: "1:925217467678:web:7c3bbd985f2380cbd4ad0f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
