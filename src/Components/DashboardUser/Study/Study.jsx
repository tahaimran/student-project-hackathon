import React, { useState } from 'react'
import SideNav from '../SideNav/SideNav';
import './Study.css'
function Study() {
    const [addLink, setLinks] = useState('');
    const [addText, setTexts] = useState('');

    const [allEntery, setAllEntery] = useState([]);

    const change = (e) => {
        e.preventDefault();
        const newEntery = { addLink: addLink, addText: addText };
      var aa =  setAllEntery([...allEntery, newEntery]);

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
                        allEntery.map((ee, i) => {
                            
                            return (
                                <div className='mt-5' key={i}>
                                  
                                    <li> <p >{ee.addText}</p> <a target="_blank" href={ee.addLink}><button>Visit</button> </a>   </li>
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
