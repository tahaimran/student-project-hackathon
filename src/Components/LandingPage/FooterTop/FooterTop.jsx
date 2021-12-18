import React from 'react'
import './FooterTop.css'
function FooterTop() {
    return (
        <div className="container-fluid ">
        <div className="row  FooterTop">
            <div className="col-md-3">
                <h4>Etudiants</h4>
                <li>Security</li>
                <li>Business</li>
                <li>Privacy</li>
            </div>
            <div className="col-md-3">
                <h4>COMPANY</h4>
                <li>Careers</li>
                <li>Get in touch</li>
                <li>About</li>
            </div>
            <div className="col-md-3">
                <h4>Access</h4>
                <li>Click Here</li>
            </div>
            <div className="col-md-3">
                <h4>HELP</h4>
                <li>Help Center</li>
            </div>
        </div>
    </div>
    )
}

export default FooterTop
