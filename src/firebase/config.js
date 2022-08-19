/**
 *
 * Firebase 8
 * import firebase from 'firebase/app';
 * import 'firebase/firestore'
 * import 'firebase/auth'
 *
 * */
// Firebase 9+
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDg6rlE2RHZkLHLHjiTeDMeXjz7vnw_3R8",
  authDomain: "udemy-vue-firebase-sites-26ce0.firebaseapp.com",
  projectId: "udemy-vue-firebase-sites-26ce0",
  storageBucket: "udemy-vue-firebase-sites-26ce0.appspot.com",
  messagingSenderId: "142236400049",
  appId: "1:142236400049:web:60fb70da1b888d2108e590",
};

// init firebase
firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
