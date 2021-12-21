import React, { useState, useEffect } from 'react'
import SideNav from '../SideNav/SideNav';
import './Study.css'


function Study() {
    const [addLink, setLinks] = useState('');
    const [addText, setTexts] = useState('');

    const [allEntery, setAllEntery] = useState([]);

    const change = (e) => {
        e.preventDefault();
        const newEntery = { addLink: addLink, addText: addText };
        setAllEntery([...allEntery, newEntery]);

        setLinks('');
        setTexts('')
    }
    const deletea = () => {
        setAllEntery([])

    }
  

    return (
        <>
            <SideNav />
            <div className='container study text-center'>
                <div className='row'>
                    <h2>Organize All Your Study Material At One Place</h2>
                    <input type="text" placeholder='Enter The Text' value={addText} onChange={(e) => setTexts(e.target.value)} />
                    <input type="text" placeholder='Enter The Link Of Document, Video etc' value={addLink} onChange={(e) => setLinks(e.target.value)} />
                    <br /> <button onClick={change}>ADD</button>
                    <button onClick={deletea}>DELETE ALL</button>
                    {
                        allEntery.map((element, index) => {
                            
                            return (
                                <div className='mt-5' key={index}>
                                  
                                    <li> <p >{element.addText}</p> <a target="_blank" href={element.addLink}><button>Visit</button> </a>   </li>
                                </div>

                            )
                        })
                    }
                </div>
            </div>



        </>
    )
}

export default Study;
