import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import UseStateHooksWithObject from './UseStateHooksWithObject';
import HooksWithPreviousState from './HooksWithPreviousState';
import UseEffectOne from './UseEffectOne';
import ContainerForUnmounting from './ContainerForUnmounting';
import { useState } from 'react';
import { LoginContext } from './Context/LoginContext';
import Home from './Home';
import Login from './Login';
import { ThemeContext } from './Context/ThemeContext';
import UseReducerHookSimple from './UseReducerHookSimple';
import UseReducerHookReduxStyle from './UseReducerHookReduxStyle';
import MultipleUseReducer from './MultipleUseeducer';
import DataFetching from './DataFetching';
import axios from 'axios';
import DataFetchingAndUpdateWithReducer from './DataFetchingAndUpdateWithReducer';
import UseRefHook from './UseRefHook';
import CallBackParent from './callBackHook/CallBackParent';
import UseMemo from './UseMemo';

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

     
     {/*  <ThemeContext.Provider value={{bgColor}}>
        <LoginContext.Provider value={{userName, setUserName, isLoggedIn, updateLogin}}>
            <span>
              <button onClick={() => updateBgColor("pink")}>Pink</button>
              <button onClick={() => updateBgColor("red")}>Red</button>
              <button onClick={() => updateBgColor("green")}>Green</button>
            </span>
            { isLoggedIn ? <Home/> : <Login/> }
        </LoginContext.Provider>
      </ThemeContext.Provider> */}
     
      
      {/* Uncomment for useReducer Hook
      <UseReducerHookSimple/>
      <UseReducerHookReduxStyle/> 
      <MultipleUseReducer/>
      */}

     {/*  <DataFetching/>
      <DataFetchingAndUpdateWithReducer/> */}
      
    {/*  <UseRefHook/> */}

    {/* USe this for diff between usecallback and usememo
     https://medium.com/@jan.hesters/usecallback-vs-usememo-c23ad1dc60 */}
    
    {/* Uncomment for use callback and usememo hook
    <UseMemo/>
    <CallBackParent/>  */}
    
      
      
    </div>
  );
}

export default App;
