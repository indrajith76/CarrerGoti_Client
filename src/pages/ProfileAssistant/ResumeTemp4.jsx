import React from "react";

const ResumeTemp4 = ({ user, targetRef }) => {
  return (
    <div
      id="print-section"
      ref={targetRef}
      className="max-w-4xl mx-auto bg-white border shadow-md flex"
    >
      {/* Left Sidebar */}
      <div className="w-1/3 bg-gray-100 p-6 flex flex-col items-center">
        {user?.image && (
          <img
            src={user?.image}
            alt={user?.name}
            className="w-24 h-24 rounded-full mb-4"
          />
        )}
        <h2 className="font-bold text-lg mb-2 text-center">{user?.name}</h2>
        <p className="text-sm text-gray-700 text-center mb-4">
          {user?.preferredCareerTrack}
        </p>
        <div className="w-full">
          <h3 className="font-semibold text-primary mb-2">Contact</h3>
          <p className="text-sm">{user?.email}</p>
          <p className="text-sm">{user?.phone}</p>
        </div>
        <div className="w-full mt-4">
          <h3 className="font-semibold text-primary mb-2">Skills</h3>
          <div className="flex flex-wrap gap-1">
            {user?.skills?.map((s, i) => (
              <span key={i} className="px-2 py-1 border rounded text-xs">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Main */}
      <div className="w-2/3 p-6">
        <section className="mb-4">
          <h2 className="text-primary font-bold mb-2 border-b pb-1">
            Experience
          </h2>
          {user?.experience?.map((exp, i) => (
            <div key={i} className="mb-2">
              <h3 className="font-semibold">{exp?.jobTitle}</h3>
              <p className="text-sm text-gray-600">
                {exp?.companyName} • {exp?.duration}
              </p>
              <p className="text-sm">{exp?.jobDesc}</p>
            </div>
          ))}
        </section>

        <section className="mb-4">
          <h2 className="text-primary font-bold mb-2 border-b pb-1">
            Projects
          </h2>
          {user?.projects?.map((p, i) => (
            <div key={i} className="mb-2">
              <h3 className="font-semibold">{p?.projectTitle}</h3>
              <p className="text-sm">{p?.projectDesc}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-primary font-bold mb-2 border-b pb-1">
            Education
          </h2>
          <p>{user?.educationLevel}</p>
        </section>
      </div>
    </div>
  );
};

export default ResumeTemp4;
