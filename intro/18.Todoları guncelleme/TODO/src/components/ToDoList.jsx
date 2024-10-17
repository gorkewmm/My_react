import React from 'react'
import ToDo from './ToDo'

function ToDoList({todo , onRemoveTodo , onupdateTodo}) {
  return (
    <div style={{width:"100%",marginTop:"50px"}}>
    {
        todo && todo.map((x)=>(   
            <ToDo key={x.id} todo2={x} onRemoveTodo={onRemoveTodo} onupdateTodo={onupdateTodo}/>
        ))
    }

    </div>
  )
}

export default ToDoList