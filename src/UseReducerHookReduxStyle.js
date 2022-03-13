import React, { useReducer } from 'react'
const initialState = {counter1 : 0, counter2 : 0}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment1':
            return {...state, counter1 : state.counter1 + action.value}
        case 'decrement1' :
            return {...state, counter1 : state.counter1 - action.value}
        case 'increment2':
                return {...state, counter2 : state.counter2 + action.value}
        case 'decrement2' :
                return {...state, counter2 : state.counter2 - action.value}
        case 'reset' :
            return initialState
        default :
            return state
    }
}
function UseReducerHookReduxStyle() {
    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
        <h1> Counter 1 is {state.counter1} </h1>
        <h1> Counter 2 is {state.counter2} </h1>
        <button onClick={() => dispatch({type:'increment1',value:1})}>Increment Counter1 by 1</button>
        <button onClick={() => dispatch({type:'increment1',value:5})}>Increment Counter1 by 5</button>
        <button onClick={() => dispatch({type:'decrement1',value:1})}>Decrement Counter1 by 1</button>
        <button onClick={() => dispatch({type:'decrement1',value:5})}>Decrement Counter1 by 5</button>

        <button onClick={() => dispatch({type:'increment2',value:1})}>Increment Counter2 by 1</button>
        <button onClick={() => dispatch({type:'increment2',value:5})}>Increment Counter2 by 5</button>
        <button onClick={() => dispatch({type:'decrement2',value:1})}>Decrement Counter2 by 1</button>
        <button onClick={() => dispatch({type:'decrement2',value:5})}>Decrement Counter2 by 5</button>
       
        <button onClick={() => dispatch({type:'reset'})}>Reset Counters</button>
    </>
  )
}

export default UseReducerHookReduxStyle
