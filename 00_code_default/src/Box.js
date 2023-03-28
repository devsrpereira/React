import React from 'react'
import box_data from './box_data'
import BoxSquare from './BoxSquare'

export default function Box(){
    const [square, setBox] = React.useState(box_data)
    
    const on_off = square.map(item => (
       <BoxSquare  key = {item.id} on ={item.on}/>
    ))
    
    return(
        <main className='box_page'>
            <h1 className='box_title'>Boxes will go here!</h1>
            {on_off}
        </main>
    )
}