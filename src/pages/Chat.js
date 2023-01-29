import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Chat() {

    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const { peer, connection, user } = useSelector(state => {
        return state.peerreducer
    })

    useEffect(() => {
        if (connection)
            connection.on("data", (data) => {
                let tempMessage = [...messages]
                setMessages(tempMessage.push(data))
            });
    }, [connection])

    const handleSend = () => {
        if (connection) {
            let tempMessage = [...messages]
            setMessages(tempMessage.push({ [user]: message }))
            connection.send({ [user]: message });
        }
    }

    console.log({messages});

    return (
        <div>
            Message:
            <input type="text" value={message} name="user" label="Name" onChange={e => setMessage(e.target.value)} />
            <button onClick={handleSend}>{'Send >>'}</button>
            <hr/>
            {JSON.stringify(messages)}
        </div>
    )
}

export default Chat