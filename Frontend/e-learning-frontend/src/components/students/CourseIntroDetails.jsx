import React from "react";

const CourseIntroDetails = () => {
  return (
    <div className="bg-[#2a2e4e] text-[#f4eeff] p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold">
        The Complete Full-Stack Web Development Bootcamp
      </h1>
      <p className="mt-2 text-gray-400">
        Become a Full-Stack Developer with just ONE course. Learn HTML, CSS, JavaScript, Node, React, PostgreSQL, Web3, and DApps.
      </p>
      <div className="mt-4 flex items-center space-x-2">
        <span className="bg-green-500 text-white px-3 py-1 text-sm font-semibold rounded-full">
          Bestseller
        </span>
        <span className="text-yellow-400 font-semibold">
          4.7 ⭐ (423,089 ratings)
        </span>
      </div>
      <p className="text-gray-400 mt-2">1,409,247 students enrolled</p>
      <p className="mt-4 text-sm">
        Created by <span className="text-blue-400 font-semibold">Dr. Angela Yu</span>
      </p>
      <p className="mt-2 text-gray-400 text-sm">
        Last updated 01/2025 • English, Arabic (Auto), 20 more
      </p>

      {/* What you'll learn */}
      <div className="mt-6 bg-[#424874] p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-3">What you'll learn</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Build 16 web development projects for your portfolio.</li>
          <li>Learn the latest technologies including JavaScript, React, Node, and Web3.</li>
          <li>Build fully-fledged websites and apps.</li>
          <li>Master backend development with Node.js.</li>
          <li>Work as a freelance web developer.</li>
        </ul>
      </div>
    </div>
  );
};

export default CourseIntroDetails;
