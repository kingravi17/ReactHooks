import React, { useReducer } from 'react'
const initialState = 0
const reducer = (state, action) => {
    switch (state, action) {
        case 'increment':
            return state+1
        case 'decrement' :
            return state-1
        case 'reset' :
            return initialState
        default :
            return state
    }
}
function UseReducerHookSimple() {
    const [counter, dispatch] = useReducer(reducer, initialState)
  return (
    <>
        <h1> Counter is {counter} </h1>
        <button onClick={() => dispatch('increment')}>Increment</button>
        <button onClick={() => dispatch('decrement')}>Decrement</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
    </>
  )
}

export default UseReducerHookSimple