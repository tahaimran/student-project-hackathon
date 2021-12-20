import React from 'react'
import SideNav from '../SideNav/SideNav'
import './FAQ.css'
import { Google, Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import Contact from '../Images/contact.png'
function FAQ() {
    return (
        <>
            <SideNav />

            <div className='container faq text-center mt-5'>
                <h2>Contact Us</h2>
                <div className='row '>
                <img className='img-fluid col-md-6 ' src={Contact} alt="" />
                <button className='mt-5 col-md-6'>
                    <Google sx={{ color: '#FF6B6B' }} />
                    <a href='mailto:tahaimran.24@gmail.com'>
                        Contact Us Via Email</a>
                </button>
                </div>
               
                <div className=' social  text-center'>
                    <h2 className='title-text'>Our Social Handling</h2>
                    <span>
                    <i><Facebook  sx={{ fontSize: 60 ,color :' #129CF7'}}/></i>
                    <i><Instagram  sx={{ fontSize: 60,color :' pink' }}/></i>
                    <i><Twitter  sx={{ fontSize: 60,color :' skyblue' }}/></i>
                    <i><LinkedIn  sx={{ fontSize: 60 ,color :' #0A66C2'}}/></i>
                    </span>
                </div>
            </div>
        </>
    )
}

export default FAQ
