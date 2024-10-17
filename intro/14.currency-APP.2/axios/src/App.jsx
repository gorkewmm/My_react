import { useState } from 'react'
import './App.css'
import Currency from './components/currency'

function App() {



  return (
      <div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
           <Currency/>
        </div>
        
      </div>
      
  )
  
}

export default App
