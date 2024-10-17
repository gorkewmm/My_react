import { useState } from 'react'
import './App.css'
import Header from './Header'
import { courses } from './data'
import Components from './Components'
import './csslerim/Components.css'

function App() {

  return (
   <div>
  
     <Header/>
     <div className='course-main'>
     {
      courses?.map((course)=>( 
        <Components key={course.id} props={course} />
      ))
     }
     </div>
    
   </div>
   
  )
}

export default App
