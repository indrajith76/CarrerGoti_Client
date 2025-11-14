import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import axios from "../api/axios";
import useAuth from "../context/useAuth";

const Register = () => {
  const [role, setRole] = useState("Applicant");
  const [loader, setLoader] = useState(false);
  const { login } = useAuth();
  const navigation = useNavigate();


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
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=<>?{}[\]~])[A-Za-z\d!@#$%^&*()_\-+=<>?{}[\]~]{6,}$/;

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
        setLoader(false);
        navigation("/");
      }
    } catch (error) {
      console.log(error);

    } finally {
      setLoader(false);
    }
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="lg:w-1/2 shadow mx-auto my-16 p-5 border border-gray-300 rounded-xl"
    >
      <img
        className="flex items-center mx-auto mb-3"
        src="/src/assets/images/logoicon.svg"
        alt="Logo"
      />

      <h2 className="text-2xl text-center mb-5 text-primary font-bold">
        Register
      </h2>

      <div className="grid md:grid-cols-2 gap-x-5">
        {/* Full name */}
        <div className="my-5">
          <label className="block" htmlFor="fullname">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            className="input"
            required
          />
        </div>

        {/* Account type */}
        <div className="my-5">
          <label className="block" htmlFor="AccountFor">
            Account for
          </label>
          <select
            onChange={(e) => setRole(e.target.value)}
            name="AccountFor"
            id="AccountFor"
            className="input"
            value={role}
          >
            <option value="Applicant">Applicant</option>
            <option value="Organization">Organization</option>
          </select>
        </div>

        {/* Email */}
        <div className="my-5">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            autoComplete="email"
            type="email"
            name="email"
            id="email"
            className="input"
            required
          />
        </div>

        {/* Mobile */}
        <div className="my-5">
          <label className="block" htmlFor="Mobile">
            Mobile No.
          </label>
          <input
            type="text"
            name="Mobile"
            id="Mobile"
            className="input"
            required
          />
        </div>

        {/* Conditional fields */}
        {role === "Applicant" ? (
          <>
            <div className="my-5">
              <label className="block" htmlFor="education">
                Education Level
              </label>
              <input
                type="text"
                name="education"
                id="education"
                className="input"
              />
            </div>

            <div className="my-5">
              <label className="block" htmlFor="experience">
                Experience Level
              </label>
              <select name="experience" id="experience" className="input">
                <option value="">Select...</option>
                <option value="fresher">Fresher</option>
                <option value="junior">Junior</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
              </select>
            </div>

            <div className="my-5">
              <label className="block" htmlFor="career">
                Preferred Career Track
              </label>
              <input
                type="text"
                name="career"
                id="career"
                className="input"
              />
            </div>
          </>
        ) : (
          <>
            <div className="my-5">
              <label className="block" htmlFor="companyName">
                Company Name
              </label>
              <input
                type="text"
                name="companyName"
                id="companyName"
                className="input"
              />
            </div>

            <div className="my-5">
              <label className="block" htmlFor="Designation">
                Designation
              </label>
              <input
                type="text"
                name="Designation"
                id="Designation"
                className="input"
              />
            </div>
          </>
        )}

        {/* Password */}
        <div className="my-5">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            autoComplete="current-password"
            type="password"
            name="password"
            id="password"
            className="input"
            required
          />
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loader}
        className="btn btn-primary flex items-center mx-auto"
      >
        {loader ? "Loading..." : "Register"}
      </button>

      <p className="mt-5 text-center">
        Already have an account?{" "}
        <Link className="text-blue-500 underline" to={"/login"}>
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
