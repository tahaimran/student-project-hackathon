import React from 'react';
import './Features.css';
import {Inventory2,PeopleAlt,Lightbulb} from '@mui/icons-material';
function Features() {
    return (
        <div className='container-fluid features'>
            <div className="row text-center">
                <h2 className='text-title mb-5'>OUR FEATURES</h2>
                <div className="col-md-4 left">
                    <span className='icons'><Inventory2 sx={{ fontSize: 50 }}/></span>
                    <h3>Origanized</h3>
                    <p>An organized way to list your daily task. Add your learning stuff in case don't want to work today. Be happy there will be a tomorrow.</p>
                </div>
               <div className="col-md-4 mid">
                   <span  className='icons'><PeopleAlt sx={{ fontSize: 50 }}/></span> 
                    <h3>Community</h3>
                    <p>A community that is ready to help each other in all issues. By not wasting your time be a part of them and grow together.</p>
                </div>
                <div className="col-md-4 right">
                   <span className='icons'><Lightbulb sx={{ fontSize: 50 }}/></span> 
                    <h3>Teach & Learn</h3>
                    <p>Industry experts, innovators, subject expert mentors are here to help you become the expert in your field, and in return pass it on.</p>
                </div>
            </div>
        </div>
    )
}

export default Features;
