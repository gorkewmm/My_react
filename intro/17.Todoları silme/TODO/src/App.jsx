import { useState } from 'react'
import './App.css'
import ToDoCreate from './components/ToDoCreate'
import ToDoList from './components/ToDoList'

function App() {
  const [todos, setTodos] = useState([]);
  const createTodo =(newTodo)=>{
       setTodos([...todos, newTodo]) 
  }

  console.log(todos)

 const removeTodo = (todoId)=>{
    const extractedArray = todos.filter((a)=>a.id!==todoId)
    setTodos([...todos.filter((a)=>a.id!==todoId)])
    console.log(extractedArray)
  }

  return (
      <div className='app'>
        <div className='to-do'>
          <ToDoCreate oncreateTodo = {createTodo}/>
          <ToDoList todo ={todos}  onRemoveTodo = {removeTodo} />
        </div>
      </div>
     
  )
}

export default App
