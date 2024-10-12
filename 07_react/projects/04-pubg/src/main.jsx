import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { BrowserRouter } from 'react-router-dom'
import ThemeContextProvider from './context/ThemeContext.jsx'
import UsernameProvider from './context/Username.jsx'
import UserContextProvider from './context/userContext.jsx'
import CheckInternetProvider from './context/CheckInternet.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserContextProvider>
      <CheckInternetProvider>
        <UsernameProvider>
          <NextUIProvider>
            <ThemeContextProvider>
              <App />
            </ThemeContextProvider>
          </NextUIProvider>
        </UsernameProvider>
      </CheckInternetProvider>
    </UserContextProvider>,
  </BrowserRouter>
)
