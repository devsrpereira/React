import React from 'react'
import memedata from './memedata'
import Meme_Related from './Meme_Related'

export default function MainContent(){

    const memesArray = memedata.data.memes
    const randomNumber = Math.floor(Math.random()*memesArray.length)
    let url = memesArray[randomNumber].url

    const [meme, setMeme] = React.useState({
        top_text: "",
        top_bottom: "",
        random_img: "http://i.imgflip.com/1bij.jpg",
    })

    function GetMemeImg(){
        
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        setMeme(prevState => ({
            ...prevState,
            random_img:  ""}))
    }    
        
    return(
        <section className="main_content">
            <form className="main_form" action='#' method='get'>
                <span className="form_texts">
                    <input className="form_text_top" placeholder="Top text" type="text" />
                    <input className="form_text_btm" placeholder="Bottom text" type="text" />
                </span>
                <input className="form_button"type="button" onClick={Meme_Related(GetMemeImg)} value="Get a new Meme image!" />
            </form>
            <div className="meme_picture">
                <p className = "meme_toptext"> {meme.top_text} </p>
                <img className="meme_img" src= {meme.random_img}></img>
                <p className = "meme_topBottom">{meme.bottom_text}</p>
            </div>    
        </section>
    )
}