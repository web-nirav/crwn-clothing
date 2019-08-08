import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDs7zutgsZyPhYoD7ALhBCUb9UHYeeEufI",
  authDomain: "crwn-clothing-53f47.firebaseapp.com",
  databaseURL: "https://crwn-clothing-53f47.firebaseio.com",
  projectId: "crwn-clothing-53f47",
  storageBucket: "",
  messagingSenderId: "245082220964",
  appId: "1:245082220964:web:a3c4aad33394e04b"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
