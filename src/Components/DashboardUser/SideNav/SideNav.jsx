import React, { useState } from "react";
 import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './SideNav.css';
function SideNav() {
    const [nav, setNav] = useState(true);

    return (
        <>
            <button className="ham" onClick={() => setNav(!nav)}><MenuIcon sx={{ fontSize: 40 }}/></button>
            <div className={nav ? "Navigation text-center container col-md-2 " : "NavigationChange" }>
                <ul >
                    <Link to='/'><li>Expense Tracker</li></Link>
                    <Link to='/'> <li>Fin Edu</li></Link>
                    <Link to='/'><li>FAQ</li></Link>
                    <Link to='/'><li>Back</li></Link>
                </ul>
            </div>
        </>

    )
}
export default SideNav;