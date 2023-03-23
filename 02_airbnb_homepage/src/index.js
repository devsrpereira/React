import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import MainContent from './MainContent';
import Cards from './Cards'
// import Contact from './Contact';
// import Cores from './Cores'
import data from './data';


function App(){

    const card = data.map(item =>{
        return (
        <Cards
        key = {item.id}
        item = {item}
        // {...item}
        />)
    })
    
  return(
    <div className='page'>
      <Header />
      <MainContent />
      <aside className="card_carrosel">
          {card}
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