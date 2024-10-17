import { useState } from 'react'
import './App.css'
import ToDoCreate from './components/ToDoCreate'
import ToDoList from './components/ToDoList'

function App() {
  const [todos, setTodos] = useState([]);/*1) Bütün todoları toplayabilmek için boş bir dizi şeklinde state tanımladık */ 
  
  const createTodo =(newTodo)=>{
       setTodos([...todos, newTodo]) /*2) Yukarıdaki state'in içine değer ekliyecek, bir fonksiyon yazdık  */
  }

  console.log(todos)

  return (
      <div className='app'>
        <div className='to-do'>
          <ToDoCreate oncreateTodo = {createTodo}/>
          <ToDoList/>
        </div>
      </div>
     
  )
}

export default App
