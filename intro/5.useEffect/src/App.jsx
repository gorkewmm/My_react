import { useEffect, useState } from 'react'
import './App.css'

function App() {
   
  const [firstName, setfirstName] = useState("")
  const [lastName, setlastName] = useState("")
  
  // useEffect hooksu
  useEffect(()=>{
    console.log("her zaman calışır")
  })
  useEffect(()=>{
    console.log("ilk render edildiğinde çalışır.")
  },[])
  useEffect(()=>{
    console.log("ilk render edildiğinde ve firstName state değeri değiştiğinde çalışır")
  },[firstName]) 
  useEffect(()=>{
    console.log("ilk render edildiğinde ve lastName state değeri değiştiğinde çalışır")
  },[lastName]) 

  useEffect(()=>{
    console.log("ilk render edildiğinde ve firstName veya lastName state değerlerinde değişiklik olduğu zaman çalışır")
  },[firstName,lastName]) 

  return (
      <div>
        
        <button onClick={()=>setfirstName("Halil")}>Adı değiştir</button>
        <button onClick={()=>setlastName("Uysal")}>Soyadı değiştir</button>

      </div>
      
  )
}

export default App
