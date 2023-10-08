// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2aNAxFHAcD-piPrv3LTutK3fSWazdSWs",
  authDomain: "event-management-4cbae.firebaseapp.com",
  projectId: "event-management-4cbae",
  storageBucket: "event-management-4cbae.appspot.com",
  messagingSenderId: "662370645806",
  appId: "1:662370645806:web:562b0733f9761fe4536cbf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;