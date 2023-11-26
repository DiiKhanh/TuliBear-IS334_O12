import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARKuun28eZ2cJ_Fg8Ducq7lj6X2agDOP8",
  authDomain: "tulibear.firebaseapp.com",
  projectId: "tulibear",
  storageBucket: "tulibear.appspot.com",
  messagingSenderId: "127513728573",
  appId: "1:127513728573:web:0cf05e18b327ea8f267c54"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { db, auth, storage, provider };