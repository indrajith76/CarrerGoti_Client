import React from "react";
import { Link } from "react-router-dom";
import { BsJustifyRight } from "react-icons/bs";
import useAuth from "../../context/useAuth";
import logo from "../../assets/images/Logo.svg";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <div className="shadow border-0 border-b border-gray-300">
      <div className="flex items-center justify-between container mx-auto py-2">
        <div>
          <Link to="/">
            <img className="w-[50%]" src={logo} alt="" />
          </Link>
        </div>
        {/* mobile View */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn m-1">
            <BsJustifyRight />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/jobs"}>Jobs</Link>
            </li>
            <li>
              <Link to={"/resources"}>Resources</Link>
            </li>
            <li>
              <Link to={"/RoadMaps"}>RoadMaps</Link>
            </li>
            <li>
              <Link to={"/ProfileAssistant"}>ProfileAssistant</Link>
            </li>
            {!user ? (
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
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full border border-gray-300">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHe5JZvnW6uJe9-Ae2dUy6qJpBUjSOqdT46w&s" />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to={"/Profile"}>Profile</Link>
                  </li>
                  <li>
                    <li>
                      <button
                        onClick={logout}
                        className="btn btn-xs text-white btn-error"
                      >
                        Logout
                      </button>
                    </li>
                  </li>
                </ul>
              </div>
            )}
          </ul>
        </div>

        {/* Large Screen */}
        <ul className="hidden lg:flex items-center gap-5 ">
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/jobs"}>Jobs</Link>
          </li>
          <li>
            <Link to={"/resources"}>Resources</Link>
          </li>
          <li>
            <Link to={"/RoadMaps"}>RoadMaps</Link>
          </li>
          <li>
            <Link to={"/ProfileAssistant"}>ProfileAssistant</Link>
          </li>

          {!user ? (
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
            <>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full border border-gray-300">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHe5JZvnW6uJe9-Ae2dUy6qJpBUjSOqdT46w&s" />
                  </div>
                </div>
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to={"/Profile"}>Profile</Link>
                  </li>
                  <li>
                    <li>
                      <button
                        onClick={logout}
                        className="btn btn-xs text-white btn-error"
                      >
                        Logout
                      </button>
                    </li>
                  </li>
                </ul>
              </div>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
