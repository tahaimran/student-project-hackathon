import {
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { auth, database } from '../Config/Firebase'
import { useNavigate } from 'react-router-dom';

import { ref, set,push } from "firebase/database";

import './Button.css'
function Button() {
    const navigate = useNavigate();
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                let user = result.user;
                const name = user.displayName;
                const email = user.email;
                const profilePic = user.photoURL;
                const uid = user.uid;
                localStorage.setItem("name", name);
                localStorage.setItem("email", email);
                localStorage.setItem("profilePic", profilePic);

                    
                    push(ref(database, 'users/' + uid), {
                      username: name,
                      email: email,
                      profile_picture : profilePic,
                      userId : uid
                    });
                  

                navigate("/dashboard");

                console.log(result)
            }).catch((error) => {
                console.log(error)
            })
    }
    return (
        <div className="signup">
            <button  onClick={signInWithGoogle}>SignUp</button>

        </div>

    )


}
export default Button;