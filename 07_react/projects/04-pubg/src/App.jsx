import { useContext, useState } from 'react'
import './App.css'
import { Outlet, Route, Routes } from 'react-router'
import Header from './conponents/Header'
import Home from './pages/Home/Home'
import Signin from './pages/auth/Signin'
// import Signup from './pages/auth/Signup'
import { UserContext } from './context/userContext'
import AddCards from './pages/Home/AddCards'
import AddProduct from './pages/Home/AddProduct'
import AllCards from './conponents/AllCards'
import Card from './pages/Home/Card'

function App() {
  const [count, setCount] = useState(0)
  const {user} = useContext(UserContext)
  // console.log('user ====>' , user )
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
        <Route path='/add-cards' element={<AddProduct />} />
        <Route path='/cards' element={<AllCards />}/>
        <Route path="/card/:id" element={<Card />} />
      </Route>

      {/*  //* auth router */}
      <Route path='/auth' element={<Outlet />}>

        <Route index element={<Signin />} />
        {/* <Route path='signup' element={<Signup />} /> */}
      </Route>
    </Routes>
  )
}

export default App
