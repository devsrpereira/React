import React from 'react'

export default function Api(){
    const [starWarsData, setStarWarsData] = React.useState({})
    const[count, setCount] = React.useState(0)
    console.log('Component rendered')


    React.useEffect(() => {
        console.log('Effect function ran')    
    },[count])

   
    return(
        <section className='api_body'>
            <div className='api_page'>
                <pre className='api_data'>{JSON.stringify(starWarsData,null,2)}</pre>
                <h1 className='api_title'>The count is {count}</h1>
                <button onClick={()=>setCount(prevCount=>prevCount+1)}>Add</button>
            </div>
        </section>
    )
}