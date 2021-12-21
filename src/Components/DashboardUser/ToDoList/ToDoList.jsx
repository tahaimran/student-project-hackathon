import React, { useState,useEffect } from 'react'
import './ToDoList.css'
import SideNav from '../SideNav/SideNav'
import DeleteIcon from '@mui/icons-material/Delete';

const getLocalItems = () =>{
    let list = localStorage.getItem('item');
    if(list){
        return JSON.parse(localStorage.getItem('item'))
    }else{
        return [];
    }
}
function ToDoList() {
    const [inputData, setInput] = useState('');
    const [items, setItems] = useState(getLocalItems());
    const addItem = () => {
        if (!inputData) {
            alert("Add Task");
        } else {
            setItems([...items, inputData]);
            setInput('')
        }

    }
   
    
    const deleteItem = (index) => {
        const updatedItems = items.filter((elemet, ind) => {
            return  ind  !== index
        })
        setItems(updatedItems)
    }

    const deleteAll = () => {
        setItems([])
    }
    useEffect(()=>{
        localStorage.setItem('item',JSON.stringify(items));
    },[items]);

    return (
        <>
        <SideNav/>
                <div className="row text-center  todo">
                    <figure>
                        <h3>{localStorage.getItem("name")} </h3>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className='addItems'>
                        <input type="text" placeholder='Write Your Task Here'
                            value={inputData} onChange={(e) => setInput(e.target.value)}/>
                        <button onClick={addItem} className='' title='Add Item'>Add Item</button>
                    </div>
                    <div className="showItems">
                        {
                            items.map((element, index) => {
                                return (
                                    <div className="eachItem" key={index}>
                                        <li>{element}
                                        <i className='icon' title='Delete Item' onClick={() => deleteItem(index)}>
                                            <DeleteIcon/>
                                        </i>
                                        </li>
                                       
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="DeleteAll">
                        <button onClick={deleteAll}>Delete All</button>
                    </div>
                </div>
        </>
    )
}

export default ToDoList 