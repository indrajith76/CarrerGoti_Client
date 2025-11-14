import React from "react";

const ResumeTemp2 = ({ user }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white border border-gray-200 shadow-lg rounded-lg">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">{user?.name}</h1>
        <p className="text-lg text-gray-700">{user?.preferredCareerTrack}</p>
        <p className="text-gray-500 text-sm">
          {user?.email} | {user?.phone}
        </p>
      </div>

      {/* Education */}
      <section className="mb-6">
        <h2 className="font-bold border-b-2 border-blue-200 pb-1 mb-3 text-blue-600">
          Education
        </h2>
        <p className="text-gray-700">{user?.educationLevel}</p>
      </section>

      {/* Skills */}
      <section className="mb-6">
        <h2 className="font-bold border-b-2 border-green-200 pb-1 mb-3 text-green-600">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {user?.skills?.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="font-bold border-b-2 border-purple-200 pb-1 mb-3 text-purple-600">
          Experience
        </h2>
        {user?.experience?.length === 0 ? (
          <p className="text-gray-600">No experience (Fresher)</p>
        ) : (
          user?.experience?.map((exp, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-semibold text-gray-800">
                {exp?.jobTitle}{" "}
                <span className="text-gray-500 text-sm">• {exp?.duration}</span>
              </h3>
              <p className="text-gray-700">{exp?.companyName}</p>
              <p className="text-gray-600 text-sm mt-1">{exp?.jobDesc}</p>
            </div>
          ))
        )}
      </section>

      {/* Projects */}
      <section>
        <h2 className="font-bold border-b-2 border-yellow-200 pb-1 mb-3 text-yellow-600">
          Projects
        </h2>
        {user?.projects?.map((proj, i) => (
          <div key={i} className="mb-3">
            <h3 className="font-semibold text-gray-800">
              {proj?.projectTitle}
            </h3>
            <p className="text-gray-600 text-sm">{proj?.projectDesc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ResumeTemp2;
