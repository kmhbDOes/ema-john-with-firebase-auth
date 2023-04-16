// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqOULLc_QeSKwSo5dAOsMcy8P6aCnanAE",
    authDomain: "ema-john-with-firebase-a-ca28e.firebaseapp.com",
    projectId: "ema-john-with-firebase-a-ca28e",
    storageBucket: "ema-john-with-firebase-a-ca28e.appspot.com",
    messagingSenderId: "512130036804",
    appId: "1:512130036804:web:075956cbb8e3585b0d3811"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;