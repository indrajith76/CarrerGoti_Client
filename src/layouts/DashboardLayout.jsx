import React from "react";
import { BsJustifyRight } from "react-icons/bs";
import Sidebar from "../components/Shared/Sidebar";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <>
      <nav className="shadow px-5">
        <div className="flex items-center justify-between py-3 container mx-auto">
          <h1 className="text-primary text-3xl font-medium">Dashboard</h1>
          <label htmlFor="my-drawer-1" className="btn drawer-button lg:hidden">
            <BsJustifyRight />
          </label>
        </div>
      </nav>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Link
            className="block text-right mr-5 mt-3 text-primary font-medium underline"
            to={"/"}
          >
            {"< "}Back to Home
          </Link>
          <div className="mx-5">
            <Outlet />
          </div>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default DashboardLayout;
