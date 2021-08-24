// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyADDMfq0ZGW7j50huNc03G1uMK-qjm42t8",
    authDomain: "twitter-clone-6101d.firebaseapp.com",
    projectId: "twitter-clone-6101d",
    storageBucket: "twitter-clone-6101d.appspot.com",
    messagingSenderId: "115325889262",
    appId: "1:115325889262:web:59f52c31799d69014ee1ff",
    measurementId: "G-H1494LMWKB"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;