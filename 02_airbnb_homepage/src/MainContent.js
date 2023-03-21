import React from "react";

export default function MainContent() {
  return (
    <main className="main_content">
      <div className="main_imgs">
        <div className="imgs_colum01 imgs_colum">
          <img className="img_01" src="../images/img_01.jpg" alt=""/>
        </div>
        <div className="imgs_colum02 imgs_colum">
          <img className="img_02" src="../images/img_02.jpg" alt=""/>
          <img className="img_03" src="../images/img_03.jpg" alt=""/>
        </div>
        <div className="imgs_colum03 imgs_colum">
          <img className="img_04" src="../images/img_04.jpg" alt=""/>
          <img className="img_05" src="../images/img_05.jpg" alt=""/>
        </div>
        <div className="imgs_colum04 imgs_colum">
          <img className="img_06" src="../images/img_06.jpg" alt=""/>
          <img className="img_07" src="../images/img_07.jpg" alt=""/>
        </div>
        <div className="imgs_colum05 imgs_colum">
          <img className="img_08" src="../images/img_08.jpg" alt=""/>
          <img className="img_09" src="../images/img_09.jpg" alt=""/>
        </div>  
      </div>
      <h1 class="main_title">
        Online Experience
      </h1>
      <p class="main_prgf">
        Join unique interactive activeties led by one-of-a-kind hosts-all whitouf leaving home.
      </p>
    </main>
  );
}
