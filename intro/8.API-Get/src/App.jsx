import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL ="http://localhost:5173"

function App() {
   
   const getAllUsers = async()=> {
     const response = await axios.get(BASE_URL + "/users")
     console.log(response.data);
   }

   useEffect(()=>{
     getAllUsers()
   },[])
   
   function x (){
      fetch("http://localhost:3018/users")
      .then((response)=>{
          return response.json()
         
      })
      .then((x)=>console.log(x))
      .catch((error)=>console.log(error))
      
   }
   x();


   const getId = async(userId)=>{
     const response = await axios.get(BASE_URL+"/users/"+userId)
     console.log(response.data)
   }
   useEffect(()=>{
    getId(1)
  },[])

  const id = (iduser)=>{
    fetch(BASE_URL+"/users/"+iduser)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>console.log(data))
  }

  id(1)

  return (
   <div>

   </div>
  )
}

export default App
