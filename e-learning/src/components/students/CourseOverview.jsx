

import React from "react";
import Instructor from './../instructor/Instructor';
const CourseOverview = () => {
    return (
      <div className="max-w-4xl mx-auto p-6">
     {/* Course Header */}
     <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">
                Learn web design in 1 hour with 25+ simple-to-use rules and
                guidelines — tons of amazing web design resources included!
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-yellow-500">4.6 ★</span>
                <span className="text-gray-600">(42,420 ratings)</span>
                <span className="text-gray-600">782,297 students</span>
                <span className="text-gray-600">2.5 hours total</span>
              </div>

              {/* Course Details */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-gray-400 rounded-sm" />
                  <span>Last updated November 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-gray-400 rounded-sm" />
                  <span>English</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border border-gray-400 rounded-sm" />
                  <span>English [Auto], Bulgarian [Auto], 19 more</span>
                </div>
              </div>
            </div>
            {/* Schedule Section */}
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4">Schedule learning time</h2>
              <p className="mb-4">
                Learning a little each day adds up. Research shows that students
                who make learning a habit are more likely to reach their goals.
                <br />
                Set time aside to learn and get reminders using your learning
                scheduler.
              </p>
              <div className="flex gap-4">
                <button className="text-blue-600 font-semibold">
                  Get started
                </button>
                <button className="text-gray-600">Dismiss</button>
              </div>
            </div>
            {/* Stats Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">By the numbers</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Skill level:</span>
                  <span className="font-semibold">All Levels</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Lectures:</span>
                  <span className="font-semibold">19</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Students:</span>
                  <span className="font-semibold">782,297</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Video:</span>
                  <span className="font-semibold">2.5 total hours</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Languages:</span>
                  <span className="font-semibold">English</span>
                </div>
                <div className="flex justify-between p-3 bg-gray-50 rounded">
                  <span>Captions:</span>
                  <span className="font-semibold">Yes</span>
                </div>
              </div>
            </div>
            {/* Features */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Features</h2>
              <p>Available on IOS and Android</p>
            </div>
            {/* Description */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Description</h2>
              <p>
                IMPORTANT NOTE: The material of this course is also covered in
                my other
              </p>
            </div>
        <Instructor />
      </div>
    );
  };
  
  export default CourseOverview;