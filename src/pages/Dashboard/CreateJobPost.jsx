import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import privateAxios from "../../api/privateAxios";

const CreateJobPost = () => {
  const [loader, setLoader] = useState(false);
  const navigation = useNavigate();


  const CreateJobPostHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const company = form.company.value;
    const location = form.location.value;
    const requiredSkills = form.requiredSkills.value;
    const experienceLevel = form.experienceLevel.value;
    const jobType = form.jobType.value;
    const jobDescription = form.jobDescription.value;

    if (
      !title ||
      !company ||
      !location ||
      !requiredSkills ||
      !experienceLevel ||
      !jobType ||
      !jobDescription
    ) {
      toast.warning("All required fields must be filled!");
      return;
    }

    const jobData = {
      title,
      company,
      location,
      requiredSkills,
      experienceLevel,
      jobType,
      jobDescription,
    }
    try {

      const res = await privateAxios.post("/api/jobs", jobData);
      if (res.data.success) {
        toast.success(res.data.message);
        form.reset();
        setLoader(false);
        navigation("/dashboard/ManageJobPost");
      }
    } catch (error) {
      console.log(error);

    } finally {
      setLoader(false);
    }
  };



  return (
    <div className="mb-10">
      <h2 className="text-2xl">Create Job Post</h2>

      <form
        onSubmit={CreateJobPostHandler}
        className="grid md:grid-cols-2 gap-5 mt-10"
      >
        <div>
          <label htmlFor="title" className="block">
            Job Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
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
          <label htmlFor="experienceLevel" className="block">
            Recommended Experience Level
          </label>
          <input
            type="text"
            id="experienceLevel"
            name="experienceLevel"
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
        <div className="md:col-span-2">
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
        <button disabled={loader} type="submit" className="btn btn-primary md:col-span-2">
          {loader ? "Loading..." : "Publish Job Post"}
        </button>
      </form>
    </div>
  );
};

export default CreateJobPost;
