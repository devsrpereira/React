import React from 'react'

export default function YesorNot(){

    const [result, setResult] = React.useState("YES")

    function handleClick(){
        setResult("No")
    }
    
    return(
        <div className='state'>
            <h1 className='state_title'>Is state important to know?</h1>
            <div className='state_value' onClick={handleClick}>
                <h1>{result}</h1>
            </div>

        </div>
    )
}