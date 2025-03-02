import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'

export function Counter() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()


  return (
    <div>
        <div>
            <button onClick={()=> dispatch(increment())}>
                Artış
            </button>
            <span>{count}</span>
            <button onClick={()=> dispatch(decrement())}>
                Azalış
            </button>
        </div>
    </div>
  )
}

export default Counter