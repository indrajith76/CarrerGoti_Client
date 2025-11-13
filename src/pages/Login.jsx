import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import { useState } from "react";
import useAuth from "../context/useAuth";
import { toast } from "sonner";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const navigation = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    try {
      const res = await axios.post("/api/auth/login", { email, password });
      if (res.data.success) {
        login(res.data.data.token, res.data.data);
        toast.success(res.data.message);
        form.reset();
        setLoader(false);
        navigation("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:w-1/2 lg:w-3/12 shadow mx-auto mt-16 p-5 border border-gray-300 rounded-xl"
    >
      <img
        className="flex items-center mx-auto mb-3"
        src="/src/assets/images/logoicon.svg"
        alt="Logo"
      />
      <h2 className="text-2xl text-center mb-5 text-primary font-bold">
        Login
      </h2>

      <div className="my-5">
        <label className="block" htmlFor="email">
          Email
        </label>
        <input
          type="text"
          name="email"
          id="email"
          className="input"
          required
        />
      </div>

      <div className="my-5">
        <label className="block" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="input"
          required
        />
      </div>

      <p className="my-5 text-center">
        Forget password?{" "}
        <Link className="text-blue-500 underline" to={"/register"}>
          Click here
        </Link>
      </p>

      <button
        type="submit"
        className="btn btn-primary flex items-center mx-auto"
      >
        {loader ? "Loading..." : "Login"}
      </button>

      <p className="mt-5 text-center">
        Don't have an account?{" "}
        <Link className="text-blue-500 underline" to={"/register"}>
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
