import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyBKq5dWLNYR5vLlm67HnDb_j2fAQY5Fo14',
    authDomain: 'pairingmate-6126c.firebaseapp.com',
    projectId: 'pairingmate-6126c',
    storageBucket: 'pairingmate-6126c.appspot.com',
    messagingSenderId: '1084875720748',
    appId: '1:1084875720748:web:d09dab9be5a037e5982989',
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage();
