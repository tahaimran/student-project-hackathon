import React from 'react'
import SideNav from './SideNav/SideNav'
import CommingImg from './Images/comming.jpg'
function Comming () {
    return (
        <>
            <SideNav />
            <div className='container'>
                <div className="row">
               <img src={CommingImg} alt="" />
               </div>
            </div>
        </>
    )
}

export default Comming
