// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1toAL0Bpn6F8IGkHby0m__BZi0apndNo",
  authDomain: "ema-john-simple-72273.firebaseapp.com",
  projectId: "ema-john-simple-72273",
  storageBucket: "ema-john-simple-72273.appspot.com",
  messagingSenderId: "319104723930",
  appId: "1:319104723930:web:75ca9a396fb1bdac6daee3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
