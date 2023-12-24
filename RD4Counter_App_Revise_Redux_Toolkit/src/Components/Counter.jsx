import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/Slices/CounterSlice'

function Counter() {

    const count = useSelector( (state) => state.counter.value )
    const dispatch = useDispatch();

  return (
    <div>
      <button onClick={()=>dispatch(increment())}>Increment</button><br />
        
        <h2>{count}</h2>

     <br /> <button onClick={()=>dispatch(decrement())}>Decrement</button>

    </div>
  )
}

export default Counter
