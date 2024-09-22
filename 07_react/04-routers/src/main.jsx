// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import App from './App.jsx'
import './index.css'
import UserContextProvider from './context/userContext.jsx'
import CartContextProvider from './context/cartContext.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <UserContextProvider>
      <CartContextProvider>
        <NextUIProvider>
          <App />
        </NextUIProvider>
      </CartContextProvider>
    </UserContextProvider>
  </BrowserRouter>
)
