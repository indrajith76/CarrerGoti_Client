import React, { useEffect, useState } from "react";
import axios from "../../api/axios";

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
  return <div></div>;
};

export default ManageJobPost;
