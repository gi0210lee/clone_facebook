// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGji0A1ddgpRXCDUu1Mco2KhKudEDsc0A",
  authDomain: "clone-facebook-d63cc.firebaseapp.com",
  projectId: "clone-facebook-d63cc",
  storageBucket: "clone-facebook-d63cc.appspot.com",
  messagingSenderId: "795543475245",
  appId: "1:795543475245:web:161a25e40ad969b54cd4a4",
  measurementId: "G-1Y4S9FL1YK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (typeof window !== "undefined") {
  const analytics = getAnalytics(app);
}

const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage };
