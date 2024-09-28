import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import SignUp from './pages/Auth/SignUp'
import LogIn from './pages/Auth/LogIn'
import Cart from './pages/Home/Cart'
import Header from './components/Header'

function App() {
  return (
    <Routes>
      <Route path='/auth' element={<Outlet />}>
        <Route index element={<LogIn />} />
        <Route path='signup' element={<SignUp />} />
      </Route>
      <Route path={'/'} element={<>
      <Header />
      <Outlet />
      </>}>
        <Route index element={<Home />} />
        <Route path='cart' element={<Cart />} />
      </Route>
    </Routes>
  )
}

export default App
