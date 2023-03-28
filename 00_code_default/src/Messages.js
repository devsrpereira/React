import React from 'react'

// export default function Messages(){
//     const [messages, setMessages] = React.useState(["a", "b"])

//     return (
//         <div>
//             {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
//         </div>
//     )
// }



export default function Messages(){
    const [message, setMessage]=React.useState(["a", "b"])

    return(
        <div>
            {
                message.length === 0 ?
                <h1>You're all caught up!</h1> :
                <h1>You have {message.length} undered 
                {message.length > 1 ? " message" : " messages"}
                </h1>
            }
        </div>
    )
}