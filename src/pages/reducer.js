import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    peer: "",
    connection: "",
    user: "",
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
        },
        setUser: (state, action) => {
            state.user = action.payload.user;
        }
    }
})

export default peerReducer.reducer;
export const {setPeer, setConnection, setUser} = peerReducer.actions;