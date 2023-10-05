import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuuwOvtI1gHksfuaIbJcc2qUGloVZ0YeE",
  authDomain: "crwn-clothing-9daca.firebaseapp.com",
  projectId: "crwn-clothing-9daca",
  storageBucket: "crwn-clothing-9daca.appspot.com",
  messagingSenderId: "272982707199",
  appId: "1:272982707199:web:b3b72086cf1843089c75ca",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select-account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
