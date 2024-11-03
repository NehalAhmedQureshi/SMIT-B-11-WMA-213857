import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import ChatsHome from './pages/home/ChatsHome.jsx'
import ChatMessage from './pages/home/ChatMessege.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
    <App />
)
