import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
function DataFetchingAndUpdateWithReducer() {
    
    const initialState = {
        hasError : false,
        errorMsg : '',
        data : '',
        loading : '',
    }
    const reducer = (state, action) => {
        console.log(action.payload)
       
        switch(action.type) {
            case 'SUCCESS' :
                return {
                    error : false,
                    errorMsg : '',
                    data : action.payload,
                    loading : false
                }
            case 'ERROR' :    
            return {
                    error : true,
                    errorMsg : action.payload,
                    data : '',
                    loading : false
                    }
            default :
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('./data.json')
        .then((response) => {
            dispatch({type: 'SUCCESS', payload : response.data})

            }
        )
        .catch(error => {
            dispatch({type: 'ERROR', payload : 'Something Went Wrong!!!'})
        })
    },[])

  return (
    <>
        { state.loading ? <h1>Loading...</h1> : <h1>{state.data.github_url }</h1>}
        { state.error ?   <h1>{state.errorMsg}</h1> : null}
    </>
  )
}

export default DataFetchingAndUpdateWithReducer