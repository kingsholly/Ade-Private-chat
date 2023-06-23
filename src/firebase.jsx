import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDftBGMn-livthAoEo-zgd0kFhjZ3N2als",
  authDomain: "coffee-caninne.firebaseapp.com",
  projectId: "coffee-caninne",
  storageBucket: "coffee-caninne.appspot.com",
  messagingSenderId: "664496901864",
  appId: "1:664496901864:web:0963142675fe49877c435d",
  measurementId: "G-Y99CRPZYR4",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
