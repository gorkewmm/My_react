import React, { useState } from 'react'

function ToDoCreate({func}) {
  
  const [newData,setNewData] = useState([])


  const addTodo =()=>{
    const request ={
      id: Math.floor(Math.random()*999),
      content: newData
    }
    func(request)
  }

  return (
    <div>
        <input onChange={((e)=>setNewData(e.target.value))} type="text" placeholder='Todo Giriniz'/>
        <button onClick={addTodo}>Giriniz</button>
    </div>
 
  )
}

export default ToDoCreate