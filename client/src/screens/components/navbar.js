import React, { useState,useEffect } from 'react';
import { FaUserCircle, FaShoppingCart, FaBell, FaSearch, FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FaGlobe, FaCoffee, FaPython, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

const NavBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [user, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      const token = Cookies.get('token');

      if (!token) return;

      try {
        const response = await axios.get('http://localhost:5000/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLoginClick = () => {
    // Redirect to login page
    window.location.href = '/login'; // Change '/login' to your actual login page URL
  };
  const handlePaymentClick = () => {
    // Redirect to login page
    window.location.href = '/payment'; // Change '/login' to your actual login page URL
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
  const handleLogoutClick = () => {
    Cookies.remove('token');
    setUserData(null);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <nav className="bg-blue-500 p-3 flex justify-between items-center text-lg">
      {/* Left section */}
      <div className="flex items-center">
        {/* Site Name */}
        <Link to="/start"><h1 className="text-white font-bold text-4xl p-3">E-Tutor</h1></Link>
        {/* Courses */}
        <a href="#" className="text-white ml-4">Courses</a>
        {/* Categories with dropdown */}
        <div className="relative">
          <button onClick={toggleCategories} className="text-white ml-4 flex items-center">
            Categories {isCategoriesOpen ? <FaAngleUp className="ml-1" /> : <FaAngleDown className="ml-1" />}
          </button>
          {isCategoriesOpen && (
            <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg">
              <a href="/web" className="block flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200">
                <FaGlobe className="mr-2" />
                <span>Web</span>
              </a>
              <a href="/java" className="block flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200">
                <FaCoffee className="mr-2" />
                <span>Java</span>
              </a>
              <a href="/python" className="block flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200">
                <FaPython className="mr-2" />
                <span>Python</span>
              </a>
              <a href="/testing" className="block flex items-center px-4 py-2 text-gray-800 hover:bg-gray-200">
                <FaCheckCircle className="mr-2" />
                <span>Testing</span>
              </a>
            </div>
          )}
        </div>
        {/* Sessions */}
        <a href="#" className="text-white font-bold ml-4" onClick={handleSessClick}>Sessions</a>
        <Link to="/mylearning"><a className="text-white font-bold ml-4">My Learning</a></Link>
        <a href="#" className="text-white font-bold ml-4" onClick={handlePaymentClick}>Payments</a>
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
           {/* Logged-in user section */}
           <div className="text-white">
           {user && <p>Welcome, {user.firstname}</p>}
           </div>
     
        </div>
      </div>
    </nav>
  );
};

export default NavBar;