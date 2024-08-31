// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // For Firestore
import { getDatabase } from "firebase/database"; // For Realtime Database
import { getAuth } from "firebase/auth"; // For Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq7fbt-hXrcN66R1H5b4RO0h8mBjCYUVY",
  authDomain: "inventory-system-mage.firebaseapp.com",
  databaseURL: "https://inventory-system-mage-default-rtdb.firebaseio.com", // For Realtime Database
  projectId: "inventory-system-mage",
  storageBucket: "inventory-system-mage.appspot.com",
  messagingSenderId: "643801659798",
  appId: "1:643801659798:web:4c478ecd1995c3917ac5b7",
  measurementId: "G-3QZMT5HDVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // For Firestore
const database = getDatabase(app); // For Realtime Database
const auth = getAuth(app); // For Authentication

export { db, database, auth };
