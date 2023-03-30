import React from 'react'

export default function Sign_Up(){
    const[formData, setFormData] = React.useState(
        {
            email:'',
            password:'',
            c_password:'',
            checked:'',
        }
    )

    function handleChange(event){
        const{name, value, type, checked, text} = event.target
        setFormData(prevFormData =>{
            return{
                ...prevFormData, 
                [name]: type === checked ? checked : type === text ? text : value
            }
        })
    }
    
    function enviarSubmit(){
        formData.password === formData.c_password ? 
        window.alert('Please confirm the password') :
        console.log(formData)
    }


    return(
        <section className='sign_page'>
            <from className = 'sign_form' onSubmit={enviarSubmit}>
                <input
                    className='sign_inp' 
                    type='email'
                    name='email'
                    placeholder='email'
                    onChange={handleChange}
                    value={formData.email}
                /><br/>
                <input
                    className='sign_inp' 
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={handleChange}
                    value={formData.password}
                /><br/>
                <input
                    className='sign_inp' 
                    type='password'
                    name='c_password'
                    placeholder='Confirm password'
                    onChange={handleChange}
                    value={formData.c_password}
                /><br/>
                <div className='sign_flex'>
                    <input
                        className='sign_ckd' 
                        type='checkbox'
                        name='newsletter'
                        id='newsletter'
                        onChange={handleChange}
                        checked={formData.checkbox}
                        required = {true}
                    />
                    <label className='sign_label' htmlFor='newsletter'>I want to join the newsletter</label>
                </div>
                <input 
                    className='sign_btn' 
                    type='submit' 
                    value='Sign Up'
                />
            </from>
        </section>
    )
}