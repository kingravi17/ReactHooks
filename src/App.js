import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import UseStateHooksWithObject from './UseStateHooksWithObject';
import HooksWithPreviousState from './HooksWithPreviousState';
import UseEffectOne from './UseEffectOne';
import UseEffectMouseEventListner from './UseEffectMouseEventListner';
import ContainerForUnmounting from './ContainerForUnmounting';
import { useState } from 'react';
import { LoginContext } from './Context/LoginContext';
import Home from './Home';
import Login from './Login';
import { ThemeContext } from './Context/ThemeContext';
import UseReducerHookSimple from './UseReducerHookSimple';
import UseReducerHookReduxStyle from './UseReducerHookReduxStyle';

function App() {
  const [isLoggedIn, updateLogin] = useState(false)
  const [userName , setUserName] = useState("")
  const [bgColor, updateBgColor] = useState()
  return (
    <div className="App">
      {/* Uncomment Below for Use state hook example */}
      {/*
      <Counter/>
      <UseStateHooksWithObject/>
      <HooksWithPreviousState/>
      */
      }

      {/* Uncomment Below for Use state hook example 
      <UseEffectOne/>
      <UseEffectMouseEventListner/>
      <ContainerForUnmounting/>
      */}

      {/* Uncomment this for UseContext example
      <ThemeContext.Provider value={{bgColor}}>
        <LoginContext.Provider value={{userName, setUserName, isLoggedIn, updateLogin}}>
            <span>
              <button onClick={() => updateBgColor("pink")}>Pink</button>
              <button onClick={() => updateBgColor("red")}>Red</button>
              <button onClick={() => updateBgColor("green")}>Green</button>
            </span>
            { isLoggedIn ? <Home/> : <Login/> }
        </LoginContext.Provider>
      </ThemeContext.Provider>
      */}
      
      {/* Uncomment for useReducer Hook
      <UseReducerHookSimple/>
      <UseReducerHookReduxStyle/> */}
    </div>
  );
}

export default App;
