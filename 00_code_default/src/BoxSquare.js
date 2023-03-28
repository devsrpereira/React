import React from 'react'
import Box from './Box'

export default function BoxSquare(props){
    const [on, setOn] = React.useState(props.on)

    
    
    const styles = {
        backgroundColor: on ? "#222222" : "trasparent",
        cursor: "pointer",
    }
    
    function changecolor(){
        setOn(prevOn => !prevOn)
    }

    return(
        <div style={styles} className='botao' onClick={changecolor}></div>
    )
}
