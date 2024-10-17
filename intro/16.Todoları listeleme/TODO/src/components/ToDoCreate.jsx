import React, { useState } from 'react'
import '../App.css'
function ToDoCreate({oncreateTodo}) {

  const [newData, setNewData] = useState("")

  const clearInput =()=>{ /* newData'yı boşalt */
    setNewData("")
  }

  const addTodo = ()=>{
    if (!newData) return;

    const request = { 
      id: Math.floor(Math.random() *999),
      content: newData 
    }
    oncreateTodo(request)
    clearInput() /* Yeni bir todo eklendikten sonra newData'yı boşalt */
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