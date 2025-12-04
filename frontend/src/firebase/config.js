import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBpJRhvFBg7LcVsmYKL3hsEnnmSiS1D9Ro",
  authDomain: "health-2replay.firebaseapp.com",
  projectId: "health-2replay",
  storageBucket: "health-2replay.firebasestorage.app",
  messagingSenderId: "887059072836",
  appId: "1:887059072836:web:f92817ec2388c282c53911",
  measurementId: "G-SQ3DJ1NF8C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
