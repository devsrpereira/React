import React from 'react'
import memedata from './memedata'

export default function MainContent(){

    const memesArray = memedata.data.memes
    const randomNumber = Math.floor(Math.random()*memesArray.length)
    let url = memesArray[randomNumber].url
    const text_top = document.querySelector("input#form_text_top")
    const text_btm = document.querySelector("input#form_text_btm")

    const [meme, setMeme] = React.useState({
        top_text: "Top text",
        bottom_text: "Bottom text",
        random_img: "http://i.imgflip.com/1bij.jpg",
    })

    function GetMemeImg(){
        const randomNumber = Math.floor(Math.random()*memesArray.length)
            setMeme(prevState => ({
                ...prevState,
                random_img:  [memesArray[randomNumber].url] }))
    }    

    function Put_text(){
            setMeme(prevState => ({
                ...prevState,
                top_text: [text_top.value],
                bottom_text: [text_btm.value],
            }))
    }


    return(
        <section className="main_content">
            <form className="main_form" action='#' method='get'>
                <span className="form_texts">
                    <input id='form_text_top' onInput={Put_text} placeholder="Top text" type="text" />
                    <input id="form_text_btm" onInput={Put_text} placeholder="Bottom text" type="text"/>
                </span>
                <input className="form_button"type="button" onClick={GetMemeImg} value="Get a new Meme image!" />
            </form>
            <div className="meme_picture">
                <p className = "meme_toptext"> {meme.top_text} </p>
                <img className="meme_img" src= {meme.random_img} alt="Meme"/>
                <p className = "meme_topBottom">{meme.bottom_text}</p>
            </div>    
        </section>
    )
}