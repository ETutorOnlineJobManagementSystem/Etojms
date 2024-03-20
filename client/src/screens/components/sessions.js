import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const SessionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Sessions</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaCalendarAlt className="text-blue-500 mr-2" />
                <span className="text-gray-700">Date: </span>
                <span className="font-semibold ml-1">March 25, 2024</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-blue-500 mr-2" />
                <span className="text-gray-700">Time: </span>
                <span className="font-semibold ml-1">10:00 AM - 12:00 PM</span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Java Programming Basics</h3>
              <p className="text-gray-700">Learn the fundamentals of Java programming.</p>
            </div>
          </div>
          <div className="border-t border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <FaCalendarAlt className="text-blue-500 mr-2" />
                <span className="text-gray-700">Date: </span>
                <span className="font-semibold ml-1">March 28, 2024</span>
              </div>
              <div className="flex items-center">
                <FaClock className="text-blue-500 mr-2" />
                <span className="text-gray-700">Time: </span>
                <span className="font-semibold ml-1">2:00 PM - 4:00 PM</span>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Python Basics</h3>
              <p className="text-gray-700">Introduction to Python programming language.</p>
            </div>
          </div>
          {/* Add more sessions as needed */}
        </div>
      </div>
    </div>
  );
};

export default SessionsPage;
