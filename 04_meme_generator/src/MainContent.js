import React from 'react'
// import data from './data';
import memedata from './memedata'

export default function MainContent(){
    
    // function getRandomArbitrary(min, max) {
    //     const posiçoes = data.length()
        
    //     console.log(posiçoes)

    //     return Math.random() * (max - min) + min;
    //   }
    
    //   const num_random = getRandomArbitrary(0, posiçoes)

    let url

    function getMemeImg(){
        const memesArray = memedata.data.memes
        const randomNumber = Math.floor(Math.random()*memesArray.length)
        url = memesArray[randomNumber].url
        console.log(url)
    }


    
    return(
        <section className="main_content">
            <form className="main_form" action='#' method='get'>
                <span className="form_texts">
                    <input className="form_text" placeholder="Top text" type="text" />
                    <input className="form_text" placeholder="Bottom text" type="text" />
                </span>
                <input className="form_button"type="button" onClick={getMemeImg} value="Get a new Meme image!" />
            </form>
                 <img className="main_img" src= {url}></img>

        </section>
    )
}