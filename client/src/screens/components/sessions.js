import React from 'react';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const SessionsPage = () => {
  // Define session data
  const sessions = [
    {
      date: "March 25, 2024",
      time: "10:00 AM - 12:00 PM",
      title: "Java Programming Basics",
      description: "Learn the fundamentals of Java programming."
    },
    {
      date: "March 28, 2024",
      time: "2:00 PM - 4:00 PM",
      title: "Python Basics",
      description: "Introduction to Python programming language."
    },
    {
      date: "March 28, 2024",
      time: "5:00 PM - 7:00 PM",
      title: "Web Basics",
      description: "Introduction to Web FullStack."
    }
    // Add more session objects as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Your Sessions</h2>
        <div className="max-w-3xl mx-auto">
          {/* Map over sessions array to render session details */}
          {sessions.map((session, index) => (
            <div key={index} className="session-box relative">
              <div className="bg-white shadow-md rounded-lg overflow-hidden mb-4 transition-transform duration-300 transform hover:scale-105">
                <div className="border-t border-gray-200 px-6 py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <FaCalendarAlt className="text-blue-500 mr-2" />
                      <span className="text-gray-700">Date: </span>
                      <span className="font-semibold ml-1">{session.date}</span>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="text-blue-500 mr-2" />
                      <span className="text-gray-700">Time: </span>
                      <span className="font-semibold ml-1">{session.time}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{session.title}</h3>
                    <p className="text-gray-700">{session.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SessionsPage;
