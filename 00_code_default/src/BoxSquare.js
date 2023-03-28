import React from 'react'

export default function BoxSquare(props){
    const [on, setOn] = React.useState(props.on)

    const styles = {
        backgroundColor: on ? "#222222" : "transparent",
        cursor: "pointer",
    }
    // function changecolor(){
    //     setOn(prevOn => !prevOn)
    // }
    return(
        <div 
            style={styles} 
            className='botao' 
            onClick={props.toggle}
        >
        </div>
    )
}
