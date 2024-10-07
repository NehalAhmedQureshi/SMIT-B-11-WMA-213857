import { useState } from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router'
import Header from './conponents/Header'
import Home from './pages/Home/Home'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'

function App() {
  const [count, setCount] = useState(0)


  return (
    <Routes>
      {/*  //* home route */}
      <Route path='/' element={
        <div className='flex flex-col'>
          <Header />
          <Outlet className='flex-grow' />
        </div>
      }>

        <Route index element={<Home />} />
      </Route>

      {/*  //* auth router */}
      <Route path='/auth' element={<Outlet />}>

        <Route index element={<Signin />} />
        <Route path='signup' element={<Signup />} />
      </Route>
    </Routes>
  )
}

export default App
