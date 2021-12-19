import React from 'react'
import resourceImg from '../Images/resource.png'
import './WhyUs.css'
function WhyUs() {
    return (
        <div className='container why'>
            <h2 className='title-text text-center'>Why Choose Us</h2>
            <div className='row d-flex flex-wrap-reverse'>
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <div className='list'>
                        <li>Organize All Your Study Material At One Place</li>
                        <li>Meet Like Minded Peoples In The Community</li>
                        <li>Teach Beginners & Learn From Experts</li>
                        <li>List All Your Tasks At One Place</li>
                        <li>Avail Upcomming Opportunities</li>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className='img-fluid' src={resourceImg} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WhyUs
