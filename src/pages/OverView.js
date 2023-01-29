import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setConnection } from './reducer';

function OverView(props) {

    const [connectUser, setConnectUser] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { peer, connection } = useSelector(state => {
        return state.peerreducer
    })

    const handleSubmit = () => {
        if (peer) {
            const connection = peer.connect(connectUser);
            dispatch(setConnection({connection}))
            navigate('/chat')
        }
        else {
            navigate('/')
        }
    }

    useEffect(() => {
        if(peer){
            peer.on("connection", (conn) => {
                conn.on("data", (data) => {
                    console.log(data);
                    dispatch(setConnection({connection}))
                    navigate('/chat')
                });
            });
        }
    },[peer])



    return (
        <div >
            <div>
                Connect to:
                <input type="text" value={connectUser} name="user" label="Name" onChange={e => setConnectUser(e.target.value)} />
                <button onClick={handleSubmit}>{'Connect >>'}</button>
            </div>
        </div>
    )
}

export default OverView