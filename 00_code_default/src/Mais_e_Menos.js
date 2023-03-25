import React from 'react'

export default function Mais_e_Menos(){

    const [count, setCount] = React.useState(0)

    function somar(){
        setCount (precount => precount + 1) 
    }

    function diminuir(){
        setCount (precount => precount - 1)
    }

    return(
        <div className='counter'>
            <button className='counter_minus' onClick={diminuir}>-</button>
            <div className='counter_count'>
                <h1>{count}</h1>
            </div>
            <button className='counter_plus' onClick={somar}>+</button>

        </div>
    )
}