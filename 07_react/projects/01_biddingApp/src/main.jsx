import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <BrowserRouter>
      <NextUIProvider>
        <App />

      </NextUIProvider>
    </BrowserRouter>,

  </UserContextProvider>
)
