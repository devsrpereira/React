import React from 'react'

export default function Personal_Card(){

    const [contact, setContact] = React.useState({
        firstName: "Saulo",
        lastName: "Pereira",
        phone: "+55 (11) 994104833",
        email: "srdevpereira@gmail.com",
        picture:"foto_perfil01.jpg",
        isFavorit: false,
    })

    function put_favorit(){
        setContact.isFavorit(prevState => !prevState)
        
    }
    
    

return(
    <div className='card_page'>
        <div className='card_picture'>
            <img className='picture_img' src= {`../images/${contact.picture}`} />
        </div>
        <div className ='card_content'>
            <p className ='content_star' onClick={put_favorit}><ion-icon 
            name={contact.isFavotit ? "star" : "star-outline"}></ion-icon></p>

           

            <h1 className ='content_name'>{`${contact.firstName} ${contact.lastName}`}</h1>
            <p className ='content_phone'>{contact.phone} </p>
            <p className ='content_email'>{contact.email}</p>
        </div>
    </div>

)


}