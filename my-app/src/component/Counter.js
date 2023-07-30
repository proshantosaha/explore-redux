// import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, resetCounter, decrementCounter } from '../services/acttions/counterActions'

const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    console.log(count);
    const handleIncriment = () => {
        dispatch(incrementCounter())
      
    };
    const handledecrement = () => {
        dispatch(decrementCounter())

    };
    const handlereset = () => {

        dispatch(resetCounter())
    };


    return (
        <div>
            <h2>Counter app</h2>

            <h3>Count : {count}</h3>
            <button onClick={handleIncriment}>Increment</button>
            <button onClick={handledecrement}>Decrement</button>
            <button onClick={handlereset}>Reset</button>

        </div>
    )
}

export default Counter