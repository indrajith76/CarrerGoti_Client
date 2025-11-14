import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { FaMapMarkerAlt, FaBriefcase, FaUsers, FaSearch, FaBuilding } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { Link } from "react-router-dom";
import JobCard from "../components/ui/JobCard";
import useAuth from "../context/useAuth";
import getMatchPercentage from "../utils/getMatchPercentage ";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { user } = useAuth()

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


    const sortedJobs = [...jobs].sort((a, b) => {
        if (!user) return 0; // no sorting when logged out

        const aMatch = getMatchPercentage(a.requiredSkills, user.skills || []);
        const bMatch = getMatchPercentage(b.requiredSkills, user.skills || []);

        return bMatch - aMatch; // descending order
    });


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
                {sortedJobs.map(job => (
                    <JobCard key={job._id} job={job} />
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
