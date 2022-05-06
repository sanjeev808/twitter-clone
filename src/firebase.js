import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDSOUUha4_spOtP13eF5AZ5FXIdU_EPWOM",
  authDomain: "twitter-clone-349009.firebaseapp.com",
  projectId: "twitter-clone-349009",
  storageBucket: "twitter-clone-349009.appspot.com",
  messagingSenderId: "309418208501",
  appId: "1:309418208501:web:8a1d2273b197075018e9bc",
  measurementId: "G-GYKSFL5DNW"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  export default db;