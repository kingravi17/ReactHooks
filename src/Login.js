import React, { useContext, useState } from 'react'
import { LoginContext } from './Context/LoginContext'
import { ThemeContext } from './Context/ThemeContext'

function Login() {
   const {updateLogin, setUserName} = useContext(LoginContext)
   const {bgColor} = useContext(ThemeContext)
  return (
    <div className="bg-div" style={{ backgroundColor: `${bgColor}` }} >
        <span>
            <h1>
                Username : 
            </h1>
            <input onChange={(e) => setUserName(e.target.value)} type="text" />
        </span>
        <button onClick={() => updateLogin(true)}>Login</button>
    </div>
  )
}

export default Login