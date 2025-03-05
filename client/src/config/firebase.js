import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBmTO4aPqMdeQycso_PDY4I3HyRYlzGLpM",
  authDomain: "news-ai-c1252.firebaseapp.com",
  projectId: "news-ai-c1252",
  storageBucket: "news-ai-c1252.firebasestorage.app",
  messagingSenderId: "61771168996",
  appId: "1:61771168996:web:578d445587a73665b580f1",
  measurementId: "G-XXW3RR75MM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider()
