import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    peer: "",
    connection: ''
}

export const peerReducer = createSlice({
    name: 'peer reducer',
    initialState,
    reducers: {
        setPeer: (state, action) => {
            state.peer = action.payload.peer
        },
        setConnection: (state, action) => {
            state.connection = action.payload.connection
        }   
    }
})

export default peerReducer.reducer;
export const {setPeer, setConnection} = peerReducer.actions;