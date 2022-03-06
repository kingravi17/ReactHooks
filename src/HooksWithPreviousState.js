import React, { useState } from 'react'

function HooksWithPreviousState() {
    const[counter, setCounter] = useState(0)
    function incrementIncorrectWay() {
        for(var i=0;i<3;i++) {
            //Incorrect Way as state will be stale
            //setCounter(counter+1)
            setCounter(prevState => prevState+1)
        }

        

    }
    return (
        <>
            <h1>Counter is {counter}</h1>
            <button onClick={() => setCounter(counter+1)}>Increment</button>
            <button onClick={() => setCounter(counter-1)}>Decrement</button>
            <button onClick={incrementIncorrectWay}>Increment 3</button>
        </>
    )
}

export default HooksWithPreviousState