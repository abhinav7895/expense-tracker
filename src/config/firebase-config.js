// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCI_3PK1zxtRrTPZtqecW2xUbZMjPuY6jQ",
  authDomain: "expense-tracker-11f35.firebaseapp.com",
  projectId: "expense-tracker-11f35",
  storageBucket: "expense-tracker-11f35.appspot.com",
  messagingSenderId: "54818719199",
  appId: "1:54818719199:web:ccc8fd4b309129dc84306a",
  measurementId: "G-7FW799KVJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// for auth
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// for database 
export const db = getFirestore(app);
