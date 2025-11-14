import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-1"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        <li>
          <Link to="/dashboard/CreateJobPost">Create Job Post</Link>
        </li>
        <li>
          <Link to="/dashboard/ManageJobPost">Manage Job Post</Link>
        </li>
        <li>
          <Link to="/dashboard/CreateLearningResources">Create Learning Resources</Link>
        </li>
        <li>
          <Link to="/dashboard/ManageLearningResources">Manage Learning Resources</Link>
        </li>
        <li>
          <Link to="/dashboard/ManageAllUsers">Manage All Users</Link>
        </li>
        <li>
          <Link to="/jobs">Explore Jobs</Link>
        </li>
        <li>
          <Link to="/resources">Explore Resources</Link>
        </li>
        <li>
          <Link to="/Profile">Profile Manage</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
