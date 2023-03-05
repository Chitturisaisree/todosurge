const firebaseConfig = {
  apiKey: "AIzaSyAJaTtqAvjW7S97gqEPDKYIV_RO-wZBe3w",
  authDomain: "todourge.firebaseapp.com",
  projectId: "todourge",
  storageBucket: "todourge.appspot.com",
  messagingSenderId: "15702571260",
  appId: "1:15702571260:web:8d6a6239218120c76bbf79",
  measurementId: "G-ZS3SSJSSVP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();