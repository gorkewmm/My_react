import React from 'react'
import ToDo from './ToDo'

function ToDoList({todo}) {
  return (
    <div>
        {
            todo && todo.map((a)=>(
                <ToDo key={a.id} todo2={a} />
            ))
        }
    </div>
  )
}

export default ToDoList