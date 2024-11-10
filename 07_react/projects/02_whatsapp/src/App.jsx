import { useContext, useState } from 'react'
import Header from './components/Header'
import ChatsHome from './pages/home/ChatsHome'
import ChatMessage from './pages/home/ChatMessege'
import { ProfileContext } from './context/profileContext'
import EmptyMessage from './components/emptyMessage'
import { UserContext } from './context/userContext'

function App() {
  const {profileState} = useContext(ProfileContext)
  const messageShow = localStorage.getItem('showMessage')
  return (
    <div className='flex bg-slate-900'>
      <Header />
      <ChatsHome />
      {!profileState.messageShow ?  <EmptyMessage />:<ChatMessage />}
    </div>
  )
}

export default App
