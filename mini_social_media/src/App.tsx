import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Rightbar from "./components/rigthbar/Rigthbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

import {
  createBrowserRouter,
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
          <Home />
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
