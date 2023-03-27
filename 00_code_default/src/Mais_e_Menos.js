import React from 'react'
import Count from './Count'

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
            <Count number={count}/>
            <button className='counter_plus' onClick={somar}>+</button>

        </div>
    )
}

   