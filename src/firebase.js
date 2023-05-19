// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1X5048RYyBITd8-KxIdqADW1lJW18Goo",
  authDomain: "asos-d244b.firebaseapp.com",
  projectId: "asos-d244b",
  storageBucket: "asos-d244b.appspot.com",
  messagingSenderId: "977793783275",
  appId: "1:977793783275:web:cbcfc6aee67421fac4f5ae",
  measurementId: "G-73T06MJL8Y",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
