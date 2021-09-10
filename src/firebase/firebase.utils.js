import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAGz6zdunrnP8AuwypObX_zTqhlrYuScPY",
    authDomain: "cloth-web-db.firebaseapp.com",
    projectId: "cloth-web-db",
    storageBucket: "cloth-web-db.appspot.com",
    messagingSenderId: "74386083798",
    appId: "1:74386083798:web:392f4958b0b94d1c4a1e77",
    measurementId: "G-PKEZ2Z4V5F"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;