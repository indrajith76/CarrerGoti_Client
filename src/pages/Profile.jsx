import React from "react";

const Profile = () => {
  return (
    <div className="flex flex-col items-center mx-auto mt-5">
      <img
        className="w-28 rounded-full"
        src="https://www.cielhr.com/wp-content/uploads/2020/10/dummy-image.jpg"
        alt=""
      />
      <div className="grid md:grid-cols-2 gap-x-5">
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
      </div>

      <button className="btn btn-primary flex items-center mx-auto">
        Register
      </button>
    </div>
  );
};

export default Profile;
