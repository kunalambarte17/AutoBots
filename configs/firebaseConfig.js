// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "autobots-k31.firebaseapp.com",
  projectId: "autobots-k31",
  storageBucket: "autobots-k31.firebasestorage.app",
  messagingSenderId: "828016018976",
  appId: "1:828016018976:web:f76561fc1b9d01131a1e45",
  measurementId: "G-QZEBSTWWYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app);