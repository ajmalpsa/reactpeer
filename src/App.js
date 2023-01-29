import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chat from './pages/Chat';
import NameInput from './pages/NameInput';
import OverView from './pages/OverView';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<NameInput/>} />
                <Route exact path='/overview' element={<OverView/>} />
                <Route exact path='/chat' element={<Chat/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App