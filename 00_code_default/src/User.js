import React from 'react'
import User_Bady from './User_Body'
import User_Header from './User_Header'


export default function User(){

    const [usuario, setUsuario] = React.useState('Veluma')

    return(
        <div className='user_page'>
            <User_Header usuario={usuario} />
            <User_Bady usuario={usuario}/>
        </div>
    )


}