import { TbTrendingUp } from 'react-icons/tb';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoBriefcaseOutline } from 'react-icons/io5';
import { FaChevronRight } from 'react-icons/fa';

const TrendJobs = () => {
    const categories = [
        { name: 'Top Trend', active: true },
        { name: 'Remote', active: false },
        { name: 'Part-time', active: false },
        { name: 'On-Site', active: false },
        { name: 'Engineering', active: false }
    ];

    const jobs = [
        {
            title: 'Ecommerce Online Listing',
            company: '603 The CoWorking Space India',
            location: 'Mumbai, Bandra',
            salary: '₹ 2,40,000 - 2,60,000 /year',
            logo: null,
        },
        {
            title: 'Field Sales Executive',
            company: 'Freecharge Payments Technology Private Limited',
            location: 'Pune, Amravati, Nagpur',
            salary: '₹ 2,61,000 - 3,60,000 /year',
            logo: null,
        },
        {
            title: 'Fundraising Trainee - Field Sales (Chennai)',
            company: 'WWF-India',
            location: 'Chennai',
            salary: '₹ 3,50,000 - 5,00,000 /year',
            logo: null,
        },
        {
            title: 'Virtual Car Advisor',
            company: 'Cars24 Services Private Limited',
            location: 'Pune',
            salary: '₹ 2,90,000 - 6,00,000 /year',
            logo: null,
        },
    ];

    return (
        <div className="min-h-screen  from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-12">
                    What are you looking for today?
                </h1>

                <div className="mb-8">
                    <h2 className="text-2xl md:text-2xl font-bold text-gray-800 mb-6">
                        Fresher Jobs
                    </h2>

                    <div className="flex flex-wrap gap-3 mb-8">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className={`px-3 py-2 rounded-full font-medium transition-all duration-200 cursor-pointer text-sm ${category.active
                                    ? 'bg-primary text-white shadow-md hover:bg-blue-600'
                                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200'
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 flex flex-col"
                        >
                            <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
                                <TbTrendingUp className="text-lg" />
                                <span>Actively hiring</span>
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-semibold text-gray-800 leading-snug pr-2">
                                        {job.title}
                                    </h3>
                                    {job.logo && (
                                        <img
                                            src={job.logo}
                                            alt="Company logo"
                                            className="w-12 h-12 object-contain "
                                        />
                                    )}
                                </div>

                                <p className="text-sm text-gray-600 mb-4">{job.company}</p>

                                <div className="space-y-2 mb-6">
                                    <div className="flex items-start gap-2 text-gray-600 text-sm">
                                        <HiOutlineLocationMarker className="text-lg  mt-0.5" />
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="flex items-start gap-2 text-gray-600 text-sm">
                                        <IoBriefcaseOutline className="text-lg mt-0.5" />
                                        <span>{job.salary}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <span className="text-sm text-gray-500 font-medium">Job</span>
                                <button className="flex items-center gap-1 text-primary font-semibold text-sm hover:text-blue-600 transition-colors">
                                    View details
                                    <FaChevronRight className="text-xs" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendJobs;