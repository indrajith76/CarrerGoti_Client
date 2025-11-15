import { createBrowserRouter } from "react-router-dom";
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
import Jobs from "../pages/jobs";
import JobDetails from "../pages/JobDetails";
import Resources from "../pages/Resources";
import Root from "../layouts/root";
import RoadMaps from "../pages/RoadMaps";
import ProfileAssistant from "../pages/ProfileAssistant/ProfileAssistant";
import Private from "./private";
import ProfileForAdOr from "../pages/ProfileForAdOr";

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
        element: <Private><Profile /></Private>,
      },
      {
        path: "/Profile2",
        element: <Private><ProfileForAdOr /></Private>,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
      },
      {
        path: "/RoadMaps",
        element: <RoadMaps />,
      },
      {
        path: "/ProfileAssistant",
        element: <Private><ProfileAssistant /></Private>,
      }
    ],
  },
  {
    path: "/dashboard",
    element: <Private><DashboardLayout /></Private>,
    children: [
      {
        path: "",
        element: <Private><Dashboard /></Private>,
      },
      {
        path: "CreateJobPost",
        element: <Private><CreateJobPost /></Private>,
      },
      {
        path: "ManageJobPost",
        element: <Private><ManageJobPost /></Private>,
      },
      {
        path: "CreateLearningResources",
        element: <Private><CreateLearningResources /></Private>,
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
