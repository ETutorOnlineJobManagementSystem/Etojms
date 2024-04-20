import React, { useState } from 'react';
import { FaUserCircle, FaShoppingCart, FaBell, FaSearch } from 'react-icons/fa';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLoginClick = () => {
    // Redirect to login page
    window.location.href = '/login'; // Change '/login' to your actual login page URL
  };
  const handleCartClick = () => {
    // Redirect to login page
    window.location.href = '/cart'; // Change '/login' to your actual login page URL
  };
  const handleNotifiClick = () => {
    // Redirect to login page
    window.location.href = '/notifications'; // Change '/login' to your actual login page URL
  };
  const handleSessClick = () => {
    // Redirect to login page
    window.location.href = '/sessions'; // Change '/login' to your actual login page URL
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <nav className="bg-blue-500 p-3 flex justify-between items-center text-lg">
      {/* Left section */}
      <div className="flex items-center">
        {/* Site Name */}
        <h1 className="text-white font-bold text-4xl p-3">E-Tutor</h1>
        {/* Courses */}
        <a href="#" className="text-white font-bold">Courses</a>
        {/* Categories with dropdown */}
        <div className="relative">
          <button onClick={toggleCategories} className="text-white font-bold ml-4">Categories</button>
          {isCategoriesOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
              <a href="#" className="block px-4 py-2 font-bold text-gray-800 hover:bg-gray-200">Web</a>
              <a href="#" className="block px-4 py-2 font-bold text-gray-800 hover:bg-gray-200">Java</a>
              <a href="#" className="block px-4 py-2 font-bold text-gray-800 hover:bg-gray-200">Python</a>
              <a href="#" className="block px-4 py-2 font-bold text-gray-800 hover:bg-gray-200">Testing</a>
            </div>
          )}
        </div>
        {/* Sessions */}
        <a href="#" className="text-white font-bold ml-4" onClick={handleSessClick}>Sessions</a>
        <a href="#" className="text-white font-bold ml-4">My Learning</a>
        <a href="#" className="text-white font-bold ml-4">Payments</a>
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
        <button className="text-white flex items-center mr-5" onClick={handleNotifiClick}>
          <FaBell className="inline-block mr-1" />
        </button>
        {/* Cart */}
        <button className="text-white flex items-center mr-6" onClick={handleCartClick}>
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
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Edit</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Settings</a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
