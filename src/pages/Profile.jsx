import React, { useState } from "react";

const Profile = () => {
  const [skill, setSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const skillHandler = () => {
    if (skill.trim() !== "") {
      setSkills((prevSkills) => [...prevSkills, skill]);
      setSkill("");
    }
  };

  return (
    <div className="flex flex-col items-center mx-auto mt-5">
      <img
        className="w-28 rounded-full"
        src="https://www.cielhr.com/wp-content/uploads/2020/10/dummy-image.jpg"
        alt=""
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-5">
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
      </div>

      {/* experience */}
      <div className="col-span-3">
        <h3 className="font-bold">Experience</h3>
        <div className="my-5">
          <label className="block" htmlFor="career">
          Experience
          </label>
          <input type="text" name="career" id="career" className="input" />
        </div>
      </div>

      <button className="btn btn-primary flex items-center mx-auto">
        Save
      </button>
    </div>
  );
};

export default Profile;
