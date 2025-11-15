import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useAuth from "../context/useAuth";
import { toast } from "sonner";
import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    try {
      const res = await axios.post("/api/auth/login", { email, password });

      if (res.data.success) {
        login(res.data.data.token, res.data.data);
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login failed");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-4">
      <title>login</title>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg border border-gray-200 rounded-2xl p-8 space-y-6"
      >
        {/* Logo */}
        <img
          src="/src/assets/images/logoicon.svg"
          className="w-20 mx-auto mb-1"
        />

        <h2 className="text-3xl font-bold text-center text-primary">
          Login
        </h2>

        {/* Email */}
        <div>
          <label className="block mb-1 font-medium" htmlFor="email">
            Email
          </label>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className="input w-full"
              placeholder="Enter email"
              required
            />
          </div>
        </div>

        <div className="my-5">
          <label className="block mb-1 font-medium text-gray-700" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter your password"
              className="input w-full pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary"
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>
        </div>


        {/* Forget Link */}
        <p className="text-center text-sm">
          Forgot password?
          <Link className="text-blue-600 font-medium ml-1" to="/forget">
            Click here
          </Link>
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full text-lg py-2"
        >
          {loader ? "Logging in..." : "Login"}
        </button>

        {/* Register Link */}
        <p className="text-center text-sm">
          Don’t have an account?
          <Link className="text-blue-600 font-medium ml-1" to="/register">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
