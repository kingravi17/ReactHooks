import React from 'react'

function Display({name, value}) {
  console.log('Rendering '+ name)
  return (
      <h2> {name} value is {value}</h2>
  )
}

export default React.memo(Display)