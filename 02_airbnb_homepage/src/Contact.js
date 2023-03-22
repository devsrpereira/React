import React from "react";

export default function Contact({name, img, tel, email}){
    return(
        <div className="contacts">
            <div className="contact-card">
                <img className="contact-img" src={img} alt="gato 01" />
                <h3>{name}</h3>
                <div className="info-group">
                    <p><ion-icon name="call"></ion-icon> {tel}</p>
                    <p><ion-icon name="mail"></ion-icon> {email}</p>
                </div>
            </div>

{/* 
            <div className="contact-card">
                <img className="contact-img" src="../images/gatos/gat_01.jpg" alt="gato 01" />
                <h3>Mr. Whiskerson</h3>
                <div className="info-group">
                    <p><ion-icon name="call"></ion-icon> (212) 555-1234</p>
                    <p><ion-icon name="mail"></ion-icon> mr.whiskaz@catnap.</p>
                </div>
            </div> */}
        </div>

        

            
    )
}