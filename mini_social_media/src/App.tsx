import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rigthbar/Rigthbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function App() {

  const Layout = () => {
    return(
      <div>
        <Navbar />
        <div style={{display: "flex"}}>
          <Leftbar />
          <div style={{flex: 6}}>
          <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registrar",
      element: <Register />,
    },
  ]);

  return (
      <div>
    <RouterProvider router={router} />
      </div>
  )
}

export default App
