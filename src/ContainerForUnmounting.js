import React, { useState } from 'react'
import UseEffectUnsubscribe from './UseEffectUnsubscribe'

function ContainerForUnmounting() {
    const [mounted , toggleMount] = useState(true)
  return (
    <>
        <button onClick={() => toggleMount(!mounted)}>Toggle Mounting</button>
        {mounted === true ? <UseEffectUnsubscribe/> : null}
    </>
    )
}

export default ContainerForUnmounting