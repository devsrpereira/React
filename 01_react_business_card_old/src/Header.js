import React from "react";

export default function Header() {
  return (
    <header>
        <div class="hdr_img" style={{backgroundImage: "url(/perfil.png"}}>
            {/* <img  src="./perfil.png" /> */}
        </div>
        <h1 class="hdr_titulo">Veluma Santana</h1>
        <p class="hdr_sub">Modelo Fotografica</p>
        <p class="hdr_local">Itacaré - Bahia</p>
        <span class="hdr_tbuttom">
          <button class="btn_email">
            <ion-icon class="btn_ico_email" name="mail-outline"></ion-icon>Email
          </button>
          <button class="btn_linkedin">
            <ion-icon class="btn_ico_linkedin" name="logo-linkedin"></ion-icon>
            Linkedin
          </button>
        </span>
    </header>
  );
}
