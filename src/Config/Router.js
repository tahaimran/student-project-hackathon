import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import LandingPage from '../Components/LandingPage/LandingPage';
function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route  exact path='/' element={<LandingPage/>}/>
            </Routes>
        </Router>
    )
}

export default AppRouter
