import { useState } from 'react'
import Home from './pages/Home'
import Signup from './pages/auth/Signup'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Signin from './pages/auth/Signin';
import Auth from './pages/auth/Auth';
import Header from './components/Header';
import Cart from './pages/Cart';
import Profile from './pages/Profile';


function App() {

  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/cart'} element={<Cart />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path='/auth'>
          <Route index element={<Auth />} />
          <Route path={'/auth/signup'} element={<Signup />} />
          <Route path={'/auth/signin'} element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
