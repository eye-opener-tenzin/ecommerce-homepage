import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




const config = {

    apiKey: "AIzaSyBB9-U1B0aNpLBAGVLnCsDcBqydZrpHDhs",
    authDomain: "crown-app-b773b.firebaseapp.com",
    databaseURL: "https://crown-app-b773b.firebaseio.com",
    projectId: "crown-app-b773b",
    storageBucket: "crown-app-b773b.appspot.com",
    messagingSenderId: "881590837400",
    appId: "1:881590837400:web:b2dee2b4952d8c970f70ed",
    measurementId: "G-8RYV0600MB"
    
  };



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;
