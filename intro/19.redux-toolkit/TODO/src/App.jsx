import { useState } from 'react'
import './App.css'
import { useSelector , useDispatch} from 'react-redux'
import { decreament, increament } from './redux/counterSlice'

function App() {

  const {value} = useSelector((store)=>store.counter) /*Slice'ın içindeki statelere erişmek için useSelector kullanılır */ 
  console.log(value)
  
  const dispatch = useDispatch()/*Slice'ın içindeki fonksiyonlara erişmek için useDispatch kullanılır */ 
  
  return (
    
      <div>
        <div>{value}</div>
        <div>
          <button onClick={() => dispatch(increament())}>Arttır</button>
          <button onClick={() => dispatch(decreament())}>Azalt</button>
        </div>
      </div>
      
      
  )
}

export default App
