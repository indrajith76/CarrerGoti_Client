import React from "react";

const RoadmapCard = ({ data }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-5 shadow-md bg-white w-full">
      {/* Role */}
      <h2 className="text-xl font-bold text-primary">{data.role}</h2>

      {/* Skills */}
      <p className="mt-2">
        <span className="font-semibold">Skills:</span>{" "}
        {data.skills.join(", ")}
      </p>

      {/* Duration & Weekly Hours */}
      <div className="flex justify-between mt-2">
        <p>
          <span className="font-semibold">Duration:</span> {data.duration}
        </p>
        <p>
          <span className="font-semibold">Weekly Hours:</span>{" "}
          {data.weeklyHours}
        </p>
      </div>

      {/* Overview */}
      <p className="mt-3 text-gray-600">{data.overview}</p>

      {/* Details Button */}
      <button 
        className="mt-4 px-4 py-2 bg-primary text-white rounded-lg"
      >
        Details
      </button>
    </div>
  );
};

export default RoadmapCard;
