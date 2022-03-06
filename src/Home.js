import React, { useContext } from 'react'
import { LoginContext } from './Context/LoginContext'
import { ThemeContext } from './Context/ThemeContext'

function Home() {
    const {userName, updateLogin} = useContext(LoginContext)
    const {bgColor} = useContext(ThemeContext)
  return (
    <div className='bg-div' style={{backgroundColor : `${bgColor}`}}>
        <h1> Hey I am Logged In !!!</h1>
        <h2> My Username is {userName}</h2>
        <button onClick={() => updateLogin(false)}>Logout</button>
    </div>
  )
}

export default Home