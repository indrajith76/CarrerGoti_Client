import React from "react";
import { BsStar } from "react-icons/bs";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Aisha Rahman",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      feedback:
        "CareerGoti helped me build my skills and land my first internship. The roadmap feature is extremely helpful for beginners!",
    },
    {
      name: "Farhan Ahmed",
      role: "Junior Data Analyst",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      feedback:
        "Loved the experience! The job recommendations were highly relevant, and the resume builder saved so much time.",
    },
    {
      name: "Nusrat Jahan",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      feedback:
        "This platform truly empowers students. The mentorship and career guidance helped me break into the tech industry.",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          What Our Users Says
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Students, freshers, and young professionals share their experience
          using CareerGoti.
        </p>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-2xl transition hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-indigo-200"
                />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-3 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <BsStar key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-700 mb-4">{item.feedback}</p>

              <h4 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h4>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
