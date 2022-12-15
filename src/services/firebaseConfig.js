
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBZyhEREHBY_MdryA4SWnpjJFpZyuVH6LE",
  authDomain: "nobre-dopamina.firebaseapp.com",
  projectId: "nobre-dopamina",
  storageBucket: "nobre-dopamina.appspot.com",
  messagingSenderId: "582906017602",
  appId: "1:582906017602:web:cd50da6e1769dea09e7adb",
  measurementId: "G-NTDJ1GMT7E"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth}

