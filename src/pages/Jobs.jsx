import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { FaMapMarkerAlt, FaBriefcase, FaUsers, FaSearch, FaBuilding } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { Link } from "react-router-dom";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const [searchTrigger, setSearchTrigger] = useState(0);
    const limit = 8;

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            try {
                const params = { title, location, jobType, page, limit };
                const res = await axios.get("/api/jobs", { params });
                setJobs(res.data.data);
                setTotalPages(res.data.meta.totalPages);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, [searchTrigger, page]);

    const handleSearch = () => {
        setPage(1);
        setSearchTrigger((prev) => prev + 1);
    };

    const handleReset = () => {
        setTitle("");
        setLocation("");
        setJobType("");
        setPage(1);
        setSearchTrigger((prev) => prev + 1);
    };

    if (loading) {
        return <p className="text-center mt-20 text-lg text-primary">Loading jobs...</p>;
    }

    return (
        <div className="p-5 max-w-7xl mx-auto">
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-3 mb-6 justify-between items-center">
                <div className="flex items-center border rounded-lg px-3 py-2 w-full md:w-1/3">
                    <FaSearch className="text-gray-400 mr-2" />
                    <input
                        type="text"
                        placeholder="Search by title..."
                        className="w-full outline-none"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="flex gap-3 w-full md:w-2/3">
                    <input
                        type="text"
                        placeholder="Location"
                        className="border rounded-lg px-3 py-2 w-full"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <select
                        className="border rounded-lg px-3 py-2 w-full"
                        value={jobType}
                        onChange={(e) => setJobType(e.target.value)}
                    >
                        <option value="">All Job Types</option>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                    </select>
                    <button
                        className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                    <button
                        className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {jobs.map((job) => (
                    <Link
                        to={`/jobs/${job._id}`}
                        key={job._id}
                        className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-primary">{job.title}</h3>
                            <p className="text-gray-700 text-sm mb-2 flex items-center gap-1 font-medium">
                                <FaBuilding /> {job.company}
                            </p>
                            <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                                <FaUsers /> {job.organizationEmail}
                            </p>
                            <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                                <FaMapMarkerAlt /> {job.location}
                            </p>
                            <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                                <FaBriefcase /> {job.experienceLevel}
                            </p>
                            <p className="text-gray-600 text-sm mb-2 flex items-center gap-1">
                                <MdOutlineWork /> {job.jobType}
                            </p>
                            <p className="text-gray-500 text-sm line-clamp-3 mt-2">
                                {job.jobDescription}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center mt-6 gap-2">
                <button
                    className="px-3 py-1 border rounded hover:bg-primary/10"
                    disabled={page <= 1}
                    onClick={() => setPage((prev) => prev - 1)}
                >
                    Prev
                </button>
                <span>
                    Page {page} of {totalPages}
                </span>
                <button
                    className="px-3 py-1 border rounded hover:bg-primary/10"
                    disabled={page >= totalPages}
                    onClick={() => setPage((prev) => prev + 1)}
                >
                    Next
                </button>
            </div>

            {jobs.length === 0 && (
                <p className="text-center mt-10 text-gray-500">No jobs found.</p>
            )}
        </div>
    );
};

export default Jobs;
