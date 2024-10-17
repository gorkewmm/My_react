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

  return (
      <div className='app'>
        <div className='to-do'>
          <ToDoCreate oncreateTodo = {createTodo}/>
          <ToDoList todo ={todos}/>{/* 1) todo props ismiyle todoslarımızı props geçelim */} 
        </div>
      </div>
     
  )
}

export default App
