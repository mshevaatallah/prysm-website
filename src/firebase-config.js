import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB__rnZ9hOX08oBVVDY-zBPbvffzxSvpWw",
  authDomain: "prysm-e6f38.firebaseapp.com",
  projectId: "prysm-e6f38",
  storageBucket: "prysm-e6f38.appspot.com",
  messagingSenderId: "140967120361",
  appId: "1:140967120361:web:44a86378be4c9386ea4f78",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
