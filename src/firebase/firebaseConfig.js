import firebase from 'firebase/app';
import 'firebase/firestore';
import { REACT_APP_APIKEY } from '../keys.js';
require('firebase/auth');

const firebaseConfig = {
  apiKey: REACT_APP_APIKEY,
  authDomain: "boardgames-ac04b.firebaseapp.com",
  projectId: "boardgames-ac04b",
  storageBucket: "boardgames-ac04b.appspot.com",
  messagingSenderId: "515115237978",
  appId: "1:515115237978:web:4da6f68cff665c70ce8e63"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

