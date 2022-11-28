import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "flashcards-auth-88988.firebaseapp.com",
  projectId: "flashcards-auth-88988",
  storageBucket: "flashcards-auth-88988.appspot.com",
  messagingSenderId: "549163614124",
  appId: "1:549163614124:web:ff7887c60c707a4ef1c409"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;