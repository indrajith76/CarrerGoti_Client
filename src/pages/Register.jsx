import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [role, setRole] = useState("Applicant");

  return (
    <div className="lg:w-1/2 shadow mx-auto my-16 p-5 border border-gray-300 rounded-xl">
      <img
        className="flex items-center mx-auto"
        src="/src/assets/images/logoicon.svg"
        alt="Logo"
      />
      <h2 className="text-2xl text-center mb-5 text-primary font-bold">
        Register
      </h2>
      <div className="grid md:grid-cols-2 gap-x-5">
        <div className="my-5">
          <label className="block" htmlFor="fullname">
            Full Name
          </label>
          <input type="text" name="fullname" id="fullname" className="input" />
        </div>

        <div className="my-5">
          <label className="block" htmlFor="AccountFor">
            Account for
          </label>
          <select
            onChange={(e) => setRole(e.target.value)}
            name="AccountFor"
            id="AccountFor"
            className="input"
          >
            <option value="" selected disabled>
              Select...
            </option>
            <option value="Organization">Organization</option>
            <option value="Applicant">Applicant</option>
          </select>
        </div>

        <div className="my-5">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" className="input" />
        </div>

        <div className="my-5">
          <label className="block" htmlFor="Mobile">
            Mobile No.
          </label>
          <input type="text" name="Mobile" id="Mobile" className="input" />
        </div>

        {role == "Applicant" ? (
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
              <input type="text" name="career" id="career" className="input" />
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

        <div className="my-5">
          <label className="block" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="input"
          />
        </div>
      </div>

      <button className="btn btn-primary flex items-center mx-auto">
        Register
      </button>

      <p className="mt-5 text-center">
        Already have an account?{" "}
        <Link className="text-blue-500 underline" to={"/login"}>
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
