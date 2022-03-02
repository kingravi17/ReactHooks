import React, { useState } from 'react'

function Counter() {
    const[counter, setCounter] = useState(0)

  return (
    <React.Fragment>
        <div>Counter is {counter}</div>
        <button onClick = {() => setCounter(counter+1)}>Click Me</button>
    </React.Fragment>
  )
}

export default Counter