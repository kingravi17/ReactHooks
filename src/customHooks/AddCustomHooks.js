import React from 'react'
import useCouterHook from './useCouterHook'
import useInput from './useInput'

function AddCustomHooks() {
    const [count, increment, decrement, reset] =  useCouterHook(0)
    const [count2, increment2, decrement2, reset2] =  useCouterHook(10)

  return (
    <>
        <h1>Count 1 Is {count} </h1>
        <button onClick={increment}>Increment counter 1</button>
        <button onClick={decrement}>Decrement counter 1</button>
        <button onClick={reset}>Reset counter 1</button>

        <h1>Count 2 Is {count2} </h1>
        <button onClick={increment2}>Increment counter 2</button>
        <button onClick={decrement2}>Decrement counter 2</button>
        <button onClick={reset2}>Reset counter 2</button>

    </>
  )
}

export default AddCustomHooks