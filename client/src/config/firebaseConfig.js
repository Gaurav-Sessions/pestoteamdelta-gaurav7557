import firebase from "firebase";
import { firebaseConfig } from "../Keys";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const facbookAuth = new firebase.auth.FacebookAuthProvider();

export { db, auth, provider, facbookAuth };
