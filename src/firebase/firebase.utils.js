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

// creating this async-await function to create our new user document to firebase database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // fetching user reference object from firestore using querying function of firebase like we learned in firestore video
  // for example, firestore.collection('users').doc('id').collection.('post').doc('id')
  // firestore.doc('user/id/post/id')
  const userRef = firestore.doc(`user/${userAuth.uid}`);

  // after that we will fetch user Snapsot using user Ref using which we can check if user is exists in firebase database or not ?
  // its like way of querying the users collection on firbase database to fetch user of specific id
  const snapShot = await userRef.get();
  // console.log(snapShot);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;