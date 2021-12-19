import React from 'react'
import SideNav from '../SideNav/SideNav'
import './FAQ.css'
import { Google, Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
function FAQ() {
    return (
        <>
            <SideNav />

            <div className='container faq text-center mt-5'>
                <h2>Contact Us</h2>
                <button className='mt-5'>
                    <Google sx={{ color: '#FF6B6B' }} />
                    <a href='mailto:tahaimran.24@gmail.com'>
                        Contact Us Via Email</a>
                </button>
                <div className=' social  text-center'>
                    <h2 className='title-text'>Our Social Handling</h2>
                    <span>
                    <i><Facebook  sx={{ fontSize: 60 ,color :' #129CF7'}}/></i>
                    <i><Instagram  sx={{ fontSize: 60,color :' pink' }}/></i>
                    <i><Twitter  sx={{ fontSize: 60,color :' skyblue' }}/></i>
                    <i><LinkedInIcon  sx={{ fontSize: 60 ,color :' #0A66C2'}}/></i>
                    </span>
                </div>
            </div>
        </>
    )
}

export default FAQ
