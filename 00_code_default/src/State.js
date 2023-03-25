import React from 'react'

export default State(){

    const hoje = new Date();
    const hora = hoje.getHours(); 
    const saudacao =''

    switch(hora){
            case hora<6:
                saudacao = "Boa Madrugada!"
                break

            case hora< 12:
                saudacao = "Bom Dia!"
                break
            
            case hora<18:
                saudacao = "Boa Tarde!"
                break    
            
            case hora>18:
                saudacao = "Boa Noite!"
                break    

            default:
                saudacao = "[ERROR na hora]"    
                break
        }

    return(
        <p>${saudacao}</p>
    )
};