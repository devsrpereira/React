import React from "react";

export default function Cards(props){
    
    return (
        <div className="new_card">
            {/* {props.item.disponivel ===0 && <div className="soldout">SOLD OUT</div>} */}
            <div className="card_picture">
                <img className= "card_img" src={`../images/${props.item.image}`} alt="Error na Imagem"/>
            </div>
            <div className="card_content">
                <div className="card_firstline">
                    <span className="card_location"><ion-icon name="location-sharp"></ion-icon> {props.item.location}</span>
                    <span className="card_maps"><a className="card_maps" target="blank" href={`${props.item.googleMapsUrl}`}>View on Google Maps</a></span>
                </div>    
                <h1 className="card_title">{props.item.title}</h1>
                <h3 className="card_date">{props.item.startDate} - {props.item.endDate}</h3>
                <p className="card_description">{props.item.description}</p>
            </div>
        </div>
    )

}
