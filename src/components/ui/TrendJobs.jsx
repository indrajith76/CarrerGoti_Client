import { useState, useEffect } from "react";
import axios from "../../api/axios";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";

const TrendJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("Top Trend");

    const categories = ["Top Trend", "Remote", "Contract", "On-Site", "Full-Time"];

    useEffect(() => {
        const fetchJobs = async () => {
            setLoading(true);
            try {
                const res = await axios.get("/api/jobs");
                const sorted = res.data.data.sort(
                    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                );
                setJobs(sorted);
                setFilteredJobs(sorted.slice(0, 4));
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);

        if (category === "Top Trend") {
            setFilteredJobs(jobs.slice(0, 4));
        } else {
            const filtered = jobs.filter(
                (job) =>
                    job.jobType?.toLowerCase() === category.toLowerCase()
            );
            setFilteredJobs(filtered.slice(0, 4));
        }
    };



    return (
        <div className="min-h-screen from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-5">
                    What are you looking for today?
                </h1>

                <div className="mb-8">
                    <div className="flex flex-wrap gap-3 mb-8">
                        {categories.map((category) => (
                            <button
                                disabled={loading}
                                key={category}
                                onClick={() => handleCategoryChange(category)}
                                className={`px-3 py-2 rounded-full font-medium transition-all duration-200 text-sm ${activeCategory === category
                                    ? "bg-primary text-white shadow-md hover:bg-primary/90"
                                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {loading ? <p className="text-center text-primary min-h-[50px] md:min-h-[250px] flex justify-center items-center"><span>Loading jobs...</span></p>
                    :
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 min-h-[50px] md:min-h-[250px]">
                        {filteredJobs.length > 0 ? (
                            filteredJobs.map((job) => <JobCard key={job._id} job={job} />)
                        ) : (
                            <p className="col-span-full text-center text-gray-500 min-h-[50px] md:min-h-[250px] flex justify-center items-center">
                                <span> No jobs found for "{activeCategory}".</span>
                            </p>
                        )}
                    </div>}

                <div className="flex justify-center items-center my-6">
                    <Link
                        to="/jobs"
                        className="px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm bg-primary text-white shadow-md"
                    >
                        See All
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default TrendJobs;
