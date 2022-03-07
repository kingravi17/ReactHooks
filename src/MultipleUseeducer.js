import React, { useReducer } from 'react'
const initialState = 0
const reducer = (counter, action) => {
    switch (action.type) {
        case 'increment':
            return counter + action.value
        case 'decrement' :
            return counter - action.value
        case 'reset' :
            return initialState
        default :
            return counter
    }
}
function MultipleUseReducer() {
    const [counter1, dispatchOne] = useReducer(reducer, initialState)
    const [counter2, dispatchTwo] = useReducer(reducer, initialState)
  return (
    <>
        <h1> Counter 1 is {counter1} </h1>
        
        <button onClick={() => dispatchOne({type:'increment',value:1})}>Increment Counter1 by 1</button>
        <button onClick={() => dispatchOne({type:'increment',value:5})}>Increment Counter1 by 5</button>
        <button onClick={() => dispatchOne({type:'decrement',value:1})}>Decrement Counter1 by 1</button>
        <button onClick={() => dispatchOne({type:'decrement',value:5})}>Decrement Counter1 by 5</button>
        <button onClick={() => dispatchOne({type:'reset', value: 5})}>Reset Counters</button>
        <h1> Counter 2 is {counter2} </h1>
        <button onClick={() => dispatchTwo({type:'increment',value:1})}>Increment Counter2 by 1</button>
        <button onClick={() => dispatchTwo({type:'increment',value:5})}>Increment Counter2 by 5</button>
        <button onClick={() => dispatchTwo({type:'decrement',value:1})}>Decrement Counter2 by 1</button>
        <button onClick={() => dispatchTwo({type:'decrement',value:5})}>Decrement Counter2 by 5</button>
        <button onClick={() => dispatchTwo({type:'reset', value: 5})}>Reset Counters</button>
        
    </>
  )
}

export default MultipleUseReducer
