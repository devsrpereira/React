import React from 'react'

export default function MainContent(){
    return(
        <section className="main_content">
            <form action='#' method='get'>
                <span className="form_text">
                    <input type="text" />
                    <input type="text" />
                </span>
                <input className="form_button"type="submit" value="Get a new Meme image!" />
            </form>
            <img></img>

        </section>
    )
}