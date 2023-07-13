// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpTs35xpXlBry-xeEbavo0kcKB1R8NS8U",
  authDomain: "kanbanboard-b5224.firebaseapp.com",
  projectId: "kanbanboard-b5224",
  storageBucket: "kanbanboard-b5224.appspot.com",
  messagingSenderId: "77953503805",
  appId: "1:77953503805:web:57a640ab82db4653031054",
  measurementId: "G-21XD5LMLPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//const analytics = getAnalytics(app);

export default db;