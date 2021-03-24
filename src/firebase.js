import firebase from'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';
import 'firebase/storage';

// Configuration 
const firebaseConfig = {
   
  };

  // Initialiser firebase
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }



  // Initialiser FirebaseUI
  export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

  // Initialiser Firestore
  export const firestore = firebase.firestore();

  
export const storage = firebase.storage();