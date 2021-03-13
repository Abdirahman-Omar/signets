import firebase from'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration 
const firebaseConfig = {
    apiKey: "AIzaSyBqQRS8GaaRalAqeY3_-BLptJKi6GPMeig",
    authDomain: "abdirahman-react.firebaseapp.com",
    projectId: "abdirahman-react",
    storageBucket: "abdirahman-react.appspot.com",
    messagingSenderId: "302817357703",
    appId: "1:302817357703:web:b1500517088e1ec0d36d22",
    measurementId: "G-T1K2YCTQR4"
  };

  // Initialiser firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }



  // Initialiser FirebaseUI
  export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

  // Initialiser Firestore
  export const instanceFirestore = firebase.firestore();