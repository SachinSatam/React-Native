// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
//import {API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSANGING_SENDER_ID, APP_ID, MEASUREMENT_ID} from "@env"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqL8GYyW9RiwNfSUkJeaYbsgmG-anwp1Q",
  authDomain: "mapquest-79bd1.firebaseapp.com",
  projectId: "mapquest-79bd1",
  storageBucket: "mapquest-79bd1.appspot.com",
  messagingSenderId: "613928581868",
  appId: "1:613928581868:web:ea3ef7dda18ae526c103c9",
  measurementId: "G-8V3T3GVT3Z"
};

// Initialize Firebase
export const FireBase_APP = initializeApp(firebaseConfig);
export const FireBase_AUTH=getAuth(FireBase_APP)
export const Firestore_DB=getFirestore(FireBase_APP)