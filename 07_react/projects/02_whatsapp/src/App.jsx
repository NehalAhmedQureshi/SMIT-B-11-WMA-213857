import { useState } from 'react'
import Header from './components/Header'
import ChatsHome from './pages/home/ChatsHome'
import ChatMessage from './pages/home/ChatMessege'

function App() {

  return (
    <div className='flex'>
      <Header />
      <ChatsHome />
      <ChatMessage />
    </div>
  )
}

export default App
