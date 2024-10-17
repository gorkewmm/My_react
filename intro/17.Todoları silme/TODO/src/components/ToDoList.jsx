import React from 'react'
import ToDo from './ToDo'

function ToDoList({todo , onRemoveTodo}) {
  return (
    <div style={{width:"100%",marginTop:"50px"}}>
    {
        todo && todo.map((x)=>(   
            <ToDo key={x.id} todo2={x} onRemoveTodo={onRemoveTodo}/>
        ))
    }

    </div>
  )
}

export default ToDoList