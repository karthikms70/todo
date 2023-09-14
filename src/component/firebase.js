
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyAQ0w_aO1AUtCNvz0md9dVDTrw4s-2FUKU",   
  authDomain: "todoapp-61049.firebaseapp.com",
  projectId: "todoapp-61049",
  storageBucket: "todoapp-61049.appspot.com",
  messagingSenderId: "798451133845",
  appId: "1:798451133845:web:25c5f4438aaac1265e1a9c"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);