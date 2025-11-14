import React from 'react';

const ResumeTemp1 = ({user, targetRef}) => {
    return (
        <div
        id="print-section"
        ref={targetRef}
        className="max-w-4xl mx-auto p-6 bg-white shadow rounded-lg border border-gray-300 my-5"
      >
        {/* Header */}
        <div className="flex items-center gap-4">
          {user?.image && (
            <img
              src={user?.image}
              alt={user?.name}
              className="w-24 h-24 rounded-full object-cover border"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold">{user?.name}</h1>
            <p className="text-xl text-primary font-semibold">
              {user?.preferredCareerTrack}
            </p>
            <p className="text-gray-600">
              Email: {user?.email} | Mobile: {user?.phone}
            </p>
          </div>
        </div>

        {/* Education */}
        <section className="mt-6">
          <h2 className="text-lg font-bold border-b pb-1">Education</h2>
          <p className="mt-1 font-medium">{user?.educationLevel}</p>
        </section>

        {/* Skills */}
        <section className="mt-6">
          <h2 className="text-lg font-bold border-b pb-1">Skills</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {user?.skills?.map((skill, i) => (
              <span key={i} className="badge badge-ghost badge-outline">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-6">
          <h2 className="text-lg font-bold border-b pb-1">Experience</h2>

          {user?.experience.length === 0 ? (
            <p className="text-gray-600 mt-2">No experience (Fresher)</p>
          ) : (
            user?.experienceList?.map((exp, index) => (
              <div key={index} className="mt-3">
                <h3 className="font-semibold">
                  {exp?.jobTitle}{" "}
                  <span className="text-gray-600 text-sm font-normal">
                    • {exp?.duration}
                  </span>
                </h3>
                <p className="text-gray-600">{exp?.companyName}</p>
                <p className="text-sm mt-1">{exp?.jobDesc}</p>
              </div>
            ))
          )}
        </section>

        {/* Projects */}
        <section className="mt-6">
          <h2 className="text-lg font-bold border-b pb-1">Projects</h2>

          {user?.projects.map((project, idx) => (
            <div key={idx} className="mt-3">
              <h3 className="font-semibold text-primary">
                {project?.projectTitle}
              </h3>
              <p className="text-sm">{project?.projectDesc}</p>
            </div>
          ))}
        </section>
      </div> 
    );
};

export default ResumeTemp1;