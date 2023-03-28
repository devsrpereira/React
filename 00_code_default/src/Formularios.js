import React from 'react'

export default function Formularios(){

    const [formData, setformData] = React.useState(
        {firstName:"", lastName:""}
    )

    function handleChange(event){
        setformData(prevformData => {
            return {
                ...prevformData,
                [event.target.name]: event.target.value
            }
        })    
    }    

    return(
        <div>
        <form>
            <input
                type ='text'
                placeholder = 'First Name'
                onChange = {handleChange}
                name = 'firstName'
            />    
            <input
                type ='text'
                placeholder = 'last Name'
                onChange = {handleChange}
                name = 'lastName'
            />   
        </form>
            <h1>{formData.firstName} {formData.lastName}</h1>
        </div>
    )
}