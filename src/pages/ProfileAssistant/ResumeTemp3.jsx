import React from "react";

const ResumeTemp3 = ({ user, targetRef }) => {
  return (
    <div
      id="print-section"
      ref={targetRef}
      className="max-w-4xl mx-auto bg-white border p-6 shadow-md flex"
    >
      {/* Left Column */}
      <div className="w-1/3 pr-4 border-r border-gray-200">
        {user?.image && (
          <img
            src={user?.image}
            alt={user?.name}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
        )}
        <h2 className="text-xl font-bold text-center mb-2">{user?.name}</h2>
        <p className="text-center text-gray-500 mb-4">
          {user?.preferredCareerTrack}
        </p>
        <div className="mb-4">
          <h3 className="font-semibold mb-1">Contact</h3>
          <p className="text-sm">{user?.email}</p>
          <p className="text-sm">{user?.phone}</p>
        </div>
        <div>
          <h3 className="font-semibold mb-1">Skills</h3>
          <div className="flex flex-wrap gap-1">
            {user?.skills?.map((skill, i) => (
              <span key={i} className="px-2 py-1 border rounded text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-2/3 pl-4">
        <section className="mb-4">
          <h2 className="font-bold border-b pb-1 mb-2">Education</h2>
          <p>{user?.educationLevel}</p>
        </section>

        <section className="mb-4">
          <h2 className="font-bold border-b pb-1 mb-2">Experience</h2>
          {user?.experience?.map((exp, i) => (
            <div key={i} className="mb-2">
              <h3 className="font-semibold">
                {exp?.jobTitle}{" "}
                <span className="text-gray-500 text-sm">• {exp?.duration}</span>
              </h3>
              <p className="text-gray-600">{exp?.companyName}</p>
              <p className="text-sm">{exp?.jobDesc}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="font-bold border-b pb-1 mb-2">Projects</h2>
          {user?.projects?.map((proj, i) => (
            <div key={i} className="mb-2">
              <h3 className="font-semibold">{proj?.projectTitle}</h3>
              <p className="text-sm">{proj?.projectDesc}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ResumeTemp3;
