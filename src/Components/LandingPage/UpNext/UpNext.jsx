import React from 'react'
import Courses from '../Images/courses.jpg'
import Jobhunt from '../Images/jobhunt.jpg'
import Videoconf from '../Images/videoconf.jpg'
import Livechat from '../Images/livechat.jpg'
import './UpNext.css'
function UpNext() {
    return (
        <div className='container-fluid upnext  text-center '>
            <h1>What's Comming Up Next...</h1>
            <div className="row mt-5">
                <div className="col-md-3">
                    <img className='img-fluid'  src={Courses}  alt="" />
                    <h3>Video Conferencing</h3>
                </div>
                <div className="col-md-3">
                    <img className='img-fluid'  src={Jobhunt}  alt="" />
                    <h3>Job Hunting</h3>
                </div>
                <div className="col-md-3">
                    <img className='img-fluid'  src={Videoconf}  alt="" />
                    <h3>Free Courses</h3>
                </div>
                <div className="col-md-3">
                    <img className='img-fluid'  src={Livechat}  alt="" />
                    <h3>Chat App</h3>
                </div>
            </div>
        </div>
    )
}

export default UpNext
