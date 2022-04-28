import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyCfIm1W-ihMqxDfLZPsMEFh4KLk9dwDukI",
    authDomain: "twitter-clone-69dad.firebaseapp.com",
    projectId: "twitter-clone-69dad",
    storageBucket: "twitter-clone-69dad.appspot.com",
    messagingSenderId: "467843305734",
    appId: "1:467843305734:web:59c027baa8d9fe7944ce87",
    measurementId: "G-1LRMXXSR1P"
  };
  const firsebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;