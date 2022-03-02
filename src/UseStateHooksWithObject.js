import React, { useState } from 'react'

function UseStateHooksWithObject() {
    const[name, setName] = useState(() => {
        console.log("Method way of defining initial state")
        return(
            {firstName:'Ravi', lastName:'Kumar'}
        )
    })
    return (
        <>
            <h1>{name.firstName}</h1>
            <h1>{name.lastName}</h1>
            {/* Notice how we have used spread operator (...) As usestate doesn't merge
            state automatically*/}
            <input placeholder="Enter First Name" onChange={(e) => setName({...name, firstName: e.target.value})}></input>
            <input placeholder="Enter Second Name" onChange={(e) => setName({...name, lastName: e.target.value})}></input>
        </>
    )
}

export default UseStateHooksWithObject