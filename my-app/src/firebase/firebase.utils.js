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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
