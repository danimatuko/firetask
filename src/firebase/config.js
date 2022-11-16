import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCAVYA-G_NXJp0Z1O3VLkThKchrCmWR_kY",
  authDomain: "firetask-danimatuko.firebaseapp.com",
  projectId: "firetask-danimatuko",
  storageBucket: "firetask-danimatuko.appspot.com",
  messagingSenderId: "660507493002",
  appId: "1:660507493002:web:08910bfed48f7fdbe12373",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp();

export { db, auth, storage, timestamp };
