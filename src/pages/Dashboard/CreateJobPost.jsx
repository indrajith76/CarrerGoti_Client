import React from "react";

const CreateJobPost = () => {
  const CreateJobPostHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const jobTitle = form.jobTitle.value;
    const company = form.company.value;
    const location = form.location.value;
    const requiredSkills = form.requiredSkills.value;
    const recommendedExperienceLevel = form.recommendedExperienceLevel.value;
    const jobType = form.jobType.value;
    const jobDescription = form.jobDescription.value; 
  };

  return (
    <div className="">
      <h2 className="text-2xl">Create Job Post</h2>

      <form
        onSubmit={CreateJobPostHandler}
        className="grid grid-cols-2 gap-5 mt-10"
      >
        <div>
          <label htmlFor="jobTitle" className="block">
            Job Title
          </label>
          <input
            type="text"
            id="jobTitle"
            name="jobTitle"
            className="input w-full border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="company" className="block">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="input w-full border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="location" className="block">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            className="input w-full border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="requiredSkills" className="block">
            Required Skills
          </label>
          <input
            type="text"
            id="requiredSkills"
            name="requiredSkills"
            className="input w-full border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="recommendedExperienceLevel" className="block">
            Recommended Experience Level
          </label>
          <input
            type="text"
            id="recommendedExperienceLevel"
            name="recommendedExperienceLevel"
            className="input w-full border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="jobType" className="block">
            Job Type
          </label>
          <input
            type="text"
            id="jobType"
            name="jobType"
            className="input w-full border rounded-lg"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="jobDescription" className="block">
            Job Description
          </label>
          <textarea
            type="text"
            id="jobDescription"
            name="jobDescription"
            className="input w-full h-20 border rounded-lg p-1"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary col-span-2">
          Publish Job Post
        </button>
      </form>
    </div>
  );
};

export default CreateJobPost;
