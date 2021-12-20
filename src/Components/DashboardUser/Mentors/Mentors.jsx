import React from 'react'
import SideNav from '../SideNav/SideNav';
import Mentee from './Mentee';
import Mentor from '../Images/mentors.png';

function Mentors() {
    return (
        <>
            <SideNav />
            <div className='container '>
                <h1 className='text-center text-title mt-5'>Find The World Best Mentors</h1>
                {/* <img src={Mentor} className='w-50 ' alt="" /> */}
                <div className='row d-flex justify-content-center mt-3'>
                    
                    <Mentee name={"Muhammad Taha Imran"} img={'https://pbs.twimg.com/profile_images/1468854174871863303/2ZcYygsM_400x400.jpg'} />
                    <Mentee name={"Muhammad Taha Imran"} img={'https://pbs.twimg.com/profile_images/1468854174871863303/2ZcYygsM_400x400.jpg'} />
                    <Mentee name={"Muhammad Taha Imran"} img={'https://pbs.twimg.com/profile_images/1468854174871863303/2ZcYygsM_400x400.jpg'} />

                </div>
            </div>
        </>
    )
}

export default Mentors 
