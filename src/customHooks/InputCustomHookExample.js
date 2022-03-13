import React from 'react'
import useInput from './useInput'

function InputCustomHookExample() {
    const [fName, bind, resetfName] = useInput('')
    const [lName, bind2, resetlName] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert("Hello " + fName + " " + lName)
        resetfName()
        resetlName()
    }
  return (
    <>
        <form onSubmit={e => submitHandler(e)}>
            <input {...bind}/>
            <input {...bind2}/>
            <button type="submit">Submit</button>
        </form>
    </>
  )
}

export default InputCustomHookExample