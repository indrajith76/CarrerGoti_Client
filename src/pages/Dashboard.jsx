import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import axios from "../api/axios";
import useAuth from "../context/useAuth";

const Dashboard = () => {
  const [statistics, setStatistics] = useState({});
  const { user } = useAuth();

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const res = await axios.get("/api/stat");
        setStatistics(res.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStatistics();
  }, []);

  const stats = [
    {
      label: "Total Job Posts",
      value: statistics?.jobs || 0,
    },
    {
      label: "Total Learning Resources",
      value: statistics?.resource || 0,
    },
    {
      label: "Total Connected Organizations",
      value: statistics?.organizationConnect || 0,
    },
  ];

  if (user?.role === "admin") {
    stats.push({
      label: "Total Users",
      value: statistics?.users || 0,
    });
  }
  

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <title>dashboard</title>
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-medium">Hello, {user?.name} 👋</h1>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mt-2">
          Welcome to Your Dashboard
        </h2>
        <p className="mt-4 text-lg text-gray-600 underline">Quick Stats Overview</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all"
          >
            <h3 className="text-lg font-semibold text-primary mb-3 text-center">
              {stat.label}
            </h3>
            <p className="text-4xl md:text-5xl font-bold text-gray-800">
              <CountUp end={stat.value} duration={2} />
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-gray-500">
        Keep exploring to find more opportunities and resources!
      </div>
    </div>
  );
};

export default Dashboard;
