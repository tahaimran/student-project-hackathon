import React, { useState } from "react";
 import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './SideNav.css';
import { signOut } from "firebase/auth";
import {auth} from '../../../Config/Firebase'
import { useNavigate } from 'react-router-dom';

function SideNav() {
    const [nav, setNav] = useState(true);
    const navigate = useNavigate();

    const singOutGoogle = () =>{
    signOut(auth).then(() => {
        console.log("done")
        navigate("/");
    }).catch((error) => {
      // An error happened.
    });

    }
    return (
        <>
            <button className="ham" onClick={() => setNav(!nav)}><MenuIcon sx={{ fontSize: 40 }}/></button>
            <div className={nav ? "Navigation text-center container col-md-2 " : "NavigationChange" }>
                <ul >
                   <div><img className="border rounded-circle w-50" src={localStorage.getItem("profilePic")} alt="" srcset="" />
                   <h5>{localStorage.getItem("name")}</h5>
                   </div> 
                    <Link to='/dashboard/todolist'><li>To Do List</li></Link>
                    <Link to='/dashboard/Study'> <li>Study</li></Link>
                    <Link to='/'> <li>Chat</li></Link>
                    <Link to='/dashboard/mentors'> <li>Mentors</li></Link>
                    <Link to='/dashboard/faq'><li>FAQ</li></Link>
                   <li onClick={singOutGoogle}>SignOut</li>
                </ul>
            </div>
        </>

    )
}
export default SideNav;
