import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
