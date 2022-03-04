import React, { useEffect, useState } from 'react'

function UseEffectUnsubscribe() {
    const[coordinate , setcoordinate] = useState({x:0,y:0})
    
    const clickEventListner = (e) => {
        setcoordinate({...coordinate, x:e.clientX, y:e.clientY})
    }

    
    useEffect( () => {
        console.log("Add Event listner")
        window.addEventListener("click" , clickEventListner)
        return(() => {  
            console.log("Unmounting Code")
            window.removeEventListener("click", clickEventListner)
        })
    })
  return (
        <h1> X is {coordinate.x} Y is {coordinate.y}</h1>
  )
}

export default UseEffectUnsubscribe