import React from 'react'

export default function MainContent(props){

    const dark = props.darkMode

    return(
        <section className='main_content' id={dark? 'main_content_dark':'main_content'}>
            <h1 className='content_title' id={dark? 'content_title_dark':'content_title'}>Fun facts about React</h1>
            <ul className='content_list' id={dark? 'content_list_dark':'content_list'}>
                <li className='list_item'>Was first released in 2013</li>
                <li className='list_item'>Was originally created by Jordan Walke</li>
                <li className='list_item'>Has well over 100K stars on Github</li>
                <li className='list_item'>Is maintained by Facebook</li>
                <li className='list_item'>Power thousands of enterprise apps, including mobile apps</li>
            </ul>
        </section>
    )
}