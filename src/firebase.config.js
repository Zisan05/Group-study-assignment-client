// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ9vHcToIlPWc9cMofG22sGGhKRL5TONk",
  authDomain: "group-study-assignment.firebaseapp.com",
  projectId: "group-study-assignment",
  storageBucket: "group-study-assignment.appspot.com",
  messagingSenderId: "268737796726",
  appId: "1:268737796726:web:117573c88708b1c49edd57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;