import React from 'react';
import { FaBell } from 'react-icons/fa';

const NotificationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-md rounded-md p-8 w-80">
        <div className="flex items-center mb-6">
          <FaBell className="text-blue-500 mr-2" />
          <h2 className="text-xl font-semibold">Notifications</h2>
        </div>
        <ul>
          <li className="mb-4">
            <span className="text-green-600 mr-2">
              <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M9.293 12.707a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L10 10.586 6.707 7.293a1 1 0 1 0-1.414 1.414l4 4z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="font-semibold">New Assignment:</span> You have a new assignment to review.
          </li>
          <li className="mb-4">
            <span className="text-blue-600 mr-2">
              <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a6 6 0 0 1-6-6V6a4 4 0 1 1 8 0v2a6 6 0 0 1-6 6zm7-2v2h-1v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-2H3v-2a3 3 0 0 1 3-3h4a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3zm-1 0H5a1 1 0 0 0-1 1v1h14v-1a1 1 0 0 0-1-1z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="font-semibold">Reminder:</span> Your session with Athithyan is scheduled for tomorrow.
          </li>
          <li className="mb-4">
            <span className="text-yellow-600 mr-2">
              <svg className="w-4 h-4 inline" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 3a1 1 0 0 0-1 1v1.586a1 1 0 0 0 .293.707l5.414 5.414a1 1 0 0 0 1.414-1.414L11.414 5H13a1 1 0 1 0 0-2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V6.414l3.293 3.293a1 1 0 1 0 1.414-1.414L11 4.586V4a1 1 0 0 0-1-1z" clipRule="evenodd" />
                <path fillRule="evenodd" d="M3 10a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zm1 1h12v1H4v-1zm0 2h12v1H4v-1zm0 2h12v1H4v-1z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="font-semibold">Payment Received:</span> Your payment for last month has been processed.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NotificationPage;
