import React, { useRef } from 'react'

function Button({name,callBack}) {
    const inputRef = useRef();
    console.log('Rendering button '+ name)
  return (
      <>
        <input ref={inputRef}/>
        <button onClick={ () => callBack(inputRef.current.value)}>Update {name}</button>
      </>
    
  )
}

export default React.memo(Button)