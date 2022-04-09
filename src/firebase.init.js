// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoiM0H3SVyw7npfUAD1P2rCuFMCj1hNu8",
  authDomain: "ema-john-simple-ba2f0.firebaseapp.com",
  projectId: "ema-john-simple-ba2f0",
  storageBucket: "ema-john-simple-ba2f0.appspot.com",
  messagingSenderId: "673844309439",
  appId: "1:673844309439:web:037ba02cbeb2a17ae3c50a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;