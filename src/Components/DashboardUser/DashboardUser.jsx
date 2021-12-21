import React from 'react'
import SideNav from './SideNav/SideNav';
import { Link } from 'react-router-dom';
import './DashboardUser.css'
import {LiveHelp, RecordVoiceOver,Book,ListAlt, Logout} from '@mui/icons-material'
import Logo from '../../logo.png'
function DashboardUser() {
    return (
        <>
        <SideNav />
        <div className='container dashboard mt-5 text-center '>
            <h2>{localStorage.getItem("name")} Explore <img width={120} src={Logo} /></h2>
            <div className="row text-center ">
                <div className="col-md-6">
                    <ListAlt sx={{ fontSize: 80 ,color : "pink"}}  />
                    <h2>To Do List</h2>
                   <Link to='/dashboard/todolist'> <button>Check In</button></Link>
                </div>
                <div className="col-md-6">
                    <Book sx={{ fontSize: 80,color : "yellow" }} />
                    <h2>Study</h2>
                    <Link to='/dashboard/Study'><button>Check In</button></Link>
                </div>
                <div className="col-md-6 mt-5">
                    <RecordVoiceOver sx={{ fontSize: 80,color : "red" }} />
                    <h2>Mentors</h2>
                    <Link to='/dashboard/mentors'><button>Check In</button></Link>
                </div>
                <div className="col-md-6 mt-5">
                    <LiveHelp sx={{ fontSize: 80,color : "skyblue" }} />
                    <h2>FAQ</h2>
                   <Link to='/dashboard/faq'> <button>Check In</button></Link>
                </div>
            </div>

        </div>
        </>
    )
}

export default DashboardUser
