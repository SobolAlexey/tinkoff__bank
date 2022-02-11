import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";

import { getFirestore } from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBNR-rCwaooU9huNSfJFbtfUR8FxyDU9MU",
  authDomain: "tinkoff-18d7a.firebaseapp.com",
  projectId: "tinkoff-18d7a",
  storageBucket: "tinkoff-18d7a.appspot.com",
  messagingSenderId: "27902755126",
  appId: "1:27902755126:web:eed01b16cbe860e9327397",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const register = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) =>
  signInWithEmailAndPassword;

export const logout = () => signOut(auth);

export const db = getFirestore();
