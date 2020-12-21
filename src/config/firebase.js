import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDJjJ3_jqNt_MCrnzKREjHFhGdHX-jI0pQ",
  authDomain: "tinder-3c754.firebaseapp.com",
  databaseURL: "https://tinder-3c754.firebaseio.com",
  projectId: "tinder-3c754",
  storageBucket: "tinder-3c754.appspot.com",
  messagingSenderId: "73373700389",
  appId: "1:73372500389:web:84716bbf9c526378bca84c",
  measurementId: "G-9JLK08RZMK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
