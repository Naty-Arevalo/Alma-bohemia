// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // 👈 Importante
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFLnBURjFqqFvT8UDm2-Zhukbau-E0bmA",
  authDomain: "alma-bohemia-debdf.firebaseapp.com",
  projectId: "alma-bohemia-debdf",
  storageBucket: "alma-bohemia-debdf.firebasestorage.app",
  messagingSenderId: "245407382337",
  appId: "1:245407382337:web:2674ac610a0a01b1bcbfc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 👇 Inicializa Firestore
const db = getFirestore(app);

// 👇 Exportá lo necesario
export { app, db };