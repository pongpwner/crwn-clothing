import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBmZvrMCkBRLxxHI8fbbGxPJhwUAQH0TZo",
  authDomain: "crwn-db-ce970.firebaseapp.com",
  projectId: "crwn-db-ce970",
  storageBucket: "crwn-db-ce970.appspot.com",
  messagingSenderId: "95913610461",
  appId: "1:95913610461:web:ee23196c63f732a0a95f34",
  measurementId: "G-WT62JHQ9KB",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); //finding the location, kind of like the path to the location
  const snapShot = await userRef.get(); // seeing whether or not the uid exists using the exist property. contains the actual data
  console.log(snapShot);
  if (!snapShot.exists) {
    //if uid does not exist create it in the database
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
