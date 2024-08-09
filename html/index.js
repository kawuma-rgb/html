// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkC6pzBWUo1OUk4vr151IJ9VCaBNgaWUA",
  authDomain: "egowan-6ff1c.firebaseapp.com",
  projectId: "egowan-6ff1c",
  storageBucket: "egowan-6ff1c.appspot.com",
  messagingSenderId: "581162352243",
  appId: "1:581162352243:web:c56c64ee3342ebde0b7406",
  measurementId: "G-648CFKJT8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);