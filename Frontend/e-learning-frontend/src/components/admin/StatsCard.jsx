import React from "react";

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className="bg-[#424874] text-[#f4eeff] p-6 rounded-2xl shadow-lg flex items-center gap-4 w-64">
      <div className="text-4xl text-[#a6b1e1]">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;
