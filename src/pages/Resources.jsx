import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const Resources = () => {
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchResources = async () => {
            setLoading(true);
            try {
                const res = await axios.get("/api/resource");
                setResources(res.data.data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchResources();
    }, []);

    if (loading) {
        return <div className="text-center mt-10 text-lg">Loading...</div>;
    }

    return (
        <div className="p-5 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource) => (
                    <div
                        key={resource._id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        style={{ height: '480px' }}
                    >
                        <img
                            src={resource.image}
                            alt={resource.title}
                            className="w-full h-50 object-cover"
                        />
                        <div className="p-3 flex-1 flex flex-col justify-between">
                            <div className="overflow-hidden">
                                <h2 className="text-lg font-semibold mb-1 truncate">{resource.title}</h2>
                                <p className="text-gray-600 text-sm mb-0.5 truncate">
                                    <span className="font-semibold">Platform:</span> {resource.platform}
                                </p>
                                <p className="text-gray-600 text-sm mb-0.5 truncate">
                                    <span className="font-semibold">Cost:</span> {resource.cost}
                                </p>
                                <p className="text-gray-600 text-sm mb-1 truncate">
                                    <span className="font-semibold">Created By:</span> {resource.createdBy.adminEmail}
                                </p>
                                <div className="flex flex-wrap gap-1 mt-1 overflow-auto ">
                                    {resource.relatedSkills.map((skill, index) => (
                                        <span
                                            key={index}
                                            className="text-xs text-primary border border-primary px-2 py-0.5 rounded-full whitespace-nowrap"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <a
                                href={resource.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-2 bg-primary text-white px-3 py-1.5 rounded hover:bg-primary/80 transition-colors duration-200 text-center text-sm"
                            >
                                Visit Resource
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
