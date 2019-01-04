 import firebase from 'firebase/app';
 import 'firebase/firestore';
 import 'firebase/auth';

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyCmWAiJkV1QUsr4oul3kjMFypbOd9IzXfU",
    authDomain: "react-wallet.firebaseapp.com",
    databaseURL: "https://react-wallet.firebaseio.com",
    projectId: "react-wallet",
    storageBucket: "react-wallet.appspot.com",
    messagingSenderId: "221797799821"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;