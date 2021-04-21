import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSFWxzO3pgn5POdZ5_x6K_nbnB1AUSZUs",
  authDomain: "slack-clone-58c6e.firebaseapp.com",
  projectId: "slack-clone-58c6e",
  storageBucket: "slack-clone-58c6e.appspot.com",
  messagingSenderId: "389120192008",
  appId: "1:389120192008:web:0dd3c0df6323936ccdabbd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
