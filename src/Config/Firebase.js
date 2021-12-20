import {
    initializeApp
} from "firebase/app";

import {
    getAuth
} from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCQ8DbISvJXtQ7Es6BElzHgvzOwvd0AwZg",
    authDomain: "student-project-hackathon.firebaseapp.com",
    databaseURL: "https://student-project-hackathon-default-rtdb.firebaseio.com",
    projectId: "student-project-hackathon",
    storageBucket: "student-project-hackathon.appspot.com",
    messagingSenderId: "795954094779",
    appId: "1:795954094779:web:8ac8b245a698a5c4a57f9e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
