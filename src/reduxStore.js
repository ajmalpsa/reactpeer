import { configureStore } from '@reduxjs/toolkit'
import  peerReducer from './pages/reducer'

export const store = configureStore({
  reducer: {
    peerreducer: peerReducer
  },
})