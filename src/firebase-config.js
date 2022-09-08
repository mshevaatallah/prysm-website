import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4rIC8blSMe74v5qnojxcoLCoorfS8-ac",
  authDomain: "fir-login-16163.firebaseapp.com",
  projectId: "fir-login-16163",
  storageBucket: "fir-login-16163.appspot.com",
  messagingSenderId: "423499192729",
  appId: "1:423499192729:web:5749d2863e3f72d7151b08",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
