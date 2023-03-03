import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyAurNSyivTSWaKxJqMt-AAB7Y54IkGaefI",
  authDomain: "kmit-rover.firebaseapp.com",
  projectId: "kmit-rover",
  storageBucket: "kmit-rover.appspot.com",
  messagingSenderId: "99067738751",
  appId: "1:99067738751:web:9277dc12265f03eeaadd4a",
  measurementId: "G-N6P6ZJH81N"
};

const firebaseDB=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth=firebase.auth();
const storage=firebase.storage()

export {auth};
export {storage};
export default firebaseDB.database().ref();