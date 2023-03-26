import React from 'react'

export default function New_Element(){

    let coisa_inicial = ["Thing 1", "Thing 2"] 
   
    const [coisa, setCoisa] = React.useState(coisa_inicial)


    function Novo_item(){

        setCoisa (prevState => [...prevState, `Thing ${prevState.length+1}`])

    }
        const txt = coisa.map(thing => <p key = {thing}>{thing}</p>)

        
    return (
        <div>
            <button className="btn_coisa" onClick={Novo_item}>Add Item</button>
            <p>{txt}</p>
        </div>
    )
}