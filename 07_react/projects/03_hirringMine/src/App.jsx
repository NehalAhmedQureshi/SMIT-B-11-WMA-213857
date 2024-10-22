import { Outlet, Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Header from "./components/Header";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header /> <Outlet />
          </>
        }
      >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}
