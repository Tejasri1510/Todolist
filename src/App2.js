import React, { useState } from 'react'
const App2 = () => {
    const[items,setItems]=useState("");
    const[things,setThings]=useState([]);
    const addEvent=(event)=>{
        setItems(event.target.value);
    }
    const addItem=()=>{
        setThings((oldThings)=>{
          return [...oldThings,items];
        });
        setItems("");
    }    
    const removeItem=(i)=>{
      const delVal=[...things]
      delVal.splice(i);
      setThings(delVal);
     
    }
    const clearAll=()=>{
      setThings([]);
    }
  return (
    <>
    <h1>To Do List</h1>
    <div className='main_div'>
    <input type="text" onChange={addEvent} placeholder="add an event" value={items}/>
      <button onClick={addItem} className="btn"> Add </button>
    <div className='mid_div'>
        {things.map((e,i)=>{
            return (
              <div className="space">
            <b>{e} </b> <button className='bt'onClick ={()=>removeItem(i)}> Remove </button>
            </div>)
            })}
      </div>
      <button className='butt' onClick={clearAll}>clearAll</button>
      </div>
    </>
  )
}

export default App2
