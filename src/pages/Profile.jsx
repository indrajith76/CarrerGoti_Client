import React, { useState } from "react";

const Profile = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [allExperience, setAllExperience] = useState([]);
  const [experience, setExperience] = useState({
    jobTitle: "",
    companyName: "",
    duration: "",
    jobDesc: "",
  });
  const [allProject, setAllProject] = useState([]);
  const [project, setProject] = useState({
    projectTitle: "",
    projectDesc: "",
  });

  const skillHandler = () => {
    if (skill.trim() !== "") {
      setSkills((prevSkills) => [...prevSkills, skill]);
      setSkill("");
    }
  };

  const experienceHandler = () => {
    setAllExperience([...allExperience, experience]);
  };

  const projectHandler = () => {
    setAllProject([...allProject, project]);
  };

  return (
    <div className="md:flex flex-col items-center mx-auto mt-5 px-5 py-10">
      <img
        className="w-28 mx-auto rounded-full"
        src="https://www.cielhr.com/wp-content/uploads/2020/10/dummy-image.jpg"
        alt=""
      />
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-x-5">
        <div className="my-5">
          <label className="block" htmlFor="fullname">
            Full Name
          </label>
          <input type="text" name="fullname" id="fullname" className="input" />
        </div>

        <div className="my-5">
          <label className="block" htmlFor="email">
            Email
          </label>
          <input type="email" name="email" id="email" className="input" />
        </div>

        <div className="my-5">
          <label className="block" htmlFor="education">
            Education Level
          </label>
          <input
            type="text"
            name="education"
            id="education"
            className="input"
          />
        </div>

        <div className="my-5">
          <label className="block" htmlFor="experience">
            Experience Level
          </label>
          <select name="experience" id="experience" className="input">
            <option value="">Select...</option>
            <option value="fresher">Fresher</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
        </div>

        <div className="my-5">
          <label className="block" htmlFor="career">
            Preferred Career Track
          </label>
          <input type="text" name="career" id="career" className="input" />
        </div>

        <div className="my-5">
          <label className="block" htmlFor="skills">
            Add Skills
          </label>
          <div className="flex">
            <input
              onChange={(e) => setSkill(e.target.value)}
              value={skill}
              type="text"
              name="skills"
              id="skills"
              className="input"
            />
            <button onClick={skillHandler} className="btn btn-md">
              Add
            </button>
          </div>
        </div>
        {skills.length != 0 && (
          <div className="md:col-span-2 lg:col-span-3 my-5">
            <p className="mb-2">Added Skills</p>
            {skills.map((s, idx) => (
              <span
                className="border border-gray-300 text-gray-600 p-1 rounded-lg ml-1"
                key={idx}
              >
                {s}
              </span>
            ))}
          </div>
        )}

        {/* experience */}
        <h3 className="text-xl">Experience</h3>
        <hr className="md:col-span-3 border border-gray-300 mb-2" />
        {/* view of experience */}
        {allExperience.length != 0 && (
          <div className="md:col-span-3 grid grid-cols-3 gap-5">
            {allExperience.map((exp, idx) => (
              <div>
                <strong>Experience {idx + 1}</strong>
                <p>
                  {exp?.jobTitle} at {exp?.companyName}
                </p>
                <p>Worked: {exp?.duration} months</p>
                <small>{exp?.jobDesc}</small>
              </div>
            ))}
          </div>
        )}
        {/* experience form */}
        <div className="md:col-span-3 md:grid grid-cols-3 gap-x-5">
          <div className="mb-5">
            <label className="block" htmlFor="jobTitle">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              id="jobTitle"
              className="input w-full"
              onChange={(e) =>
                setExperience({ ...experience, jobTitle: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <label className="block" htmlFor="companyName">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              id="companyName"
              className="input w-full"
              onChange={(e) =>
                setExperience({ ...experience, companyName: e.target.value })
              }
            />
          </div>
          <div className="mb-5">
            <label className="block" htmlFor="duration">
              Duration in month
            </label>
            <input
              type="text"
              name="duration"
              id="duration"
              className="input w-full"
              onChange={(e) =>
                setExperience({ ...experience, duration: e.target.value })
              }
            />
          </div>
          <div className="mb-5 md:col-span-3">
            <label className="block" htmlFor="jobDesc">
              Description
            </label>
            <textarea
              name="jobDesc"
              id="jobDesc"
              className="input w-full"
              onChange={(e) =>
                setExperience({ ...experience, jobDesc: e.target.value })
              }
            ></textarea>
          </div>
        </div>
        <button
          onClick={experienceHandler}
          className="btn w-full md:col-span-3 mb-5"
        >
          Add Job Info
        </button>

        {/* Projects */}
        <h3 className="text-xl">Projects</h3>
        <hr className="md:col-span-3 border border-gray-300 mb-2" />
        {/* view of projects */}
        {allProject.length != 0 && (
          <div className="md:col-span-3 grid grid-cols-3 gap-5">
            {allProject.map((exp, idx) => (
              <div>
                <strong>project {idx + 1}</strong>
                <p>{exp?.projectTitle}</p>
                <small>{exp?.projectDesc}</small>
              </div>
            ))}
          </div>
        )}
        <div className="md:col-span-3">
          <div className="mb-5">
            <label className="block" htmlFor="projectTitle">
              Project Title
            </label>
            <input
              type="text"
              name="projectTitle"
              id="projectTitle"
              className="input w-full"
              onChange={(e) =>
                setProject({ ...project, projectTitle: e.target.value })
              }
            />
          </div>
          <div className="mb-5 md:col-span-3">
            <label className="block" htmlFor="projectDesc">
              Project Description
            </label>
            <textarea
              name="projectDesc"
              id="projectDesc"
              className="input w-full"
              onChange={(e) =>
                setProject({ ...project, projectDesc: e.target.value })
              }
            ></textarea>
          </div>
        </div>
        <button
          onClick={projectHandler}
          className="btn w-full md:col-span-3 mb-5"
        >
          Add Project Info
        </button>
      </div>

      <button className="btn btn-primary flex items-center mx-auto mt-5">
        Save All info
      </button>
    </div>
  );
};

export default Profile;
