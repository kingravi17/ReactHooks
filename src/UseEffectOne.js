import React, { useEffect, useState } from 'react'

function UseEffectOne() {
    const [count, setCount] = useState(0)

    useEffect(()=> {
        document.title = "Clicked " + count + " times"
    })

  return (
    <button onClick={() =>setCount(prev => prev+1)}>
        You Have click {count} times
    </button>
  )
}

export default UseEffectOne
