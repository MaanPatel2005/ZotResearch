
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRt4a8kVPT6v5iT5WIucpMBOrUXWJDcKY",
  authDomain: "hack2024-3e0b1.firebaseapp.com",
  projectId: "hack2024-3e0b1",
  storageBucket: "hack2024-3e0b1.appspot.com",
  messagingSenderId: "244626054412",
  appId: "1:244626054412:web:50b382f5ef5dabda12fd29",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
// export const { auth, googleProvider, firestore } = firebaseConfig;
