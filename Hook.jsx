import React from 'react'
import { useState } from 'react'

const Hook = () => {

    let [count, setcount] = useState(0)
    
    let inc = () => {
        setcount(count+1);

        let dec=()=>{
            setcount(count-1);
        }

        
        let Reset=()=>{
            setcount(0);
        }
    }
    console.log(count);

    return (
        <>
        
            <h1>{count}</h1>

            <button onClick={inc}>increment</button>

            <br></br><br></br>

            <button onClick={inc}>dcrement</button>
            <br></br><br></br>

            <button onClick={Reset}>Reset</button>

        </>
    )
}

export default Hook;