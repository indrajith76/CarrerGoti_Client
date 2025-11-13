import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import useAuth from "../context/useAuth";

const Root = () => {
  const { loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen min-w-screen flex justify-center items-center">
        <p>Loading...</p>
      </div>
    )
  }
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
