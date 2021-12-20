import React, { useState } from 'react'
import SideNav from '../SideNav/SideNav';

function Study() {
    const [addLink, setLinks] = useState('');
    const [arr, setarr] = useState([]);

    const change = (e) => {
        setarr([...arr, addLink]);
        setLinks('')
    }
    return (
        <>
            <SideNav />
            <div>
                <input type="text" value={addLink} onChange={(e) => setLinks(e.target.value)} />
                <button onClick={change}>ADD</button>
                {
                    arr.map((e, i) => {
                        return (
                            <div key={i}>
                                <li >{e}</li>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Study
                                            