import React from 'react'
import { Google, Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import "./Mentee.css"
function Mentee(props) {
    return (
        <div className="card col-md-3 border-black" style={{ width: '18rem' }}>
            <img className="card-img-top img-fluid" src={props.img} alt="Card image cap" />
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-text">{props.name} is here to help you in solving differnet issue regarding to your career.
                    You can contact them through their social media.
                </p>

                <div className="social-mentee">
                    <a href="" className=""><Google sx={{ fontSize: 40, color: ' brown' }} /></a>
                    <a href="" className=""><Facebook sx={{ fontSize: 40, color: ' #129CF7' }} /></a>
                    <a href="" className=""><Instagram sx={{ fontSize: 40, color: ' pink' }} /></a>
                    <a href="" className=""><LinkedIn sx={{ fontSize: 40, color: ' #0A66C2' }} /></a>
                    <a href="" className=""><Twitter sx={{ fontSize: 40, color: ' skyblue' }} /></a>
                </div>
            </div>
        </div>

    )
}

export default Mentee
