import React from "react";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../../context/useAuth";
import { FaTachometerAlt, FaBriefcase, FaUsers, FaBook, FaUserCircle, FaListAlt } from "react-icons/fa";
import { BsClipboardDataFill } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  const menuItems = [];

  // Common Dashboard link
  menuItems.push({
    label: "Dashboard",
    path: "/dashboard",
    icon: <FaTachometerAlt />,
  });

  // Organization links
  if (user?.role === "organization") {
    menuItems.push(
      {
        label: "Create Job Post",
        path: "/dashboard/CreateJobPost",
        icon: <FaBriefcase />,
      },
      {
        label: "Manage Job Post",
        path: "/dashboard/ManageJobPost",
        icon: <BsClipboardDataFill />,
      },
      {
        label: "Create Learning Resources",
        path: "/dashboard/CreateLearningResources",
        icon: <FaBook />,
      },
      {
        label: "Manage Learning Resources",
        path: "/dashboard/ManageLearningResources",
        icon: <FaListAlt />,
      },
    );
  }

  // Admin links
  if (user?.role === "admin") {
    menuItems.push(
      {
        label: "Create Job Post",
        path: "/dashboard/CreateJobPost",
        icon: <FaBriefcase />,
      },
      {
        label: "Manage Job Post",
        path: "/dashboard/ManageJobPost",
        icon: <BsClipboardDataFill />,
      },
      {
        label: "Create Learning Resources",
        path: "/dashboard/CreateLearningResources",
        icon: <FaBook />,
      },
      {
        label: "Manage Learning Resources",
        path: "/dashboard/ManageLearningResources",
        icon: <FaListAlt />,
      },
      {
        label: "Manage All Users",
        path: "/dashboard/ManageAllUsers",
        icon: <MdManageAccounts />,
      },
    );
  }

  // User links
  if (user?.role === "user") {
    menuItems.push(
      {
        label: "Explore Jobs",
        path: "/jobs",
        icon: <FaBriefcase />,
      },
      {
        label: "Explore Resources",
        path: "/resources",
        icon: <FaBook />,
      },
      {
        label: "Profile Manage",
        path: "/Profile",
        icon: <FaUserCircle />,
      }
    );
  }

  return (
    <div className="drawer-side border-r border-r-gray-300 border-t border-t-gray-300">
      <label
        htmlFor="my-drawer-1"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-white shadow-lg min-h-full w-80 p-4 rounded-r-2xl space-y-2">
        {menuItems.map((item, idx) => {
          const isActive = location.pathname === item.path;
          return (
            <li key={idx} className="">
              <Link
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all hover:bg-primary hover:text-white ${isActive ? "bg-primary text-white font-semibold shadow" : "text-gray-700"
                  }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
