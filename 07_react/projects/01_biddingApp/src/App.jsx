import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
// import SignUp from './pages/Auth/SignUp'
import LogIn from "./pages/Auth/LogIn";
import MyBiddings from "./pages/Home/MyBidding";
import Header from "./components/Header";
import AddProduct from "./pages/Home/AddProduct";
import ProductCategory from "./pages/Home/productCategory";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import UserNotFound from "./pages/NotFound/UserNotFound";
import Biddings from "./pages/Home/MyBidding";
import NotFound from "./pages/NotFound/NotFound";
import AllProducts from "./pages/Home/AllProducts";
import InternetNotFound from "./pages/NotFound/InternetNotFound";
// import { useNavigate } from "react-router-dom";

function App() {
  const { user } = useContext(UserContext);
  const Bidds = false
  const products = true
  // const navigate = useNavigate();
  return (
    <Routes>
      <Route path="/auth" element={<Outlet />}>
        <Route index element={<LogIn />} />
      </Route>
      <Route
        path={"/"}
        element={
          <>
            <Header />
            <Outlet />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route
          path="biddings"
          element={
            user?.isLogin ? (
              Bidds ? (
                <Biddings />
              ) : (
                <NotFound name="Bidds" />
              )
            ) : (
              <UserNotFound message={"SignIn for making Bidds"} />
            )
          }
        />
        <Route
          path="addproduct"
          element={
            user?.isLogin ? (
              <AddProduct />
            ) : (
              <UserNotFound message={"SignIn for Add Products"} />
            )
          }
        />
        <Route path="product-categories" element={<ProductCategory />} />
        <Route path="all-products" element={
          user?.isLogin ? <AllProducts /> : <UserNotFound message={"SignIn to See Products For Bidds"}/>
        } />
      </Route>
    </Routes>
  );
}

export default App;
