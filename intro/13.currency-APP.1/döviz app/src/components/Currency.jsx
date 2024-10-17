import React from 'react'
import '../css/currency.css'
import { FaArrowCircleRight } from "react-icons/fa";function Currency() {
  return (
    <div className='currency-div'>
        <div  style={{width:"100%",fontFamily:"arial",backgroundColor:"black",color:"white",textAlign:"center"}}>
            <h3>DÖVİZ KURU UYGULAMASI</h3>
        </div>

        <div style={{marginTop:"25px"}}>
        <input type="number" className='amount'/>
        <select className='from-currency-option'>
            <option>USD</option>
            <option>EURO</option>
            <option>TL</option>
        </select>

        <FaArrowCircleRight className='arrow'/>
        
        <select className='to-currency-option'>
            <option>TL</option>
            <option>USD</option>
            <option>EURO</option>
        </select>

        <input type="number" className='result'/>        
        </div>

        <div>
        <button className='exchange-button' >çevir</button>
        </div>

    </div>
  )
}

export default Currency