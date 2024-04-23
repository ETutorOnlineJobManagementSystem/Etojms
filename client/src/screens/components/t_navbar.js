import React, { useState } from 'react';
import { FaUserCircle, FaShoppingCart, FaBell, FaSearch, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FaGlobe, FaCoffee, FaPython, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const TutorNavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLoginClick = () => {
    // Redirect to login page
    window.location.href = '/login'; // Change '/login' to your actual login page URL
  };

  const handleNotificationsClick = () => {
    // Redirect to notifications page
    window.location.href = '/tnotifications'; // Change '/notifications' to your actual notifications page URL
  };

  const handleSessionsClick = () => {
    // Redirect to tutor sessions page
    window.location.href = '/tutor/sessions'; // Change '/tutor/sessions' to your actual tutor sessions page URL
  };

  const handlePaymentsClick = () => {
    // Redirect to payments page
    window.location.href = '/tutor/payments'; // Change '/tutor/payments' to your actual tutor payments page URL
  };

  return (
    <nav className="bg-blue-500 p-3 flex justify-between items-center text-lg">
      {/* Left section */}
      <div className="flex items-center">
        {/* Site Name */}
        <Link to="/"><h1 className="text-white font-bold text-4xl p-3">E-Tutor</h1></Link>
        {/* Sessions */}
        <a href="#" className="text-white font-bold ml-4" onClick={handleSessionsClick}>Sessions</a>
        {/* Payments */}
        <a href="#" className="text-white font-bold ml-4" onClick={handlePaymentsClick}>Payments</a>
      </div>
      {/* Search Bar */}
      <div className="flex items-center mx-4">
        <input type="text" placeholder="Search..." className="px-2 py-1 border border-gray-400 rounded-md focus:outline-none focus:border-blue-500" />
        <button className="text-white ml-2">
          <FaSearch />
        </button>
      </div>
      {/* Right section */}
      <div className="flex items-center">
        {/* Notifications */}
        <button className="text-white flex items-center mr-5" onClick={handleNotificationsClick}>
          <FaBell className="inline-block mr-1" />
        </button>
        {/* Cart */}
        <button className="text-white flex items-center mr-6">
          <FaShoppingCart className="inline-block mr-1" />
        </button>
        {/* Profile */}
        <div className="relative">
          <button onClick={handleLoginClick} className="text-white flex items-center">
            <FaUserCircle className="inline-block mr-1" />
            Login / Signup
          </button>
          {/* Dropdown menu */}
          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Edit Profile</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TutorNavBar;
