import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1WL3P5rV2FDtum3S3ur54zBgSShYi5Ao",
  authDomain: "fir-auth-7633b.firebaseapp.com",
  projectId: "fir-auth-7633b",
  storageBucket: "fir-auth-7633b.appspot.com",
  messagingSenderId: "547171523215",
  appId: "1:547171523215:web:313f6b841fad4a1523aefa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
