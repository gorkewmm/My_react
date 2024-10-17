import React, { useState } from 'react'
import '../App.css'
function ToDoCreate({oncreateTodo}) {

  const [newData, setNewData] = useState("")

  const addTodo = ()=>{
    if (!newData) return;/* Ekrandan değer girilmemişse bir şey yapma */

    const request = {  /* Girilmişse */
      id: Math.floor(Math.random() *999),
      content: newData /* Contentine ekrandan girilen değeri koy */
    }
    oncreateTodo(request)
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