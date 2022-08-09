// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAoGs47ODamZEmMZI4flouqQFK-4qePqs",
  authDomain: "tinder-clone-edcc3.firebaseapp.com",
  projectId: "tinder-clone-edcc3",
  storageBucket: "tinder-clone-edcc3.appspot.com",
  messagingSenderId: "410648078999",
  appId: "1:410648078999:web:21dfa74ff78ad3c25317d2",
  measurementId: "G-VRQKYTPRYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

let peopleSnapshot=[];
async function getCities(db) {
  const peopleCol = collection(db, "people");
  peopleSnapshot = await getDocs(peopleCol);
  // const peopleList = peopleSnapshot.docs.map((doc) => doc.data());
  // return peopleList;
}

getCities(db);

export { peopleSnapshot };

export default db;