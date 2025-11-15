import React from "react";
import img1 from "../assets/img1.png";

const OurServices = () => {
  return (
    <section className="w-full py-8 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Text Section */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary">
            Empowering Youth with Career-Ready Opportunities
          </h2>

          <p className="text-gray-600 text-lg">
            CareerGoti empowers youth through career-ready opportunities and 
            essential skill development — supporting <strong>SDG Goal 8:</strong> 
            Decent Work & Economic Growth.
          </p>

          <p className="text-gray-600">
            As an online one-stop destination, CareerGoti helps students and freshers 
            discover suitable job openings, learning pathways, and skill-focused resources.
            It connects the dots between skills, education, and aspirations to inspire 
            sustainable employment and career growth.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src={img1}
            alt="Career growth"
            className="w-full max-w-md lg:max-w-lg rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
