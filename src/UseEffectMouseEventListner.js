import React, { useEffect, useState } from 'react'

function UseEffectMouseEventListner() {
    const[coordinate , setcoordinate] = useState({x:0,y:0})
    
    const setMouseCoordinates = (e) => {
        console.log("Set Mouse coordinate called")
        setcoordinate({...coordinate, x:e.clientX, y:e.clientY})
    }
    useEffect( () => {
        console.log("use effect called")
        window.addEventListener("mousemove" , setMouseCoordinates)
    }, [])
  return (
        <h1> X is {coordinate.x} Y is {coordinate.y}</h1>
  )
}

export default UseEffectMouseEventListner