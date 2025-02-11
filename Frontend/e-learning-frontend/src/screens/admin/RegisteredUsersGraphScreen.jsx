import React from 'react';
import Sidebar from '../../components/admin/Sidebar'; // Import Sidebar component
import RegisteredUsersLineGraph from '../../components/admin/RegisteredUsersLineGraph'; // Import the graph component

const RegisteredUsersGraphScreen = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar user={{ name: "Admin", profilePicture: "" }} /> {/* Sidebar with user info */}

      {/* Content Area */}
      <div className="flex-1 p-8 bg-[#f4eeff] min-h-screen overflow-y-auto ml-[250px]">
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-[#424874] mb-6">Registered Users Growth</h2>

        {/* Graph Container */}
        <div className="w-full max-w-4xl mx-auto"> {/* Center the graph container */}
          <RegisteredUsersLineGraph />
        </div>
      </div>
    </div>
  );
};

export default RegisteredUsersGraphScreen;
