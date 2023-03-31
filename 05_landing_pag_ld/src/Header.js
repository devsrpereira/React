import React from 'react'

export default function Header(props){

    const dark = props.darkMode

    return(
        <nav className='land_hdr' id={dark? 'land_hdr_dark':'land_hdr'}>
            <img className='hdr_logo_icon' src="./images/react-icon-small.png" alt='React Icon'/>
            <h2 className='hdr_logo_text'>ReactFacts</h2>
            <div className='hdr_toggler'>
                <p className='toggler_light' id={dark? 'toggler_light_dark':'toggler_light'}>Light</p>
                <div className='toggler_slider' id={dark? 'toggler_slider_dark':'toggler_slider'} onClick={props.handleClick}>
                    <div className='slider_circle' id={dark? 'slider_circle_dark':'slider_circle'}></div>
                </div>
                <p className='toggler_dark' id={dark? 'toggler_dark_dark':'toggler_dark'}>Dark</p>
            </div>
        </nav>
    )
}