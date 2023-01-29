import Peer from 'peerjs';
import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setPeer } from './reducer';

function NameInput() {

    const [user, setUser] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const peer = useSelector(state => {
        return state.peerreducer.peer
    })

    useEffect(() => {
        if (peer) {
            peer.on('open', function (id) {
                if(id){
                    navigate('/overview')
                }
            });
        }
    }, [peer])

    

    const handleSubmit = () => {
        if (user) {
            const peer = new Peer(user, {
                host: "1.peerjs.com",
                port: 443,
                path: '/',
                pingInterval: 5000
            })
            // setAvailablePeer(peer)
            dispatch(setPeer({peer}))
        }
    }

    return (
        <div>
            Name:
            <input type="text" value={user} name="user" label="Name" onChange={e => setUser(e.target.value)} />
            <button onClick={handleSubmit}>{'Connect >>'}</button>
        </div>
    )
}

export default NameInput