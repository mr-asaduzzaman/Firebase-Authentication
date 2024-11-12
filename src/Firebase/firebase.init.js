// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVA-x9yYF0VW_s0kL1UYU8qzSJxaJEtQA",
  authDomain: "login-signup-router-context.firebaseapp.com",
  projectId: "login-signup-router-context",
  storageBucket: "login-signup-router-context.firebasestorage.app",
  messagingSenderId: "778288947963",
  appId: "1:778288947963:web:43e704923c84feb297065e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);