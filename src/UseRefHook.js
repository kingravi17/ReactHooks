import React, { useRef, useState } from 'react'

function UseRefHook() {
    const [value, setValue] = useState('')
    const inputRef = useRef();

    const clickFun = () => {
        inputRef.current.focus()
        console.log(inputRef.current.value)
    }
  return (
    <>
        <input value={value} onChange={((e) => setValue(e.target.value))} ref={inputRef} />
        <button onClick={(e) => clickFun(e)}>Focus on Input After Click</button>
    </>
  )
}

export default UseRefHook