import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import LandingPage from '../Components/LandingPage/LandingPage';
import DashboardUser from '../Components/DashboardUser/DashboardUser'
function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route  exact path='/' element={<LandingPage/>}/>
                <Route   path='/dashboard' element={<DashboardUser/>}/>

            </Routes>
        </Router>
    )
}

export default AppRouter
