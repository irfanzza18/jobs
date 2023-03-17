import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA3Vnn6UDdKrK_mf_BRXZwfJ9GBuX7ZvBk",
  authDomain: "auth-firebase-3f477.firebaseapp.com",
  projectId: "auth-firebase-3f477",
  storageBucket: "auth-firebase-3f477.appspot.com",
  messagingSenderId: "770140477244",
  appId: "1:770140477244:web:02f61a091f1ec7cf7ef039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);