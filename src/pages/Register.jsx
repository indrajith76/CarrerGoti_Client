import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "../api/axios";
import useAuth from "../context/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import logo from "../assets/images/logoicon.svg";

const Register = () => {
  const [role, setRole] = useState("Applicant");
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const form = e.target;
    const name = form.fullname.value.trim();
    const email = form.email.value.trim();
    const phone = form.Mobile.value.trim();
    const password = form.password.value.trim();

    let extraData = {};

    if (!name || !email || !phone || !password) {
      toast.warning("All required fields must be filled!");
      setLoader(false);
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~]).{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least 1 uppercase, lowercase, number, special character, and be at least 6 characters long."
      );
      setLoader(false);
      return;
    }

    if (role === "Applicant") {
      if (!form.education.value || !form.experience.value || !form.career.value) {
        toast.warning("All required fields must be filled!");
        setLoader(false);
        return;
      }
      extraData = {
        educationLevel: form.education.value.trim(),
        experienceLabel: form.experience.value.trim(),
        preferredCareerTrack: form.career.value.trim(),
      };
    } else if (role === "Organization") {
      if (!form.companyName.value || !form.Designation.value) {
        toast.warning("All required fields must be filled!");
        setLoader(false);
        return;
      }
      extraData = {
        companyName: form.companyName.value.trim(),
        designation: form.Designation.value.trim(),
      };
    }

    const data = {
      name,
      email,
      phone,
      password,
      role: role === "Applicant" ? "user" : "organization",
      ...extraData,
    };

    try {
      const res = await axios.post("/api/auth/register", data);
      if (res.data.success) {
        login(res.data.data.token, res.data.data);
        toast.success(res.data.message);
        form.reset();
        navigate("/");
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoader(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-1/2 shadow-lg mx-auto my-16 p-8 border border-gray-200 rounded-2xl bg-white"
    >
      <title>register</title>
      <img
        className="flex items-center mx-auto mb-4 w-20"
        src={logo}
        alt="Logo"
      />

      <h2 className="text-3xl text-center mb-6 text-primary font-bold">
        Register
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Full name */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1" htmlFor="fullname">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="input input-bordered w-full shadow-sm focus:shadow-md transition"
            placeholder="John Doe"
            required
          />
        </div>

        {/* Account type */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1" htmlFor="AccountFor">
            Account for
          </label>
          <select
            onChange={(e) => setRole(e.target.value)}
            name="AccountFor"
            id="AccountFor"
            className="input input-bordered w-full shadow-sm focus:shadow-md transition"
            value={role}
          >
            <option value="Applicant">Applicant</option>
            <option value="Organization">Organization</option>
          </select>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            autoComplete="email"
            type="email"
            name="email"
            id="email"
            className="input input-bordered w-full shadow-sm focus:shadow-md transition"
            placeholder="email@example.com"
            required
          />
        </div>

        {/* Mobile */}
        <div className="flex flex-col">
          <label className="text-gray-700 font-medium mb-1" htmlFor="Mobile">
            Mobile No.
          </label>
          <input
            type="text"
            name="Mobile"
            id="Mobile"
            className="input input-bordered w-full shadow-sm focus:shadow-md transition"
            placeholder="+880 123456789"
            required
          />
        </div>

        {/* Conditional fields */}
        {role === "Applicant" ? (
          <>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1" htmlFor="education">
                Education Level
              </label>
              <input
                type="text"
                name="education"
                id="education"
                className="input input-bordered w-full shadow-sm focus:shadow-md transition"
                placeholder="Bachelor's Degree"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1" htmlFor="experience">
                Experience Level
              </label>
              <select
                name="experience"
                id="experience"
                className="input input-bordered w-full shadow-sm focus:shadow-md transition"
              >
                <option value="">Select...</option>
                <option value="fresher">Fresher</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1" htmlFor="career">
                Preferred Career Track
              </label>
              <input
                type="text"
                name="career"
                id="career"
                className="input input-bordered w-full shadow-sm focus:shadow-md transition"
                placeholder="Frontend Developer"
              />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1" htmlFor="companyName">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                className="input input-bordered w-full shadow-sm focus:shadow-md transition"
                placeholder="Your Company"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 font-medium mb-1" htmlFor="Designation">
                Designation
              </label>
              <input
                type="text"
                name="Designation"
                id="Designation"
                className="input input-bordered w-full shadow-sm focus:shadow-md transition"
                placeholder="CEO / Manager"
              />
            </div>
          </>
        )}

        {/* Password */}
        <div className="flex flex-col relative">
          <label className="text-gray-700 font-medium mb-1" htmlFor="password">
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            className="input input-bordered w-full shadow-sm focus:shadow-md pr-12 transition"
            placeholder="********"
            required
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[35px] cursor-pointer text-gray-400 hover:text-primary"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loader}
        className="btn btn-primary w-full mt-6 shadow-lg hover:shadow-xl transition"
      >
        {loader ? "Loading..." : "Register"}
      </button>

      <p className="mt-5 text-center">
        Already have an account?{" "}
        <Link className="text-primary underline" to={"/login"}>
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
