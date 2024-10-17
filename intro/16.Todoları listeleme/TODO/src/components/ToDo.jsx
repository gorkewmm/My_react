import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import '../App.css'


function ToDo({todo2}) {
    const {id , content} = todo2 /* Object destructing */
   
  return (
    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",border:"solid 1px lightgrey",padding:"10px",marginTop:"10px"}}>
        <div>
          {content}
          {/* {todo2.content} */}
        </div>

        <div>
          <IoIosRemoveCircle className='icon'/>
          <FaEdit className='icon'/>
        </div>

    </div>
  )
}

export default ToDo
