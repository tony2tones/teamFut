  import firebase from 'firebase/app';
  import 'firebase/firestore'
  import 'firebase/auth'

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBjHuA4bjkdCpRioG5lus4ln7LJuc8KpWY",
    authDomain: "team-fut.firebaseapp.com",
    databaseURL: "https://team-fut.firebaseio.com",
    projectId: "team-fut",
    storageBucket: "",
    messagingSenderId: "568450229910"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;