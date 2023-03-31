import React from 'react'

export default function Window_Tracker(){

    const [screen, setScreen] = React.useState(window.innerWidth)

    React.useEffect


    return(
        <h1 className='tracker_title'>Window width: {screen}px</h1>
    )
}