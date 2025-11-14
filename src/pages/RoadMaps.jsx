import React, { useState } from "react";
import RoadmapCard from "../components/RoadmapCard";

const RoadMaps = () => {
  const [targetPosition, setTargetPosition] = useState("");
  const [timeFrame, setTimeFrame] = useState("");
  const [description, setDescription] = useState("");
  const [keyword, setKeyword] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [selectedRoadmap, setSelectedRoadmap] = useState(null);

  const addKeyword = () => {
    if (keyword.trim() === "" || keywords.includes(keyword.trim())) return;
    setKeywords([...keywords, keyword.trim()]);
    setKeyword("");
  };

  const defaultRoadMaps = [
    {
      role: "Frontend Developer",
      skills: ["HTML", "CSS", "Basic JavaScript"],
      duration: "3 months",
      weeklyHours: "10h",
      overview:
        "Move from basic web skills to job-ready frontend development with React and portfolio projects.",
      roadmap: [
        {
          month: 1,
          title: "Core Frontend Fundamentals",
          summary:
            "Improve HTML, CSS, and JS basics while building small responsive projects.",
          tasks: [
            "Advanced HTML5 & CSS3 (Flexbox, Grid)",
            "Responsive design + media queries",
            "JavaScript fundamentals revision",
            "DOM manipulation practice",
            "Build 2 small projects (Portfolio, Landing Page)",
          ],
        },
        {
          month: 2,
          title: "Modern Frontend Development",
          summary:
            "Learn modern JavaScript features and begin React development with API usage.",
          tasks: [
            "ES6+ features (let/const, arrow functions, promises, fetch)",
            "API integration basics",
            "Git & GitHub workflow",
            "Start learning React basics",
            "Build 3 React mini-projects",
          ],
        },
        {
          month: 3,
          title: "Real-World Workflow",
          summary:
            "Build advanced React apps, learn UI libraries, deploy projects, and prepare for interviews.",
          tasks: [
            "React advanced (hooks, routing, state management)",
            "UI libraries (TailwindCSS/Bootstrap)",
            "Deploying projects with Vercel/Netlify",
            "Build 1 complete portfolio project",
            "Interview preparation (MCQ + portfolio review)",
          ],
        },
      ],
    },
    {
      role: "Data Analyst",
      skills: ["Excel", "Basic Python"],
      duration: "6 months",
      weeklyHours: "8h",
      overview:
        "Become a data analyst using Excel, Python, SQL, BI tools, and portfolio projects.",
      roadmap: [
        {
          month: 1,
          title: "Data Analysis Fundamentals",
          summary:
            "Master Excel and statistical basics for real-world data cleaning tasks.",
          tasks: [
            "Advanced Excel (pivot tables, VLOOKUP/XLOOKUP, functions)",
            "Basic statistics for data analysis",
            "Spreadsheet data cleaning exercises",
          ],
        },
        {
          month: 2,
          title: "Python for Data",
          summary:
            "Build strong Python-based data manipulation skills using Pandas and NumPy.",
          tasks: [
            "Learn NumPy & Pandas",
            "Data cleaning & wrangling",
            "Exploratory Data Analysis (EDA)",
          ],
        },
        {
          month: 3,
          title: "Data Visualization",
          summary: "Learn charts and dashboards using Python and Excel.",
          tasks: [
            "Matplotlib & Seaborn charts",
            "Excel dashboards",
            "Build 3 mini data visualization projects",
          ],
        },
        {
          month: 4,
          title: "SQL for Analysts",
          summary:
            "Learn SQL querying, joins, and window functions with hands-on practice.",
          tasks: [
            "Joins, subqueries, window functions",
            "Database schema understanding",
            "Practice SQL on HackerRank",
          ],
        },
        {
          month: 5,
          title: "Business Intelligence",
          summary:
            "Learn BI tools to create interactive dashboards and analysis reports.",
          tasks: [
            "Learn Power BI / Tableau",
            "Create dashboards & reports",
            "Build a complete BI project",
          ],
        },
        {
          month: 6,
          title: "Portfolio & Job Prep",
          summary:
            "Build portfolio projects, prepare GitHub profile, and practice interview tasks.",
          tasks: [
            "3 complete analysis projects",
            "GitHub + resume preparation",
            "Mock interviews + case studies",
          ],
        },
      ],
    },
    {
      role: "Flutter Developer",
      skills: ["Dart Basics", "OOP", "Simple Widgets"],
      duration: "3 months",
      weeklyHours: "12h",
      overview:
        "Intensive Flutter app development plan with real apps and Play Store deployment.",
      roadmap: [
        {
          month: 1,
          title: "Flutter Fundamentals",
          summary:
            "Strengthen Dart and core Flutter concepts while building UI clones.",
          tasks: [
            "Dart deep dive (async, streams, collections)",
            "Flutter widget tree + stateful widgets",
            "Navigation & routing",
            "Build 2 UI clone apps",
          ],
        },
        {
          month: 2,
          title: "State & Backend Integration",
          summary:
            "Work with state management tools and connect Flutter apps to APIs.",
          tasks: [
            "Provider / Riverpod / Bloc basics",
            "REST API integration",
            "Local database (Hive/SQLite)",
            "Build 1 functional CRUD app",
          ],
        },
        {
          month: 3,
          title: "Production-Level Flutter",
          summary:
            "Build production-ready apps with authentication and publish them.",
          tasks: [
            "Authentication (Firebase/Auth API)",
            "App optimization & testing",
            "Publish an app to Play Store",
            "Build final portfolio app",
          ],
        },
      ],
    },
    {
      role: "Backend Developer",
      skills: ["C Programming", "Basic SQL"],
      duration: "6 months",
      weeklyHours: "6h",
      overview:
        "Backend development roadmap from language basics to cloud deployment and portfolio building.",
      roadmap: [
        {
          month: 1,
          title: "Backend Fundamentals",
          summary:
            "Start with Python, Java, or Node.js and learn basic programming.",
          tasks: [
            "Learn Python/Node.js/Java (choose one)",
            "Syntax + functions + OOP basics",
            "Work on simple backend scripts",
          ],
        },
        {
          month: 2,
          title: "Backend Frameworks",
          summary: "Learn a backend framework and build basic APIs.",
          tasks: [
            "Learn Flask/Django (Python) or Express (Node)",
            "Routing, middleware, controllers",
            "Basic CRUD API",
          ],
        },
        {
          month: 3,
          title: "Databases",
          summary:
            "Work with relational databases and connect them to your backend.",
          tasks: [
            "SQL joins, constraints, indexing",
            "Learn PostgreSQL/MySQL",
            "Connect backend to database",
          ],
        },
        {
          month: 4,
          title: "Advanced Backend",
          summary:
            "Implement authentication and add robust server features like logging.",
          tasks: [
            "Authentication & authorization",
            "JWT, hashing, sessions",
            "Error handling & logging",
          ],
        },
        {
          month: 5,
          title: "Cloud & Deployment",
          summary:
            "Deploy backend services using Linux servers and cloud platforms.",
          tasks: [
            "Linux deployment basics",
            "Use AWS/Render/Railway",
            "Build deployable backend service",
          ],
        },
        {
          month: 6,
          title: "Portfolio & Interview Prep",
          summary:
            "Build production-ready backend projects and prepare for interviews.",
          tasks: [
            "Build 2–3 backend projects",
            "Design REST API documentation",
            "Practice DSA basics for interviews",
          ],
        },
      ],
    },
    {
      role: "Cybersecurity Analyst",
      skills: ["Linux Basics", "Networking Fundamentals"],
      duration: "3 months",
      weeklyHours: "5h",
      overview:
        "Start a cybersecurity career with labs, tools, and certification preparation.",
      roadmap: [
        {
          month: 1,
          title: "Cybersecurity Fundamentals",
          summary:
            "Learn core security concepts and build strong Linux and networking basics.",
          tasks: [
            "CIA triad, security concepts",
            "Linux command-line mastery",
            "Deep dive into networking (TCP/IP, OSI layers)",
            "Setup a virtual lab (VMware/VirtualBox)",
          ],
        },
        {
          month: 2,
          title: "Tools & Threat Understanding",
          summary:
            "Work with cybersecurity tools and practice scanning, monitoring, and analysis.",
          tasks: [
            "Learn Nmap, Wireshark, Burp Suite",
            "Log analysis fundamentals",
            "Security monitoring basics (SIEM)",
            "Beginner-level penetration testing",
          ],
        },
        {
          month: 3,
          title: "Practical Skills & Cert Prep",
          summary:
            "Build hands-on skills with TryHackMe and prepare for entry-level roles.",
          tasks: [
            "TryHackMe (Beginner → Intermediate paths)",
            "Incident response basics",
            "Build cybersecurity portfolio",
            "Prepare for Security+ / Jr. PenTester roles",
          ],
        },
      ],
    },
  ];

  const removeKeyword = (index) => {
    setKeywords(keywords.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const roadmapData = {
      targetPosition,
      timeFrame,
      description,
      keywords,
    };
    console.log("Generated Roadmap Data:", roadmapData);
  };

  return (
    <div className="mx-auto p-6 md:py-0 bg-base-100 rounded-xl mt-5 md:mt-0">
      <h2 className="text-4xl font-medium text-primary mb-5 text-center md:hidden">
        Road Maps
      </h2>

      <div className="md:flex gap-5 w-full">
        {/* sidebar & from */}
        <form
          onSubmit={handleSubmit}
          className="md:sticky top-0 md:h-screen space-y-5 md:w-[30%] lg:w-[25%] p-5 md:border-r border-gray-300"
        >
          <h4 className="text-xl text-primary font-bold">Generate Road Maps</h4>
          {/* Select Inputs */}
          <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor="targetPosition"
                className="text-primary font-semibold mb-1"
              >
                Target Position
              </label>
              <select
                id="targetPosition"
                value={targetPosition}
                onChange={(e) => setTargetPosition(e.target.value)}
                className="select select-bordered select-primary w-full shadow hover:shadow-lg transition"
              >
                <option value="">Select Position</option>
                <option value="Front End Developer">Front End Developer</option>
                <option value="Back End Developer">Back End Developer</option>
                <option value="Full Stack Developer">
                  Full Stack Developer
                </option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="timeFrame"
                className="text-primary font-semibold mb-1"
              >
                Time Frame
              </label>
              <select
                id="timeFrame"
                value={timeFrame}
                onChange={(e) => setTimeFrame(e.target.value)}
                className="select select-bordered select-primary w-full shadow hover:shadow-lg transition"
              >
                <option value="">Select Time Frame</option>
                <option value="1 Month">1 Month</option>
                <option value="3 Months">3 Months</option>
                <option value="6 Months">6 Months</option>
                <option value="1 Year">1 Year</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="description"
                className="text-primary font-semibold mb-1"
              >
                Description
              </label>
              <select
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="select select-bordered select-primary w-full shadow hover:shadow-lg transition"
              >
                <option value="">Select Description</option>
                <option value="Skill Development">Skill Development</option>
                <option value="Project Based Learning">
                  Project Based Learning
                </option>
                <option value="Certification">Certification</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-primary font-semibold mb-1">Keywords</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Add Keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="input input-bordered input-primary w-full shadow hover:shadow-md transition"
              />
              <button
                type="button"
                onClick={addKeyword}
                className="btn btn-primary hover:btn-secondary shadow-md transition"
              >
                Add
              </button>
            </div>
            {keywords.length > 0 && (
              <div className="flex flex-wrap mt-2 gap-2">
                {keywords.map((k, i) => (
                  <span
                    key={i}
                    className="badge badge-primary cursor-pointer hover:badge-secondary"
                    onClick={() => removeKeyword(i)}
                  >
                    {k} ✕
                  </span>
                ))}
              </div>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full hover:btn-secondary shadow-lg transition"
          >
            Generate Roadmap
          </button>
        </form>

        <div className="md:w-[70%] mx-auto mb-10">
          <h2 className="text-4xl font-medium text-primary mb-5 text-center hidden md:block mt-5">
            Road Maps
          </h2>
          <div className="grid grid-cols-1 gap-5">
            {defaultRoadMaps.map((roadmap) => (
              <RoadmapCard 
              data={roadmap}
              setSelectedRoadmap={setSelectedRoadmap}
            />
            
            ))}
          </div>
        </div>
      </div>

      {/* Details Modal */}
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box max-h-[90vh] overflow-y-auto border border-primary/20 shadow-xl rounded-xl">
    
    {/* Close Button */}
    <form method="dialog">
      <button
        onClick={() => setSelectedRoadmap(null)}
        className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 hover:bg-primary hover:text-white transition"
      >
        ✕
      </button>
    </form>

    {selectedRoadmap ? (
      <>
        {/* Title */}
        <h3 className="font-bold text-2xl text-primary mb-2">
          {selectedRoadmap.role}
        </h3>

        {/* Duration Info */}
        <p className="text-sm text-gray-500">
          <span className="text-primary font-semibold">Duration:</span>{" "}
          {selectedRoadmap.duration} 
          {"  |  "}
          <span className="text-primary font-semibold">Weekly:</span>{" "}
          {selectedRoadmap.weeklyHours}
        </p>

        {/* Overview */}
        <p className="mt-4 leading-relaxed text-gray-700">
          {selectedRoadmap.overview}
        </p>

        {/* Skills */}
        <div className="mt-6">
          <h4 className="font-semibold text-primary text-lg">
            Required Skills
          </h4>

          <div className="flex flex-wrap gap-2 mt-2">
            {selectedRoadmap.skills.map((s, i) => (
              <span
                key={i}
                className="badge badge-sm badge-primary badge-outline p-3 rounded-lg text-primary border-primary"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Roadmap */}
        <div className="mt-8">
          <h4 className="font-semibold text-primary text-lg mb-3">
            Full Roadmap
          </h4>

          {selectedRoadmap.roadmap.map((month, index) => (
            <div
              key={index}
              className="border border-primary/30 p-4 rounded-lg mb-4 shadow-sm bg-base-100"
            >
              <h5 className="font-bold text-primary">
                Month {month.month}: {month.title}
              </h5>

              <p className="text-gray-600 mt-1 text-sm">{month.summary}</p>

              <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
                {month.tasks.map((task, tIndex) => (
                  <li key={tIndex}>{task}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    ) : (
      <p className="text-center mt-10 text-primary">Loading...</p>
    )}
  </div>
</dialog>

    </div>
  );
};

export default RoadMaps;
