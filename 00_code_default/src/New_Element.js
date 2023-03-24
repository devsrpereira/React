import React from 'react'

let txt
const thingsArray = ["Thing 1", "Thing 2"]

export default function New_Element(){
    
    // txt = thingsArray.map(thing => <p key = {thing}>{thing}</p>)

    function Novo_item(){
        const new_item = thingsArray.length + 1
        const add = `Thing ${new_item}`
        
        thingsArray.push(`Thing ${new_item}`)
     
        txt = thingsArray.map(thing => <p key = {thing}>{thing}</p>)

        console.log (txt)
    }
        
    return (
        <div>
            <button onClick={Novo_item}>Add Item</button>
            {[txt]}
        </div>
    )
}