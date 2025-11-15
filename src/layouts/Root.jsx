import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import useAuth from "../context/useAuth";
import ChatWidget from "../components/Shared/ChatWidget";
import { ImSpinner2 } from "react-icons/im";

const Root = () => {
  const { loading } = useAuth();
  if (loading) {
    return (
      <div className="min-h-screen min-w-screen flex justify-center items-center">
        <ImSpinner2 className='animate-spin' size={30}/>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <main className="min-h-[calc(100vh-66px)]">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
};

export default Root;
