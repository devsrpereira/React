import React from 'react'
import box_data from './box_data'
import BoxSquare from './BoxSquare'

export default function Box(){
    const [square, setBox] = React.useState(box_data)

    
    const elemento_criado = square.map(square => (
       <BoxSquare  key = {square.id} on = {square.on} />
    ))
    
    return(
        <main className='box_page'>
            <h1 className='box_title'>Boxes will go here!</h1>
            {elemento_criado}
        </main>
    )
}