
import { FaMapMarkerAlt, FaBriefcase, FaUsers, FaBuilding } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { Link } from "react-router-dom";
import useAuth from "../../context/useAuth";
import getMatchPercentage from "../../utils/getMatchPercentage ";
const JobCard = ({ job }) => {
    const { user } = useAuth()
    const match = user
        ? getMatchPercentage(job.requiredSkills, user.skills || [])
        : null;

    return (
        <Link
            to={`/jobs/${job._id}`}
            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 flex flex-col relative"
        >
            {user && <div className="absolute right-0 -top-2 badge badge-sm bg-[#facc15] ">Match {match}%</div>}
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
    );
};

export default JobCard;