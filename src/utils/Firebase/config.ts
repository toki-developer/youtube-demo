import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBORye3IWQn6u7rwCzlsBffLU6FOjYMMgQ",
  authDomain: "react--demo-cfa90.firebaseapp.com",
  projectId: "react--demo-cfa90",
  storageBucket: "react--demo-cfa90.appspot.com",
  messagingSenderId: "39454042970",
  appId: "1:39454042970:web:70c11a04806f264967e163",
};

firebase.initializeApp(firebaseConfig);

export const fireAuth = firebase.auth();

export const storage = firebase.storage();

export const firestore = firebase.firestore();

export default firebase;
