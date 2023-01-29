import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Chat() {

    const [message, setMessage] = useState('')
    const { peer, connection } = useSelector(state => {
        return state.peerreducer
    })

    useEffect(() => {
        console.log(connection);
        connection.on("data", (data) => {
            // Will print 'hi!'
            console.log(data);
        });
    },[connection])

    const handleSend = () => {
        if(connection){
            connection.send(message);
        }
    }

    return (
        <div>
            Message:
            <input type="text" value={message} name="user" label="Name" onChange={e => setMessage(e.target.value)} />
            <button onClick={handleSend}>{'Send >>'}</button>
        </div>
    )
}

export default Chat