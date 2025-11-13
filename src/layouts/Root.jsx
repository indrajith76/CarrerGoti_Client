import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-66px)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
