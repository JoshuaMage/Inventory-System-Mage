import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBq7fbt-hXrcN66R1H5b4RO0h8mBjCYUVY",
  authDomain: "inventory-system-mage.firebaseapp.com",
  databaseURL: "https://inventory-system-mage-default-rtdb.firebaseio.com",
  projectId: "inventory-system-mage",
  storageBucket: "inventory-system-mage.appspot.com",
  messagingSenderId: "643801659798",
  appId: "1:643801659798:web:4c478ecd1995c3917ac5b7",
  measurementId: "G-3QZMT5HDVM"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
getDatabase(app);
export {
  auth as a
};
