import React from 'react'
import ToDo from './ToDo'

function ToDoList({todo}) {
  return (
    <div style={{width:"100%",marginTop:"50px"}}>
    {
        todo && todo.map((x)=>(   /* todoslarımızın, map fonksiyon ile üzerinde dolaştık ve herbirini x adıyla yakaladık*/
            <ToDo key={x.id} todo2={x}/> /* yakaladıgımız x adındaki todoslarımızı, todo2 ismiyle props geçtim */
        ))
    }

    </div>
  )
}

export default ToDoList