import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="md:w-1/2 lg:w-3/12 shadow mx-auto mt-16 p-5 border border-gray-300 rounded-xl">
        <img className="flex items-center mx-auto" src="/src/assets/images/logoicon.svg" alt="" />
      <h2 className="text-2xl text-center mb-5 text-primary font-bold">Login</h2>
      <div className="my-5">
        <label className="block" htmlFor="email">
          Email
        </label>
        <input type="text" name="email" id="" className="input" />
      </div>
      <div className="my-5">
        <label className="block" htmlFor="password">
          Password
        </label>
        <input type="text" name="password" id="" className="input" />
      </div>
      <p className="my-5 text-center">Forget password? <Link className="text-blue-500 underline" to={"/register"}>Click here</Link></p>
      <button className="btn btn-primary flex items-center mx-auto">Login</button>
      <p className="mt-5 text-center">Don't have account? <Link className="text-blue-500 underline" to={"/register"}>Register</Link></p>
    </div>
  );
};

export default Login;
