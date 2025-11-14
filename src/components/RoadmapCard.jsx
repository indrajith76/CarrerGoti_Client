import React from "react";

const RoadmapCard = ({ data, setSelectedRoadmap }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-5 shadow-md bg-white w-full">
      <h2 className="text-xl font-bold text-primary">{data.role}</h2>

      <p className="mt-2">
        <span className="font-semibold">Skills:</span> {data.skills.join(", ")}
      </p>

      <div className="flex justify-between mt-2">
        <p>
          <span className="font-semibold">Duration:</span> {data.duration}
        </p>
        <p>
          <span className="font-semibold">Weekly Hours:</span>{" "}
          {data.weeklyHours}
        </p>
      </div>

      <p className="mt-3 text-gray-600">{data.overview}</p>
      <button
        className="btn btn-sm mt-2 btn-primary"
        onClick={() => {
          setSelectedRoadmap(data);
          document.getElementById("my_modal_3").showModal();
        }}
      >
        View Details
      </button>
    </div>
  );
};

export default RoadmapCard;
