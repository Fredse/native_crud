import firebase from 'firebase'

import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAVUn7jeUkhssh7DQo_U5WCv_LsitBj6vU",
    authDomain: "login--users--appointments.firebaseapp.com",
    databaseURL: "https://login--users--appointments.firebaseio.com",
    projectId: "login--users--appointments",
    storageBucket: "login--users--appointments.appspot.com",
    messagingSenderId: "146275460986",
    appId: "1:146275460986:web:2629dcec41c342f24cd8c3",
    measurementId: "G-G0ZFRCSX2H"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const db = firebase.firestore()

  export default{
      firebase,
      db,

  }