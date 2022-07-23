import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { IncrementCounter,DecrementCounter ,ResetCounter } from '../services/action/ActionCounter'

const Counter = () => {
    const Count=useSelector(state=>state.count)
    const dispatch=useDispatch()

    const Increment=()=>{
        dispatch(IncrementCounter())
    }

    const Decrement=()=>{
        dispatch(DecrementCounter())
    }

    const Reset=()=>{
        dispatch(ResetCounter())

    }



  return (
    <div>
        <h1>Counter app</h1>
        <h2>count:{Count}</h2>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Counter