import React from "react";
import useAuth from "../context/useAuth";

const ProfileForAdOr = () => {
  const { user } = useAuth();
  const defaultAvatar = "https://www.cielhr.com/wp-content/uploads/2020/10/dummy-image.jpg";

  return (
    <div className="flex justify-center mt-16">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md text-center">
        {/* Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src={user?.image || defaultAvatar}
            alt="User Avatar"
            className="w-32 h-32 rounded-full border-4 border-primary object-cover"
          />
        </div>

        {/* User Info */}
        <h2 className="text-2xl font-bold text-primary mb-2">{user?.name || "N/A"}</h2>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Email:</span> {user?.email || "N/A"}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-semibold">Phone:</span> {user?.phone || "N/A"}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Role:</span> {user?.role || "N/A"}
        </p>
      </div>
    </div>
  );
};

export default ProfileForAdOr;
