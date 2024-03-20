import React, { useState } from 'react';
import log from '../../images/log.jpg'; // Replace with the path to your background image
import { FaGraduationCap } from "react-icons/fa";

const Alert = ({ message, type }) => {
  const alertClasses = {
    error: "bg-red-100 border border-red-400 text-red-700",
    success: "bg-green-100 border border-green-400 text-green-700"
  };

  return (
    <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded text-xl shadow-md ${alertClasses[type]}`}>
      <strong className="font-semibold">{type === 'error' ? 'Error: ' : 'Success: '}</strong>
      <span className="block sm:inline">{message}</span>
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email && !password) {
      setAlertMessage('Please enter all details');
      setAlertType('error');
    } else if (!email) {
        setAlertMessage('Please enter email to continue');
        setAlertType('error');
    } else if (!isValidEmail(email)) {
      setAlertMessage('Please enter a valid email');
      setAlertType('error');
    } else if (!password) {
        setAlertMessage('Please enter a password to continue');
        setAlertType('error');
    } else if (!isValidPassword(password)) {
      setAlertMessage('Please enter a valid password (minimum 6 characters)');
      setAlertType('error');
    } else {
      // Handle successful login
      setAlertMessage('Login successful');
      setAlertType('success');

      // Clear form fields
      setEmail('');
      setPassword('');

      // You can redirect or perform any other actions after successful login
    }
  }

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const isValidPassword = (password) => {
    return password.length >= 6;
  }

  const handlePasswordClick = () => {
    // Redirect to password reset page
    window.location.href = '/forgetpassword'; // Change '/forgetpassword' to your actual password reset page URL
  };

  const handleRegisterClick = () => {
    // Redirect to registration page
    window.location.href = '/register'; // Change '/register' to your actual registration page URL
  };

  return (
    <>
      <div style={{ backgroundImage: `url(${log})`, height: '100vh', width: '100vw', backgroundRepeat: 'no-repeat' }} className="flex justify-center items-center bg-cover">
        <div className="bg-white p-10 rounded-lg shadow-2xl">
          <div className='flex items-center'>
            <div>
                <FaGraduationCap className='text-xl'/>
            </div>
            <div className='ml-1'>
              <h1 className="text-sm">VLEARN</h1>
            </div>
          </div>
          {alertMessage && <Alert message={alertMessage} type={alertType} />}
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-8">Login</h1>
            <label className="block mb-3">
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </label>
            <label className="block mb-3">
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </label>
            <div className='flex'>
                <input type="checkbox" className="mr-1" />
                <label className="text-sm flex items-center">
                  Remember me
                </label>
              </div>

              <div className='mt-3'>
                <div className='flex items-center justify-between'>
                  <span className="text-sm text-blue-600 hover:underline cursor-pointer" onClick={handlePasswordClick}>
                    Forgot Password?
                  </span>
                  <span className="text-sm text-blue-600 hover:underline cursor-pointer" onClick={handleRegisterClick}>
                    Register
                  </span>
                </div>
              </div>
            

            
            <button type="submit" className="block w-full py-2 mt-6 bg-blue-600 hover:bg-blue-400 rounded-md text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
