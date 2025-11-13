import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow">
      <div className="flex items-center justify-between container mx-auto py-2">
        <div>
          <img className="w-[50%]" src="/src/assets/images/Logo.svg" alt="" />
        </div>
        <ul className="flex items-center gap-5">
          <li>
            <Link to={"/"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/"}>Jobs</Link>
          </li>
          <li>
            <Link to={"/"}>Resources</Link>
          </li>
          <li>
            <Link to={"/"}>Profile</Link>
          </li>
          {true ? (
            <>
              <li>
                <Link to={"/login"}>
                  <button className="btn btn-xs text-white btn-primary">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <button className="btn btn-xs text-white btn-primary">
                  Register
                </button>
              </li>
            </>
          ) : (
            <li>
              <button className="btn btn-xs text-white btn-error">
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
