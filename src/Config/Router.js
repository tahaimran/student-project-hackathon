import React from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import LandingPage from '../Components/LandingPage/LandingPage';
import DashboardUser from '../Components/DashboardUser/DashboardUser';
import ToDoList from '../Components/DashboardUser/ToDoList/ToDoList'
import FAQ from '../Components/DashboardUser/FAQ/FAQ';
import Mentors from '../Components/DashboardUser/Mentors/Mentors';
import Study from '../Components/DashboardUser/Study/Study';
import Comming from '../Components/DashboardUser/Comming';
function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route  exact path='/' element={<LandingPage/>}/>
                <Route   path='/dashboard' element={<DashboardUser/>}/>
                <Route   path='/dashboard/todolist' element={<ToDoList/>}/>
                <Route   path='/dashboard/faq' element={<FAQ/>}/>
                <Route   path='/dashboard/mentors' element={<Mentors/>}/>
                <Route   path='/dashboard/Study' element={<Study/>}/>
                <Route   path='/dashboard/404' element={<Comming/>}/>

            </Routes>
        </Router>
    )
}

export default AppRouter
