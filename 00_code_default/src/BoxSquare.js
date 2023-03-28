import React from 'react'

export default function BoxSquare(props){

    const styles = {
        backgroundColor: props.on ? "#222222" : "#none"
    }

    return(
        <div style={styles} className='botao'></div>
    )
}
