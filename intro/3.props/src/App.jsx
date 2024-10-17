import { useState } from 'react'
import './App.css'
//import Product from './Product'
import Container from './Container'
import Product from './Product'

function App() {
  // const a = "Buzdolabı"

  return (
    // <div>
    //   <Product productName="Ayakkabı" price="3200"/>
    //   <hr />
    //   <Product productName="Pantalon" price= "950"/>
    //   <hr />
    //   <Product productName={a} price="15000"/>     
    // </div>

    <Container>
      <Product productName="Telefon" price="20500"/>
    </Container>
  )
}

export default App
