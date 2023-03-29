import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCAIVfiGQwI90dW5he72_5sVq5AYgZ5YyM",
    authDomain: "form-firebase-6d10d.firebaseapp.com",
    projectId: "form-firebase-6d10d",
    storageBucket: "form-firebase-6d10d.appspot.com",
    messagingSenderId: "471947168670",
    appId: "1:471947168670:web:9c0419e6fcc09c6651648f"
  
  };


const firebaseApp = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebaseApp);