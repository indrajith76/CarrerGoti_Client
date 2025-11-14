import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../api/axios";
import { FaMapMarkerAlt, FaBriefcase, FaUsers, FaBuilding } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

const JobDetails = () => {
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [releventResources, setReleventResources] = useState([]);

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

    useEffect(() => {
        if (!id || !job) return;

        const fetchResource = async () => {
            setLoading(true);
            try {
                const res = await axios.post(`/api/resource/relevant`, { requiredSkills: job.requiredSkills });
                setReleventResources(res.data.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchResource();
    }, [job, id]);

    if (loading) {
        return <p className="text-center mt-20 text-lg text-primary">Loading job details...</p>;
    }

    if (!job) {
        return <p className="text-center mt-20 text-lg text-red-500">Job not found.</p>;
    }

    return (
        <div>
            <div className="max-w-7xl mx-auto p-6 shadow-lg rounded-xl border mt-10 bg-white">

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

            {releventResources.length > 0 && <div className="max-w-7xl mx-auto shadow-lg rounded-xl mb-12 p-5">
                <h2 className="text-2xl font-bold text-primary mt-10 mb-6">
                    Relevant Job Resources
                </h2>

                {releventResources.length === 0 ? (
                    <p className="text-gray-500">No resources found.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {releventResources.map((item) => (
                            <div
                                key={item._id}
                                className="card card-sm bg-base-100 shadow border border-gray-200 hover:shadow-lg transition rounded-lg"
                            >
                                {/* Smaller Image */}
                                <figure className="h-28 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </figure>

                                <div className="card-body p-3">
                                    <h3 className="font-bold text-base text-primary leading-tight">
                                        {item.title}
                                    </h3>

                                    <p className="text-xs text-gray-600 mt-1">
                                        Platform: <span className="font-medium">{item.platform}</span>
                                    </p>

                                    <p className="text-xs text-gray-600">
                                        Cost: <span className="font-medium">{item.cost}</span>
                                    </p>

                                    {/* Compact Skills */}
                                    <div className="mt-1 flex flex-wrap gap-1">
                                        {item.relatedSkills?.slice(0, 3).map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className="badge badge-primary badge-xs text-white"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {item.relatedSkills.length > 3 && (
                                            <span className="badge badge-outline badge-xs">
                                                +{item.relatedSkills.length - 3} more
                                            </span>
                                        )}
                                    </div>

                                    {/* Button smaller */}
                                    <div className="card-actions mt-3">
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-primary btn-xs w-full hover:btn-secondary"
                                        >
                                            Open Playlist
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            }

        </div>
    );
};

export default JobDetails;
