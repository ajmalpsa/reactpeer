import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    peer: "",
    connection: "",
    user: "",
    connectedUser: "",
}

export const peerReducer = createSlice({
    name: 'peer reducer',
    initialState,
    reducers: {
        setPeer: (state, action) => {
            state.peer = action.payload.peer;
        },
        setConnection: (state, action) => {
            state.connection = action.payload.connection;
            state.connectedUser = action.payload.connectedUser
        },
        setUser: (state, action) => {
            state.user = action.payload.user;
        },
        setConnectedUser: (state, action) => {
            state.connectedUser = action.payload.connectedUser
        }
    }
})

export default peerReducer.reducer;
export const {setPeer, setConnection, setUser, setConnectedUser} = peerReducer.actions;