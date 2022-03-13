import React, { useEffect, useMemo, useState } from 'react'

function UseMemo() {
    const [number, setNumber] = useState(1)
    const [darkTheme, updateTheme] = useState(true)
    const magicNumber = useMemo( () => {
        return applyMagicFunction(number) 
            }, [number])
    const theme = useMemo(() => { 
        return {
        "backgroundColor" : darkTheme ?  'black' : 'white',
        "color" : darkTheme ? 'white' : 'black'
        }
    }, [darkTheme])

    useEffect ( () => {
        console.log("Calling Use Effect")
    }, [theme])
  return (
    <>
        <input type="number" 
            onChange={(e) => setNumber(e.target.value)} />
        <div style={theme}>
            <h1> Magic Number is {magicNumber}</h1>
            <button onClick={() => updateTheme(!darkTheme)}>Change Theme</button>
        </div>
    </>
  )
}

const applyMagicFunction = (number) => { 
    console.log("Calling Magic function----Just multiplying by PI")
    for(let i=0; i <1000000000; i++) {}
    return number * 3.14
}
export default UseMemo