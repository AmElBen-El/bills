// Import the functions you need from the SDKs you need
import { getApp,getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,  
  authDomain: "bills-cb148.firebaseapp.com",
  projectId: "bills-cb148",
  storageBucket: "bills-cb148.appspot.com",
  messagingSenderId: "451902921479",
  appId: "1:451902921479:web:14c926c3848df246e383a2"
}
// Initialize Firebase
const app = getApps().length==0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db,storage }