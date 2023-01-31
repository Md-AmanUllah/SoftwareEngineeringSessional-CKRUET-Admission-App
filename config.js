import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Web apps firebase configuration
const firebaseConfig={
    apiKey: "AIzaSyCSv5T3S4DOG3q7PRcO89cSnm3qTXhkzWw",
    authDomain: "ckruet-fbe1d.firebaseapp.com",
    projectId: "ckruet-fbe1d",
    storageBucket: "ckruet-fbe1d.appspot.com",
    messagingSenderId: "588519500733",
    appId: "1:588519500733:web:65f2e80969020dc8ba80d4",
    measurementId: "G-Q88DCH6643"
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};