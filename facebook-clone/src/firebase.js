// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// I used Firebase JS SDK 9 with compat version 8

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCUBf1C_NJrJKwubYazwJCmeyKNF_nmRTU",
    authDomain: "facebook-clone-54321.firebaseapp.com",
    databaseURL: "https://facebook-clone-54321.firebaseio.com",
    projectId: "facebook-clone-54321",
    storageBucket: "facebook-clone-54321.appspot.com",
    messagingSenderId: "756027158374",
    appId: "1:756027158374:web:cb79289e6c61d618ae22a7",
    measurementId: "G-GDY3H7M1HG"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;