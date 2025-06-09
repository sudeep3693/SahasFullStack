
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAEGlmVtDSy7TcwHb-wrOyTYqnlbxim1ZE",
  authDomain: "sahas-11bd9.firebaseapp.com",
  projectId: "sahas-11bd9",
  storageBucket: "sahas-11bd9.firebasestorage.app",
  messagingSenderId: "112477108711",
  appId: "1:112477108711:web:c305045d8022650d71e542",
  measurementId: "G-W7JYHN6TXL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

