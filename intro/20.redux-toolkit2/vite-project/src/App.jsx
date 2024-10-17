import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decreament, increament, increamentCustom } from './redux/features/counter/counterSlice'
import { getCountry } from './redux/features/country/countrySlice'

function App() {
  const dispatch = useDispatch()

  const {counter} = useSelector((state)=> state.counter)
  const {country} = useSelector((state)=> state.country)

  console.log(country)

  useEffect(()=>{
     dispatch(getCountry())
  },[])

  return (
      <div>
        <span onClick={() =>dispatch(decreament())}>-</span>
        <span>{counter}</span>
        <span onClick={() =>dispatch(increamentCustom(2))}>+</span>
      </div>
     
    
  )
}

export default App
