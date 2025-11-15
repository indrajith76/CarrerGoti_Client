import React from 'react';

const RelatedJobFields = () => {
  const jobSites = [
    {
      name: "BD Jobs",
      logo: "https://i.ibb.co/W44PSpN1/bdjobslogo.gif",
      url: "https://www.bdjobs.com",
    },
    {
      name: "Sombob",
      logo: "https://i.ibb.co/DPVwxMCB/download.jpg",
      url: "https://www.sombob.com",
    },
    {
      name: "All Jobs",
      logo: "https://i.ibb.co/5WjHQfb6/teletalk-7d23425e.png",
      url: "https://www.alljobs.com",
    },
    {
      name: "Internshala",
      logo: "https://i.ibb.co/TMMLGMrH/internshala-og-image.jpg",
      url: "https://internshala.com",
    },
    {
      name: "LinkedIn",
      logo: "https://i.ibb.co.com/YTLCxYFW/linkedin-logo-rectangle.png",
      url: "https://linkedin.com/jobs",
    },
    {
      name: "Kormo jobs",
      logo: "https://i.ibb.co.com/Ps3738JJ/google-kormo.jpg",
      url: "https://kormojobs.in/",
    },
  ];

  return (
    <div className="py-8 bg-white">
      <h2 className="text-2xl font-bold text-center mb-6 text-primary">
        Explore Jobs on Popular Platforms
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {jobSites.map((site) => (
          <a
            key={site.name}
            href={site.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition transform hover:scale-105 shadow-md hover:shadow-lg rounded-xl p-3 bg-gray-50"
          >
            <img
              src={site.logo}
              alt={site.name}
              className="h-16 w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default RelatedJobFields;
