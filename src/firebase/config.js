import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjrdiUyAnS-2OxVRmFhylLjA-DOkUlqRI",
  authDomain: "blogreact-c36cf.firebaseapp.com",
  projectId: "blogreact-c36cf",
  storageBucket: "blogreact-c36cf.appspot.com",
  messagingSenderId: "408219322057",
  appId: "1:408219322057:web:c5450f96c546a1fe06af18"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);