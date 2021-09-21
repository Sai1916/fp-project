import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCNBPZNGVk2xmWuXopBQ5PKyZJWKQl3ObY",
    authDomain: "financepeer-project.firebaseapp.com",
    projectId: "financepeer-project",
    storageBucket: "financepeer-project.appspot.com",
    messagingSenderId: "534374091738",
    appId: "1:534374091738:web:291e87c308ce139e044ee3" 
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;