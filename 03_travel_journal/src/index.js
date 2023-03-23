import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header';
import Cards from './Cards';
import data from './data';


function App(){

    const card = data.map(item =>{
      
        return (
        <Cards
        key = {item.id}
        item = {item}
        />)
    })
    
  return(
    <div className='page'>
      <Header />
      {card}
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);