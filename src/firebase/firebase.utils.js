import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA4ZtJuPxegZXxt1L9jz5gw3Fk3C6YoKkA",
    authDomain: "mipfashions.firebaseapp.com",
    projectId: "mipfashions",
    storageBucket: "mipfashions.appspot.com",
    messagingSenderId: "482410422462",
    appId: "1:482410422462:web:8673e5182968137d60feef",
    measurementId: "G-6CMZTW7DTD"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;