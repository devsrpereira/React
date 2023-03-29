import React from 'react'

export default function Formularios(){

    const [formData, setformData] = React.useState(
        {
            firstName:"",
            lastName:"",
            eMail:"",
            coMments:"",
            isFriendly: false,
            employment: ""
        }
    )

    function handleChange(event){
        const{name, value, type, checked, text} = event.target
        setformData(prevformData => {
            return {
                ...prevformData,
                 [name]: type === "checkbox" ? checked : type === "textarea" ? text : value
            }
        })    
    }    

    function handleSubmit(event){
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }

    return(
        <div className='form_page'>
            <form className='form_all' onSubmit={handleSubmit}>
                <input
                    type ='text'
                    name = 'firstName'
                    placeholder = 'First Name'
                    onChange = {handleChange}
                    value = {formData.firstName}
                />    
                <input
                    type ='text'
                    name = 'lastName'
                    placeholder = 'last Name'
                    onChange = {handleChange}
                    value = {formData.lastName}
                />
                <input
                    type ='email'
                    name = 'eMail'
                    placeholder = 'email@email.com'
                    onChange = {handleChange}
                    value = {formData.eMail}
                />
                <br/>
                <textarea 
                    type ='textarea'
                    name = 'coMments'  
                    cols = {30}
                    rows = {10}
                    text = {formData.coMments}
                />
                <br/>
                <input
                    type ='checkbox'
                    name = 'isFriendly'
                    className='no_margin'
                    id = 'isFriendly'
                    onChange = {handleChange}
                    checked = {formData.isFriendly}
                />
                <label htmlFor = 'isFriendly'>Are you friendly?</label>
                <br/>
                <fieldset>
                    <legend>Current employment status</legend>
                    <input
                        type = 'radio'
                        name = 'employment'
                        className='no_margin'
                        id = 'unemployed'
                        value = 'unemployed'
                        onChange = {handleChange}
                        checked = {formData.employment === 'unemployed'}
                    />
                    <label htmlFor='unemployed'>Unemployed</label>
                    <br/>
                    <input
                        type = 'radio'
                        name = 'employment'
                        className='no_margin'
                        id = 'part-time'
                        value = 'part-time'
                        onChange = {handleChange}
                        checked = {formData.employment === 'part-time'}
                    />
                    <label htmlFor='part-time'>Part-time</label>
                    <br/>
                    <input
                        type = 'radio'
                        name = 'employment'
                        className='no_margin'
                        id = 'full-time'
                        value = 'full-time'
                        onChange = {handleChange}
                        checked = {formData.employment === 'full-time'}
                    />
                    <label htmlFor='full-time'>Full-time</label>
                    <br/>
                </fieldset>
                <br/>
                <label htmlFor = 'favColor'>What is your favorit color?</label><br/>
                <select
                    id = 'favColor'
                    value = {formData.favColor}
                    onChange = {handleChange}
                    name = 'favColor'
                >
                    <option value = '' >-- Choose --</option>
                    <option value = 'red' >Red</option>
                    <option value = 'orange' >Orange</option>
                    <option value = 'green' >Green</option>
                    <option value = 'blue' >Blue</option>
                    <option value = 'indigo' >Indigo</option>
                    <option value = 'violet' >Violet</option>
                </select>
                <br/>
                <input type = 'submit' value = 'Submit' />
                
            </form>
            
        </div>
    )
}