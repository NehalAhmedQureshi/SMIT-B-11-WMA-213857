import { useState } from 'react'
import Home from './pages/Home'
import Signup from './pages/auth/Signup'
import { Routes, Route, Outlet } from "react-router-dom";
import Signin from './pages/auth/Signin';
import Auth from './pages/auth/Auth';
import Header from './components/Header';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Cards from './pages/Cards';
import Product from './pages/Prodectdetail';
import { useContext } from 'react';
import { UserContext } from './context/userContext';
function App() {
  const { user } = useContext(UserContext)

  return (
    <>
      <Routes>
        <Route path='/auth' element={<Outlet />}>
          <Route index element={<Auth />} />
          <Route path={'/auth/signup'} element={<Signup />} />
          <Route path={'/auth/signin'} element={<Signin />} />
        </Route>
        <Route path='/' element={
          <div>
            <Header />
            <Outlet />
          </div>
        }>
          <Route index element={<Home />} />
          <Route path={'/cart'} element={<Cart />} />
          <Route path={'/profile'} element={<Profile />} />
          {/* <Route path='/product/' element={<Home />} /> */}
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
