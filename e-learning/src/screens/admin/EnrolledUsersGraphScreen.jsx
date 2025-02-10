import React, { useState } from 'react';
import Sidebar from '../../components/admin/Sidebar'; 
import EnrolledUsersBarGraph from './../../components/admin/EnrolledUsersBarGraph';

const EnrolledUsersGraphScreen = () => {
  const [collapsed, setCollapsed] = useState(false); // State to manage sidebar collapse

  return (
    <div className="flex h-screen">
      {/* Sidebar with collapse state passed down */}
      <Sidebar user={{ name: "Admin", profilePicture: "" }} setCollapsed={setCollapsed} />

      {/* Content Area */}
      <div
        className={`flex-1 p-8 bg-[#f4eeff] min-h-screen overflow-y-auto transition-all duration-300 ${collapsed ? "ml-16" : "ml-[250px]"}`}
      >
        {/* Title Section */}
        <h2 className="text-3xl font-bold text-[#424874] mb-6">Enrolled Users in Courses</h2>

        {/* Graph Container */}
        <div className="w-full max-w-4xl mx-auto">
          {/* Enrolled Users Bar Graph */}
          <EnrolledUsersBarGraph />
        </div>
      </div>
    </div>
  );
};

export default EnrolledUsersGraphScreen;
