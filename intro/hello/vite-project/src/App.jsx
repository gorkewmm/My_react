import { useState } from 'react'
import './App.css'
import ToDoCreate from './components/ToDoCreate'
import ToDoList from './components/ToDoList'

function App() {
 const [todos,setTodos] = useState([])

  const showFunc=(newTodo)=>{
      setTodos([...todos,newTodo])
  }
  console.log(todos);

  return (
    
      <div>
        <ToDoCreate func={showFunc}/>
        <ToDoList todo={todos}/>
      </div>
      
  )
}

export default App
