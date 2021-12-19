import React from "react";
import StudySkills from "../Images/studyskills.jpg";
import "./Main.css";
import {
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from '../../../Config/Firebase'
import { useNavigate } from 'react-router-dom';



function Main() {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
        localStorage.setItem("profilePic", profilePic);
        navigate("/dashboard");

        console.log(result)
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className="container main ">
      <div className="row d-flex flex-wrap-reverse">
        <div className="col-md-6 info">
          <h3>Let Etudiants Evolve The Way You Learn</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            modi natus error excepturi consequatur possimus laboriosam ipsum
            aperiam adipisci repellat ex, repudiandae quod. Cum exercitationem
            laboriosam commodi, molestiae esse quod!
          </p>
          <button onClick={signInWithGoogle}>SignUp</button>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={StudySkills} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
