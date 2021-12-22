import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoOwY2xYOoAM0YcVhkq_MbdbRYDlPFh84",
  authDomain: "tomo-89466.firebaseapp.com",
  projectId: "tomo-89466",
  storageBucket: "tomo-89466.appspot.com",
  messagingSenderId: "456654835024",
  appId: "1:456654835024:web:6b9f973a38accc5d0d3055",
  measurementId: "G-Z7835R1E9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);