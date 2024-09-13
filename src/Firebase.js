
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo1LynN2_221qdy0LSkX0KgZBAawiVtjU",
  authDomain: "react-firebase-3cae6.firebaseapp.com",
  projectId: "react-firebase-3cae6",
  storageBucket: "react-firebase-3cae6.appspot.com",
  messagingSenderId: "94563933121",
  appId: "1:94563933121:web:55eb86eaf7a258983e2d40",
  measurementId: "G-6ZDZK2CN9N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
