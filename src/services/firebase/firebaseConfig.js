import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB6XeeVmQt5XQu_6rE4b7kxQg0rns_HND4",
  authDomain: "lealproyectoreact.firebaseapp.com",
  projectId: "lealproyectoreact",
  storageBucket: "lealproyectoreact.appspot.com",
  messagingSenderId: "579699408944",
  appId: "1:579699408944:web:8f83a74eb00e129e7fadf5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 