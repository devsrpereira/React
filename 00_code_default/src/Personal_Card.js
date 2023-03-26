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
            <img src='https://1drv.ms/i/s!AjZLahQvN68hfAOkEUCcJ8ByCRQ?e=aIuLQr' />
        </div>
        <div className ='card_content'>
            <p className ='content_star'><ion-icon name="star-outline"></ion-icon></p>
            <h1 className ='content_name'>NAME</h1>
            <p className ='content_phone'>PHONE NUMBER</p>
            <p className ='content_email'>EMAIL</p>
        </div>
    </div>

)


}