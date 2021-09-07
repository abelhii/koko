// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2TrQ-hkvim0uhAxmHycBlu9SPHCG6Eew",
  authDomain: "koko-799cb.firebaseapp.com",
  databaseURL: "https://koko-799cb.firebaseio.com",
  projectId: "koko-799cb",
  storageBucket: "koko-799cb.appspot.com",
  messagingSenderId: "567145020294",
  appId: "1:567145020294:web:6a3766175eeb2ec7840a07",
  measurementId: "G-5JE29L02M3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
