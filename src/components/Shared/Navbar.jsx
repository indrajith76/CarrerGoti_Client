import React from "react";
import { Link } from "react-router-dom";
import { BsJustifyRight } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="shadow">
      <div className="flex items-center justify-between container mx-auto py-2">
        <div>
          <img className="w-[50%]" src="/src/assets/images/Logo.svg" alt="" />
        </div>
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn m-1">
            <BsJustifyRight />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
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
                  <Link to={"/register"}>
                    <button className="btn btn-xs text-white btn-primary">
                      Register
                    </button>
                  </Link>
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
        <ul className="hidden lg:flex items-center gap-5 ">
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
            <Link to={"/Profile"}>Profile</Link>
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
                <Link to={"/register"}>
                  <button className="btn btn-xs text-white btn-primary">
                    Register
                  </button>
                </Link>
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
