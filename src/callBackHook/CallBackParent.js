import React, { useCallback, useState } from 'react'
import Button from '../Button'
import Display from './Display'

function CallBackParent() {
    const [wage, setWage] = useState(0)
    const [workingHour, setWorkingHour] = useState(0)

    const updateWage = useCallback((value) => {
        setWage(value)
    }, [wage])

    const updateWorkingHour = useCallback((value) => {
        setWorkingHour(value)
    }, [workingHour])
    
    console.log("Parent Called")
  return (   
    <>
        <h1>Use Callback Hook</h1>
        <Display name="Wage" value={wage}/>
        <Button name="Wage" callBack={updateWage}/>
        <Display name="WorkingHour" value={workingHour}/>
        <Button name="WorkingHour" callBack={updateWorkingHour}/>
    </>

  )
}

export default CallBackParent