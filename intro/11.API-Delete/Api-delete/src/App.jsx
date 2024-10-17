import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

const BASEURL = "http://localhost:2002"
function App() {
  // Delete ile user silme işlemi
  const deleteUserById = async(userId)=>{
   const deletedResponse = await axios.delete(`${BASEURL}/users/${userId}`)
   console.log(deletedResponse)
   console.log(deletedResponse.data)
  }

  useEffect(()=>{
    deleteUserById(3)
  },[])

  return (
    
      <div>
        
      </div>
      
  )
}

export default App
