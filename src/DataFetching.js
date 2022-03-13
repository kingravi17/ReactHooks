import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [errorMsg, setErrorMsg] = useState('')
    const [error, hasError] = useState('')
    const [ data, setData] = useState('')
    const [loading, isLoading] = useState(true)

    useEffect(() => {
        axios.get('./data.json')
        .then((response) => {
            console.log("here1")
            setData(response.data)
            hasError(false)
            isLoading(false)
            console.log(response.data)
        })
        .catch(error => {
            setData('')
            hasError(true)
            setErrorMsg('Something Went Wrong!!!')
            isLoading(false)
        })
    },[])
  return (
    <>
        { loading ? <h1>Loading...</h1> : <h1>{data.name + " - " + data.github_url}</h1>}
        { error ? <h1>{errorMsg}</h1> : null}
    </>
  )
}

export default DataFetching