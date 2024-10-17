import { useState } from 'react'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';

const BASE_URL = "http://localhost:4001"
function App() {
   
  const createUser = async(newUser)=>{
    //Post, veri eklemek için kullanılır
  const response = await axios.post(`${BASE_URL}/users`,newUser)
  console.log(response)
  console.log(response.data)
  }

 useEffect(()=>{
  const newUser = {
            "username":"Fevzi",
            "password":"Adak"
  }
   createUser(newUser)
 },[])

  return (
    
      <div>
        
      </div>
      
  )
}

export default App
