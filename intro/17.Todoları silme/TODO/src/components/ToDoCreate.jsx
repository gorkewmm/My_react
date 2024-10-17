import React, { useState } from 'react'
import '../App.css'
function ToDoCreate({oncreateTodo}) {

  const [newData, setNewData] = useState("")

  const clearInput =()=>{
    setNewData("")
  }

  const addTodo = ()=>{
    if (!newData) return;

    const request = { 
      id: Math.floor(Math.random() *999),
      content: newData 
    }
    oncreateTodo(request)
    clearInput()
  }

  return (
    <div className='data'>
      <input
      value={newData} 
      onChange={(e)=>setNewData(e.target.value)}
      type="text" placeholder='TODO GİRİNİZ'/>
      <button onClick={addTodo} >OLUŞTUR</button>
    </div>
  )
}

export default ToDoCreate