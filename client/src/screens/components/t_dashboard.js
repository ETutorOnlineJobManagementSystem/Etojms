import React from 'react';
import { FaUser, FaRegFileAlt, FaCommentAlt, FaStar, FaChartLine, FaMoneyBillAlt } from "react-icons/fa";

const TutorDashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Tutor Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center">
          <FaUser className="text-4xl text-blue-500 mb-4" />
          <a href="/profile_edit" className="text-lg font-semibold text-center">Profile Information</a>
          {/* Add profile information components here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center">
          <FaRegFileAlt className="text-4xl text-blue-500 mb-4" />
          <a href="/lesson_mat" className="text-lg font-semibold text-center">Lesson Materials</a>
          {/* Add lesson materials components here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center">
          <FaCommentAlt className="text-4xl text-blue-500 mb-4" />
          <a href="/discuss" className="text-lg font-semibold text-center">Discussion Forum</a>
          {/* Add discussion forum components here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center">
          <FaStar className="text-4xl text-blue-500 mb-4" />
          <a href="/ratings" className="text-lg font-semibold text-center">Student Ratings</a>
          {/* Add student ratings components here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center">
          <FaChartLine className="text-4xl text-blue-500 mb-4" />
          <a href="metrics" className="text-lg font-semibold text-center">Performance Metrics</a>
          {/* Add performance metrics components here */}
        </div>
        <div className="bg-white p-6 rounded-lg shadow flex flex-col items-center justify-center">
          <FaMoneyBillAlt className="text-4xl text-blue-500 mb-4" />
          <a href="/earnings" className="text-lg font-semibold text-center">Payments & Earnings</a>
          {/* Add payments & earnings components here */}
        </div>
      </div>
    </div>
  );
};

export default TutorDashboard;