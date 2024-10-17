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

  const updateTodo = (newTodo)=>{
    const currentTodos = todos.map((todo)=>{
      if(todo.id!== newTodo.id){ /* todonun idsi ile parametre olarak göderilen(newTodo)'nun idsi birbirine 
        eşit değilse o anki mapdeki todoyu(todo) döner,
        */
        return todo;
      }
      return newTodo;/*todonun idsi ile parametre olarak göderilen(newTodo)'nun idsi birbirine eşitse newTodoyu dönüyor*/
    })
    setTodos([...currentTodos])/*  */
  }

  return (
      <div className='app'>
        <div className='to-do'>
          <ToDoCreate oncreateTodo = {createTodo}/>
          <ToDoList todo ={todos}  onRemoveTodo = {removeTodo} onupdateTodo={updateTodo} />
        </div>
      </div>
     
  )
}

export default App
