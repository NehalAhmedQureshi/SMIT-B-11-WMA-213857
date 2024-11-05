import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { NextUIProvider } from '@nextui-org/react'
import Header from './components/Header.jsx'
import ChatsHome from './pages/home/ChatsHome.jsx'
import ChatMessage from './pages/home/ChatMessege.jsx'
import './index.css'
import UserContextProvider from './context/userContext.jsx'

createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <NextUIProvider>
            <App />
        </NextUIProvider>
    </UserContextProvider>
)
