import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD0-Phc2lge9duu-P6Yxqud8neML6b28Io",
  authDomain: "game-db-70dda.firebaseapp.com",
  databaseURL: "https://game-db-70dda.firebaseio.com",
  projectId: "game-db-70dda",
  storageBucket: "game-db-70dda.appspot.com",
  messagingSenderId: "231256461341",
  appId: "1:231256461341:web:1500524a296385fc7876f4",
  measurementId: "G-BCFR89CSCW",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("cant creating", err.message);
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
