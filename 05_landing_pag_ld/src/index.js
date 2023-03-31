import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './Header';
import MainContent from './MainContent';


export default function App(){

    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode (){
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

return(
    <div className="land_page">
        <Header darkMode={darkMode} handleClick={toggleDarkMode}/>
        <MainContent darkMode={darkMode}/>
    </div>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);