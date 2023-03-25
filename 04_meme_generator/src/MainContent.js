import React from 'react'
import memedata from './memedata'

export default function MainContent(){

    const memesArray = memedata.data.memes
    const randomNumber = Math.floor(Math.random()*memesArray.length)
    let url = memesArray[randomNumber].url

    const [image, setImage] = React.useState(url)

   
    function GetMemeImg(){
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        setImage(new_url => new_url = memesArray[randomNumber].url)
    }    
        
    return(
        <section className="main_content">
            <form className="main_form" action='#' method='get'>
                <span className="form_texts">
                    <input className="form_text" placeholder="Top text" type="text" />
                    <input className="form_text" placeholder="Bottom text" type="text" />
                </span>
                <input className="form_button"type="button" onClick={GetMemeImg} value="Get a new Meme image!" />
            </form>
                 <img className="main_img" src= {image}></img>

        </section>
    )
}