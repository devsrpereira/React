import React from 'react'
import Window_Tracker from './Window_Tracker'

export default function Window_Page(){




    return(
        <section className='tracker_body'>
            <div className='tracker_page'>
                <button className='tracker_btn'>Toggle Window Tracker</button>
                <Window_Tracker />
            </div>
        </section>
    )
}