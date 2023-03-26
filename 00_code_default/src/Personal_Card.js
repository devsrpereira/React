import React from 'react'

export default function Personal_Card(){

    const [contact, setContact] = React.useState({
        firstName: "Saulo",
        lastName: "Pereira",
        phone: "+55 (11) 994104833",
        email: "srdevpereira@gmail.com",
        isFavorit: false
    })


return(
    <div className='card_page'>
        <div className='card_picture'>
            <img src='#' />
        </div>
        <div ClassName='card_content'>
            <p clasName='card_star'><ion-icon clasName='card_star' name="star-outline"></ion-icon></p>
            <h1 className='card_name'>NAME</h1>
            <p className='card_phone'>PHONE NUMBER</p>
            <p className='card_email'></p>
        </div>
    </div>

)


}