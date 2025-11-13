import React from "react";

const Login = () => {
  return (
    <div className="w-3/12 shadow mx-auto mt-16 p-5">
        
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
      <button className="btn btn-primary flex items-center mx-auto">Login</button>
    </div>
  );
};

export default Login;
