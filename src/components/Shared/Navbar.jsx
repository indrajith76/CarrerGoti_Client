import React from "react";
import { Link } from "react-router-dom";
import { BsJustifyRight } from "react-icons/bs";
import { FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import useAuth from "../../context/useAuth";
import logo from "../../assets/images/Logo.svg";
import { MdAssistant } from "react-icons/md";

const Navbar = () => {
  const { user, logout } = useAuth();
  const url = user?.role == "user" ? "/Profile" : "/Profile2"
  return (
    <div className="shadow-sm sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img className="w-[180px] hover:opacity-90 transition" src={logo} alt="" />
        </Link>

        {/* ---------------- MOBILE MENU ---------------- */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-sm bg-primary text-white hover:bg-primary/90 shadow-md">
            <BsJustifyRight size={20} />
          </div>

          <ul
            tabIndex={-1}
            className="dropdown-content menu bg-white rounded-xl shadow-lg w-56 p-4 border border-gray-100 mt-2"
          >
            <MobileNavLinks user={user} logout={logout} url={url} />
          </ul>
        </div>

        {/* ---------------- DESKTOP MENU ---------------- */}
        <ul className="hidden lg:flex items-center gap-6 font-medium text-gray-700">
          <DesktopNavLinks user={user} logout={logout} url={url} />
        </ul>

      </div>
    </div>
  );
};

/* ---------------- NAV LINKS FOR DESKTOP ---------------- */
const DesktopNavLinks = ({ user, logout, url }) => (
  <>
    <NavItem to="/" label="Home" />
    {user && <NavItem to="/dashboard" label="Dashboard" />}
    <NavItem to="/jobs" label="Jobs" />
    <NavItem to="/resources" label="Resources" />
    <NavItem to="/RoadMaps" label="RoadMaps" />

    {!user ? (
      <>
        <Link to="/login">
          <button className="btn btn-sm bg-primary text-white hover:bg-primary/90 shadow-md px-4">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="btn btn-sm bg-primary text-white hover:bg-primary/90 shadow-md px-4">
            Register
          </button>
        </Link>
      </>
    ) : (
      <UserAvatar logout={logout} url={url} />
    )}
  </>
);

/* ---------------- NAV LINKS FOR MOBILE ---------------- */
const MobileNavLinks = ({ user, logout }) => (
  <>
    {user && <li><Link className="hover:text-primary" to="/dashboard">Dashboard</Link></li>}
    <li><Link className="hover:text-primary" to="/jobs">Jobs</Link></li>
    <li><Link className="hover:text-primary" to="/resources">Resources</Link></li>
    <li><Link className="hover:text-primary" to="/RoadMaps">RoadMaps</Link></li>


    {!user ? (
      <>
        <li>
          <Link to="/login">
            <button className="btn btn-sm bg-primary text-white hover:bg-primary/90 shadow-md w-full">
              Login
            </button>
          </Link>
        </li>
        <li>
          <Link to="/register">
            <button className="btn btn-sm bg-primary text-white hover:bg-primary/90 shadow-md w-full">
              Register
            </button>
          </Link>
        </li>
      </>
    ) : (
      <UserAvatar logout={logout} mobile user={user} />
    )}
  </>
);

const NavItem = ({ to, label }) => (
  <li>
    <Link
      to={to}
      className="hover:text-primary transition font-medium"
    >
      {label}
    </Link>
  </li>
);

/* ---------------- USER AVATAR DROPDOWN ---------------- */
const UserAvatar = ({ logout, mobile = false, url }) => (
  <div className="dropdown dropdown-end">
    <div
      tabIndex={0}
      role="button"
      className="btn btn-ghost btn-circle avatar"
    >
      <div className="w-10 rounded-full border border-gray-300 shadow-sm">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHe5JZvnW6uJe9-Ae2dUy6qJpBUjSOqdT46w&s"
          alt="User"
        />
      </div>
    </div>

    <ul
      tabIndex={-1}
      className={`dropdown-content menu menu-sm bg-white rounded-xl shadow-lg w-56 p-2 border border-gray-100 mt-3 ${mobile ? "right-0" : "right-0"
        }`}
    >

      <li>
        <Link className="flex items-center gap-2 hover:text-primary font-medium" to={url}>
          <FiUser size={16} />
          Profile
        </Link>
      </li>

      <div className="border-t my-2"></div>
      <li>

        <Link to="/ProfileAssistant" label="ProfileAssistant" className="flex items-center gap-2 hover:text-primary font-medium">
          <MdAssistant size={16} />
          Resume Builder</Link>
      </li>

      <div className="border-t my-2"></div>


      <li>
        <button
          onClick={logout}
          className="flex items-center gap-2 text-error hover:text-error/80 font-medium"
        >
          <FiLogOut size={16} />
          Logout
        </button>
      </li>
    </ul>
  </div>
);

export default Navbar;
