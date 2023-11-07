import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD4z9evoXL37mLO-QIiFUIrT6miELZRjb0",
  authDomain: "aula-app-bfebd.firebaseapp.com",
  projectId: "aula-app-bfebd",
  storageBucket: "aula-app-bfebd.appspot.com",
  messagingSenderId: "1038660596676",
  appId: "1:1038660596676:web:f27a2e1386ed9fd27bea91",
  measurementId: "G-DR9947NGM1"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(fireBaseApp);
