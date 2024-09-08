import { useState } from 'react'
import Home from './pages/Home'
import SignUp from './pages/Signup'
import './app.css'
import { BrowserRouter } from "react-router-dom";
// import { Router } from "@reach/router";
import { Routes, Route } from "react-router-dom";
import Signin from './pages/Signin';
import Header from './components/Header';


function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path={'/'} element={<Home/>} />
      <Route path={'/Signup'} element={<SignUp/>} />
      <Route path={'/Signin'} element={<Signin/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
