import React from "react";

const Dashboard = () => {
  return (
    <div className="mt-10">
      <h1 className="text-4xl text-center font-medium">Mr. User,</h1>
      <h1 className="text-5xl text-center text-primary font-bold">
        Welcome To Dashboard!
      </h1>
      <h5 className="text-center my-10 text-2xl underline mt-10">Let's See Quick Updates</h5>
      <div className="grid grid-cols-2 gap-10 text-center mx-5">
        <div>
          <h4 className="text-xl bg-primary text-white">Total Job Post</h4>
          <h1 className="text-5xl font-bold text-primary bg-gray-100 py-2">13</h1>
        </div>
        <div>
          <h4 className="text-xl bg-primary text-white">Total Learning Resources</h4>
          <h1 className="text-5xl font-bold text-primary bg-gray-100 py-2">13</h1>
        </div>
        <div>
          <h4 className="text-xl bg-primary text-white">Total Connected Organization</h4>
          <h1 className="text-5xl font-bold text-primary bg-gray-100 py-2">13</h1>
        </div>
        <div>
          <h4 className="text-xl bg-primary text-white">Total Users</h4>
          <h1 className="text-5xl font-bold text-primary bg-gray-100 py-2">13</h1>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
