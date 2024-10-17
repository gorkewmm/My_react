import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASEURL="http://localhost:3004" 
function App() {
  const updateUser = async(userId , updatedUser)=>{
    //Put, veri güncelemek için kullanılır.
    await axios.put(`${BASEURL}/users/${userId}`,updatedUser)
  }
    
  useEffect(()=>{
    updateUser(3 , {
            "username":"Atatürk",
            "passwsord":"1923",
            "id":17
    })
  },[])

  return (
      <div>
        
      </div>
      
  )
}

export default App
