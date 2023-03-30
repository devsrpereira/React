import React from 'react'

export default function Api(){
    const [starWarsData, setStarWarsData] = React.useState({})

    fetch('https://swapi.dev/api/people/1')
        .then(res => res.json())
        .then(data => setStarWarsData(data))


    return(
        <section className='api_body'>
            <div className='api_page'>
                <pre className='api_data'>{JSON.stringify(starWarsData,null,2)}</pre>
            </div>
        </section>
    )
}