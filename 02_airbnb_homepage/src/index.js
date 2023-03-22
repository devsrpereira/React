import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import MainContent from './MainContent';
import Cards from './Cards'
// import Contact from './Contact';
import Cores from './Cores'

function App(){
  return(
    <div className='page'>
      <Header />
      <MainContent />
      <aside className="card_carrosel">
          <Cards
              img ="card_01.jpg"
              nota = "5.0"
              votos = {6}
              cidade = "Itacaré"
              estado = "BA"
              titulo = "Os melhores bares da cidade estão aqui."
              preço = {125}
          />
          <Cards
              img ="card_02.jpg"
              nota = "4.8"
              votos = {7}
              cidade = "Itacaré"
              estado = "BA"
              titulo = "Reuniões e Encontros Especiais tudoo que você precisatem aqui."
              preço = {55}
          />
          <Cards
              img ="card_03.jpg"
              nota = "4.6"
              votos = {22}
              cidade = "Itacaré"
              estado = "BA"
              titulo = "A diversão é garantida nos grande parques da região."
              preço = {75}
          />
          <Cards
              img ="card_04.jpg"
              nota = "4.9"
              votos = {12}
              cidade = "Itacaré"
              estado = "BA"
              titulo = "A incrivél hora do chá local, repleto de aromas e sabores."
              preço = {49.90}
          />
      </aside>
{/*   <div className='contacts_card'>
        <Contact
            img ="../images/gatos/gat_01.jpg"
            name ="Mr. Whiskerson"
            tel = "(212) 555-1234"
            email = "mr.whiskaz@catnap.meow"
        />
        <Contact 
            img ="../images/gatos/gat_02.jpg"
            name ="Mr. Benjamin"
            tel = "(212) 553-3456"
            email = "mr.benjamin@catnap.meow"
        />
        <Contact 
            img ="../images/gatos/gat_03.jpg"
            name ="Ms. Sophia"
            tel = "(212) 532-19543"
            email = "ms.sophia@catnap.meow"
        />
        <Contact 
            img ="../images/gatos/gat_04.jpg"
            name ="Mr. Klaus"
            tel = "(212) 523-6543"
            email = "mr.klaus@catnap.meow"
        />
      </div> */}
      {/* <Cores /> */}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);