import firebase from "firebase/app";
import "firebase/database";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4SGizEGtELjiZJxr7616vzipcuXlOwJ0",
  authDomain: "react-contact-3aeb4.firebaseapp.com",
  databaseURL: "https://react-contact-3aeb4-default-rtdb.firebaseio.com",
  projectId: "react-contact-3aeb4",
  storageBucket: "react-contact-3aeb4.appspot.com",
  messagingSenderId: "253200787229",
  appId: "1:253200787229:web:f4566cdd5e4abf354923f4",
  measurementId: "G-TEPT4EEVT5"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
  // Initialize Firebase
  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();