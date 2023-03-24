import React from 'react'

export default function MainContent(){
    return(
        <section className="main_content">
            <form className="main_form" action='#' method='get'>
                <span className="form_texts">
                    <input className="form_text" type="text" />
                    <input className="form_text" type="text" />
                </span>
                <input className="form_button"type="submit" value="Get a new Meme image!" />
            </form>
                 <img className="main_img" src='../images/img_01.png'></img>

        </section>
    )
}