import firebase from "firebase";
const config = {
  apiKey: "AIzaSyB0Eo2IX5bjTCQ9POpjV9oErDvAk-sdfFM",
  authDomain: "linkedin-clone-project-9fb83.firebaseapp.com",
  projectId: "linkedin-clone-project-9fb83",
  storageBucket: "linkedin-clone-project-9fb83.appspot.com",
  messagingSenderId: "241099234136",
  appId: "1:241099234136:web:6e74f6cb012ef26c79632d",
};

const firebaseapp = firebase.initializeApp(config);
const db = firebaseapp.firestore();
const auth = firebase.auth();

export { db, auth };
