// import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Counter = () => {
    const count = useSelector(state => state.count);
    // console.log(counti);
    console.log(count);
    const handleIncriment = () => {};


    return (
        <div>
            <h2>Counter app</h2>

            <h3>Count : {count}</h3>
            <button onClick={handleIncriment}>Increment</button>
        </div>
    )
}

export default Counter