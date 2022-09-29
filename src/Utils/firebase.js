import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0sIvhE2Bb86AJuXupvHffFibIzH7RTgU",
    authDomain: "tugerente2-db.firebaseapp.com",
    projectId: "tugerente2-db",
    storageBucket: "tugerente2-db.appspot.com",
    messagingSenderId: "743327030705",
    appId: "1:743327030705:web:27cc5ac4e4e1b4d7f1b190",
    measurementId: "G-GDX2PJ8PDS"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
