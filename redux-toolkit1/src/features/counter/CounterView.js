import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { decrement, increment, reset } from './CounterSelices'

const CounterView = () => {
    const Count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()

  return (
    <div>
        <h1>counter app redax-toolkit</h1>
        <h3>count:{Count}</h3>
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
        <button onClick={()=>{dispatch(reset())}}>Reset</button>
    </div>
  )
}

export default CounterView