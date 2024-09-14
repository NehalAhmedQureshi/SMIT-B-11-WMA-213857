// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import UserContextProvider from './context/userContext.jsx'

createRoot(document.getElementById('root')).render(
   <UserContextProvider>
     <NextUIProvider>
      <App />
    </NextUIProvider>
   </UserContextProvider>
)
