import {useState} from 'react'

function useCouterHook(initialCount) {
    const [count, setCounter] = useState(initialCount)

    const increment = () => {
        setCounter(count => count+1)
    }

    const decrement = () => {
        setCounter(count => count-1)
    }

    const reset = () => {
        setCounter(initialCount)
    }

    return [count, increment, decrement, reset]
  
}

export default useCouterHook