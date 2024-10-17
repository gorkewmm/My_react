import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'
import { FaCheck } from "react-icons/fa";

function ToDo({todo2 , onRemoveTodo , onupdateTodo}) {
    const {id , content} = todo2

    const removeFunc = ()=>{
      onRemoveTodo(id)
    }

    const [editable, setEditable] = useState(false)

    const [editTodo, setEditTodo] = useState(content)

    const updateTodo = ()=>{
      const request ={
        id : id,
        content :editTodo
      }
      onupdateTodo(request)
      setEditable(false)
    }
   
  return (
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",border:"solid 1px lightgrey",padding:"10px",marginTop:"10px"}}>
        <div>
          {
            editable ? <input value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className='inp' type="text" /> : content
          }
        </div>

        <div>
          <IoIosRemoveCircle onClick={removeFunc} className='icon'/>
          {
            editable ? <FaCheck className='icon' onClick={updateTodo}/> : 
            
            <FaEdit className='icon' onClick={()=>setEditable(true)}/> /* editable true ise facheck, false ise faedit çalışır */

          }         
        </div>
    
    </div>
    
  )
}

export default ToDo
