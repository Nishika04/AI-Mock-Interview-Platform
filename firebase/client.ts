// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCCgRuNyNbZxTtMsTVd7r7D0RPsRjajt1U",
  authDomain: "prepwise-e1ecb.firebaseapp.com",
  projectId: "prepwise-e1ecb",
  storageBucket: "prepwise-e1ecb.firebasestorage.app",
  messagingSenderId: "18544824435",
  appId: "1:18544824435:web:dd3b5d85e13c6dbbda9a06",
  measurementId: "G-7N2MG56467"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);