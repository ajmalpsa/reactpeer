import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./chat.css"

function Chat() {

    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const { peer, connection, user, connectedUser } = useSelector(state => {
        return state.peerreducer
    })

    const handleMessage = (message = {}) => {
        // let tempMessage = [...messages]
        // tempMessage.push(message)
        setMessages(msg => [...msg, message])
    }

    useEffect(() => {
        if (connection)
            connection.on("data", (data) => {
                handleMessage(data)
            });
    }, [connection])

    const handleSend = (e) => {
        e.preventDefault()
        if (connection) {
            handleMessage({
                message: message,
                user: user
            })
            connection.send({
                message: message,
                user: user
            });
            setMessage('')
        }
    }

    const handleCall = () => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }, (stream) => {
            const call = peer.call("other-peer-id", stream);
            call.on("stream", (remoteStream) => {
                // Show stream in some video/canvas element.
            });
        })
        // if (connection) {
        //     handleMessage({ [user]: message })
        //     connection.send({ [user]: message });
        // }
    }

    return (
        // <div>
        //     Message:
        //     <input type="text" value={message} name="user" label="Name" onChange={e => setMessage(e.target.value)} />
        //     <button onClick={handleSend}>{'Send >>'}</button>
        //     <button onClick={handleCall}>{'Call >>'}</button>
        //     <hr />
        //     {JSON.stringify(messages)}
        // </div>
        <div>
            <div id="chat" class="chat">
                <div class="conversation">
                    <div class="head">
                        {/* <div class=" avatar">
                            <div class="online"></div>
                        </div> */}
                        <h3 class="person-name">{connectedUser}</h3>
                        <div class="buttons">
                            {/* <svg title="Call" class="audio-call icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                            <svg title="Video-call" class="video-call icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
                                <polygon points="23 7 16 12 23 17 23 7"></polygon>
                                <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                            </svg>
                            <svg id="button-options" class="button-option icon" stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.25em" width="1.25em" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="16" x2="12" y2="12"></line>
                                <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg> */}
                        </div>
                    </div>

                    <div id="messages" class="messages">
                        {/* <div class="time">Today</div> */}
                        {messages.map((message) => {
                            if (message.user === user)
                                return <div class="msg-text owner">
                                    <span class="text">
                                        {message.message}
                                    </span>
                                </div>

                            return <div class="msg-text">
                                <span class="text">
                                    {message.message}
                                </span>
                            </div>
                        })}
                        {/* <div class="msg-text">
                            <span class="text">Hello</span>
                        </div>
                        <div class="msg-text owner">
                            <span class="text">Fine</span>
                        </div> */}
                    </div>

                    <form class="field" onSubmit={handleSend}>
                        {/* <svg class="emoji icon" stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg> */}
                        <input
                            value={message}
                            id="input-message"
                            class="input-message"
                            type="text"
                            placeholder="Type something..."
                            onChange={e => setMessage(e.target.value)}
                        />
                        {/* <div class="icon plus">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                            </svg>
                        </div> */}
                        <div id="send-text" class="icon send text" onClick={handleSend}>
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </div>
                        {/* <div id="send-audio" class="icon send audio">
                            <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                                <line x1="12" y1="19" x2="12" y2="23"></line>
                                <line x1="8" y1="23" x2="16" y2="23"></line>
                            </svg>
                        </div> */}
                    </form>
                </div>


            </div>


        </div>
    )
}

export default Chat