import { useState } from 'react'
import Home from './pages/Home'
import Signup from './pages/Signup'
import './app.css'
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Signin from './pages/Signin';
import Auth from './pages/Auth';
import Header from './components/header';


function App() {

  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path={'/'} element={<Home />} />
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
