import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { toast } from "sonner";
import privateAxios from "../../api/privateAxios";

const ManageLearningResources = () => {
  const [learningResources, setLearningResources] = useState([]);
  const [LearningResourcesLoader, setLearningResourcesLoader] = useState(true);

  useEffect(() => {
    const fetchLearningResources = async () => {
      setLearningResourcesLoader(true);
      try {
        const res = await axios.get("/api/resource");
        if (res.data.success) {
          setLearningResources(res.data.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLearningResourcesLoader(false);
      }
    };

    fetchLearningResources();
  }, []);

  const handleDelete = async (id) => {
    const toastId = toast.loading("Deleting...");
    try {
      const res = await privateAxios.delete(`/api/resource/${id}`);
      if (res.data.success) {
        setLearningResources(learningResources.filter((lr) => lr._id !== id));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
    } finally {
      toast.dismiss(toastId);
    }
  };

  return (
    <div className="mb-10">
      <h2 className="text-2xl">Manage Job Posts</h2>
      {LearningResourcesLoader ? (
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
                <th>Image</th>
                <th>Related Skills</th>
                <th>Platform</th>
                <th>URL</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {learningResources.map((learningResource, idx) => (
                <tr key={learningResource._id}>
                  <th>{idx + 1}</th>
                  <td>{learningResource?.title}</td>
                  <td>
                    <img className="w-26" src={learningResource?.image} alt="" />
                  </td>
                  <td>{learningResource?.relatedSkills}</td>
                  <td>{learningResource?.platform}</td>
                  <td>{learningResource?.url}</td>
                  <td className="flex gap-2">
                    <button className="btn btn-sm btn-success text-white text-lg">
                      <FaRegEdit />
                    </button>
                    <button onClick={() => handleDelete(learningResource._id)} className="btn btn-sm btn-error text-white text-lg">
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

export default ManageLearningResources;
