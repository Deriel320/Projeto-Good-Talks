import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAIFQLUC5vOKV4-6iMRwvQFr0d9nb541LA",
    authDomain: "goodtalks-4b75d.firebaseapp.com",
    projectId: "goodtalks-4b75d",
    storageBucket: "goodtalks-4b75d.appspot.com",
    messagingSenderId: "1011462608174",
    appId: "1:1011462608174:web:8285bf0f72cba99c7616bf"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  const auth = app.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {db, auth, provider};