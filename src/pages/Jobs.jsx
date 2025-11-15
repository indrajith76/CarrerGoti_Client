import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { FaSearch } from "react-icons/fa";
import JobCard from "../components/ui/JobCard";
import useAuth from "../context/useAuth";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { user } = useAuth();
    const [searchTrigger, setSearchTrigger] = useState(0);
    const limit = 8;

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            try {
                const params = { title, location, jobType, page, limit, userEmail: user?.email || "" };
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
            <title>jobs</title>
            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 mb-8 items-center bg-white p-5 rounded-2xl shadow-lg">
                <div className="flex items-center flex-1 bg-gray-50 rounded-xl px-4 py-2 shadow-sm hover:shadow-md transition">
                    <FaSearch className="text-gray-400 mr-3 text-lg" />
                    <input
                        type="text"
                        placeholder="Search by job title..."
                        className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="flex flex-1 gap-3 flex-wrap">
                    <input
                        type="text"
                        placeholder="Location"
                        className="flex-1 border rounded-xl px-4 py-2 shadow-sm focus:shadow-md transition outline-none text-gray-700 placeholder-gray-400"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <select
                        className="flex-1 border rounded-xl px-4 py-2 shadow-sm focus:shadow-md transition outline-none text-gray-700"
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
                        className="px-5 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 shadow-md hover:shadow-lg transition font-medium"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                    <button
                        className="px-5 py-2 border border-primary text-primary rounded-xl hover:bg-primary/10 shadow-md hover:shadow-lg transition font-medium"
                        onClick={handleReset}
                    >
                        Reset
                    </button>
                </div>
            </div>

            {/* Jobs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {jobs.map((job) => (
                    <JobCard key={job._id} job={job} />
                ))}
            </div>

            {/* Pagination */}
            {jobs.length > 0 && (
                <div className="flex justify-center items-center mt-8 gap-4">
                    <button
                        className="px-4 py-2 border rounded-lg hover:bg-primary/10 transition"
                        disabled={page <= 1}
                        onClick={() => setPage((prev) => prev - 1)}
                    >
                        Prev
                    </button>
                    <span className="text-gray-600">
                        Page {page} of {totalPages}
                    </span>
                    <button
                        className="px-4 py-2 border rounded-lg hover:bg-primary/10 transition"
                        disabled={page >= totalPages}
                        onClick={() => setPage((prev) => prev + 1)}
                    >
                        Next
                    </button>
                </div>
            )}

            {jobs.length === 0 && (
                <p className="text-center mt-10 text-gray-500">No jobs found.</p>
            )}
        </div>
    );
};

export default Jobs;
