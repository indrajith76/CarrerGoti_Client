import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

const ManageJobPost = () => {
  const [jobs, setJobs] = useState([]);
  const [jobsLoader, setJobsLoader] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      setJobsLoader(true);
      try {
        const res = await axios.get("/api/jobs");
        if (res.data.success) {
          setJobs(res.data.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setJobsLoader(false);
      }
    };

    fetchJobs();
  }, []);

  console.log(jobs)

  return (
    <div className="mb-10">
      <h2 className="text-2xl">Manage Job Posts</h2>
      {jobsLoader ? (
        <div className="flex items-center justify-center mt-10">
          <span className="loading loading-spinner loading-xl"></span>
        </div>

      ) : (
        <div className="overflow-x-auto mt-10">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Company</th>
                <th>Location</th>
                <th>RequiredSkills</th>
                <th>Experience Level</th>
                <th>Job Type</th>
                <th>Job Description</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, idx) => (
                <tr key={job._id}>
                  <th>{idx + 1}</th>
                  <td>{job?.title}</td>
                  <td>{job?.company}</td>
                  <td>{job?.location}</td>
                  <td>{job?.requiredSkills}</td>
                  <td>{job?.experienceLevel}</td>
                  <td>{job?.jobType}</td>
                  <td>{job?.jobDescription}</td>
                  <td className="flex gap-2">
                    <button className="btn btn-sm btn-success text-white text-lg">
                      <FaRegEdit />
                    </button>
                    <button className="btn btn-sm btn-error text-white text-lg">
                      <FaRegTrashCan />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageJobPost;
