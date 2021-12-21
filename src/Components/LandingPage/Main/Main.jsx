import React from "react";
import StudySkills from "../Images/studyskills.jpg";
import "./Main.css";
import Button from '../../Button'


function Main() {


  return (
    <div className="container main ">
      <div className="row d-flex flex-wrap-reverse">
        <div className="col-md-6 info">
          <h2>Let Etudiants Evolve The Way You Learn</h2>
          <p>
            Etudiants is here to evolve the way education is taking place. It's a modern-day era where our team is focused on long-term solutions. Etudiants will help you increase your learning productivity.
          </p>
          <Button />
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={StudySkills} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
}

export default Main;
