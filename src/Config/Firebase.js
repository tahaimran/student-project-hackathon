import {
    initializeApp
} from "firebase/app";
import {Link} from 'react-router-dom';
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQ8DbISvJXtQ7Es6BElzHgvzOwvd0AwZg",
    authDomain: "student-project-hackathon.firebaseapp.com",
    projectId: "student-project-hackathon",
    storageBucket: "student-project-hackathon.appspot.com",
    messagingSenderId: "795954094779",
    appId: "1:795954094779:web:8ac8b245a698a5c4a57f9e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {

            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;
            

            localStorage.setItem("name", name);
            localStorage.setItem("email", email);
            localStorage.setItem("profilePic", profilePic);
            // window.location.href = "/dashboard";
            <Link to='/dashboard'/>
            console.log(name)

        }).catch((error) => {
            console.log(error)
        })
}