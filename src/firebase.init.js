// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcGcLd8z5ly3TPAxC9ICUAYmNo924xPJE",
  authDomain: "ema-john-server-e543c.firebaseapp.com",
  projectId: "ema-john-server-e543c",
  storageBucket: "ema-john-server-e543c.appspot.com",
  messagingSenderId: "590015174406",
  appId: "1:590015174406:web:cff32af6104d289ab9b087"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;