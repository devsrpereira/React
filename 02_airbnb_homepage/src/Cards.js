import React from "react";

export default function Cards(){
    return (
        <aside className="card_carrosel">
            <div className="card_initial">
                <div className="card_picture">
                    <img classname= "card_img" src="../images/card_01.jpg" alt="imge 01" />
                    <span className="img_stick"></span>
                </div>
                <div className="card_score">
                    <p><ion-icon name="star-outline"></ion-icon> <strong>5</strong> / Itacaré - BA </p>
                </div>
                <p className="card_prgf">Os melhores bares da cidade estão aqui.</p>
                <p className="card_price"><strong>Apenas R$125</strong> / pessoa.</p>
            </div>
            <div className="card_second">
                <div className="card_picture">
                    <img classname= "card_img" src="../images/card_02.jpg" alt="imge 02" />
                    <span className="img_stick"></span>
                </div>
                <div className="card_score">
                    <p><ion-icon name="star-outline"></ion-icon> <strong>4.8</strong> / Itacaré - BA </p>
                </div>
                <p className="card_prgf">Reuniões e Encontros Especiais tudoo que você precisatem aqui.</p>
                <p className="card_price"><strong>Apenas R$55</strong> / pessoa.</p>
            </div>
            <div className="card_thrid">
                <div className="card_picture">
                    <img classname= "card_img" src="../images/card_03.jpg" alt="imge 03" />
                    <span className="img_stick"></span>
                </div>
                <div className="card_score">
                    <p><ion-icon name="star-outline"></ion-icon> <strong>4.6</strong> / Itacaré - BA </p>
                </div>
                <p className="card_prgf">A diversão é garantida nos grande parques da região.</p>
                <p className="card_price"><strong>Apenas R$55</strong> / pessoa.</p>
            </div>
            <div className="card_fourth">
                <div className="card_picture">
                    <img classname= "card_img" src="../images/card_04.jpg" alt="imge 04" />
                    <span className="img_stick"></span>
                </div>
                <div className="card_score">
                    <p><ion-icon name="star-outline"></ion-icon> <strong>4.9</strong> / Itacaré - BA </p>
                </div>
                <p className="card_prgf">A incrivél hora do chá local, repleto de aromas e sabores.</p>
                <p className="card_price"><strong>Apenas R$75</strong> / pessoa.</p>
            </div>
        </aside>
    )
}
