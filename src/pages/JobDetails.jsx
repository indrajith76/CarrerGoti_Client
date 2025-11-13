import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import { FaMapMarkerAlt, FaBriefcase, FaUsers, FaBuilding } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

const JobDetails = () => {
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        if (!id) return;

        const fetchJob = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`/api/jobs/${id}`);
                setJob(res.data.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchJob();
    }, [id]);

    if (loading) {
        return <p className="text-center mt-20 text-lg text-primary">Loading job details...</p>;
    }

    if (!job) {
        return <p className="text-center mt-20 text-lg text-red-500">Job not found.</p>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-xl border mt-10 bg-white">
            <h1 className="text-3xl font-bold text-primary mb-4">{job.title}</h1>

            <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                <p className="flex items-center gap-2">
                    <FaBuilding /> {job.company}
                </p>
                <p className="flex items-center gap-2">
                    <FaUsers /> {job.organizationEmail}
                </p>
                <p className="flex items-center gap-2">
                    <FaMapMarkerAlt /> {job.location}
                </p>
                <p className="flex items-center gap-2">
                    <FaBriefcase /> {job.experienceLevel}
                </p>
                <p className="flex items-center gap-2">
                    <MdOutlineWork /> {job.jobType}
                </p>
            </div>

            {job.requiredSkills && job.requiredSkills.length > 0 && (
                <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-2">Required Skills:</h3>
                    <div className="flex flex-wrap gap-2">
                        {job.requiredSkills.map((skill, idx) => (
                            <span
                                key={idx}
                                className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full font-medium"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <div className="mb-6">
                <h3 className="font-semibold text-gray-700 mb-2">Job Description:</h3>
                <p className="text-gray-600 leading-relaxed">
                    {job.jobDescription || "No detailed description provided."}
                </p>
            </div>

            <button
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/80 transition"
                onClick={() => alert("Apply functionality not implemented yet!")}
            >
                Apply Now
            </button>
        </div>
    );
};

export default JobDetails;
