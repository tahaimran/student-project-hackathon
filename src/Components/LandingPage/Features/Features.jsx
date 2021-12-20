import React from 'react';
import './Features.css';
import {Inventory2,PeopleAlt,Lightbulb} from '@mui/icons-material';
function Features() {
    return (
        <div className='container-fluid features'>
            <div className="row text-center">
                <h2 className='text-title mb-5'>OUR FEATURES</h2>
                <div className="col-md-4">
                    <span className='icons'><Inventory2 sx={{ fontSize: 50 }}/></span>
                    <h3>Origanized</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi natus error excepturi
                    consequatur.</p>
                </div>
               <div className="col-md-4">
                   <span  className='icons'><PeopleAlt sx={{ fontSize: 50 }}/></span> 
                    <h3>Community</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi natus error excepturi
                    consequatur.</p>
                </div>
                <div className="col-md-4">
                   <span className='icons'><Lightbulb sx={{ fontSize: 50 }}/></span> 
                    <h3>Teach & Learn</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus modi natus error excepturi
                    consequatur.</p>
                </div>
            </div>
        </div>
    )
}

export default Features;
