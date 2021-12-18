import React from 'react'
import StudySkills from '../Images/studyskills.jpg';
import {signInWithGoogle} from '../../../Config/Firebase';

import './Main.css'
function Main() {
    return (
        <div className='container main '>
            <div className='row d-flex flex-wrap-reverse'>
                <div className='col-md-6 info'>
                    <h3>Let Etudiants Evolve The Way You Learn</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi natus error excepturi consequatur possimus laboriosam ipsum aperiam adipisci repellat ex, repudiandae quod. Cum exercitationem laboriosam commodi, molestiae esse quod!</p>
                    <button onClick={signInWithGoogle}>Sign Up</button>
                </div>
                <div className='col-md-6'>
                    <img className='img-fluid' src={StudySkills} alt="" srcset="" />
                </div>
            </div>
        </div>
    )
}

export default Main
