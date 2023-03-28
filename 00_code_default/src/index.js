import React from 'react'
import ReactDOM from 'react-dom/client'
import box_data from './box_data'

import Box from './Box';


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <Box darkMode = {false} />
    
);
