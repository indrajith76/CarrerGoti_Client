import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/root";
import Home from "../pages/home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import CreateJobPost from "../pages/Dashboard/CreateJobPost";
import ManageJobPost from "../pages/Dashboard/ManageJobPost";
import CreateLearningResources from "../pages/Dashboard/CreateLearningResources";
import ManageLearningResources from "../pages/Dashboard/ManageLearningResources";
import ManageAllUsers from "../pages/Dashboard/ManageAllUsers";

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
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "CreateJobPost",
        element: <CreateJobPost />,
      },
      {
        path: "ManageJobPost",
        element: <ManageJobPost />,
      },
      {
        path: "CreateLearningResources",
        element: <CreateLearningResources />,
      },
      {
        path: "ManageLearningResources",
        element: <ManageLearningResources />,
      },
      {
        path: "ManageAllUsers",
        element: <ManageAllUsers />,
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
