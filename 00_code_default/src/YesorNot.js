import React from 'react'

export default function YesorNot(){

    const [isGoimgOut, setisGoimgOut] = React.useState(true)

    function handleClick (){
        setisGoimgOut(prevState => !prevState)
    }


    return(
        <div className='state'>
            <h1 className='state_title'>Is state important to know?</h1>
            <div className='state_value' onClick={handleClick}>
                <h1>{isGoimgOut ? "Yes" : "No"}</h1>
            </div>

        </div>
    )
}