import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const BASEURL="http://localhost:3004"

  const getUserById = async(userId)=>{
    const response = await axios.get(`${BASEURL}/users/${userId}`)
    return response.data.postId
  }

  const getPostById = async(postId)=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/"+postId)
    return response.data
  }


  const getPost = async()=>{
    const postId =  getUserById(1)
    const postData = await getPostById(postId)
    console.log(postId)
  }

  useEffect(()=>{
    getPost()
  },[])


  return ( 
      <div>
        
      </div>
      
  )
}

export default App
