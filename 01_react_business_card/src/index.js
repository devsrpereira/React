import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer'

function App(){
  return(
    <section className='page'>
      <Header />
      <MainContent />
      <Footer />
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
